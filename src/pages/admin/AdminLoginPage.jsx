import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAdminAuth } from '../../context/AdminAuthContext';

const AdminLoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAdminAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Simulate a brief delay for UX
    setTimeout(() => {
      const result = login(username, password);
      if (result.success) {
        navigate('/admin');
      } else {
        setError(result.error);
        setIsLoading(false);
      }
    }, 600);
  };

  return (
    <div style={{
      display: 'flex',
      minHeight: '100vh',
      width: '100%',
    }}>
      {/* Left — Dark branded panel */}
      <div style={{
        flex: '0 0 45%',
        background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '4rem',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Gold decorative line */}
        <div style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '1px',
          height: '100%',
          background: 'linear-gradient(to bottom, transparent, var(--gold), transparent)',
        }} />

        <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: '3rem',
            fontWeight: 400,
            color: '#ffffff',
            marginBottom: '0.5rem',
          }}>
            Sashtii
          </h1>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.65rem',
            fontWeight: 600,
            letterSpacing: '0.35em',
            textTransform: 'uppercase',
            color: 'var(--gold)',
            marginBottom: '3rem',
          }}>
            ADMIN PORTAL
          </p>

          <div style={{
            width: '50px',
            height: '1px',
            background: 'var(--gold)',
            margin: '0 auto 3rem',
          }} />

          <p style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.5rem',
            fontStyle: 'italic',
            color: 'rgba(255,255,255,0.5)',
            lineHeight: 1.5,
            maxWidth: '300px',
          }}>
            "Where every stitch tells a story."
          </p>
        </div>

        {/* Back to store link */}
        <Link to="/" style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          fontFamily: 'var(--font-body)',
          fontSize: '0.75rem',
          fontWeight: 500,
          letterSpacing: '0.1em',
          color: 'rgba(255,255,255,0.4)',
          textDecoration: 'none',
          transition: 'color 0.3s',
        }}>
          ← Back to Store
        </Link>
      </div>

      {/* Right — Login form */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '4rem 5rem',
        backgroundColor: 'var(--white)',
      }}>
        <div style={{ maxWidth: '380px', width: '100%' }}>
          <span style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.7rem',
            fontWeight: 600,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--gold)',
            display: 'block',
            marginBottom: '1rem',
          }}>
            SECURE ACCESS
          </span>

          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: '2.5rem',
            fontWeight: 400,
            color: 'var(--text-primary)',
            marginBottom: '0.75rem',
          }}>
            Admin Login
          </h2>
          <p style={{
            color: 'var(--text-secondary)',
            fontSize: '0.95rem',
            marginBottom: '3rem',
            lineHeight: 1.6,
          }}>
            Enter your credentials to access the management dashboard.
          </p>

          {error && (
            <div style={{
              padding: '0.75rem 1rem',
              marginBottom: '2rem',
              background: 'rgba(186, 26, 26, 0.08)',
              border: '1px solid rgba(186, 26, 26, 0.2)',
              color: '#ba1a1a',
              fontSize: '0.85rem',
              fontFamily: 'var(--font-body)',
            }}>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '2.5rem' }}>
              <label>USERNAME</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                autoComplete="username"
                style={{ fontSize: '1rem' }}
              />
            </div>

            <div style={{ marginBottom: '3rem' }}>
              <label>PASSWORD</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
                style={{ fontSize: '1rem' }}
              />
            </div>

            <button
              type="submit"
              className="btn btn-gold"
              disabled={isLoading}
              style={{
                width: '100%',
                padding: '1.1rem',
                fontSize: '0.85rem',
                opacity: isLoading ? 0.7 : 1,
                cursor: isLoading ? 'not-allowed' : 'pointer',
              }}
            >
              {isLoading ? 'SIGNING IN...' : 'SIGN IN'}
            </button>
          </form>

          <p style={{
            marginTop: '3rem',
            fontSize: '0.8rem',
            color: 'var(--text-muted)',
            textAlign: 'center',
          }}>
            Only authorized personnel may access this area.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminLoginPage;
