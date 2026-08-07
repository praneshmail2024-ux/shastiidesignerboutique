import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import AdminLayout from './layouts/AdminLayout';

// Customer Portal Pages
import Home from './pages/Home';
import RequestQuote from './pages/RequestQuote';
import BookAppointment from './pages/BookAppointment';
import Catalog from './pages/Catalog';
import Login from './pages/Login';
import CustomerProfile from './pages/CustomerProfile';

// Admin Portal Pages
import AdminLoginPage from './pages/admin/AdminLoginPage';
import AdminDashboard from './pages/admin/AdminDashboard';
import CustomerManagement from './pages/admin/CustomerManagement';
import ProductsCMS from './pages/admin/ProductsCMS';

// Placeholder components for Admin Portal
const Billing = () => <div style={{ padding: '2rem' }}><h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}>Billing & Invoices</h1><p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>Coming soon...</p></div>;
const Quotations = () => <div style={{ padding: '2rem' }}><h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}>Quotations</h1><p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>Coming soon...</p></div>;
const Orders = () => <div style={{ padding: '2rem' }}><h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}>Order Tracking</h1><p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>Coming soon...</p></div>;
const CMS = () => <div style={{ padding: '2rem' }}><h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}>Website Content (CMS)</h1><p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>Coming soon...</p></div>;
const Settings = () => <div style={{ padding: '2rem' }}><h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}>Settings</h1><p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>Coming soon...</p></div>;

function App() {
  return (
    <Routes>
      {/* Customer Portal */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="login" element={<Login />} />
        <Route path="request-quote" element={<RequestQuote />} />
        <Route path="book-appointment" element={<BookAppointment />} />
        <Route path="orders" element={<CustomerProfile />} />
        <Route path="measurements" element={<CustomerProfile />} />
        <Route path="profile" element={<CustomerProfile />} />
      </Route>

      {/* Admin Login (standalone, no layout) */}
      <Route path="/admin-login" element={<AdminLoginPage />} />

      {/* Admin Portal (protected by AdminLayout) */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
        <Route path="customers" element={<CustomerManagement />} />
        <Route path="billing" element={<Billing />} />
        <Route path="products" element={<ProductsCMS />} />
        <Route path="quotations" element={<Quotations />} />
        <Route path="orders" element={<Orders />} />
        <Route path="cms" element={<CMS />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}

export default App;
