// Simple JSON file database — no native deps required
import { readFileSync, writeFileSync, existsSync } from "fs";

const FILE = "data.json";
let _data = null;

function data() {
  if (!_data) {
    _data = existsSync(FILE)
      ? JSON.parse(readFileSync(FILE, "utf8"))
      : { users: [], trees: [], nextUserId: 1, nextTreeId: 1 };
  }
  return _data;
}

function flush() {
  writeFileSync(FILE, JSON.stringify(_data));
}

export const db = {
  getUserByUsername(username) {
    return data().users.find(u => u.username.toLowerCase() === username.toLowerCase()) ?? null;
  },
  getUserById(id) {
    return data().users.find(u => u.id === id) ?? null;
  },
  createUser(username, passwordHash) {
    const d = data();
    if (d.users.some(u => u.username.toLowerCase() === username.toLowerCase())) return null;
    const user = { id: d.nextUserId++, username, passwordHash, createdAt: Date.now() };
    d.users.push(user);
    flush();
    return user;
  },
  getTreesByUserId(userId) {
    return data().trees
      .filter(t => t.userId === userId)
      .sort((a, b) => b.savedAt - a.savedAt);
  },
  upsertTree(userId, topic, nodes, completed) {
    const d = data();
    const idx = d.trees.findIndex(
      t => t.userId === userId && t.topic.toLowerCase() === topic.toLowerCase()
    );
    if (idx >= 0) {
      d.trees[idx] = { ...d.trees[idx], nodes, completed, savedAt: Date.now() };
    } else {
      d.trees.push({ id: d.nextTreeId++, userId, topic, nodes, completed, savedAt: Date.now() });
    }
    flush();
  },
  deleteTree(userId, topic) {
    const d = data();
    d.trees = d.trees.filter(
      t => !(t.userId === userId && t.topic === topic)
    );
    flush();
  }
};
