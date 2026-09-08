-- ==============================================================================
-- myCHEF SEO CONTROL CENTER (NEO) — Migration 002: Voices, Split-Testing, & Taxonomy Gaps
-- Adds:
-- 1. Brand Voices Registry (Voice guidelines, tone, vocabulary rules by site)
-- 2. Category Taxonomy & Matrix Calibration (Catering, Private Chef, Weddings, etc.)
-- 3. Automatic Split-Testing Engine (Title & Meta SERP experiments)
-- 4. Content & Keyword Gap Engine (Missing pages, missing keywords per island)
-- ==============================================================================

-- ------------------------------------------------------------------------------
-- 1. BRAND VOICES REGISTRY ("all the voices, how we talk")
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS seo_brand_voices (
    voice_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    site_id VARCHAR(32) NOT NULL REFERENCES seo_sites(site_id) ON DELETE CASCADE,
    voice_name VARCHAR(128) NOT NULL,
    personality_traits TEXT[] NOT NULL DEFAULT '{}',
    primary_tone TEXT NOT NULL,
    vocabulary_rules JSONB NOT NULL DEFAULT '{"forbidden_terms": [], "required_terms": []}',
    microcopy_rules JSONB NOT NULL DEFAULT '{}',
    sample_headlines TEXT[] DEFAULT '{}',
    sample_meta_descriptions TEXT[] DEFAULT '{}',
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ------------------------------------------------------------------------------
-- 2. TAXONOMY CATEGORIES ("structure all the sitemap... if it's catering...")
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS seo_categories (
    category_id VARCHAR(64) PRIMARY KEY,
    name VARCHAR(128) NOT NULL,
    description TEXT,
    cluster_id UUID REFERENCES seo_keyword_clusters(cluster_id) ON DELETE SET NULL,
    commercial_weight INT NOT NULL DEFAULT 80, -- 1-100
    expected_on_all_islands BOOLEAN NOT NULL DEFAULT TRUE, -- TRUE if every island should have this service
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Add category_id FK to seo_pages if not exists
DO $$ 
BEGIN 
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name='seo_pages' AND column_name='category_id'
    ) THEN 
        ALTER TABLE seo_pages ADD COLUMN category_id VARCHAR(64) REFERENCES seo_categories(category_id) ON DELETE SET NULL;
    END IF;
END $$;

-- ------------------------------------------------------------------------------
-- 3. AUTOMATIC SPLIT-TESTING ENGINE ("enable automatic split testing, title & meta text")
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS seo_split_tests (
    test_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    page_id UUID NOT NULL REFERENCES seo_pages(page_id) ON DELETE CASCADE,
    site_id VARCHAR(32) NOT NULL REFERENCES seo_sites(site_id) ON DELETE CASCADE,
    test_type VARCHAR(32) NOT NULL DEFAULT 'TITLE_META_SERP', -- TITLE_META_SERP, H1_BODY, CTA_TEST
    hypothesis TEXT NOT NULL,
    target_metric VARCHAR(32) NOT NULL DEFAULT 'CTR', -- CTR, CLICKS, RANK, CONVERSIONS
    status VARCHAR(32) NOT NULL DEFAULT 'ACTIVE', -- ACTIVE, CONCLUDED, APPLIED, DISCARDED
    winner_variant VARCHAR(16), -- 'A', 'B', 'TIE'
    started_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    concluded_at TIMESTAMPTZ,
    test_duration_days INT NOT NULL DEFAULT 30,
    created_by TEXT NOT NULL DEFAULT 'SEO_ENGINE',
    evaluation_summary TEXT
);

CREATE TABLE IF NOT EXISTS seo_split_test_variants (
    variant_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    test_id UUID NOT NULL REFERENCES seo_split_tests(test_id) ON DELETE CASCADE,
    variant_letter VARCHAR(4) NOT NULL, -- 'A' (Control), 'B' (Challenger)
    is_control BOOLEAN NOT NULL DEFAULT FALSE,
    title TEXT NOT NULL,
    meta_description TEXT NOT NULL,
    h1 TEXT,
    serp_headline_preview TEXT,
    impressions INT NOT NULL DEFAULT 0,
    clicks INT NOT NULL DEFAULT 0,
    ctr NUMERIC(6, 4) NOT NULL DEFAULT 0.0000,
    avg_position NUMERIC(5, 2),
    conversions INT NOT NULL DEFAULT 0,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ------------------------------------------------------------------------------
-- 4. CONTENT & KEYWORD GAP ENGINE ("what we are doing... which keyword, what is missing")
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS seo_content_gaps (
    gap_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    site_id VARCHAR(32) NOT NULL REFERENCES seo_sites(site_id) ON DELETE CASCADE,
    category_id VARCHAR(64) REFERENCES seo_categories(category_id) ON DELETE SET NULL,
    gap_type VARCHAR(64) NOT NULL, -- MISSING_CATEGORY_PAGE, MISSING_LOCATION_PAGE, UNCOVERED_HIGH_INTENT_KEYWORD
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    priority VARCHAR(16) NOT NULL DEFAULT 'HIGH', -- CRITICAL, HIGH, MEDIUM, LOW
    estimated_monthly_searches INT DEFAULT 0,
    suggested_slug TEXT,
    suggested_title TEXT,
    suggested_primary_keyword TEXT,
    status VARCHAR(32) NOT NULL DEFAULT 'OPEN', -- OPEN, APPROVED_FOR_CREATION, RESOLVED, DISMISSED
    detected_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    resolved_at TIMESTAMPTZ
);

CREATE INDEX IF NOT EXISTS idx_content_gaps_site ON seo_content_gaps(site_id, status);
CREATE INDEX IF NOT EXISTS idx_content_gaps_cat ON seo_content_gaps(category_id);
