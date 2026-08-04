import { Users, FileText, IndianRupee, TrendingUp } from 'lucide-react';

const AdminDashboard = () => {
  const stats = [
    { title: 'Total Customers', value: '1,248', icon: Users, trend: '+12%' },
    { title: 'Pending Quotes', value: '14', icon: FileText, trend: '-2%' },
    { title: 'Revenue (MTD)', value: '₹4,50,000', icon: IndianRupee, trend: '+8%' },
    { title: 'Conversion Rate', value: '24%', icon: TrendingUp, trend: '+4%' },
  ];

  return (
    <div>
      <header style={{ marginBottom: '2rem' }}>
        <h1 style={{ color: 'var(--color-text)', margin: 0, fontSize: '2rem' }}>Dashboard Overview</h1>
        <p style={{ color: 'var(--color-text-muted)' }}>Welcome back, Admin. Here's what's happening today.</p>
      </header>

      {/* Stats Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
        {stats.map((stat, i) => (
          <div key={i} className="card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.5rem' }}>
            <div>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>{stat.title}</p>
              <h3 style={{ color: 'var(--color-text)', margin: 0, fontSize: '1.8rem' }}>{stat.value}</h3>
              <span style={{ 
                color: stat.trend.startsWith('+') ? '#4caf50' : '#f44336', 
                fontSize: '0.8rem',
                display: 'inline-block',
                marginTop: '0.5rem'
              }}>
                {stat.trend} from last month
              </span>
            </div>
            <div style={{ padding: '1rem', backgroundColor: 'var(--color-gold-dim)', borderRadius: '50%', color: 'var(--color-gold)' }}>
              <stat.icon size={24} />
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Area Split */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.5rem' }}>
        {/* Recent Orders/Quotes */}
        <div className="card">
          <h3 style={{ color: 'var(--color-text)', marginBottom: '1.5rem', fontSize: '1.2rem', fontFamily: 'var(--font-heading)' }}>Recent Quotation Requests</h3>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--color-blush-dark)' }}>
                <th style={{ padding: '1rem', color: 'var(--color-text-muted)', fontWeight: 500 }}>Customer</th>
                <th style={{ padding: '1rem', color: 'var(--color-text-muted)', fontWeight: 500 }}>Garment Type</th>
                <th style={{ padding: '1rem', color: 'var(--color-text-muted)', fontWeight: 500 }}>Date</th>
                <th style={{ padding: '1rem', color: 'var(--color-text-muted)', fontWeight: 500 }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {['Eleanor Vance', 'Sarah Jenkins', 'Priya Patel'].map((name, i) => (
                <tr key={i} style={{ borderBottom: '1px solid var(--color-blush-dark)' }}>
                  <td style={{ padding: '1rem', color: 'var(--color-text)' }}>{name}</td>
                  <td style={{ padding: '1rem', color: 'var(--color-text)' }}>{['Bridal', 'Evening Wear', 'Custom Saree'][i]}</td>
                  <td style={{ padding: '1rem', color: 'var(--color-text-muted)' }}>Today</td>
                  <td style={{ padding: '1rem' }}>
                    <span style={{ padding: '0.2rem 0.6rem', backgroundColor: 'var(--color-gold-dim)', color: 'var(--color-gold)', borderRadius: '12px', fontSize: '0.8rem' }}>
                      Pending
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Upcoming Appointments */}
        <div className="card">
          <h3 style={{ color: 'var(--color-text)', marginBottom: '1.5rem', fontSize: '1.2rem', fontFamily: 'var(--font-heading)' }}>Upcoming Appointments</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { time: '10:00 AM', name: 'Mia Thermopolis', type: 'Initial Consultation' },
              { time: '01:30 PM', name: 'Jane Doe', type: 'First Fitting' },
              { time: '04:00 PM', name: 'Anita Smith', type: 'Final Delivery' }
            ].map((apt, i) => (
              <div key={i} style={{ display: 'flex', gap: '1rem', paddingBottom: '1rem', borderBottom: '1px solid var(--color-blush-dark)' }}>
                <div style={{ fontWeight: 'bold', color: 'var(--color-gold)', minWidth: '70px' }}>{apt.time}</div>
                <div>
                  <div style={{ color: 'var(--color-text)' }}>{apt.name}</div>
                  <div style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>{apt.type}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
