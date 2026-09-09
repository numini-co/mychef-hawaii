/**
 * Vercel serverless: capture quote briefs (and abandoned partials) so the
 * desk gets a lead even if WhatsApp/mailto is never opened.
 *
 * Env (optional but recommended on Vercel):
 *   DATABASE_URL — Neon Postgres (stores quote_leads)
 *   RESEND_API_KEY — emails quotes@mychef-hawaii.com
 *   QUOTE_NOTIFY_TO — override notify inbox (default quotes@mychef-hawaii.com)
 */
import type { VercelRequest, VercelResponse } from '@vercel/node';

type QuotePayload = {
  status?: 'submitted' | 'abandoned' | 'partial';
  island?: string;
  service?: string;
  dates?: string[];
  guests?: number;
  area?: string;
  kitchen?: string;
  dietary?: string[];
  occasion?: string;
  addons?: string[];
  name?: string;
  contact?: string;
  channel?: string;
  brief?: string;
  estimate?: string;
  sourcePath?: string;
  step?: number;
};

function json(res: VercelResponse, status: number, body: Record<string, unknown>) {
  res.status(status).setHeader('Content-Type', 'application/json');
  res.setHeader('Cache-Control', 'no-store');
  return res.json(body);
}

async function ensureTable(sql: (strings: TemplateStringsArray, ...values: unknown[]) => Promise<unknown>) {
  await sql`
    CREATE TABLE IF NOT EXISTS quote_leads (
      id BIGSERIAL PRIMARY KEY,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      status TEXT NOT NULL DEFAULT 'submitted',
      island TEXT,
      service TEXT,
      dates TEXT[],
      guests INT,
      area TEXT,
      kitchen TEXT,
      dietary TEXT[],
      occasion TEXT,
      addons TEXT[],
      name TEXT,
      contact TEXT,
      channel TEXT,
      brief TEXT,
      estimate TEXT,
      source_path TEXT,
      step INT,
      user_agent TEXT
    )
  `;
}

async function storeLead(payload: QuotePayload, userAgent: string | undefined) {
  const databaseUrl = process.env.DATABASE_URL || process.env.POSTGRES_URL;
  if (!databaseUrl) return { stored: false as const, reason: 'no_database' };

  const { neon } = await import('@neondatabase/serverless');
  const sql = neon(databaseUrl);
  await ensureTable(sql as never);

  const dates = Array.isArray(payload.dates) ? payload.dates.filter(Boolean) : [];
  const dietary = Array.isArray(payload.dietary) ? payload.dietary : [];
  const addons = Array.isArray(payload.addons) ? payload.addons : [];

  const rows = (await sql`
    INSERT INTO quote_leads (
      status, island, service, dates, guests, area, kitchen, dietary, occasion,
      addons, name, contact, channel, brief, estimate, source_path, step, user_agent
    ) VALUES (
      ${payload.status || 'submitted'},
      ${payload.island || null},
      ${payload.service || null},
      ${dates},
      ${payload.guests ?? null},
      ${payload.area || null},
      ${payload.kitchen || null},
      ${dietary},
      ${payload.occasion || null},
      ${addons},
      ${payload.name || null},
      ${payload.contact || null},
      ${payload.channel || null},
      ${payload.brief || null},
      ${payload.estimate || null},
      ${payload.sourcePath || null},
      ${payload.step ?? null},
      ${userAgent || null}
    )
    RETURNING id
  `) as { id: number }[];

  return { stored: true as const, id: rows[0]?.id };
}

async function notifyEmail(payload: QuotePayload) {
  const key = process.env.RESEND_API_KEY;
  if (!key) return { emailed: false as const, reason: 'no_resend' };

  const to = process.env.QUOTE_NOTIFY_TO || 'quotes@mychef-hawaii.com';
  const subject = `[myCHEF quote] ${payload.status || 'submitted'} — ${payload.island || 'island'} — ${payload.name || 'guest'}`;
  const text =
    payload.brief ||
    [
      `Status: ${payload.status}`,
      `Name: ${payload.name}`,
      `Contact: ${payload.contact}`,
      `Island: ${payload.island}`,
      `Service: ${payload.service}`,
      `Dates: ${(payload.dates || []).join(', ')}`,
      `Guests: ${payload.guests}`,
      `Estimate: ${payload.estimate || '—'}`,
    ].join('\n');

  const resp = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${key}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: process.env.QUOTE_FROM_EMAIL || 'MyCHEF Quotes <onboarding@resend.dev>',
      to: [to],
      subject,
      text,
    }),
  });

  if (!resp.ok) {
    const err = await resp.text();
    return { emailed: false as const, reason: err.slice(0, 200) };
  }
  return { emailed: true as const };
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return json(res, 405, { ok: false, error: 'Method not allowed' });
  }

  res.setHeader('Access-Control-Allow-Origin', '*');

  try {
    const payload = (typeof req.body === 'string' ? JSON.parse(req.body) : req.body) as QuotePayload;
    if (!payload || typeof payload !== 'object') {
      return json(res, 400, { ok: false, error: 'Invalid JSON body' });
    }

    const status = payload.status || 'submitted';
    if (status === 'submitted') {
      if (!payload.name?.trim() || !payload.contact?.trim()) {
        return json(res, 400, { ok: false, error: 'Name and contact are required' });
      }
    }

    const userAgent = typeof req.headers['user-agent'] === 'string' ? req.headers['user-agent'] : undefined;
    const store = await storeLead(payload, userAgent);
    const mail =
      status === 'submitted' || (status === 'abandoned' && payload.contact)
        ? await notifyEmail(payload)
        : { emailed: false as const, reason: 'skip' };

    return json(res, 200, {
      ok: true,
      status,
      stored: store.stored,
      id: 'id' in store ? store.id : undefined,
      emailed: mail.emailed,
      replyHours: '4–24 business hours',
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return json(res, 500, { ok: false, error: message.slice(0, 240) });
  }
}
