import { useState } from 'react';
import { Calendar as CalendarIcon, Clock, User } from 'lucide-react';

const BookAppointment = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const timeSlots = ["10:00 AM", "11:30 AM", "01:00 PM", "02:30 PM", "04:00 PM"];

  const handleBook = (e) => {
    e.preventDefault();
    if(!selectedDate || !selectedTime) {
        alert("Please select a date and time");
        return;
    }
    console.log("Appointment Booked:", { selectedDate, selectedTime });
    alert(`Appointment confirmed for ${selectedDate} at ${selectedTime}. We look forward to seeing you.`);
  };

  return (
    <div className="container" style={{ padding: '6rem 2rem', maxWidth: '800px' }}>
      <div className="section-title animate-fade-up">
        <h2>Book a Consultation</h2>
        <div className="title-divider">
          <span className="divider-icon">❦</span>
        </div>
      </div>
      
      <p className="text-center text-gold mb-8 animate-fade-up" style={{ animationDelay: '0.1s' }}>
        Schedule a private fitting and design session at our atelier.
      </p>

      <div className="card animate-fade-up" style={{ animationDelay: '0.2s' }}>
        <form onSubmit={handleBook}>
          
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary-container)', fontSize: '1.2rem' }}>
              <CalendarIcon size={20} /> Select Date
            </h3>
            <input 
              type="date" 
              value={selectedDate} 
              onChange={(e) => setSelectedDate(e.target.value)} 
              required
              style={{ padding: '1rem', marginTop: '1rem' }}
            />
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary-container)', fontSize: '1.2rem' }}>
              <Clock size={20} /> Select Time
            </h3>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem' }}>
              {timeSlots.map(time => (
                <button 
                  key={time}
                  type="button"
                  onClick={() => setSelectedTime(time)}
                  style={{
                    padding: '0.8rem 1.5rem',
                    backgroundColor: selectedTime === time ? 'var(--primary-container)' : 'transparent',
                    color: selectedTime === time ? 'var(--on-primary-container)' : 'var(--on-surface)',
                    border: `1px solid ${selectedTime === time ? 'var(--primary-container)' : 'var(--outline-variant)'}`,
                    borderRadius: 'var(--radius-default)',
                    cursor: 'pointer',
                    transition: 'all 0.3s'
                  }}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary-container)', fontSize: '1.2rem' }}>
              <User size={20} /> Your Details
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1rem' }}>
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email Address" required />
              <input type="tel" placeholder="Phone Number" required style={{ gridColumn: 'span 2' }} />
            </div>
          </div>

          <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1rem' }}>
            Confirm Appointment
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookAppointment;
