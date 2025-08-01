import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to Nutrificient</h1>
        <p>Your journey to optimal nutrition and wellness starts here</p>
        <Link to="/services" className="cta-button">
          Explore Our Services
        </Link>
      </section>

      {/* Features Section */}
      <section className="section">
        <h2>Why Choose Nutrificient?</h2>
        <div className="cards-container">
          <div className="card">
            <h3>Expert Nutrition Guidance</h3>
            <p>Get personalized nutrition advice from certified professionals who understand your unique needs and goals.</p>
          </div>
          <div className="card">
            <h3>Science-Based Approach</h3>
            <p>Our recommendations are backed by the latest scientific research and evidence-based nutrition practices.</p>
          </div>
          <div className="card">
            <h3>Holistic Wellness</h3>
            <p>We focus on your overall health and well-being, not just what you eat, but how you live.</p>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section" style={{ backgroundColor: '#f8f9fa' }}>
        <h2>Meet Our Team</h2>
        <div className="team-container">
          <div className="team-member">
            <img src="/img/john_profile.jpg" alt="John" />
            <h3>John</h3>
            <p>Nutrition Specialist</p>
          </div>
          <div className="team-member">
            <img src="/img/wendy_profile.jpg" alt="Wendy" />
            <h3>Wendy</h3>
            <p>Wellness Coach</p>
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <Link to="/about" className="cta-button">
            Learn More About Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home; 