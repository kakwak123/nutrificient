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
    // Form submission logic would go here
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
              <h3 style={{ marginBottom: '1rem', color: '#4CAF50' }}>Contact Information</h3>
              <div style={{ marginBottom: '2rem' }}>
                <h4 style={{ marginBottom: '0.5rem' }}>Nutrition Student & Consultant</h4>
                <p>Giryeong Park</p>
              </div>
              <div style={{ marginBottom: '2rem' }}>
                <h4 style={{ marginBottom: '0.5rem' }}>Email</h4>
                <p>giryeong.park2006@gmail.com</p>
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
                <p>VIC 3000 Melbourne</p>
              </div>
            </div>

          <div className="contact-form">
            <h3 style={{ marginBottom: '2rem', color: '#4CAF50' }}>Send us a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name <span style={{ color: 'red' }}>*</span></label>
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
                <label htmlFor="email">Email Address <span style={{ color: 'red' }}>*</span></label>
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
                <option value="personal-nutrition">Personal Nutrition Advice</option>
                <option value="student-workshops">Student Wellness Workshops</option>
                <option value="professional-coaching">Young Professional Coaching</option>
                <option value="meal-planning">Personalized Meal Planning</option>
                <option value="consultation">Nutrition Consultation</option>
                <option value="weight-management">Weight Management</option>
                <option value="wellness-coaching">Wellness Coaching</option>
                <option value="sports-nutrition">Sports Nutrition</option>
                <option value="content-creation">Nutrition Content Creation</option>
                <option value="business-branding">Food Business Branding</option>
                <option value="workshop-content">Workshop & Event Content</option>
                <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message <span style={{ color: 'red' }}>*</span></label>
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
            <h3>Do you work with university students?</h3>
            <p>Absolutely! We specialize in student nutrition and offer workshops, individual consultations, and budget-friendly meal planning for university students.</p>
          </div>
          <div className="card">
            <h3>What types of content do you create?</h3>
            <p>We create blog posts, social media content, educational materials, and workshop content - all backed by nutrition science and tailored to your audience.</p>
          </div>
          <div className="card">
            <h3>How can you help my food business?</h3>
            <p>We provide nutrition consultation for menu development, branding strategy, content creation, and customer education to help your business stand out.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 