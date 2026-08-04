import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, User, LogIn, Calendar, FileText } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { cartCount } = useCart();

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
          <Link to="/catalog" onClick={closeMenu} className={location.pathname === '/catalog' ? 'active' : ''}>Collection</Link>
          <span className="nav-separator">|</span>
          <Link to="/request-quote" onClick={closeMenu} className={location.pathname === '/request-quote' ? 'active' : ''}>Request Quote</Link>
          <span className="nav-separator">|</span>
          <Link to="/book-appointment" onClick={closeMenu} className={location.pathname === '/book-appointment' ? 'active' : ''}>Book Appointment</Link>
        </nav>

        <div className="nav-icons" style={{ display: 'flex', gap: '1.2rem', alignItems: 'center' }}>
          <Link to="/cart" title="Wishlist" style={{ color: 'var(--on-surface)', position: 'relative' }}>
            <ShoppingBag size={20} />
            {cartCount > 0 && (
              <span className="cart-badge" style={{
                position: 'absolute', top: '-8px', right: '-8px', 
                background: 'var(--primary-container)', color: 'var(--on-primary-container)', 
                fontSize: '10px', width: '16px', height: '16px', borderRadius: '50%', 
                display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold'
              }}>
                {cartCount}
              </span>
            )}
          </Link>
          <Link to="/login" title="Login" style={{ color: 'var(--on-surface)' }}>
            <LogIn size={20} />
          </Link>
          <Link to="/profile" title="Profile" style={{ color: 'var(--on-surface)' }}>
            <User size={20} />
          </Link>
          <Link to="/admin-login" title="Admin Portal" style={{ color: 'var(--primary-container)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', marginLeft: '1rem' }}>
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
