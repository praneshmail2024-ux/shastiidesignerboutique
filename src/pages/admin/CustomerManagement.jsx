import { useState } from 'react';

const mockCustomers = [
  { id: 'CUST-001', name: 'Eleanor Vance', email: 'eleanor@example.com', phone: '+1 555-0100', status: 'Active', totalSpent: 4500 },
  { id: 'CUST-002', name: 'Sophia Sterling', email: 'sophia.s@example.com', phone: '+1 555-0101', status: 'VIP', totalSpent: 12500 },
  { id: 'CUST-003', name: 'Isabella Ross', email: 'i.ross@example.com', phone: '+1 555-0102', status: 'New', totalSpent: 0 },
];

const CustomerManagement = () => {
  const [customers, setCustomers] = useState(mockCustomers);

  const handleDelete = (id) => {
    if(window.confirm('Are you sure you want to remove this customer record?')) {
      setCustomers(customers.filter(c => c.id !== id));
    }
  };

  return (
    <div className="admin-content-inner">
      <div className="flex justify-between items-center mb-8">
        <h2>Customer Management</h2>
        <button className="btn btn-primary">Add Customer</button>
      </div>

      <div className="card" style={{ padding: '0', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ background: 'var(--surface-container-high)', borderBottom: '1px solid var(--outline-variant)' }}>
              <th style={{ padding: '1rem', color: 'var(--on-surface-variant)' }}>ID</th>
              <th style={{ padding: '1rem', color: 'var(--on-surface-variant)' }}>Name</th>
              <th style={{ padding: '1rem', color: 'var(--on-surface-variant)' }}>Email</th>
              <th style={{ padding: '1rem', color: 'var(--on-surface-variant)' }}>Status</th>
              <th style={{ padding: '1rem', color: 'var(--on-surface-variant)' }}>Total Spent</th>
              <th style={{ padding: '1rem', color: 'var(--on-surface-variant)' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((c) => (
              <tr key={c.id} style={{ borderBottom: '1px solid var(--outline-variant)' }}>
                <td style={{ padding: '1rem', color: 'var(--on-surface-variant)' }}>{c.id}</td>
                <td style={{ padding: '1rem', fontWeight: 'bold' }}>{c.name}</td>
                <td style={{ padding: '1rem' }}>{c.email}</td>
                <td style={{ padding: '1rem' }}>
                  <span className="chip" style={{ background: c.status === 'VIP' ? 'var(--primary-container)' : 'var(--secondary-container)', color: c.status === 'VIP' ? 'var(--on-primary-container)' : 'var(--on-secondary-container)' }}>
                    {c.status}
                  </span>
                </td>
                <td style={{ padding: '1rem' }}>${c.totalSpent.toLocaleString()}</td>
                <td style={{ padding: '1rem' }}>
                  <button className="btn" style={{ padding: '0.4rem 0.8rem', fontSize: '0.75rem', marginRight: '0.5rem' }}>Edit</button>
                  <button className="btn" style={{ padding: '0.4rem 0.8rem', fontSize: '0.75rem', borderColor: 'var(--error)', color: 'var(--error)' }} onClick={() => handleDelete(c.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomerManagement;
