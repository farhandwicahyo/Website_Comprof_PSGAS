import { createContext, useContext, useState, useCallback } from 'react';

const AUTH_KEY = 'psg_admin_auth';

// Credentials — ganti di sini untuk mengubah password
const ADMIN_USER = 'admin';
const ADMIN_PASS = 'admin123';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => sessionStorage.getItem(AUTH_KEY) === 'true'
  );
  const [error, setError] = useState('');

  const login = useCallback((username, password) => {
    if (username === ADMIN_USER && password === ADMIN_PASS) {
      sessionStorage.setItem(AUTH_KEY, 'true');
      setIsAuthenticated(true);
      setError('');
      return true;
    }
    setError('Username atau password salah.');
    return false;
  }, []);

  const logout = useCallback(() => {
    sessionStorage.removeItem(AUTH_KEY);
    setIsAuthenticated(false);
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, error, setError }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
