import { Outlet, Link, useLocation, Navigate } from 'react-router-dom';
import { LayoutDashboard, Users, FileText, Package, CheckSquare, Truck, Settings, FileBox, LogOut } from 'lucide-react';
import { useAdminAuth } from '../context/AdminAuthContext';

const AdminLayout = () => {
  const location = useLocation();
  const { isAuthenticated, logout } = useAdminAuth();

  // Redirect to admin login if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/admin-login" replace />;
  }

  const navigation = [
    { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
    { name: 'Customers', href: '/admin/customers', icon: Users },
    { name: 'Billing', href: '/admin/billing', icon: FileText },
    { name: 'Products', href: '/admin/products', icon: Package },
    { name: 'Quotations', href: '/admin/quotations', icon: CheckSquare },
    { name: 'Orders', href: '/admin/orders', icon: Truck },
    { name: 'Content (CMS)', href: '/admin/cms', icon: FileBox },
    { name: 'Settings', href: '/admin/settings', icon: Settings },
  ];

  const handleLogout = () => {
    logout();
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#fafafa' }}>
      {/* Sidebar */}
      <aside style={{
        width: '260px',
        backgroundColor: '#1a1a1a',
        display: 'flex',
        flexDirection: 'column',
        flexShrink: 0,
      }}>
        {/* Brand */}
        <div style={{
          padding: '2rem 1.5rem',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
        }}>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.4rem',
            fontWeight: 400,
            color: '#ffffff',
            margin: 0,
          }}>
            Sashtii
          </h2>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.6rem',
            fontWeight: 600,
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: 'var(--gold)',
            margin: 0,
          }}>
            ADMIN PORTAL
          </p>
        </div>
        
        {/* Navigation */}
        <nav style={{ flex: 1, padding: '1rem 0' }}>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {navigation.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '0.75rem 1.5rem',
                      color: isActive ? 'var(--gold)' : 'rgba(255,255,255,0.5)',
                      backgroundColor: isActive ? 'rgba(184,151,62,0.1)' : 'transparent',
                      textDecoration: 'none',
                      borderLeft: isActive ? '2px solid var(--gold)' : '2px solid transparent',
                      transition: 'all 0.2s ease',
                      gap: '0.75rem',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.85rem',
                      fontWeight: 500,
                    }}
                  >
                    <item.icon size={18} />
                    <span>{item.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Bottom actions */}
        <div style={{
          padding: '1rem 1.5rem',
          borderTop: '1px solid rgba(255,255,255,0.08)',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.75rem',
        }}>
          <Link to="/" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            color: 'rgba(255,255,255,0.4)',
            textDecoration: 'none',
            fontSize: '0.85rem',
            fontFamily: 'var(--font-body)',
          }}>
            <LogOut size={18} />
            <span>Back to Store</span>
          </Link>
          <button
            onClick={handleLogout}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              color: '#e57373',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: '0.85rem',
              fontFamily: 'var(--font-body)',
              padding: 0,
            }}
          >
            <LogOut size={18} />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main style={{ flex: 1, padding: '2rem 2.5rem', overflowY: 'auto' }}>
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
