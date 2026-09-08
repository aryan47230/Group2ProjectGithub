-- Idempotent initial schema reconstructed from former Supabase usage.

CREATE TABLE IF NOT EXISTS schema_migrations (
  id TEXT PRIMARY KEY,
  applied_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  username TEXT NOT NULL,
  password_hash TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE UNIQUE INDEX IF NOT EXISTS users_username_lower_idx ON users (lower(username));

CREATE TABLE IF NOT EXISTS trees (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  topic TEXT NOT NULL,
  nodes JSONB NOT NULL,
  completed JSONB NOT NULL DEFAULT '[]'::jsonb,
  share_id TEXT,
  saved_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE UNIQUE INDEX IF NOT EXISTS trees_user_id_topic_lower_idx ON trees (user_id, lower(topic));
CREATE UNIQUE INDEX IF NOT EXISTS trees_share_id_idx ON trees (share_id) WHERE share_id IS NOT NULL;
CREATE INDEX IF NOT EXISTS trees_user_id_idx ON trees (user_id);
