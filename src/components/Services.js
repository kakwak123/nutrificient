import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div>
      <section className="hero">
        <h1>Our Services</h1>
        <p>Evidence-based nutrition solutions for individuals and businesses</p>
      </section>

      <section className="section">
        <h2>Personal Nutrition Services</h2>
        <div className="cards-container">
          <div className="card">
            <h3>Personal Nutrition Advice</h3>
            <p>
              Evidence-based nutrition guidance tailored for young adults, students, and professionals. 
              We focus on practical, sustainable eating strategies that fit busy lifestyles.
            </p>
            <ul style={{ marginTop: '1rem', paddingLeft: '1.5rem' }}>
              <li>Science-based recommendations</li>
              <li>Busy lifestyle optimization</li>
              <li>Student-friendly meal planning</li>
              <li>Performance nutrition for professionals</li>
            </ul>
          </div>
          <div className="card">
            <h3>Student Wellness Workshops</h3>
            <p>
              Interactive workshops designed specifically for university students, covering nutrition 
              basics, stress eating, budget-friendly healthy eating, and exam period nutrition.
            </p>
            <ul style={{ marginTop: '1rem', paddingLeft: '1.5rem' }}>
              <li>Campus nutrition education</li>
              <li>Budget-friendly meal planning</li>
              <li>Stress and nutrition management</li>
              <li>Group and individual sessions</li>
            </ul>
          </div>
          <div className="card">
            <h3>Young Professional Coaching</h3>
            <p>
              Nutrition strategies for early-career professionals balancing work demands with health goals. 
              Focus on energy optimization, stress management, and sustainable habits.
            </p>
            <ul style={{ marginTop: '1rem', paddingLeft: '1.5rem' }}>
              <li>Work-life nutrition balance</li>
              <li>Energy and focus optimization</li>
              <li>Social eating strategies</li>
              <li>Long-term habit building</li>
            </ul>
          </div>
          <div className="card">
            <h3>Personalized Meal Planning</h3>
            <p>
              Custom meal plans designed specifically for your dietary preferences, health goals, and lifestyle. 
              We consider your schedule, cooking skills, and food preferences to create practical, delicious meal plans.
            </p>
            <ul style={{ marginTop: '1rem', paddingLeft: '1.5rem' }}>
              <li>Customized to your goals</li>
              <li>Easy-to-follow recipes</li>
              <li>Shopping lists included</li>
              <li>Ongoing support and adjustments</li>
            </ul>
          </div>
          <div className="card">
            <h3>Weight Management</h3>
            <p>
              Sustainable weight loss and maintenance programs that focus on long-term success through 
              healthy eating habits and lifestyle changes.
            </p>
            <ul style={{ marginTop: '1rem', paddingLeft: '1.5rem' }}>
              <li>Realistic goal setting</li>
              <li>Behavioral change strategies</li>
              <li>Regular check-ins</li>
              <li>Maintenance support</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Specialized Nutrition Services</h2>
        <div className="cards-container">
          <div className="card">
            <h3>Wellness Coaching</h3>
            <p>
              Comprehensive wellness programs that address nutrition, stress management, sleep, 
              and physical activity to optimize your overall health and well-being.
            </p>
            <ul style={{ marginTop: '1rem', paddingLeft: '1.5rem' }}>
              <li>Holistic health approach</li>
              <li>Stress and nutrition management</li>
              <li>Lifestyle habit building</li>
              <li>Ongoing support and accountability</li>
            </ul>
          </div>
          <div className="card">
            <h3>Sports Nutrition</h3>
            <p>
              Specialized nutrition guidance for athletes and active individuals to enhance performance, 
              recovery, and overall fitness goals.
            </p>
            <ul style={{ marginTop: '1rem', paddingLeft: '1.5rem' }}>
              <li>Performance optimization</li>
              <li>Recovery nutrition strategies</li>
              <li>Pre and post-workout fueling</li>
              <li>Competition day nutrition</li>
            </ul>
          </div>
          <div className="card">
            <h3>Nutrition Consultation</h3>
            <p>
              One-on-one sessions to address your specific health concerns, dietary restrictions, 
              and wellness objectives with personalized recommendations.
            </p>
            <ul style={{ marginTop: '1rem', paddingLeft: '1.5rem' }}>
              <li>Comprehensive health assessment</li>
              <li>Personalized recommendations</li>
              <li>Progress tracking</li>
              <li>Follow-up sessions</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: '#f8f9fa' }}>
        <h2>Business & Content Services</h2>
        <div className="cards-container">
          <div className="card">
            <h3>Nutrition Content Creation</h3>
            <p>
              Professional nutrition content for blogs, social media, newsletters, and educational materials. 
              Science-backed content that engages your audience and builds credibility.
            </p>
            <ul style={{ marginTop: '1rem', paddingLeft: '1.5rem' }}>
              <li>Blog posts and articles</li>
              <li>Social media content</li>
              <li>Educational materials</li>
              <li>Newsletter content</li>
            </ul>
          </div>
          <div className="card">
            <h3>Food Business Branding</h3>
            <p>
              Strategic nutrition consultation for cafes, restaurants, food startups, and wellness brands. 
              Help your business stand out with credible, compelling nutrition messaging.
            </p>
            <ul style={{ marginTop: '1rem', paddingLeft: '1.5rem' }}>
              <li>Menu development and optimization</li>
              <li>Nutrition messaging strategy</li>
              <li>Brand positioning</li>
              <li>Customer education materials</li>
            </ul>
          </div>
          <div className="card">
            <h3>Workshop & Event Content</h3>
            <p>
              Custom nutrition workshops and educational content for corporate events, wellness programs, 
              and community initiatives.
            </p>
            <ul style={{ marginTop: '1rem', paddingLeft: '1.5rem' }}>
              <li>Corporate wellness programs</li>
              <li>Community nutrition events</li>
              <li>Educational presentations</li>
              <li>Interactive workshops</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Ready to Get Started?</h2>
        <p style={{ textAlign: 'center', marginBottom: '2rem' }}>
          Whether you're a student looking to optimize your nutrition, a young professional seeking work-life balance, 
          or a food business wanting to stand out with credible content - we're here to help.
        </p>
        <div style={{ textAlign: 'center' }}>
          <Link to="/contact" className="cta-button">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services; 