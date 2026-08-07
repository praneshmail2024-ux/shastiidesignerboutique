import { useState } from 'react';
import { Link } from 'react-router-dom';

const CustomerProfile = () => {
  const [activeTab, setActiveTab] = useState('orders');

  const tabs = [
    { id: 'orders', label: 'Orders' },
    { id: 'measurements', label: 'Measurements' },
    { id: 'profile', label: 'Profile' },
  ];

  return (
    <div style={{ paddingTop: '120px', paddingBottom: '80px', minHeight: '100vh' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 var(--gutter)' }}>
        <Link to="/" style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
          fontFamily: 'var(--font-body)', fontSize: '0.75rem', fontWeight: 600,
          letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-secondary)',
          marginBottom: '2rem', textDecoration: 'none',
        }}>← HOME</Link>

        <span className="gold-label" style={{ display: 'block', marginBottom: '0.5rem' }}>MY ACCOUNT</span>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', fontWeight: 400, marginBottom: '0.5rem' }}>
          Welcome, Eleanor
        </h1>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem' }}>
          Manage your bespoke orders and saved measurements.
        </p>

        {/* Tabs */}
        <div style={{
          display: 'flex', gap: '0', borderBottom: '1px solid var(--border)', marginBottom: '3rem',
        }}>
          {tabs.map(tab => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)} style={{
              background: 'none', border: 'none', cursor: 'pointer',
              padding: '1rem 2rem',
              fontFamily: 'var(--font-body)', fontSize: '0.8rem', fontWeight: 600,
              letterSpacing: '0.1em', textTransform: 'uppercase',
              color: activeTab === tab.id ? 'var(--gold)' : 'var(--text-secondary)',
              borderBottom: activeTab === tab.id ? '2px solid var(--gold)' : '2px solid transparent',
              transition: 'all 0.3s',
            }}>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Orders Tab */}
        {activeTab === 'orders' && (
          <div>
            <div style={{ borderBottom: '1px solid var(--border)', padding: '1.5rem 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', marginBottom: '0.25rem' }}>#ORD-092 — Bridal Lehenga</p>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Oct 12, 2026</p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <span style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gold)', background: 'rgba(184,151,62,0.1)', padding: '0.3rem 0.75rem' }}>Processing</span>
                <p style={{ fontSize: '0.95rem', marginTop: '0.5rem', color: 'var(--text-primary)', fontWeight: 500 }}>₹1,20,000</p>
              </div>
            </div>
            <div style={{ borderBottom: '1px solid var(--border)', padding: '1.5rem 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', marginBottom: '0.25rem' }}>#ORD-045 — Silk Saree</p>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Jun 05, 2026</p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <span style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', background: 'var(--border-light)', padding: '0.3rem 0.75rem' }}>Completed</span>
                <p style={{ fontSize: '0.95rem', marginTop: '0.5rem', color: 'var(--text-primary)', fontWeight: 500 }}>₹34,000</p>
              </div>
            </div>
          </div>
        )}

        {/* Measurements Tab */}
        {activeTab === 'measurements' && (
          <div>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '0.9rem' }}>
              Last updated: June 1, 2026
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
              <div>
                <h4 style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1.5rem' }}>UPPER BODY</h4>
                {[['Bust', '34"'], ['Waist', '26"'], ['Shoulder', '15"'], ['Sleeve', '23"']].map(([label, val]) => (
                  <div key={label} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem 0', borderBottom: '1px solid var(--border-light)' }}>
                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{label}</span>
                    <span style={{ fontWeight: 500, fontSize: '0.9rem' }}>{val}</span>
                  </div>
                ))}
              </div>
              <div>
                <h4 style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1.5rem' }}>LOWER BODY</h4>
                {[['Hips', '36"'], ['Inseam', '32"'], ['Length', '40"']].map(([label, val]) => (
                  <div key={label} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem 0', borderBottom: '1px solid var(--border-light)' }}>
                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{label}</span>
                    <span style={{ fontWeight: 500, fontSize: '0.9rem' }}>{val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Profile Tab */}
        {activeTab === 'profile' && (
          <div style={{ display: 'grid', gap: '1.5rem' }}>
            {[
              ['Full Name', 'Eleanor Vance'],
              ['Email Address', 'eleanor@example.com'],
              ['Phone Number', '+91 7338873316'],
              ['Shipping Address', '123 Botanical Ave, Suite 400, Chennai, India'],
            ].map(([label, value]) => (
              <div key={label} style={{ padding: '1rem 0', borderBottom: '1px solid var(--border-light)' }}>
                <p style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>{label}</p>
                <p style={{ fontWeight: 500, color: 'var(--text-primary)' }}>{value}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomerProfile;
