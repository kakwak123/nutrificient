import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  return (
    <div>
      <section className="hero">
        <h1>Contact Us</h1>
        <p>Ready to start your nutrition journey? Get in touch with us today!</p>
      </section>

      <section className="section">
        <h2>Get In Touch</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'start' }}>
                      <div>
              <h3 style={{ marginBottom: '1rem', color: '#667eea' }}>Contact Information</h3>
              <div style={{ marginBottom: '2rem' }}>
                <h4 style={{ marginBottom: '0.5rem' }}>Nutrition Expert</h4>
                <p>Giriyeong Park</p>
              </div>
              <div style={{ marginBottom: '2rem' }}>
                <h4 style={{ marginBottom: '0.5rem' }}>Email</h4>
                <p>info@nutrificient.com</p>
              </div>
              <div style={{ marginBottom: '2rem' }}>
                <h4 style={{ marginBottom: '0.5rem' }}>Mobile</h4>
                <p>+61 479 105 978</p>
              </div>
              <div style={{ marginBottom: '2rem' }}>
                <h4 style={{ marginBottom: '0.5rem' }}>Office Hours</h4>
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
              <div>
                <h4 style={{ marginBottom: '0.5rem' }}>Location</h4>
                <p>568 Collins Street</p>
                <p>Melbourne, VIC, Australia</p>
              </div>
            </div>

          <div className="contact-form">
            <h3 style={{ marginBottom: '2rem', color: '#667eea' }}>Send us a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="service">Service of Interest</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '0.8rem',
                    border: '2px solid #e1e5e9',
                    borderRadius: '8px',
                    fontSize: '1rem'
                  }}
                >
                  <option value="">Select a service</option>
                  <option value="meal-planning">Personalized Meal Planning</option>
                  <option value="consultation">Nutrition Consultation</option>
                  <option value="weight-management">Weight Management</option>
                  <option value="wellness-coaching">Wellness Coaching</option>
                  <option value="sports-nutrition">Sports Nutrition</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: '#f8f9fa' }}>
        <h2>Frequently Asked Questions</h2>
        <div className="cards-container">
          <div className="card">
            <h3>How long does a consultation take?</h3>
            <p>Initial consultations typically last 60-90 minutes, allowing us to thoroughly assess your needs and create a personalized plan.</p>
          </div>
          <div className="card">
            <h3>Do you offer virtual consultations?</h3>
            <p>Yes! We offer both in-person and virtual consultations to accommodate your schedule and preferences.</p>
          </div>
          <div className="card">
            <h3>What should I bring to my first appointment?</h3>
            <p>Please bring any recent medical reports, current medications list, and a food diary if you have one.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 