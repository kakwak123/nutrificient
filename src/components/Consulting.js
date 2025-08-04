import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Consulting = () => {
  const [selectedService, setSelectedService] = useState('');

  const handleServiceSelect = (service) => {
    setSelectedService(service);
  };

  const handleBooking = () => {
    // This would integrate with Calendly or payment system
    window.open('https://calendly.com/nutrificient', '_blank');
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <h1>Consulting Services</h1>
        <p>Tailored Nutrition Support for Young Adults</p>
      </section>

      {/* Intro Section */}
      <section className="section">
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          <h2>Personalized Nutrition Guidance</h2>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.6', marginBottom: '2rem' }}>
            Get evidence-based nutrition advice tailored to your lifestyle, goals, and schedule. 
            Whether you're a busy student, young professional, or food business owner, 
            I'll help you create sustainable, practical nutrition strategies.
          </p>
        </div>
      </section>

      {/* Service Tiers */}
      <section className="section" style={{ backgroundColor: '#f8f9fa' }}>
        <h2>Service Tiers</h2>
        <div className="cards-container">
          {/* Starter Consult */}
          <div className="card" style={{ 
            border: selectedService === 'starter' ? '3px solid #4CAF50' : '1px solid #e1e5e9',
            transform: selectedService === 'starter' ? 'scale(1.02)' : 'scale(1)',
            transition: 'all 0.3s ease'
          }}>
            <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
              <h3 style={{ color: '#4CAF50', marginBottom: '0.5rem' }}>Starter Consult</h3>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#333' }}>$75</div>
              <div style={{ color: '#666', fontSize: '0.9rem' }}>30 minutes</div>
            </div>
            <p style={{ marginBottom: '1.5rem' }}>
              Perfect for getting started with nutrition guidance. Quick assessment and 
              actionable tips to improve your eating habits.
            </p>
            <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
              <li>Nutrition assessment</li>
              <li>Goal setting</li>
              <li>3-5 actionable tips</li>
              <li>Email follow-up</li>
            </ul>
            <button 
              className="cta-button" 
              style={{ width: '100%' }}
              onClick={() => handleServiceSelect('starter')}
            >
              Select Starter Consult
            </button>
          </div>

          {/* Full Lifestyle Plan */}
          <div className="card" style={{ 
            border: selectedService === 'full' ? '3px solid #4CAF50' : '1px solid #e1e5e9',
            transform: selectedService === 'full' ? 'scale(1.02)' : 'scale(1)',
            transition: 'all 0.3s ease',
            position: 'relative'
          }}>
            <div style={{ 
              position: 'absolute', 
              top: '-10px', 
              left: '50%', 
              transform: 'translateX(-50%)',
              background: '#ffd700',
              color: '#333',
              padding: '0.5rem 1rem',
              borderRadius: '20px',
              fontSize: '0.8rem',
              fontWeight: 'bold'
            }}>
              MOST POPULAR
            </div>
            <div style={{ textAlign: 'center', marginBottom: '1.5rem', marginTop: '1rem' }}>
              <h3 style={{ color: '#4CAF50', marginBottom: '0.5rem' }}>Full Lifestyle Plan</h3>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#333' }}>$150</div>
              <div style={{ color: '#666', fontSize: '0.9rem' }}>1 hour</div>
            </div>
            <p style={{ marginBottom: '1.5rem' }}>
              Comprehensive nutrition planning for sustainable lifestyle changes. 
              Includes detailed meal planning and ongoing support.
            </p>
            <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
              <li>Comprehensive nutrition assessment</li>
              <li>Personalized meal plan (2 weeks)</li>
              <li>Shopping list and recipes</li>
              <li>Lifestyle habit strategies</li>
              <li>2-week follow-up check-in</li>
            </ul>
            <button 
              className="cta-button" 
              style={{ width: '100%' }}
              onClick={() => handleServiceSelect('full')}
            >
              Select Full Plan
            </button>
          </div>

          {/* Business Strategy */}
          <div className="card" style={{ 
            border: selectedService === 'business' ? '3px solid #4CAF50' : '1px solid #e1e5e9',
            transform: selectedService === 'business' ? 'scale(1.02)' : 'scale(1)',
            transition: 'all 0.3s ease'
          }}>
            <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
              <h3 style={{ color: '#4CAF50', marginBottom: '0.5rem' }}>Business Strategy</h3>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#333' }}>Custom Quote</div>
              <div style={{ color: '#666', fontSize: '0.9rem' }}>Flexible duration</div>
            </div>
            <p style={{ marginBottom: '1.5rem' }}>
              Strategic nutrition consultation for cafes, restaurants, and food startups. 
              Help your business stand out with credible nutrition messaging.
            </p>
            <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
              <li>Menu development & optimization</li>
              <li>Nutrition messaging strategy</li>
              <li>Brand positioning</li>
              <li>Customer education materials</li>
              <li>Ongoing consultation</li>
            </ul>
            <button 
              className="cta-button" 
              style={{ width: '100%' }}
              onClick={() => handleServiceSelect('business')}
            >
              Get Custom Quote
            </button>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="section">
        <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
          <h2>Ready to Get Started?</h2>
          {selectedService && (
            <div style={{ 
              background: '#f8f9fa', 
              padding: '1.5rem', 
              borderRadius: '10px', 
              marginBottom: '2rem' 
            }}>
              <h3 style={{ color: '#667eea', marginBottom: '0.5rem' }}>
                Selected: {selectedService === 'starter' ? 'Starter Consult ($75)' : 
                          selectedService === 'full' ? 'Full Lifestyle Plan ($150)' : 
                          'Business Strategy (Custom Quote)'}
              </h3>
            </div>
          )}
          
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button 
              className="cta-button"
              onClick={handleBooking}
              disabled={!selectedService}
              style={{ 
                opacity: selectedService ? 1 : 0.6,
                cursor: selectedService ? 'pointer' : 'not-allowed'
              }}
            >
              Book Consultation
            </button>
            <Link to="/contact" className="cta-button" style={{ 
              background: 'transparent', 
              border: '2px solid #667eea',
              color: '#667eea'
            }}>
              Contact for Questions
            </Link>
          </div>
          
          <p style={{ marginTop: '2rem', fontSize: '0.9rem', color: '#666' }}>
            All consultations are conducted via video call or in-person in Melbourne. 
            Payment is processed securely through our booking system.
          </p>
        </div>
      </section>

      {/* Calendly Integration Placeholder */}
      <section className="section" style={{ backgroundColor: '#f8f9fa' }}>
        <h2>Schedule Your Consultation</h2>
        <div style={{ 
          background: 'white', 
          padding: '2rem', 
          borderRadius: '10px',
          textAlign: 'center',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <p style={{ marginBottom: '2rem' }}>
            Choose a time that works for you. All consultations are conducted via Zoom or in-person.
          </p>
          <div style={{ 
            background: '#f0f0f0', 
            padding: '3rem', 
            borderRadius: '8px',
            border: '2px dashed #ccc'
          }}>
            <p style={{ color: '#666', marginBottom: '1rem' }}>📅 Calendly Integration</p>
            <p style={{ fontSize: '0.9rem', color: '#888' }}>
              Calendly booking widget will be embedded here.<br/>
              For now, please use the "Book Consultation" button above.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section">
        <h2>Frequently Asked Questions</h2>
        <div className="cards-container">
          <div className="card">
            <h3>What happens during a consultation?</h3>
            <p>We'll discuss your current eating habits, health goals, lifestyle, and any specific challenges you're facing. I'll provide personalized recommendations and create a plan that fits your schedule and preferences.</p>
          </div>
          <div className="card">
            <h3>Do you offer follow-up support?</h3>
            <p>Yes! The Full Lifestyle Plan includes a 2-week follow-up check-in. Additional support sessions can be booked as needed to help you stay on track.</p>
          </div>
          <div className="card">
            <h3>Can I reschedule my appointment?</h3>
            <p>Absolutely! You can reschedule up to 24 hours before your appointment. Just let me know and we'll find a time that works better for you.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Consulting; 