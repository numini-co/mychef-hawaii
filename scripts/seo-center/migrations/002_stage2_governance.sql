-- ==============================================================================
-- myCHEF SEO OPERATING SYSTEM & CONTROL CENTER (NEO)
-- Migration 002: Stage 2 Island Upgrade Governance Registries
-- ==============================================================================

-- 1. FACT VERIFICATION & CLAIMS REGISTRY (§PART 1)
CREATE TABLE IF NOT EXISTS seo_claims_registry (
    claim_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    page_id UUID REFERENCES seo_pages(page_id) ON DELETE CASCADE,
    site_id VARCHAR(32) NOT NULL REFERENCES seo_sites(site_id) ON DELETE CASCADE,
    claim TEXT NOT NULL,
    claim_type VARCHAR(64) NOT NULL, -- CHEF, SOURCING, FARM, RESORT, PRICING, LOGISTICS, COI, COMPETITOR
    source TEXT,
    verified BOOLEAN NOT NULL DEFAULT FALSE,
    verified_by VARCHAR(128),
    verified_date TIMESTAMPTZ,
    review_date TIMESTAMPTZ,
    status VARCHAR(32) NOT NULL DEFAULT 'PENDING_VERIFICATION', -- PENDING_VERIFICATION, VERIFIED, SOFTENED, REJECTED, ARCHIVED
    notes TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_claims_page ON seo_claims_registry(page_id);
CREATE INDEX IF NOT EXISTS idx_claims_verified ON seo_claims_registry(verified, claim_type);

-- 2. CENTRAL PRICING REGISTRY (§PART 3)
CREATE TABLE IF NOT EXISTS seo_pricing_registry (
    price_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    site_id VARCHAR(32) NOT NULL REFERENCES seo_sites(site_id) ON DELETE CASCADE,
    island VARCHAR(32) NOT NULL,
    service VARCHAR(128) NOT NULL,
    tier VARCHAR(128) NOT NULL,
    price_min NUMERIC(10, 2) NOT NULL,
    price_max NUMERIC(10, 2),
    unit VARCHAR(32) NOT NULL DEFAULT 'GUEST', -- GUEST, DAY, WEEK, EVENT, HOUR
    groceries_included BOOLEAN NOT NULL DEFAULT FALSE,
    staff_included BOOLEAN NOT NULL DEFAULT FALSE,
    travel_included BOOLEAN NOT NULL DEFAULT FALSE,
    service_charge_pct NUMERIC(5, 2) NOT NULL DEFAULT 20.00,
    tax_pct NUMERIC(6, 4) NOT NULL DEFAULT 4.7120,
    valid_from DATE NOT NULL DEFAULT CURRENT_DATE,
    valid_until DATE,
    last_verified TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_pricing_island_service ON seo_pricing_registry(island, service, tier);

-- 3. TAX JURISDICTION REGISTRY (§PART 4)
CREATE TABLE IF NOT EXISTS seo_tax_registry (
    tax_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    jurisdiction VARCHAR(64) NOT NULL UNIQUE,
    island VARCHAR(32) NOT NULL,
    county_name VARCHAR(64) NOT NULL,
    base_rate_pct NUMERIC(6, 4) NOT NULL DEFAULT 4.0000,
    county_surcharge_pct NUMERIC(6, 4) NOT NULL DEFAULT 0.5000,
    max_pass_through_pct NUMERIC(6, 4) NOT NULL DEFAULT 4.7120,
    effective_date DATE NOT NULL,
    expiration_date DATE,
    source TEXT NOT NULL,
    last_verified TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 4. HERO VISUAL CONTRACTS REGISTRY (§PART 6)
CREATE TABLE IF NOT EXISTS seo_hero_contracts (
    hero_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    page_id UUID REFERENCES seo_pages(page_id) ON DELETE CASCADE,
    site_id VARCHAR(32) NOT NULL REFERENCES seo_sites(site_id) ON DELETE CASCADE,
    service VARCHAR(128) NOT NULL,
    island VARCHAR(32) NOT NULL,
    location VARCHAR(128),
    subject TEXT NOT NULL,
    people_required BOOLEAN NOT NULL DEFAULT TRUE,
    food_required BOOLEAN NOT NULL DEFAULT TRUE,
    environment_required TEXT NOT NULL,
    orientation VARCHAR(16) NOT NULL DEFAULT 'LANDSCAPE',
    desktop_crop VARCHAR(16) NOT NULL DEFAULT '16/9',
    mobile_crop VARCHAR(16) NOT NULL DEFAULT '4/3',
    alt_text TEXT NOT NULL,
    forbidden_elements TEXT[] DEFAULT '{}',
    asset_path TEXT,
    verified BOOLEAN NOT NULL DEFAULT TRUE,
    approved BOOLEAN NOT NULL DEFAULT TRUE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_hero_island_service ON seo_hero_contracts(island, service);
