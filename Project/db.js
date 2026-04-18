import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

export const db = {
  async getUserByUsername(username) {
    const { data } = await supabase
      .from("users")
      .select("*")
      .ilike("username", username)
      .single();
    return data ?? null;
  },

  async getUserById(id) {
    const { data } = await supabase
      .from("users")
      .select("*")
      .eq("id", id)
      .single();
    return data ?? null;
  },

  async createUser(username, passwordHash) {
    const { data, error } = await supabase
      .from("users")
      .insert({ username, password_hash: passwordHash })
      .select()
      .single();
    if (error) return null; // unique constraint violation = username taken
    return { id: data.id, username: data.username, passwordHash: data.password_hash, createdAt: data.created_at };
  },

  async getTreesByUserId(userId) {
    const { data } = await supabase
      .from("trees")
      .select("*")
      .eq("user_id", userId)
      .order("saved_at", { ascending: false });
    return (data || []).map(t => ({
      id: t.id,
      userId: t.user_id,
      topic: t.topic,
      nodes: t.nodes,
      completed: t.completed,
      shareId: t.share_id,
      savedAt: t.saved_at,
    }));
  },

  async upsertTree(userId, topic, nodes, completed) {
    // Check if tree already exists for this user+topic
    const { data: existing } = await supabase
      .from("trees")
      .select("id")
      .eq("user_id", userId)
      .ilike("topic", topic)
      .single();

    if (existing) {
      await supabase
        .from("trees")
        .update({ nodes, completed, saved_at: new Date().toISOString() })
        .eq("id", existing.id);
    } else {
      await supabase
        .from("trees")
        .insert({ user_id: userId, topic, nodes, completed, saved_at: new Date().toISOString() });
    }
  },

  async deleteTree(userId, topic) {
    await supabase
      .from("trees")
      .delete()
      .eq("user_id", userId)
      .eq("topic", topic);
  },

  // ── Sharing ────────────────────────────────────────────────────────────────
  // Requires a nullable `share_id` text column (unique) on the `trees` table.

  async getTreeByShareId(shareId) {
    const { data } = await supabase
      .from("trees")
      .select("*")
      .eq("share_id", shareId)
      .single();
    if (!data) return null;
    return { id: data.id, userId: data.user_id, topic: data.topic, nodes: data.nodes, completed: data.completed };
  },

  async setShareId(userId, topic, shareId) {
    const { error } = await supabase
      .from("trees")
      .update({ share_id: shareId })
      .eq("user_id", userId)
      .ilike("topic", topic);
    return !error;
  },

  async sendTree(sourceUserId, sourceTopic, targetUserId) {
    const { data: source } = await supabase
      .from("trees")
      .select("*")
      .eq("user_id", sourceUserId)
      .ilike("topic", sourceTopic)
      .single();
    if (!source) return false;

    const { data: existing } = await supabase
      .from("trees")
      .select("id")
      .eq("user_id", targetUserId)
      .ilike("topic", source.topic)
      .single();

    if (existing) {
      await supabase
        .from("trees")
        .update({ nodes: source.nodes, completed: [], saved_at: new Date().toISOString() })
        .eq("id", existing.id);
    } else {
      await supabase
        .from("trees")
        .insert({ user_id: targetUserId, topic: source.topic, nodes: source.nodes, completed: [], saved_at: new Date().toISOString() });
    }
    return true;
  },
};
