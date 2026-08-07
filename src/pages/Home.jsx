import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const GALLERY_ITEMS = [
  { name: 'Rani Pink Silk Blouse', price: '₹8,900', category: 'BLOUSES', img: '/images/gallery1.jpg' },
  { name: 'Mauve Pearl Reception Gown', price: '₹56,000', category: 'GOWNS', img: '/images/atelier.jpg' },
  { name: 'Golden Zari Lehenga', price: '₹1,20,000', category: 'BRIDAL', img: '/images/gallery2.jpg' },
  { name: 'Emerald Silk Saree', price: '₹34,000', category: 'SAREES', img: '/images/gallery3.jpg' },
];

const Home = () => {
  const observerRef = useRef(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!mediaQuery.matches) {
      observerRef.current = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-up');
            observerRef.current.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });

      document.querySelectorAll('.animate-on-scroll').forEach((el) => {
        observerRef.current.observe(el);
      });
    }
    return () => { if (observerRef.current) observerRef.current.disconnect(); };
  }, []);

  return (
    <div>
      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-content animate-on-scroll" style={{ opacity: 0 }}>
          <span className="hero-label">BESPOKE · SINCE 1998</span>
          <h1 className="hero-heading">
            Couture cut<br />
            <em>precisely</em> for<br />
            you.
          </h1>
          <p className="hero-desc">
            Request quotes, save your measurements, book an atelier fitting
            and track every stitch of your order — all in one place.
          </p>
          <div className="hero-actions">
            <Link to="/login" className="btn btn-gold">Create Account</Link>
            <Link to="/catalog" className="btn btn-outline">Browse Collection</Link>
          </div>
        </div>
        <div className="hero-image animate-on-scroll" style={{ opacity: 0, animationDelay: '0.2s' }}>
          <img src="/images/gallery1.jpg" alt="Sashtii Bridal Collection" />
        </div>
      </section>

      {/* ── SIGNATURE PIECES GALLERY ── */}
      <section className="gallery-section">
        <div className="gallery-header animate-on-scroll" style={{ opacity: 0 }}>
          <div className="gallery-header-left">
            <span className="gold-label">THE GALLERY</span>
            <h2>Signature Pieces</h2>
          </div>
          <Link to="/request-quote" className="gallery-link">
            Request a quote <span className="arrow">↗</span>
          </Link>
        </div>

        <div className="gallery-grid">
          {GALLERY_ITEMS.map((item, i) => (
            <div
              key={i}
              className="gallery-item animate-on-scroll"
              style={{ opacity: 0, animationDelay: `${i * 0.1}s` }}
            >
              <div className="gallery-item-image">
                <img src={item.img} alt={item.name} />
              </div>
              <div className="gallery-item-info">
                <span className="gallery-item-name">{item.name}</span>
                <span className="gallery-item-price">{item.price}</span>
              </div>
              <div className="gallery-item-category">{item.category}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="services-section">
        <div className="services-inner">
          <div className="services-header animate-on-scroll" style={{ opacity: 0 }}>
            <span className="gold-label">WHAT WE OFFER</span>
            <h2>Our Services</h2>
          </div>
          <div className="services-grid">
            <div className="service-card animate-on-scroll" style={{ opacity: 0 }}>
              <div className="service-icon">✂</div>
              <h4>Bespoke Tailoring</h4>
              <p>Every garment is crafted to your exact measurements by our master tailors with decades of experience.</p>
            </div>
            <div className="service-card animate-on-scroll" style={{ opacity: 0, animationDelay: '0.1s' }}>
              <div className="service-icon">♛</div>
              <h4>Bridal Couture</h4>
              <p>From lehengas to reception gowns, we design bridal ensembles that make your special day unforgettable.</p>
            </div>
            <div className="service-card animate-on-scroll" style={{ opacity: 0, animationDelay: '0.2s' }}>
              <div className="service-icon">◇</div>
              <h4>Alterations & Styling</h4>
              <p>Expert alterations and personal styling consultations to ensure the perfect fit and look every time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR STORY ── */}
      <section className="story-section animate-on-scroll" style={{ opacity: 0 }}>
        <span className="gold-label">OUR STORY</span>
        <h2>A Legacy of Craft</h2>
        <p>
          Welcome to Sashtii, a high-end atelier dedicated to the art of custom fashion.
          We believe that true luxury lies in a garment that is made exclusively for you.
          Our philosophy is rooted in meticulous craftsmanship, hand-detailing, and
          intimate personal consultations.
        </p>
        <div className="story-signature">Sashtii Atelier</div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="cta-banner">
        <h2>Begin Your Bespoke Journey</h2>
        <p>Book a private consultation at our atelier today.</p>
        <Link to="/book-appointment" className="btn btn-gold">Book Appointment</Link>
      </section>
    </div>
  );
};

export default Home;
