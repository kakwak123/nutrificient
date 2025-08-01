import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <h1>Nutrificient</h1>
        <p>Nutrition Science with Purpose</p>
        <p style={{ fontSize: '1.1rem', marginTop: '1rem' }}>Empowering young professionals and students with evidence-based nutrition guidance</p>
        <Link to="/services" className="cta-button">
          Discover Our Services
        </Link>
      </section>

      {/* Features Section */}
      <section className="section">
        <h2>Why Choose Nutrificient?</h2>
        <div className="cards-container">
          <div className="card">
            <h3>Science-Based Nutrition</h3>
            <p>Evidence-based nutrition advice tailored for busy young adults and students who want to optimize their health and performance.</p>
          </div>
          <div className="card">
            <h3>Content Creation</h3>
            <p>Professional nutrition content for blogs, social media, and educational materials that engage and inform your audience.</p>
          </div>
          <div className="card">
            <h3>Business Branding</h3>
            <p>Strategic nutrition branding and consultation for food businesses, cafes, and wellness startups looking to stand out.</p>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section" style={{ backgroundColor: '#f8f9fa' }}>
        <h2>Meet Our Expert</h2>
        <div className="team-container">
          <div className="team-member">
            <img src="/img/john_profile.jpg" alt="Giriyeong Park" />
            <h3>Giriyeong Park</h3>
            <p>Nutrition Scientist & Consultant</p>
            <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>
              Specializing in evidence-based nutrition for young professionals and content creation for food businesses
            </p>
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <Link to="/about" className="cta-button">
            Learn More About Giriyeong
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home; 