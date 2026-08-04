import { useState } from 'react';

const RequestQuote = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    garmentType: 'Bridal',
    timeline: '',
    budget: '',
    details: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for submission logic
    console.log("Quote requested:", formData);
    alert("Thank you! Your quote request has been submitted to the Sashtii team.");
  };

  return (
    <div className="container" style={{ padding: '6rem 2rem', maxWidth: '800px' }}>
      <div className="section-title animate-fade-up">
        <h2>Request a Quote</h2>
        <div className="title-divider">
          <span className="divider-icon">❦</span>
        </div>
      </div>
      
      <p className="text-center text-gold mb-8 animate-fade-up" style={{ animationDelay: '0.1s' }}>
        Commission a custom masterpiece tailored to your vision.
      </p>

      <form onSubmit={handleSubmit} className="card animate-fade-up" style={{ animationDelay: '0.2s' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-text)' }}>Full Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Eleanor Vance" />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-text)' }}>Email Address</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="eleanor@example.com" />
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-text)' }}>Phone Number</label>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="+1 (555) 000-0000" />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-text)' }}>Garment Type</label>
            <select name="garmentType" value={formData.garmentType} onChange={handleChange}>
              <option value="Bridal">Bridal</option>
              <option value="Evening Wear">Evening Wear</option>
              <option value="Casual Luxury">Casual Luxury</option>
              <option value="Accessories">Accessories</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-text)' }}>Expected Timeline</label>
            <input type="text" name="timeline" value={formData.timeline} onChange={handleChange} placeholder="e.g. 3 Months" />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-text)' }}>Estimated Budget</label>
            <input type="text" name="budget" value={formData.budget} onChange={handleChange} placeholder="e.g. $2,000 - $5,000" />
          </div>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-text)' }}>Design Details & Inspiration</label>
          <textarea 
            name="details" 
            value={formData.details} 
            onChange={handleChange} 
            rows="5" 
            placeholder="Describe your vision, preferred fabrics, or silhouette..."
          ></textarea>
        </div>

        <div className="text-center">
          <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1rem' }}>
            Submit Request
          </button>
        </div>
      </form>
    </div>
  );
};

export default RequestQuote;
