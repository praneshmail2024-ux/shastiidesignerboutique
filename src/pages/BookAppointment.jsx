import { useState } from 'react';
import { Link } from 'react-router-dom';

const BookAppointment = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', date: '', time: '', type: '', notes: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Appointment request submitted! We will contact you shortly.');
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

        <span className="gold-label" style={{ display: 'block', marginBottom: '0.5rem' }}>SCHEDULE A VISIT</span>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', fontWeight: 400, marginBottom: '1rem' }}>
          Book Appointment
        </h1>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', lineHeight: 1.7 }}>
          Visit our atelier for a private consultation. We will guide you through fabrics, designs, and measurements.
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
              <label>PREFERRED DATE</label>
              <input type="date" name="date" value={formData.date} onChange={handleChange} required />
            </div>
            <div>
              <label>PREFERRED TIME</label>
              <select name="time" value={formData.time} onChange={handleChange} required>
                <option value="">Select time</option>
                <option value="10:00 AM">10:00 AM</option>
                <option value="11:00 AM">11:00 AM</option>
                <option value="12:00 PM">12:00 PM</option>
                <option value="2:00 PM">2:00 PM</option>
                <option value="3:00 PM">3:00 PM</option>
                <option value="4:00 PM">4:00 PM</option>
              </select>
            </div>
          </div>
          <div style={{ marginBottom: '2rem' }}>
            <label>APPOINTMENT TYPE</label>
            <select name="type" value={formData.type} onChange={handleChange} required>
              <option value="">Select type</option>
              <option value="bridal">Bridal Consultation</option>
              <option value="fitting">Fitting Session</option>
              <option value="alteration">Alterations</option>
              <option value="styling">Personal Styling</option>
            </select>
          </div>
          <div style={{ marginBottom: '3rem' }}>
            <label>ADDITIONAL NOTES</label>
            <textarea name="notes" rows={4} value={formData.notes} onChange={handleChange}
              style={{ resize: 'vertical', borderBottom: '1px solid var(--border)' }}
            />
          </div>
          <button type="submit" className="btn btn-gold" style={{ width: '100%', padding: '1.1rem' }}>
            Book Appointment
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookAppointment;
