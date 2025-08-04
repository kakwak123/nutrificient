import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Hero Banner */}
      <section className="hero">
        <h1>Nutrificient</h1>
        <p>Nutrition Science with Purpose</p>
        <div style={{ marginTop: '2rem' }}>
          <Link to="/contact" className="cta-button" style={{ marginRight: '1rem' }}>
            Book Consultation
          </Link>
          <Link to="/services" className="cta-button" style={{ 
            background: 'transparent', 
            border: '2px solid white',
            color: 'white'
          }}>
            Explore Services
          </Link>
        </div>
      </section>

      {/* Mission Summary */}
      <section className="section" style={{ padding: '3rem 2rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Our Mission</h2>
        <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
          Transforming lives through science-driven nutrition solutions for ambitious young professionals and students, 
          while empowering food businesses with compelling, research-backed content that captivates and converts.
        </p>
      </section>

      {/* 3 Main Service Tiles */}
      <section className="section">
        <h2>Our Core Services</h2>
        <div className="cards-container">
          <div className="card">
            <h3>📋 Consultations</h3>
            <p>
              Personal nutrition advice for young adults, students, and professionals. 
              Evidence-based guidance tailored to your lifestyle and goals.
            </p>
            <ul style={{ marginTop: '1rem', paddingLeft: '1.5rem' }}>
              <li>Personal nutrition advice</li>
              <li>Student wellness workshops</li>
              <li>Young professional coaching</li>
              <li>Weight management programs</li>
            </ul>
            <Link to="/services" style={{ 
              display: 'inline-block', 
              marginTop: '1rem',
              color: '#667eea',
              textDecoration: 'none',
              fontWeight: 'bold'
            }}>
              Learn More →
            </Link>
          </div>
          <div className="card">
            <h3>✍️ Content Creation</h3>
            <p>
              Professional nutrition content for blogs, social media, and educational materials. 
              Science-backed content that engages and informs your audience.
            </p>
            <ul style={{ marginTop: '1rem', paddingLeft: '1.5rem' }}>
              <li>Blog posts and articles</li>
              <li>Social media content</li>
              <li>Educational materials</li>
              <li>Newsletter content</li>
            </ul>
            <Link to="/services" style={{ 
              display: 'inline-block', 
              marginTop: '1rem',
              color: '#667eea',
              textDecoration: 'none',
              fontWeight: 'bold'
            }}>
              Learn More →
            </Link>
          </div>
          <div className="card">
            <h3>🏢 Business Branding</h3>
            <p>
              Strategic nutrition consultation for food businesses, cafes, and wellness brands. 
              Help your business stand out with credible, compelling nutrition messaging.
            </p>
            <ul style={{ marginTop: '1rem', paddingLeft: '1.5rem' }}>
              <li>Menu development</li>
              <li>Nutrition messaging strategy</li>
              <li>Brand positioning</li>
              <li>Customer education</li>
            </ul>
            <Link to="/services" style={{ 
              display: 'inline-block', 
              marginTop: '1rem',
              color: '#667eea',
              textDecoration: 'none',
              fontWeight: 'bold'
            }}>
              Learn More →
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section" style={{ backgroundColor: '#f8f9fa' }}>
        <h2>What Our Clients Say</h2>
        <div className="cards-container">
          <div className="card">
            <p style={{ fontStyle: 'italic', marginBottom: '1rem' }}>
              "Giriyeong's nutrition advice helped me balance my studies with healthy eating. 
              The student workshops were practical and budget-friendly!"
            </p>
            <p style={{ fontWeight: 'bold', color: '#667eea' }}>- Sarah, University Student</p>
          </div>
          <div className="card">
            <p style={{ fontStyle: 'italic', marginBottom: '1rem' }}>
              "The content creation service transformed our cafe's social media presence. 
              Our customers now trust our nutrition messaging completely."
            </p>
            <p style={{ fontWeight: 'bold', color: '#667eea' }}>- Mike, Cafe Owner</p>
          </div>
          <div className="card">
            <p style={{ fontStyle: 'italic', marginBottom: '1rem' }}>
              "As a young professional, I needed practical nutrition strategies. 
              Giriyeong's coaching helped me maintain energy and focus at work."
            </p>
            <p style={{ fontWeight: 'bold', color: '#667eea' }}>- Emma, Marketing Professional</p>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section" style={{ textAlign: 'center' }}>
        <h2>Stay Updated</h2>
        <p style={{ marginBottom: '2rem' }}>
          Get the latest nutrition tips, recipes, and wellness insights delivered to your inbox.
        </p>
        <div style={{ 
          maxWidth: '500px', 
          margin: '0 auto',
          display: 'flex',
          gap: '1rem',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          <input 
            type="email" 
            placeholder="Enter your email address"
            style={{
              padding: '1rem',
              border: '2px solid #e1e5e9',
              borderRadius: '8px',
              fontSize: '1rem',
              minWidth: '300px'
            }}
          />
          <button className="cta-button" style={{ margin: 0 }}>
            Subscribe
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home; 