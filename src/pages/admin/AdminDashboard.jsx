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
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 400, color: 'var(--text-primary)', margin: 0 }}>
          Dashboard Overview
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.25rem' }}>
          Welcome back, Admin. Here's what's happening today.
        </p>
      </header>

      {/* Stats Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
        {stats.map((stat, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '1.5rem', backgroundColor: 'var(--white)',
            border: '1px solid var(--border-light)',
          }}>
            <div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>{stat.title}</p>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 400, color: 'var(--text-primary)', margin: 0 }}>{stat.value}</h3>
              <span style={{
                color: stat.trend.startsWith('+') ? '#2e7d32' : '#c62828',
                fontSize: '0.8rem', display: 'inline-block', marginTop: '0.5rem',
              }}>
                {stat.trend} from last month
              </span>
            </div>
            <div style={{
              padding: '0.75rem', backgroundColor: 'rgba(184,151,62,0.1)',
              color: 'var(--gold)', display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <stat.icon size={24} />
            </div>
          </div>
        ))}
      </div>

      {/* Tables */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.5rem' }}>
        {/* Recent Quotes */}
        <div style={{ backgroundColor: 'var(--white)', border: '1px solid var(--border-light)', padding: '1.5rem' }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 400, marginBottom: '1.5rem' }}>
            Recent Quotation Requests
          </h3>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
                <th style={{ padding: '0.75rem 1rem', color: 'var(--text-muted)', fontWeight: 600, fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Customer</th>
                <th style={{ padding: '0.75rem 1rem', color: 'var(--text-muted)', fontWeight: 600, fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Type</th>
                <th style={{ padding: '0.75rem 1rem', color: 'var(--text-muted)', fontWeight: 600, fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Date</th>
                <th style={{ padding: '0.75rem 1rem', color: 'var(--text-muted)', fontWeight: 600, fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: 'Eleanor Vance', type: 'Bridal Lehenga', date: 'Today' },
                { name: 'Sarah Jenkins', type: 'Evening Gown', date: 'Yesterday' },
                { name: 'Priya Patel', type: 'Custom Saree', date: '2 days ago' },
              ].map((row, i) => (
                <tr key={i} style={{ borderBottom: '1px solid var(--border-light)' }}>
                  <td style={{ padding: '0.75rem 1rem', fontSize: '0.9rem' }}>{row.name}</td>
                  <td style={{ padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{row.type}</td>
                  <td style={{ padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>{row.date}</td>
                  <td style={{ padding: '0.75rem 1rem' }}>
                    <span style={{
                      padding: '0.25rem 0.75rem',
                      backgroundColor: 'rgba(184,151,62,0.1)',
                      color: 'var(--gold)',
                      fontSize: '0.7rem',
                      fontWeight: 600,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                    }}>
                      Pending
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Upcoming Appointments */}
        <div style={{ backgroundColor: 'var(--white)', border: '1px solid var(--border-light)', padding: '1.5rem' }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 400, marginBottom: '1.5rem' }}>
            Upcoming Appointments
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { time: '10:00 AM', name: 'Mia Thermopolis', type: 'Initial Consultation' },
              { time: '01:30 PM', name: 'Jane Doe', type: 'First Fitting' },
              { time: '04:00 PM', name: 'Anita Smith', type: 'Final Delivery' },
            ].map((apt, i) => (
              <div key={i} style={{
                display: 'flex', gap: '1rem', paddingBottom: '1rem',
                borderBottom: '1px solid var(--border-light)',
              }}>
                <div style={{
                  fontWeight: 600, color: 'var(--gold)', minWidth: '75px',
                  fontSize: '0.85rem',
                }}>
                  {apt.time}
                </div>
                <div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--text-primary)' }}>{apt.name}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{apt.type}</div>
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
