import { useEffect, useRef } from 'react';
import './Home.css';

const Home = () => {
  const WHATSAPP_LINK = "https://wa.me/919876543210";
  
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

      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((el) => observerRef.current.observe(el));
    }

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, []);

  return (
    <div className="home-container">
      {/* HERO SECTION - Split Layout */}
      <section id="home" className="hero-split">
        <div className="hero-left animate-on-scroll" style={{opacity: 0}}>
          <img src="/images/gallery1.jpg" alt="Summer Collection Editorial" className="hero-img" />
        </div>
        <div className="hero-right animate-on-scroll" style={{opacity: 0, animationDelay: '0.2s'}}>
          <div className="hero-text-box">
            <h1>BLOSSOM & GLOW: THE SUMMER COLLECTION</h1>
            <p>Explore curated designs for elegant moments.</p>
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="btn btn-primary">
              Shop Now
            </a>
          </div>
        </div>
      </section>

      {/* COLLECTIONS GALLERY - Asymmetrical Layout */}
      <section id="lookbook" className="editorial-gallery">
        <div className="container">
          <div className="gallery-grid-main">
            
            {/* Column 1: The Blush Edit */}
            <div className="gallery-col animate-on-scroll" style={{opacity: 0}}>
              <h3 className="col-title">THE BLUSH EDIT</h3>
              <div className="image-card large-portrait">
                <img src="/images/atelier.jpg" alt="The Blush Edit" />
              </div>
            </div>

            {/* Column 2: Elegant Accessories (2x2 Grid) */}
            <div className="gallery-col animate-on-scroll" style={{opacity: 0, animationDelay: '0.15s'}}>
              <h3 className="col-title">ELEGANT ACCENTS</h3>
              <div className="accessories-grid">
                <div className="image-card square"><img src="/images/gallery2.jpg" alt="Accent 1" /></div>
                <div className="image-card square"><img src="/images/gallery3.jpg" alt="Accent 2" /></div>
                <div className="image-card square"><img src="/images/gallery4.jpg" alt="Accent 3" /></div>
                <div className="image-card square"><img src="/images/gallery5.jpg" alt="Accent 4" /></div>
              </div>
            </div>

            {/* Column 3: New Arrivals */}
            <div className="gallery-col animate-on-scroll" style={{opacity: 0, animationDelay: '0.3s'}}>
              <h3 className="col-title">NEW ARRIVALS</h3>
              <div className="arrivals-grid">
                
                <div className="product-card">
                  <div className="product-img-wrapper">
                    <img src="/images/gallery6.jpg" alt="Arrival 1" />
                  </div>
                  <p className="product-name">Gilded Rose Dress</p>
                  <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="btn btn-primary small-btn">DM to Order</a>
                </div>

                <div className="product-card">
                  <div className="product-img-wrapper">
                    <img src="/images/gallery1.jpg" alt="Arrival 2" />
                  </div>
                  <p className="product-name">Floral Silk Scarf</p>
                  <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="btn btn-primary small-btn">DM to Order</a>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* OUR STORY / ABOUT */}
      <section id="process" className="about-section bg-blush">
        <div className="container">
          <div className="section-title animate-on-scroll" style={{opacity: 0}}>
            <h2>Our Story</h2>
            <div className="title-divider">
              <span className="divider-icon">❦</span>
            </div>
          </div>
          <div className="story-content animate-on-scroll" style={{opacity: 0, animationDelay: '0.2s'}}>
            <p className="story-text">
              Welcome to Sashtii, a high-end atelier dedicated to the art of custom fashion. We believe that true luxury lies in a garment that is made exclusively for you. Our philosophy is rooted in meticulous craftsmanship, hand-detailing, and intimate personal consultations.
            </p>
            <div className="signature">
              <span className="script-font">Sashtii Atelier</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
