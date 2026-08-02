import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScrollEvent = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScrollEvent);
    return () => window.removeEventListener('scroll', handleScrollEvent);
  }, []);

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    } else if (targetId === 'home') {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  };

  return (
    <header className={`navbar-container ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar">
        <a href="#home" className="logo" onClick={(e) => handleScroll(e, 'home')}>
          <span className="logo-text">Sashtii</span>
          <span className="logo-subtext">BOUTIQUE</span>
        </a>

        <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
          <a href="#home" onClick={(e) => handleScroll(e, 'home')}>Shop</a>
          <span className="nav-separator">|</span>
          <a href="#lookbook" onClick={(e) => handleScroll(e, 'lookbook')}>Collections</a>
          <span className="nav-separator">|</span>
          <a href="#process" onClick={(e) => handleScroll(e, 'process')}>Our Story</a>
          <span className="nav-separator">|</span>
          <a href="#about" onClick={(e) => handleScroll(e, 'about')}>Contact</a>
        </nav>

        <div className="nav-icons">
          {/* Icons omitted to keep layout clean and match bespoke style */}
        </div>

        <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
