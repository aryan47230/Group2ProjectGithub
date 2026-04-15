import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { apiMe, apiLogin, apiRegister, apiLogout, apiSaveTree } from '../utils/api';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [ready, setReady] = useState(false);
  const [pendingImport, setPendingImport] = useState(null); // { count } | null

  useEffect(() => {
    apiMe()
      .then((u) => setUser(u))
      .catch(() => setUser(null))
      .finally(() => setReady(true));
  }, []);

  const login = useCallback(async (username, password) => {
    const u = await apiLogin(username, password);
    setUser(u);
    const local = JSON.parse(localStorage.getItem('skillTrees') || '[]');
    if (local.length > 0) setPendingImport({ count: local.length });
    return u;
  }, []);

  const register = useCallback(async (username, password) => {
    const u = await apiRegister(username, password);
    setUser(u);
    const local = JSON.parse(localStorage.getItem('skillTrees') || '[]');
    if (local.length > 0) setPendingImport({ count: local.length });
    return u;
  }, []);

  const logout = useCallback(async () => {
    await apiLogout();
    setUser(null);
    setPendingImport(null);
  }, []);

  const acceptImport = useCallback(async () => {
    const local = JSON.parse(localStorage.getItem('skillTrees') || '[]');
    for (const tree of local) {
      await apiSaveTree(tree);
    }
    localStorage.removeItem('skillTrees');
    setPendingImport(null);
  }, []);

  const dismissImport = useCallback(() => setPendingImport(null), []);

  return (
    <AuthContext.Provider value={{ user, ready, login, register, logout, pendingImport, acceptImport, dismissImport }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
