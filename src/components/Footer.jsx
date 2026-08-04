import { Link } from 'react-router-dom';
import { Mail, Phone, Instagram, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'var(--surface-container-highest)', padding: '4rem 0', marginTop: '4rem', borderTop: '1px solid var(--outline-variant)' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem' }}>
        
        <div>
          <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--primary-container)', marginBottom: '1.5rem', fontSize: '1.5rem' }}>
            Sashtii Boutique
          </h3>
          <p className="text-muted" style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>
            A high-end atelier dedicated to the art of custom fashion. We believe that true luxury lies in a garment that is made exclusively for you.
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="#" style={{ color: 'var(--on-surface-variant)' }}><Instagram size={20} /></a>
          </div>
        </div>

        <div>
          <h4 style={{ fontFamily: 'var(--font-display)', color: 'var(--on-surface)', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
            Contact Us
          </h4>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--on-surface-variant)' }}>
              <Mail size={16} /> 
              <a href="mailto:sashtiidesignerboutique@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>
                sashtiidesignerboutique@gmail.com
              </a>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--on-surface-variant)' }}>
              <Phone size={16} /> 
              <a href="tel:7338873316" style={{ color: 'inherit', textDecoration: 'none' }}>
                7338873316
              </a>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--on-surface-variant)' }}>
              <MapPin size={16} /> 
              <span>Chennai, India</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 style={{ fontFamily: 'var(--font-display)', color: 'var(--on-surface)', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
            Quick Links
          </h4>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <li><Link to="/catalog" style={{ color: 'var(--on-surface-variant)', textDecoration: 'none' }}>The Collection</Link></li>
            <li><Link to="/request-quote" style={{ color: 'var(--on-surface-variant)', textDecoration: 'none' }}>Request Quote</Link></li>
            <li><Link to="/book-appointment" style={{ color: 'var(--on-surface-variant)', textDecoration: 'none' }}>Book Appointment</Link></li>
            <li><Link to="/login" style={{ color: 'var(--on-surface-variant)', textDecoration: 'none' }}>Customer Login</Link></li>
          </ul>
        </div>

      </div>
      <div className="container" style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid var(--outline-variant)', textAlign: 'center', color: 'var(--on-surface-variant)', fontSize: '0.85rem' }}>
        &copy; {new Date().getFullYear()} Sashtii Designer Boutique. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
