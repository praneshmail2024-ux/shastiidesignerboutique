import { useEffect, useRef, useState } from 'react';
import './Home.css';

const Home = () => {
  const WHATSAPP_LINK = "https://wa.me/919876543210";
  
  // Filter state for Lookbook
  const [activeFilter, setActiveFilter] = useState('All');
  
  // Intersection Observer for fade-in animations
  const observerRef = useRef(null);

  useEffect(() => {
    // Only apply animations if user has no reduced motion preference
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

  const galleryItems = [
    { id: 1, category: 'Bridal', img: '/images/gallery1.jpg' },
    { id: 2, category: 'Festive', img: '/images/gallery2.jpg' },
    { id: 3, category: 'Party', img: '/images/gallery3.jpg' },
    { id: 4, category: 'Casual', img: '/images/gallery4.jpg' },
    { id: 5, category: 'Bridal', img: '/images/gallery5.jpg' },
    { id: 6, category: 'Festive', img: '/images/gallery6.jpg' },
  ];

  const filteredGallery = activeFilter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <div className="home-container">
      {/* HERO SECTION */}
      <section id="home" className="hero">
        <div className="container hero-content animate-on-scroll" style={{opacity: 0}}>
          <h1 className="script-font">Sashtii</h1>
          <p className="hero-subtitle">Bespoke Elegance, Tailored to You.</p>
          <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="btn btn-primary">
            Enquire on WhatsApp
          </a>
        </div>
      </section>

      {/* PHILOSOPHY / ABOUT SECTION */}
      <section id="about" className="about-section bg-blush">
        <div className="container">
          <div className="about-grid">
            <div className="about-text animate-on-scroll" style={{opacity: 0}}>
              <div className="section-title left-align">
                <h2>Our Philosophy</h2>
                <div className="title-underline"></div>
              </div>
              <p>
                Welcome to Sashtii, a high-end atelier dedicated to the art of custom fashion. We believe that true luxury lies in a garment that is made exclusively for you.
              </p>
              <p>
                Our philosophy is rooted in meticulous craftsmanship, hand-detailing, and intimate personal consultations. From the first sketch to the final fitting, every stitch is a testament to timeless elegance.
              </p>
            </div>
            <div className="about-image-wrapper animate-on-scroll" style={{opacity: 0, animationDelay: '0.2s'}}>
              <img 
                src="/images/atelier.jpg" 
                alt="Sashtii Atelier Interior" 
                className="about-image gold-border" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section id="process" className="process-section">
        <div className="container">
          <div className="section-title animate-on-scroll" style={{opacity: 0}}>
            <h2>The Process</h2>
            <div className="title-underline"></div>
          </div>
          
          {/* The gold thread spine wraps the steps */}
          <div className="process-spine-container">
            <div className="gold-thread-spine"></div>
            
            <div className="process-steps">
              <div className="step animate-on-scroll" style={{opacity: 0, animationDelay: '0.1s'}}>
                <div className="step-node"></div>
                <h3>Consultation</h3>
                <p>DM us to discuss your vision, silhouette, and occasion.</p>
              </div>
              
              <div className="step animate-on-scroll" style={{opacity: 0, animationDelay: '0.2s'}}>
                <div className="step-node"></div>
                <h3>Design & Fabric</h3>
                <p>We select premium fabrics and sketch the bespoke detailing.</p>
              </div>
              
              <div className="step animate-on-scroll" style={{opacity: 0, animationDelay: '0.3s'}}>
                <div className="step-node"></div>
                <h3>Tailoring & Fittings</h3>
                <p>Precise measurements ensure a flawless, custom fit.</p>
              </div>
              
              <div className="step animate-on-scroll" style={{opacity: 0, animationDelay: '0.4s'}}>
                <div className="step-node"></div>
                <h3>Delivery</h3>
                <p>Your handcrafted masterpiece is delivered to your door.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FILTERABLE LOOKBOOK SECTION */}
      <section id="lookbook" className="gallery-section bg-blush">
        <div className="container">
          <div className="section-title animate-on-scroll" style={{opacity: 0}}>
            <h2>Lookbook</h2>
            <div className="title-underline"></div>
          </div>
          
          <div className="filter-controls animate-on-scroll" style={{opacity: 0}}>
            {['All', 'Bridal', 'Festive', 'Party', 'Casual'].map(category => (
              <button 
                key={category}
                className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
                onClick={() => setActiveFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="lookbook-grid">
            {filteredGallery.map((item, index) => (
              <div 
                key={item.id} 
                className="lookbook-item animate-fade-up" 
                style={{ animationDelay: `${(index % 4) * 0.1}s` }}
              >
                <div className="look-face gold-border">
                  <img src={item.img} alt={`${item.category} Look`} className="look-img" />
                  <div className="look-overlay">
                    <span className="category-tag script-font">{item.category}</span>
                    <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="btn btn-primary dm-btn">DM to Order</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section id="testimonials" className="testimonials-section">
        <div className="container">
          <div className="section-title animate-on-scroll" style={{opacity: 0}}>
            <h2>Client Love</h2>
            <div className="title-underline"></div>
          </div>
          
          <div className="testimonials-grid">
            <div className="testimonial-card animate-on-scroll" style={{opacity: 0, animationDelay: '0.1s'}}>
              <p className="quote">"The fit is absolutely perfect! I have never felt more beautiful and confident. The hand-embroidery is stunning."</p>
              <h4 className="client-name script-font">- Priya S.</h4>
            </div>
            <div className="testimonial-card animate-on-scroll" style={{opacity: 0, animationDelay: '0.2s'}}>
              <p className="quote">"Sashtii understood exactly what I wanted for my wedding reception. The entire custom process was seamless and luxurious."</p>
              <h4 className="client-name script-font">- Anjali M.</h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
