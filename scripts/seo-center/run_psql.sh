#!/usr/bin/env bash
set -e
ENV_FILE="/Users/openclaw/Downloads/mychef-hawaii-website/app/.env.local"
if [ -f "$ENV_FILE" ]; then
    export $(grep -v '^#' "$ENV_FILE" | grep -v '^[[:space:]]*$' | xargs)
fi
/opt/homebrew/bin/psql "$DATABASE_URL" "$@"
