const Contact = () => {
  return (
    <div className="container" style={{ padding: '8rem 2rem', minHeight: '60vh' }}>
      <div className="section-title">
        <h2>Contact Us</h2>
        <div className="title-underline"></div>
      </div>
      <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
        <p style={{ marginBottom: '2rem' }}>We would love to hear from you. Book an appointment or send us an inquiry.</p>
        <div style={{ padding: '2rem', border: '1px solid var(--color-gold)' }}>
          <h3 style={{ fontFamily: 'var(--font-heading)' }}>Sashtii Designer Boutique</h3>
          <p style={{ margin: '1rem 0' }}>Email: info@sashtiiboutique.com</p>
          <p>Phone: +91 98765 43210</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
