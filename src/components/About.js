import React from 'react';

const About = () => {
  return (
    <div>
      <section className="hero">
        <h1>About Nutrificient</h1>
        <p>Dedicated to transforming lives through nutrition and wellness</p>
      </section>

      <section className="section">
        <h2>Our Story</h2>
        <p>
          Nutrificient was founded with a simple yet powerful mission: to help people achieve optimal health 
          through evidence-based nutrition and personalized wellness strategies. We believe that everyone 
          deserves access to expert nutrition guidance that fits their unique lifestyle and goals.
        </p>
        <p>
          Our journey began when we recognized the overwhelming amount of conflicting nutrition information 
          available today. We wanted to create a trusted resource where people could find clear, 
          science-backed advice tailored to their individual needs.
        </p>
      </section>

      <section className="section" style={{ backgroundColor: '#f8f9fa' }}>
        <h2>Our Team</h2>
        <div className="team-container">
          <div className="team-member">
            <img src="/img/john_profile.jpg" alt="John" />
            <h3>John</h3>
            <p>Nutrition Specialist</p>
            <p>
              With over 10 years of experience in clinical nutrition, John specializes in creating 
              personalized meal plans and helping clients achieve their health goals through sustainable 
              dietary changes.
            </p>
          </div>
          <div className="team-member">
            <img src="/img/wendy_profile.jpg" alt="Wendy" />
            <h3>Wendy</h3>
            <p>Wellness Coach</p>
            <p>
              Wendy brings her expertise in holistic wellness and lifestyle coaching to help clients 
              integrate healthy habits into their daily routines and maintain long-term success.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Our Values</h2>
        <div className="cards-container">
          <div className="card">
            <h3>Evidence-Based</h3>
            <p>Every recommendation we make is grounded in the latest scientific research and clinical evidence.</p>
          </div>
          <div className="card">
            <h3>Personalized</h3>
            <p>We understand that no two people are alike, which is why we create customized plans for each individual.</p>
          </div>
          <div className="card">
            <h3>Sustainable</h3>
            <p>We focus on creating lasting change through realistic, achievable goals and ongoing support.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 