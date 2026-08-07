import { createContext, useContext, useState } from 'react';

const AdminAuthContext = createContext(null);

// ── Admin Credentials ──
// Username: admin
// Password: sashtii@2026
const ADMIN_USERNAME = 'admin';
const ADMIN_PASSWORD = 'sashtii@2026';

export const AdminAuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return sessionStorage.getItem('sashtii_admin_auth') === 'true';
  });

  const login = (username, password) => {
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      sessionStorage.setItem('sashtii_admin_auth', 'true');
      return { success: true };
    }
    return { success: false, error: 'Invalid username or password.' };
  };

  const logout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('sashtii_admin_auth');
  };

  return (
    <AdminAuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AdminAuthContext.Provider>
  );
};

export const useAdminAuth = () => {
  const context = useContext(AdminAuthContext);
  if (!context) throw new Error('useAdminAuth must be used within AdminAuthProvider');
  return context;
};
