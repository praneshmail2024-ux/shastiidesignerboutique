import { Outlet, Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Users, FileText, Package, CheckSquare, Truck, Settings, FileBox, LogOut } from 'lucide-react';

const AdminLayout = () => {
  const location = useLocation();

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

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: 'var(--color-primary)' }}>
      {/* Sidebar */}
      <aside style={{ width: '250px', backgroundColor: 'var(--color-secondary)', borderRight: '1px solid var(--color-blush-dark)', display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '2rem', borderBottom: '1px solid var(--color-blush-dark)' }}>
          <h2 style={{ color: 'var(--color-gold)', margin: 0, fontSize: '1.5rem', fontFamily: 'var(--font-heading)' }}>Sashtii Admin</h2>
        </div>
        
        <nav style={{ flex: 1, padding: '1rem 0' }}>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {navigation.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '0.8rem 2rem',
                      color: isActive ? 'var(--color-gold)' : 'var(--color-text)',
                      backgroundColor: isActive ? 'var(--color-gold-dim)' : 'transparent',
                      textDecoration: 'none',
                      borderLeft: isActive ? '3px solid var(--color-gold)' : '3px solid transparent',
                      transition: 'all 0.2s ease',
                      gap: '0.8rem'
                    }}
                  >
                    <item.icon size={20} />
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem' }}>{item.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div style={{ padding: '1rem 2rem', borderTop: '1px solid var(--color-blush-dark)' }}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'var(--color-text-muted)' }}>
            <LogOut size={20} />
            <span style={{ fontSize: '0.9rem' }}>Back to Store</span>
          </Link>
        </div>
      </aside>

      {/* Main content */}
      <main style={{ flex: 1, padding: '2rem', overflowY: 'auto' }}>
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
