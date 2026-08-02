import './Footer.css';

const Footer = () => {
  const WHATSAPP_LINK = "https://wa.me/919876543210";

  return (
    <footer className="footer-container">
      <div className="container footer-content">
        <div className="footer-brand">
          <h2 className="script-font">Sashtii Atelier</h2>
          <p>Bespoke luxury fashion, crafted with passion and meticulous attention to detail. Every garment tells a story of elegance.</p>
        </div>
        
        <div className="footer-contact-info">
          <h3>Contact Us</h3>
          <p>Phone: <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">+91 98765 43210</a></p>
          <p>Email: hello@sashtii.com</p>
          <p className="mt-2">Instagram: <a href="https://instagram.com/sashtii" target="_blank" rel="noreferrer">@sashtii</a></p>
        </div>

        <div className="footer-hours">
          <h3>Atelier Hours</h3>
          <p>Monday - Saturday</p>
          <p>10:00 AM - 7:00 PM</p>
          <p><em>By Appointment Only</em></p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Sashtii Designer Boutique. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
