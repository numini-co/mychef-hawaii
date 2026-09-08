-- ==============================================================================
-- myCHEF SEO CONTROL CENTER (NEO) — Master Schema Migration 001
-- Database: PostgreSQL 18.6 on AWS Neon
-- Engine: Source of Truth for all Search Intelligence, Governance, and Operations
-- ==============================================================================

-- Enable UUID extension if not enabled
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- ------------------------------------------------------------------------------
-- 1. SITES REGISTRY (§3 Multi-Site Architecture)
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS seo_sites (
    site_id VARCHAR(32) PRIMARY KEY,
    name VARCHAR(128) NOT NULL,
    domain VARCHAR(255) NOT NULL UNIQUE,
    is_hub BOOLEAN NOT NULL DEFAULT FALSE,
    canonical_base TEXT NOT NULL,
    currency VARCHAR(8) NOT NULL DEFAULT 'USD',
    default_locale VARCHAR(16) NOT NULL DEFAULT 'en_US',
    description TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ------------------------------------------------------------------------------
-- 2. TOPIC CLUSTERS (§1, §5)
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS seo_keyword_clusters (
    cluster_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    site_id VARCHAR(32) REFERENCES seo_sites(site_id) ON DELETE CASCADE,
    name VARCHAR(128) NOT NULL,
    parent_cluster_id UUID REFERENCES seo_keyword_clusters(cluster_id) ON DELETE SET NULL,
    intent_focus VARCHAR(64) NOT NULL DEFAULT 'COMMERCIAL',
    commercial_priority INT NOT NULL DEFAULT 50, -- 1-100
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ------------------------------------------------------------------------------
-- 3. GLOBAL KEYWORD REGISTRY (§6, §8)
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS seo_keywords (
    keyword_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    keyword TEXT NOT NULL UNIQUE,
    normalized_keyword TEXT NOT NULL,
    search_volume INT,
    cpc NUMERIC(8, 2),
    competition NUMERIC(5, 4),
    keyword_difficulty INT,
    intent VARCHAR(32) NOT NULL DEFAULT 'COMMERCIAL', -- COMMERCIAL, TRANSACTIONAL, INFORMATIONAL, NAVIGATIONAL
    cluster_id UUID REFERENCES seo_keyword_clusters(cluster_id) ON DELETE SET NULL,
    target_island VARCHAR(32), -- oahu, maui, kauai, bigisland, statewide
    language VARCHAR(8) NOT NULL DEFAULT 'en',
    country VARCHAR(8) NOT NULL DEFAULT 'US',
    commercial_value INT NOT NULL DEFAULT 50, -- 1-100
    priority INT NOT NULL DEFAULT 50, -- 1-100
    status VARCHAR(32) NOT NULL DEFAULT 'DISCOVERED', -- DISCOVERED, REVIEW, APPROVED, LOCKED, REJECTED, ARCHIVED
    discovered_source VARCHAR(64) DEFAULT 'DATAFORSEO',
    discovered_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_seo_keywords_norm ON seo_keywords(normalized_keyword);
CREATE INDEX IF NOT EXISTS idx_seo_keywords_status ON seo_keywords(status);
CREATE INDEX IF NOT EXISTS idx_seo_keywords_cluster ON seo_keywords(cluster_id);

-- ------------------------------------------------------------------------------
-- 4. MASTER PAGE REGISTRY (§4, §5)
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS seo_pages (
    page_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    site_id VARCHAR(32) NOT NULL REFERENCES seo_sites(site_id) ON DELETE RESTRICT,
    url TEXT NOT NULL UNIQUE,
    slug TEXT NOT NULL,
    page_type VARCHAR(64) NOT NULL, -- core, service, pricing, wedding, location, menu, occasion, guide, trust, partner
    page_status VARCHAR(32) NOT NULL DEFAULT 'ACTIVE', -- ACTIVE, STAGING, ARCHIVED
    index_status VARCHAR(32) NOT NULL DEFAULT 'INDEXED', -- INDEXED, SUBMITTED, DISCOVERED, EXCLUDED, BLOCKED
    canonical_url TEXT NOT NULL,
    url_locked BOOLEAN NOT NULL DEFAULT TRUE, -- (§4 URL Immutability)
    locked_at TIMESTAMPTZ DEFAULT NOW(),
    locked_by VARCHAR(128) DEFAULT 'SYSTEM',
    primary_keyword_id UUID REFERENCES seo_keywords(keyword_id) ON DELETE SET NULL,
    primary_intent VARCHAR(32) NOT NULL DEFAULT 'COMMERCIAL',
    topic_cluster VARCHAR(128),
    service VARCHAR(128),
    location VARCHAR(128),
    island VARCHAR(32),
    language VARCHAR(8) NOT NULL DEFAULT 'en',
    country VARCHAR(8) NOT NULL DEFAULT 'US',
    title TEXT NOT NULL,
    meta_description TEXT,
    h1 TEXT,
    word_count INT DEFAULT 0,
    schema_types TEXT[] DEFAULT '{}',
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_crawled_at TIMESTAMPTZ,
    last_optimized_at TIMESTAMPTZ
);

CREATE INDEX IF NOT EXISTS idx_seo_pages_site ON seo_pages(site_id);
CREATE INDEX IF NOT EXISTS idx_seo_pages_slug ON seo_pages(site_id, slug);
CREATE INDEX IF NOT EXISTS idx_seo_pages_url_locked ON seo_pages(url_locked);
CREATE INDEX IF NOT EXISTS idx_seo_pages_primary_kw ON seo_pages(primary_keyword_id);

-- ------------------------------------------------------------------------------
-- 5. URL CHANGE PROPOSALS (§4 URL Immutability Protocol)
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS seo_url_change_proposals (
    proposal_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    page_id UUID NOT NULL REFERENCES seo_pages(page_id) ON DELETE CASCADE,
    current_url TEXT NOT NULL,
    suggested_url TEXT NOT NULL,
    reason TEXT NOT NULL,
    seo_benefit TEXT NOT NULL,
    seo_risk TEXT NOT NULL,
    current_backlinks INT DEFAULT 0,
    current_traffic INT DEFAULT 0,
    current_rankings JSONB DEFAULT '[]',
    redirect_type INT NOT NULL DEFAULT 301,
    status VARCHAR(32) NOT NULL DEFAULT 'PENDING_APPROVAL', -- PENDING_APPROVAL, APPROVED, REJECTED, EXECUTED
    proposed_by_agent TEXT NOT NULL,
    reviewed_by_human TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    reviewed_at TIMESTAMPTZ,
    executed_at TIMESTAMPTZ
);

-- ------------------------------------------------------------------------------
-- 6. KEYWORD OWNERSHIP REGISTRY (§6 Strict 1:1 Ownership)
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS seo_keyword_ownership (
    ownership_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    keyword_id UUID NOT NULL UNIQUE REFERENCES seo_keywords(keyword_id) ON DELETE CASCADE,
    owner_page_id UUID NOT NULL REFERENCES seo_pages(page_id) ON DELETE CASCADE,
    site_id VARCHAR(32) NOT NULL REFERENCES seo_sites(site_id) ON DELETE CASCADE,
    role VARCHAR(32) NOT NULL DEFAULT 'PRIMARY', -- PRIMARY, SECONDARY, SUPPORTING
    status VARCHAR(32) NOT NULL DEFAULT 'APPROVED', -- DISCOVERED, REVIEW, APPROVED, LOCKED, REJECTED, ARCHIVED
    locked BOOLEAN NOT NULL DEFAULT TRUE,
    locked_at TIMESTAMPTZ DEFAULT NOW(),
    locked_by VARCHAR(128) DEFAULT 'SYSTEM',
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_kw_ownership_page ON seo_keyword_ownership(owner_page_id);
CREATE INDEX IF NOT EXISTS idx_kw_ownership_site ON seo_keyword_ownership(site_id);

-- ------------------------------------------------------------------------------
-- 7. KEYWORD CANNIBALIZATION AUDIT (§7)
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS seo_cannibalization_warnings (
    warning_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    keyword_id UUID NOT NULL REFERENCES seo_keywords(keyword_id) ON DELETE CASCADE,
    owner_page_id UUID NOT NULL REFERENCES seo_pages(page_id) ON DELETE CASCADE,
    competing_page_id UUID NOT NULL REFERENCES seo_pages(page_id) ON DELETE CASCADE,
    severity VARCHAR(16) NOT NULL DEFAULT 'WARNING', -- INFO, WARNING, BLOCKING
    intent_similarity NUMERIC(4, 3),
    owner_rank INT,
    competing_rank INT,
    recommended_resolution TEXT NOT NULL,
    status VARCHAR(32) NOT NULL DEFAULT 'ACTIVE', -- ACTIVE, RESOLVED, DISMISSED
    detected_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    resolved_at TIMESTAMPTZ
);

-- ------------------------------------------------------------------------------
-- 8. APPEND-ONLY RANK OBSERVATIONS (§9 Facts: DataForSEO / GSC)
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS seo_rank_observations (
    observation_id BIGSERIAL PRIMARY KEY,
    keyword_id UUID NOT NULL REFERENCES seo_keywords(keyword_id) ON DELETE CASCADE,
    page_id UUID REFERENCES seo_pages(page_id) ON DELETE SET NULL,
    site_id VARCHAR(32) NOT NULL REFERENCES seo_sites(site_id) ON DELETE CASCADE,
    observed_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    search_engine VARCHAR(32) NOT NULL DEFAULT 'GOOGLE', -- GOOGLE, BING
    country VARCHAR(8) NOT NULL DEFAULT 'US',
    location_code TEXT, -- e.g. 'Honolulu,Hawaii,United States'
    device VARCHAR(16) NOT NULL DEFAULT 'DESKTOP', -- DESKTOP, MOBILE
    rank_absolute INT,
    rank_group INT,
    ranking_url TEXT,
    serp_features JSONB DEFAULT '{}',
    featured_snippet BOOLEAN DEFAULT FALSE,
    ai_overview_presence BOOLEAN DEFAULT FALSE,
    raw_source VARCHAR(32) NOT NULL DEFAULT 'DATAFORSEO', -- DATAFORSEO, GSC, MANUAL
    source_reference_id TEXT
);

CREATE INDEX IF NOT EXISTS idx_rank_obs_kw_date ON seo_rank_observations(keyword_id, observed_at DESC);
CREATE INDEX IF NOT EXISTS idx_rank_obs_page_date ON seo_rank_observations(page_id, observed_at DESC);
CREATE INDEX IF NOT EXISTS idx_rank_obs_site_date ON seo_rank_observations(site_id, observed_at DESC);

-- ------------------------------------------------------------------------------
-- 9. ANALYTICS & CONVERSION FACTS (§10 Facts: Vercel / GSC / Internal)
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS seo_analytics_facts (
    fact_id BIGSERIAL PRIMARY KEY,
    page_id UUID NOT NULL REFERENCES seo_pages(page_id) ON DELETE CASCADE,
    site_id VARCHAR(32) NOT NULL REFERENCES seo_sites(site_id) ON DELETE CASCADE,
    date DATE NOT NULL,
    device VARCHAR(16) NOT NULL DEFAULT 'ALL', -- ALL, DESKTOP, MOBILE, TABLET
    country VARCHAR(8) NOT NULL DEFAULT 'ALL',
    visitors INT NOT NULL DEFAULT 0,
    pageviews INT NOT NULL DEFAULT 0,
    sessions INT NOT NULL DEFAULT 0,
    impressions INT NOT NULL DEFAULT 0,
    clicks INT NOT NULL DEFAULT 0,
    ctr NUMERIC(6, 4) DEFAULT 0.0000,
    avg_position NUMERIC(5, 2),
    lead_starts INT NOT NULL DEFAULT 0,
    lead_submissions INT NOT NULL DEFAULT 0,
    whatsapp_clicks INT NOT NULL DEFAULT 0,
    phone_clicks INT NOT NULL DEFAULT 0,
    quote_requests INT NOT NULL DEFAULT 0,
    bookings_count INT NOT NULL DEFAULT 0,
    revenue_usd NUMERIC(12, 2) NOT NULL DEFAULT 0.00,
    source VARCHAR(32) NOT NULL DEFAULT 'VERCEL', -- VERCEL, GSC, INTERNAL
    ingested_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    CONSTRAINT unq_analytics_fact UNIQUE(page_id, date, device, country, source)
);

CREATE INDEX IF NOT EXISTS idx_analytics_facts_date ON seo_analytics_facts(site_id, date DESC);

-- ------------------------------------------------------------------------------
-- 10. MULTIVARIATE SEO PERFORMANCE SCORES (§11 Internal Health)
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS seo_performance_scores (
    score_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    page_id UUID NOT NULL REFERENCES seo_pages(page_id) ON DELETE CASCADE,
    calculated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    technical_score INT NOT NULL, -- 0-100
    content_score INT NOT NULL,
    ranking_score INT NOT NULL,
    ctr_score INT NOT NULL,
    conversion_score INT NOT NULL,
    authority_score INT NOT NULL,
    overall_opportunity_score INT NOT NULL, -- 0-100 (prioritization index)
    scoring_version VARCHAR(16) NOT NULL DEFAULT 'v1.0'
);

CREATE INDEX IF NOT EXISTS idx_perf_scores_page ON seo_performance_scores(page_id, calculated_at DESC);

-- ------------------------------------------------------------------------------
-- 11. OPPORTUNITY ENGINE (§12 Interpretation)
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS seo_opportunities (
    opportunity_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    page_id UUID NOT NULL REFERENCES seo_pages(page_id) ON DELETE CASCADE,
    keyword_id UUID REFERENCES seo_keywords(keyword_id) ON DELETE SET NULL,
    site_id VARCHAR(32) NOT NULL REFERENCES seo_sites(site_id) ON DELETE CASCADE,
    opportunity_type VARCHAR(64) NOT NULL, -- HIGH_IMPRESSIONS_LOW_CTR, POSITION_4_TO_10, etc.
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    evidence_data JSONB NOT NULL DEFAULT '{}',
    expected_impact VARCHAR(16) NOT NULL DEFAULT 'HIGH', -- LOW, MEDIUM, HIGH, CRITICAL
    confidence_pct INT NOT NULL DEFAULT 80, -- 0-100
    commercial_weight INT NOT NULL DEFAULT 50, -- 1-100
    status VARCHAR(32) NOT NULL DEFAULT 'OPEN', -- OPEN, EVALUATING, CONVERTED_TO_TASK, DISMISSED
    detected_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    resolved_at TIMESTAMPTZ
);

CREATE INDEX IF NOT EXISTS idx_opportunities_status ON seo_opportunities(status, site_id);

-- ------------------------------------------------------------------------------
-- 12. RECOMMENDATION ENGINE (§13 Interpretation & Blueprint)
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS seo_recommendations (
    recommendation_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    opportunity_id UUID REFERENCES seo_opportunities(opportunity_id) ON DELETE SET NULL,
    page_id UUID NOT NULL REFERENCES seo_pages(page_id) ON DELETE CASCADE,
    keyword_id UUID REFERENCES seo_keywords(keyword_id) ON DELETE SET NULL,
    recommendation_type VARCHAR(64) NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    suggested_actions JSONB NOT NULL DEFAULT '[]',
    expected_impact VARCHAR(16) NOT NULL DEFAULT 'HIGH',
    confidence_pct INT NOT NULL DEFAULT 80,
    source_evidence JSONB NOT NULL,
    created_by TEXT NOT NULL DEFAULT 'AI_OPPORTUNITY_ENGINE',
    status VARCHAR(32) NOT NULL DEFAULT 'PROPOSED', -- DRAFT, PROPOSED, APPROVED, REJECTED, EXECUTED
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ------------------------------------------------------------------------------
-- 13. TASK WORK QUEUE (§14 Action Governance)
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS seo_tasks (
    task_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    site_id VARCHAR(32) NOT NULL REFERENCES seo_sites(site_id) ON DELETE CASCADE,
    page_id UUID NOT NULL REFERENCES seo_pages(page_id) ON DELETE CASCADE,
    keyword_id UUID REFERENCES seo_keywords(keyword_id) ON DELETE SET NULL,
    recommendation_id UUID REFERENCES seo_recommendations(recommendation_id) ON DELETE SET NULL,
    task_type VARCHAR(64) NOT NULL, -- METADATA_UPDATE, CONTENT_EXPANSION, FAQ_ADDITION, SCHEMA_UPDATE, etc.
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    priority VARCHAR(16) NOT NULL DEFAULT 'HIGH', -- CRITICAL, HIGH, MEDIUM, LOW
    priority_score NUMERIC(8, 2) NOT NULL DEFAULT 50.00, -- impact * confidence * commercial_val / effort
    impact INT NOT NULL DEFAULT 7, -- 1-10
    effort INT NOT NULL DEFAULT 3, -- 1-10
    confidence INT NOT NULL DEFAULT 8, -- 1-10
    assigned_to TEXT,
    created_by TEXT NOT NULL DEFAULT 'SYSTEM',
    status VARCHAR(32) NOT NULL DEFAULT 'BACKLOG', -- BACKLOG, APPROVED, IN_PROGRESS, BLOCKED, REVIEW, COMPLETED, REJECTED
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    started_at TIMESTAMPTZ,
    completed_at TIMESTAMPTZ
);

CREATE INDEX IF NOT EXISTS idx_tasks_status ON seo_tasks(status, priority);
CREATE INDEX IF NOT EXISTS idx_tasks_page ON seo_tasks(page_id);

-- ------------------------------------------------------------------------------
-- 14. CONTENT SNAPSHOTS (§16 Before / After Preservation)
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS seo_content_snapshots (
    snapshot_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    page_id UUID NOT NULL REFERENCES seo_pages(page_id) ON DELETE CASCADE,
    site_id VARCHAR(32) NOT NULL REFERENCES seo_sites(site_id) ON DELETE CASCADE,
    task_id UUID REFERENCES seo_tasks(task_id) ON DELETE SET NULL,
    snapshot_type VARCHAR(32) NOT NULL, -- BEFORE, AFTER, BASELINE
    captured_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    captured_by TEXT NOT NULL,
    title TEXT NOT NULL,
    meta_description TEXT,
    h1 TEXT,
    headings_json JSONB DEFAULT '[]',
    body_text TEXT,
    schema_json JSONB DEFAULT '[]',
    internal_links_json JSONB DEFAULT '[]',
    cta_state_json JSONB DEFAULT '{}',
    html_hash VARCHAR(64) NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_snapshots_page ON seo_content_snapshots(page_id, captured_at DESC);

-- ------------------------------------------------------------------------------
-- 15. MANDATORY PRODUCTION CHANGE LOG (§15 Action Audit)
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS seo_change_log (
    change_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    site_id VARCHAR(32) NOT NULL REFERENCES seo_sites(site_id) ON DELETE CASCADE,
    page_id UUID NOT NULL REFERENCES seo_pages(page_id) ON DELETE CASCADE,
    task_id UUID REFERENCES seo_tasks(task_id) ON DELETE SET NULL,
    snapshot_before_id UUID REFERENCES seo_content_snapshots(snapshot_id) ON DELETE SET NULL,
    snapshot_after_id UUID REFERENCES seo_content_snapshots(snapshot_id) ON DELETE SET NULL,
    change_type VARCHAR(64) NOT NULL, -- TITLE, META, H1, CONTENT, FAQ, SCHEMA, INTERNAL_LINK, CTA, PAGE_CREATED, REDIRECT
    field_changed VARCHAR(64) NOT NULL,
    before_value TEXT,
    after_value TEXT,
    reason TEXT NOT NULL,
    agent_id TEXT,
    changed_by TEXT NOT NULL,
    timestamp TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    deployment_id TEXT,
    rollback_available BOOLEAN NOT NULL DEFAULT TRUE,
    rollback_executed_at TIMESTAMPTZ
);

CREATE INDEX IF NOT EXISTS idx_change_log_page ON seo_change_log(page_id, timestamp DESC);
CREATE INDEX IF NOT EXISTS idx_change_log_site ON seo_change_log(site_id, timestamp DESC);

-- ------------------------------------------------------------------------------
-- 16. CONTROLLED SEO EXPERIMENTS (§17)
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS seo_experiments (
    experiment_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    site_id VARCHAR(32) NOT NULL REFERENCES seo_sites(site_id) ON DELETE CASCADE,
    page_id UUID NOT NULL REFERENCES seo_pages(page_id) ON DELETE CASCADE,
    title VARCHAR(255) NOT NULL,
    hypothesis TEXT NOT NULL,
    metric_targets JSONB NOT NULL,
    baseline_metrics JSONB NOT NULL,
    started_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    ended_at TIMESTAMPTZ,
    duration_days INT NOT NULL DEFAULT 30,
    status VARCHAR(32) NOT NULL DEFAULT 'ACTIVE', -- ACTIVE, CONCLUDED, ROLLED_BACK
    outcome VARCHAR(16), -- POSITIVE, NEUTRAL, NEGATIVE
    final_evaluation TEXT
);

-- ------------------------------------------------------------------------------
-- 17. DATABASE-BACKED SEO RULES ENGINE (§19, §20)
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS seo_rules (
    rule_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    code VARCHAR(64) NOT NULL UNIQUE,
    name VARCHAR(128) NOT NULL,
    description TEXT NOT NULL,
    severity VARCHAR(16) NOT NULL DEFAULT 'BLOCKING', -- INFO, WARNING, BLOCKING
    scope VARCHAR(32) NOT NULL DEFAULT 'GLOBAL', -- GLOBAL, SITE_SPECIFIC
    site_id VARCHAR(32) REFERENCES seo_sites(site_id) ON DELETE CASCADE,
    enforcement_action TEXT NOT NULL,
    active BOOLEAN NOT NULL DEFAULT TRUE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ------------------------------------------------------------------------------
-- 18. API SPEND & COST TRACKING (§29)
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS seo_api_cost_log (
    log_id BIGSERIAL PRIMARY KEY,
    provider VARCHAR(32) NOT NULL, -- DATAFORSEO, VERCEL, GSC
    endpoint TEXT NOT NULL,
    request_count INT NOT NULL DEFAULT 1,
    cost_usd NUMERIC(8, 4) NOT NULL DEFAULT 0.0000,
    site_id VARCHAR(32) REFERENCES seo_sites(site_id) ON DELETE SET NULL,
    purpose TEXT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_api_cost_date ON seo_api_cost_log(created_at DESC, provider);

-- ------------------------------------------------------------------------------
-- 19. IMMUTABLE AUDIT TRAIL (§30)
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS seo_audit_trail (
    audit_id BIGSERIAL PRIMARY KEY,
    actor_type VARCHAR(32) NOT NULL, -- USER, AI_AGENT, SYSTEM
    actor_id TEXT NOT NULL,
    action VARCHAR(64) NOT NULL,
    entity_type VARCHAR(64) NOT NULL,
    entity_id TEXT NOT NULL,
    old_value JSONB,
    new_value JSONB,
    reason TEXT,
    authorized_by TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_audit_created ON seo_audit_trail(created_at DESC);
