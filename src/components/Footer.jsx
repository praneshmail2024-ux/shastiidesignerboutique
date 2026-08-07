import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{
      borderTop: '1px solid var(--border-light)',
      padding: '4rem 0 2rem',
      marginTop: 'auto',
    }}>
      <div style={{
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: '0 var(--gutter)',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '3rem',
      }}>
        {/* Brand */}
        <div>
          <h3 style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.5rem',
            fontWeight: 400,
            color: 'var(--text-primary)',
            marginBottom: '0.25rem',
          }}>
            Sashtii
          </h3>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.6rem',
            fontWeight: 600,
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: 'var(--gold)',
            marginBottom: '1.5rem',
          }}>
            BOUTIQUE ATELIER
          </p>
          <p style={{
            fontSize: '0.9rem',
            lineHeight: 1.7,
            color: 'var(--text-secondary)',
          }}>
            A high-end atelier dedicated to the art of custom fashion, crafted exclusively for you.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h4 style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.75rem',
            fontWeight: 600,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'var(--text-primary)',
            marginBottom: '1.5rem',
          }}>
            Contact
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <a href="mailto:sashtiidesignerboutique@gmail.com" style={{
              fontSize: '0.9rem',
              color: 'var(--text-secondary)',
              textDecoration: 'none',
            }}>
              sashtiidesignerboutique@gmail.com
            </a>
            <a href="tel:7338873316" style={{
              fontSize: '0.9rem',
              color: 'var(--text-secondary)',
              textDecoration: 'none',
            }}>
              +91 7338873316
            </a>
            <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              Chennai, India
            </span>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.75rem',
            fontWeight: 600,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'var(--text-primary)',
            marginBottom: '1.5rem',
          }}>
            Quick Links
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <Link to="/catalog" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Collection</Link>
            <Link to="/request-quote" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Request Quote</Link>
            <Link to="/book-appointment" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Book Appointment</Link>
            <Link to="/login" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Sign In</Link>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div style={{
        maxWidth: 'var(--container-max)',
        margin: '3rem auto 0',
        padding: '2rem var(--gutter) 0',
        borderTop: '1px solid var(--border-light)',
        textAlign: 'center',
        fontSize: '0.8rem',
        color: 'var(--text-muted)',
      }}>
        © {new Date().getFullYear()} Sashtii Designer Boutique. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
