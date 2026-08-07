import { useState } from 'react';
import { Link } from 'react-router-dom';

const RequestQuote = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', garmentType: '', budget: '', timeline: '', details: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Quote request submitted! Our team will get back to you within 24 hours.');
  };

  return (
    <div style={{ paddingTop: '120px', paddingBottom: '80px', minHeight: '100vh' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '0 var(--gutter)' }}>
        <Link to="/" style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
          fontFamily: 'var(--font-body)', fontSize: '0.75rem', fontWeight: 600,
          letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-secondary)',
          marginBottom: '2rem', textDecoration: 'none',
        }}>← HOME</Link>

        <span className="gold-label" style={{ display: 'block', marginBottom: '0.5rem' }}>GET A QUOTE</span>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', fontWeight: 400, marginBottom: '1rem' }}>
          Request Quote
        </h1>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', lineHeight: 1.7 }}>
          Tell us about your dream garment and we will provide a detailed estimate within 24 hours.
        </p>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '2rem' }}>
            <label>FULL NAME</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
            <div>
              <label>EMAIL</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div>
              <label>PHONE</label>
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
            <div>
              <label>GARMENT TYPE</label>
              <select name="garmentType" value={formData.garmentType} onChange={handleChange} required>
                <option value="">Select type</option>
                <option value="lehenga">Lehenga</option>
                <option value="saree">Saree</option>
                <option value="gown">Gown</option>
                <option value="blouse">Blouse</option>
                <option value="suit">Suit / Sherwani</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label>BUDGET RANGE</label>
              <select name="budget" value={formData.budget} onChange={handleChange} required>
                <option value="">Select budget</option>
                <option value="under-10k">Under ₹10,000</option>
                <option value="10k-25k">₹10,000 – ₹25,000</option>
                <option value="25k-50k">₹25,000 – ₹50,000</option>
                <option value="50k-1l">₹50,000 – ₹1,00,000</option>
                <option value="above-1l">Above ₹1,00,000</option>
              </select>
            </div>
          </div>
          <div style={{ marginBottom: '2rem' }}>
            <label>TIMELINE</label>
            <select name="timeline" value={formData.timeline} onChange={handleChange} required>
              <option value="">When do you need it?</option>
              <option value="2-weeks">Within 2 weeks</option>
              <option value="1-month">Within 1 month</option>
              <option value="2-months">Within 2 months</option>
              <option value="flexible">Flexible</option>
            </select>
          </div>
          <div style={{ marginBottom: '3rem' }}>
            <label>DESCRIBE YOUR VISION</label>
            <textarea name="details" rows={5} value={formData.details} onChange={handleChange}
              placeholder="Fabric preferences, design inspiration, occasion details..."
              style={{ resize: 'vertical', borderBottom: '1px solid var(--border)' }}
            />
          </div>
          <button type="submit" className="btn btn-gold" style={{ width: '100%', padding: '1.1rem' }}>
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default RequestQuote;
