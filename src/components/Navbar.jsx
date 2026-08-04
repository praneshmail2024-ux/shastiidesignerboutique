import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { User, LogIn, Calendar, FileText } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScrollEvent = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScrollEvent);
    return () => window.removeEventListener('scroll', handleScrollEvent);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`navbar-container ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar">
        <Link to="/" className="logo" onClick={closeMenu}>
          <span className="logo-text">Sashtii</span>
          <span className="logo-subtext">BOUTIQUE</span>
        </Link>

        <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
          <Link to="/" onClick={closeMenu} className={location.pathname === '/' ? 'active' : ''}>Home</Link>
          <span className="nav-separator">|</span>
          <Link to="/request-quote" onClick={closeMenu} className={location.pathname === '/request-quote' ? 'active' : ''}>Request Quote</Link>
          <span className="nav-separator">|</span>
          <Link to="/book-appointment" onClick={closeMenu} className={location.pathname === '/book-appointment' ? 'active' : ''}>Book Appointment</Link>
        </nav>

        <div className="nav-icons" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <Link to="/login" title="Login" style={{ color: 'var(--color-text)' }}>
            <LogIn size={20} />
          </Link>
          <Link to="/profile" title="Profile" style={{ color: 'var(--color-text)' }}>
            <User size={20} />
          </Link>
          <Link to="/admin-login" title="Admin Portal" style={{ color: 'var(--color-gold)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', marginLeft: '1rem' }}>
            Admin
          </Link>
        </div>

        <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "CLOSE" : "MENU"}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
