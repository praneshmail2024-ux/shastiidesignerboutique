import { useState } from 'react';
import { User, Package, Scissors, Edit3 } from 'lucide-react';
import { Link } from 'react-router-dom';

const CustomerProfile = () => {
  const [activeTab, setActiveTab] = useState('orders');

  return (
    <div className="container" style={{ paddingTop: '120px', minHeight: '80vh', maxWidth: '1000px' }}>
      <div className="flex justify-between items-center mb-8 animate-fade-up">
        <div>
          <h2 style={{ color: 'var(--on-surface)' }}>Welcome, Eleanor</h2>
          <p className="text-muted">Manage your bespoke orders and measurements.</p>
        </div>
        <button className="btn" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'transparent', border: '1px solid var(--outline-variant)' }}>
          <Edit3 size={16} /> Edit Profile
        </button>
      </div>

      <div className="card flex p-0 animate-fade-up" style={{ animationDelay: '0.1s', overflow: 'hidden' }}>
        {/* Sidebar Navigation */}
        <div style={{ width: '250px', background: 'var(--surface-container-low)', borderRight: '1px solid var(--outline-variant)' }}>
          <button 
            className={`w-full flex items-center gap-3 p-4 text-left ${activeTab === 'orders' ? 'active-tab' : ''}`}
            onClick={() => setActiveTab('orders')}
            style={{ 
              background: activeTab === 'orders' ? 'var(--primary-container)' : 'transparent',
              color: activeTab === 'orders' ? 'var(--on-primary-container)' : 'var(--on-surface-variant)',
              border: 'none', cursor: 'pointer', transition: 'all 0.3s'
            }}
          >
            <Package size={18} /> My Orders
          </button>
          <button 
            className={`w-full flex items-center gap-3 p-4 text-left ${activeTab === 'measurements' ? 'active-tab' : ''}`}
            onClick={() => setActiveTab('measurements')}
            style={{ 
              background: activeTab === 'measurements' ? 'var(--primary-container)' : 'transparent',
              color: activeTab === 'measurements' ? 'var(--on-primary-container)' : 'var(--on-surface-variant)',
              border: 'none', cursor: 'pointer', transition: 'all 0.3s'
            }}
          >
            <Scissors size={18} /> My Measurements
          </button>
          <button 
            className={`w-full flex items-center gap-3 p-4 text-left ${activeTab === 'details' ? 'active-tab' : ''}`}
            onClick={() => setActiveTab('details')}
            style={{ 
              background: activeTab === 'details' ? 'var(--primary-container)' : 'transparent',
              color: activeTab === 'details' ? 'var(--on-primary-container)' : 'var(--on-surface-variant)',
              border: 'none', cursor: 'pointer', transition: 'all 0.3s'
            }}
          >
            <User size={18} /> Profile Details
          </button>
        </div>

        {/* Content Area */}
        <div style={{ flex: 1, padding: '2rem' }}>
          
          {activeTab === 'orders' && (
            <div>
              <h3 className="mb-4" style={{ fontFamily: 'var(--font-display)', color: 'var(--on-surface)' }}>Order History</h3>
              <div style={{ border: '1px solid var(--outline-variant)', borderRadius: 'var(--radius-default)', overflow: 'hidden' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                  <thead>
                    <tr style={{ background: 'var(--surface-container-high)', borderBottom: '1px solid var(--outline-variant)' }}>
                      <th style={{ padding: '1rem', color: 'var(--on-surface-variant)' }}>Order #</th>
                      <th style={{ padding: '1rem', color: 'var(--on-surface-variant)' }}>Date</th>
                      <th style={{ padding: '1rem', color: 'var(--on-surface-variant)' }}>Status</th>
                      <th style={{ padding: '1rem', color: 'var(--on-surface-variant)' }}>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid var(--outline-variant)' }}>
                      <td style={{ padding: '1rem', color: 'var(--on-surface-variant)' }}>#ORD-092</td>
                      <td style={{ padding: '1rem', color: 'var(--on-surface-variant)' }}>Oct 12, 2026</td>
                      <td style={{ padding: '1rem' }}><span className="chip" style={{ background: 'var(--primary-container)', color: 'var(--on-primary-container)' }}>Processing</span></td>
                      <td style={{ padding: '1rem', color: 'var(--on-surface-variant)' }}>$4,500.00</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '1rem', color: 'var(--on-surface-variant)' }}>#ORD-045</td>
                      <td style={{ padding: '1rem', color: 'var(--on-surface-variant)' }}>Jun 05, 2026</td>
                      <td style={{ padding: '1rem' }}><span className="chip" style={{ background: 'var(--surface-container-high)', color: 'var(--on-surface-variant)' }}>Completed</span></td>
                      <td style={{ padding: '1rem', color: 'var(--on-surface-variant)' }}>$2,100.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'measurements' && (
            <div>
              <h3 className="mb-4" style={{ fontFamily: 'var(--font-display)', color: 'var(--on-surface)' }}>Saved Measurements</h3>
              <p className="text-muted mb-6">These measurements are used by our atelier to craft your bespoke garments. Last updated on June 1st, 2026.</p>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                <div>
                  <h4 className="mb-2" style={{ color: 'var(--primary-container)' }}>Upper Body</h4>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li className="flex justify-between py-2 border-b" style={{ borderBottom: '1px solid var(--outline-variant)' }}>
                      <span className="text-muted">Bust</span><span>34"</span>
                    </li>
                    <li className="flex justify-between py-2 border-b" style={{ borderBottom: '1px solid var(--outline-variant)' }}>
                      <span className="text-muted">Waist</span><span>26"</span>
                    </li>
                    <li className="flex justify-between py-2 border-b" style={{ borderBottom: '1px solid var(--outline-variant)' }}>
                      <span className="text-muted">Shoulder</span><span>15"</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="mb-2" style={{ color: 'var(--primary-container)' }}>Lower Body</h4>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li className="flex justify-between py-2 border-b" style={{ borderBottom: '1px solid var(--outline-variant)' }}>
                      <span className="text-muted">Hips</span><span>36"</span>
                    </li>
                    <li className="flex justify-between py-2 border-b" style={{ borderBottom: '1px solid var(--outline-variant)' }}>
                      <span className="text-muted">Inseam</span><span>32"</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <button className="btn mt-8" style={{ background: 'transparent', border: '1px solid var(--outline-variant)' }}>Request Measurement Update</button>
            </div>
          )}

          {activeTab === 'details' && (
            <div>
              <h3 className="mb-4" style={{ fontFamily: 'var(--font-display)', color: 'var(--on-surface)' }}>Profile Details</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
                <div style={{ background: 'var(--surface-container-lowest)', padding: '1rem', borderRadius: '4px', border: '1px solid var(--outline-variant)' }}>
                  <p className="text-muted" style={{ fontSize: '0.85rem', marginBottom: '0.25rem' }}>Full Name</p>
                  <p style={{ fontWeight: '500' }}>Eleanor Vance</p>
                </div>
                <div style={{ background: 'var(--surface-container-lowest)', padding: '1rem', borderRadius: '4px', border: '1px solid var(--outline-variant)' }}>
                  <p className="text-muted" style={{ fontSize: '0.85rem', marginBottom: '0.25rem' }}>Email Address</p>
                  <p style={{ fontWeight: '500' }}>eleanor@example.com</p>
                </div>
                <div style={{ background: 'var(--surface-container-lowest)', padding: '1rem', borderRadius: '4px', border: '1px solid var(--outline-variant)' }}>
                  <p className="text-muted" style={{ fontSize: '0.85rem', marginBottom: '0.25rem' }}>Phone Number</p>
                  <p style={{ fontWeight: '500' }}>+1 (555) 010-0023</p>
                </div>
                <div style={{ background: 'var(--surface-container-lowest)', padding: '1rem', borderRadius: '4px', border: '1px solid var(--outline-variant)' }}>
                  <p className="text-muted" style={{ fontSize: '0.85rem', marginBottom: '0.25rem' }}>Shipping Address</p>
                  <p style={{ fontWeight: '500' }}>123 Botanical Ave, Suite 400<br/>New York, NY 10001</p>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default CustomerProfile;
