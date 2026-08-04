import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import AdminLayout from './layouts/AdminLayout';

// Customer Portal Pages
import Home from './pages/Home';
import RequestQuote from './pages/RequestQuote';
import BookAppointment from './pages/BookAppointment';
import Catalog from './pages/Catalog';
import Cart from './pages/Cart';

import CustomerProfile from './pages/CustomerProfile';
import Login from './pages/Login';

// Placeholder components for Customer Portal
const Payments = () => <div className="container py-12" style={{paddingTop: '100px'}}><h1 className="text-gold">Payments</h1></div>;

// Admin Portal Pages
import AdminDashboard from './pages/admin/AdminDashboard';
import CustomerManagement from './pages/admin/CustomerManagement';
import ProductsCMS from './pages/admin/ProductsCMS';

// Placeholder components for Admin Portal
const Billing = () => <div><h1>Billing & Invoices</h1></div>;
const Quotations = () => <div><h1>Quotations</h1></div>;
const Orders = () => <div><h1>Order Tracking</h1></div>;
const CMS = () => <div><h1>Website Content (CMS)</h1></div>;
const Settings = () => <div><h1>Settings</h1></div>;
const AdminLogin = () => <div><h1>Admin Login Secure</h1></div>;

function App() {
  return (
    <Routes>
      {/* Customer Portal (Public / Authenticated Routes) */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="cart" element={<Cart />} />
        <Route path="login" element={<Login />} />
        <Route path="request-quote" element={<RequestQuote />} />
        <Route path="book-appointment" element={<BookAppointment />} />
        
        {/* Protected Customer Routes */}
        <Route path="orders" element={<CustomerProfile />} />
        <Route path="measurements" element={<CustomerProfile />} />
        <Route path="payments" element={<Payments />} />
        <Route path="profile" element={<CustomerProfile />} />
      </Route>

      {/* Admin Portal (Protected Routes) */}
      <Route path="/admin-login" element={<AdminLogin />} />
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
