import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div>
      <section className="hero">
        <h1>Our Services</h1>
        <p>Comprehensive nutrition and wellness solutions tailored to your needs</p>
      </section>

      <section className="section">
        <h2>Nutrition Services</h2>
        <div className="cards-container">
          <div className="card">
            <h3>Personalized Meal Planning</h3>
            <p>
              Get custom meal plans designed specifically for your dietary preferences, health goals, 
              and lifestyle. We consider your schedule, cooking skills, and food preferences to create 
              practical, delicious meal plans.
            </p>
            <ul style={{ marginTop: '1rem', paddingLeft: '1.5rem' }}>
              <li>Customized to your goals</li>
              <li>Easy-to-follow recipes</li>
              <li>Shopping lists included</li>
              <li>Ongoing support and adjustments</li>
            </ul>
          </div>
          <div className="card">
            <h3>Nutrition Consultation</h3>
            <p>
              One-on-one sessions with our certified nutrition specialists to address your specific 
              health concerns, dietary restrictions, and wellness objectives.
            </p>
            <ul style={{ marginTop: '1rem', paddingLeft: '1.5rem' }}>
              <li>Comprehensive health assessment</li>
              <li>Personalized recommendations</li>
              <li>Progress tracking</li>
              <li>Follow-up sessions</li>
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

      <section className="section" style={{ backgroundColor: '#f8f9fa' }}>
        <h2>Wellness Programs</h2>
        <div className="cards-container">
          <div className="card">
            <h3>Holistic Wellness Coaching</h3>
            <p>
              Comprehensive wellness programs that address nutrition, stress management, sleep, 
              and physical activity to optimize your overall health and well-being.
            </p>
          </div>
          <div className="card">
            <h3>Sports Nutrition</h3>
            <p>
              Specialized nutrition guidance for athletes and active individuals to enhance performance, 
              recovery, and overall fitness goals.
            </p>
          </div>
          <div className="card">
            <h3>Specialized Diets</h3>
            <p>
              Expert guidance for managing specific dietary needs including vegetarian, vegan, 
              gluten-free, and other specialized eating patterns.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Ready to Get Started?</h2>
        <p style={{ textAlign: 'center', marginBottom: '2rem' }}>
          Take the first step towards better health and nutrition. Contact us today to schedule 
          your consultation and begin your wellness journey.
        </p>
        <div style={{ textAlign: 'center' }}>
          <Link to="/contact" className="cta-button">
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services; 