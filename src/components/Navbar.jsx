import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`navbar-container ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar">
        <Link to="/" className="logo" onClick={closeMenu}>
          <span className="logo-text">Sashtii</span>
          <span className="logo-subtext">BOUTIQUE ATELIER</span>
        </Link>

        <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
          <Link to="/catalog" onClick={closeMenu} className={location.pathname === '/catalog' ? 'active' : ''}>
            Collection
          </Link>
          <Link to="/request-quote" onClick={closeMenu} className={location.pathname === '/request-quote' ? 'active' : ''}>
            Services
          </Link>
          <Link to="/book-appointment" onClick={closeMenu} className={location.pathname === '/book-appointment' ? 'active' : ''}>
            Book Appointment
          </Link>
        </nav>

        <div className="nav-right">
          <Link to="/login" className="nav-signin">
            Sign In
          </Link>
        </div>

        <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? 'CLOSE' : 'MENU'}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
