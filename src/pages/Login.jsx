import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock login — redirect to profile
    navigate('/profile');
  };

  return (
    <div style={{
      display: 'flex',
      minHeight: '100vh',
      width: '100%',
    }}>
      {/* Left — Image Panel */}
      <div style={{
        flex: '0 0 50%',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'flex-end',
      }}>
        <img
          src="/images/gallery1.jpg"
          alt="Sashtii Boutique"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)',
        }} />
        <div style={{
          position: 'relative',
          zIndex: 1,
          padding: '3rem',
          color: 'white',
        }}>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.7rem',
            fontWeight: 600,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.6)',
            marginBottom: '0.5rem',
          }}>
            SASHTII BOUTIQUE
          </p>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: '3rem',
            fontWeight: 400,
            color: 'white',
            fontStyle: 'italic',
          }}>
            Welcome back.
          </h2>
        </div>
      </div>

      {/* Right — Sign In Form */}
      <div style={{
        flex: '0 0 50%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '4rem 5rem',
        backgroundColor: 'var(--white)',
      }}>
        <div style={{ maxWidth: '400px', width: '100%' }}>
          <Link
            to="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontFamily: 'var(--font-body)',
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--text-secondary)',
              marginBottom: '3rem',
              textDecoration: 'none',
            }}
          >
            ← HOME
          </Link>

          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: '2.5rem',
            fontWeight: 400,
            color: 'var(--text-primary)',
            marginBottom: '1rem',
          }}>
            Sign In
          </h2>
          <p style={{
            color: 'var(--text-secondary)',
            fontSize: '0.95rem',
            marginBottom: '3rem',
            lineHeight: 1.6,
          }}>
            Customers and boutique owners use the same door.
          </p>

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '2.5rem' }}>
              <label>EMAIL</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
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
                style={{ fontSize: '1rem' }}
              />
            </div>

            <button
              type="submit"
              className="btn btn-gold"
              style={{ width: '100%', padding: '1.1rem', fontSize: '0.85rem' }}
            >
              SIGN IN
            </button>
          </form>

          <p style={{
            marginTop: '2rem',
            fontSize: '0.9rem',
            color: 'var(--text-secondary)',
          }}>
            New here?{' '}
            <Link to="/login" style={{ color: 'var(--gold)', fontWeight: 500 }}>
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
