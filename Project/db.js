import pg from "pg";

const { Pool } = pg;

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is required");
}

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  max: 10,
});

function isUniqueViolation(err) {
  return err && err.code === "23505";
}

function mapTree(row) {
  if (!row) return null;
  return {
    id: row.id,
    userId: row.user_id,
    topic: row.topic,
    nodes: row.nodes,
    completed: row.completed,
    shareId: row.share_id,
    savedAt: row.saved_at,
  };
}

export const db = {
  async getUserByUsername(username) {
    const { rows } = await pool.query(
      "SELECT * FROM users WHERE username ILIKE $1 LIMIT 1",
      [username]
    );
    return rows[0] ?? null;
  },

  async getUserById(id) {
    const { rows } = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
    return rows[0] ?? null;
  },

  async createUser(username, passwordHash) {
    try {
      const { rows } = await pool.query(
        "INSERT INTO users (username, password_hash) VALUES ($1, $2) RETURNING *",
        [username, passwordHash]
      );
      const data = rows[0];
      return {
        user: {
          id: data.id,
          username: data.username,
          passwordHash: data.password_hash,
          createdAt: data.created_at,
        },
      };
    } catch (error) {
      if (isUniqueViolation(error)) return { taken: true };
      console.error("createUser error:", error);
      throw error;
    }
  },

  async getTreesByUserId(userId) {
    const { rows } = await pool.query(
      "SELECT * FROM trees WHERE user_id = $1 ORDER BY saved_at DESC",
      [userId]
    );
    return rows.map(mapTree);
  },

  async upsertTree(userId, topic, nodes, completed) {
    const nodesJson = JSON.stringify(nodes);
    const completedJson = JSON.stringify(completed ?? []);
    const { rows: existing } = await pool.query(
      "SELECT id FROM trees WHERE user_id = $1 AND topic ILIKE $2 LIMIT 1",
      [userId, topic]
    );
    if (existing[0]) {
      await pool.query(
        "UPDATE trees SET nodes = $1::jsonb, completed = $2::jsonb, saved_at = now() WHERE id = $3",
        [nodesJson, completedJson, existing[0].id]
      );
      return;
    }
    try {
      await pool.query(
        `INSERT INTO trees (user_id, topic, nodes, completed, saved_at)
         VALUES ($1, $2, $3::jsonb, $4::jsonb, now())`,
        [userId, topic, nodesJson, completedJson]
      );
    } catch (error) {
      if (!isUniqueViolation(error)) throw error;
      await pool.query(
        `UPDATE trees SET nodes = $1::jsonb, completed = $2::jsonb, saved_at = now()
         WHERE user_id = $3 AND topic ILIKE $4`,
        [nodesJson, completedJson, userId, topic]
      );
    }
  },

  async deleteTree(userId, topic) {
    await pool.query(
      "DELETE FROM trees WHERE user_id = $1 AND topic = $2",
      [userId, topic]
    );
  },

  async getTreeByShareId(shareId) {
    const { rows } = await pool.query(
      "SELECT * FROM trees WHERE share_id = $1 LIMIT 1",
      [shareId]
    );
    return mapTree(rows[0]);
  },

  async setShareId(userId, topic, shareId) {
    const { rowCount } = await pool.query(
      "UPDATE trees SET share_id = $1 WHERE user_id = $2 AND topic ILIKE $3",
      [shareId, userId, topic]
    );
    return rowCount > 0;
  },

  async sendTree(sourceUserId, sourceTopic, targetUserId) {
    const { rows } = await pool.query(
      "SELECT * FROM trees WHERE user_id = $1 AND topic ILIKE $2 LIMIT 1",
      [sourceUserId, sourceTopic]
    );
    const source = rows[0];
    if (!source) return false;

    const nodesJson = JSON.stringify(source.nodes);
    const { rows: existing } = await pool.query(
      "SELECT id FROM trees WHERE user_id = $1 AND topic ILIKE $2 LIMIT 1",
      [targetUserId, source.topic]
    );
    if (existing[0]) {
      await pool.query(
        "UPDATE trees SET nodes = $1::jsonb, completed = '[]'::jsonb, saved_at = now() WHERE id = $2",
        [nodesJson, existing[0].id]
      );
    } else {
      try {
        await pool.query(
          `INSERT INTO trees (user_id, topic, nodes, completed, saved_at)
           VALUES ($1, $2, $3::jsonb, '[]'::jsonb, now())`,
          [targetUserId, source.topic, nodesJson]
        );
      } catch (error) {
        if (!isUniqueViolation(error)) throw error;
        await pool.query(
          `UPDATE trees SET nodes = $1::jsonb, completed = '[]'::jsonb, saved_at = now()
           WHERE user_id = $2 AND topic ILIKE $3`,
          [nodesJson, targetUserId, source.topic]
        );
      }
    }
    return true;
  },
};
