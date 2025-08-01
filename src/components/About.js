import React from 'react';

const About = () => {
  return (
    <div>
      <section className="hero">
        <h1>About Nutrificient</h1>
        <p>Nutrition Science with Purpose</p>
      </section>

      <section className="section">
        <h2>Our Mission</h2>
        <p>
          Nutrificient bridges the gap between nutrition science and practical application for young adults, 
          students, and food businesses. We believe that evidence-based nutrition should be accessible, 
          engaging, and actionable for everyone.
        </p>
        <p>
          In today's world of information overload, we cut through the noise to provide clear, 
          science-backed nutrition guidance that fits the busy lifestyles of young professionals 
          and the dynamic needs of growing food businesses.
        </p>
      </section>

      <section className="section" style={{ backgroundColor: '#f8f9fa' }}>
        <h2>Meet Giriyeong Park</h2>
        <div className="team-container">
          <div className="team-member">
            <img src="/img/john_profile.jpg" alt="Giriyeong Park" />
            <h3>Giriyeong Park</h3>
            <p>Nutrition Scientist & Consultant</p>
            <p>
              Giriyeong combines deep nutrition science expertise with practical business acumen. 
              Specializing in evidence-based nutrition for young adults and students, plus strategic 
              content creation and branding for food businesses and cafes.
            </p>
            <p>
              With a background in nutrition science and experience in the food industry, Giriyeong 
              understands both the scientific principles of nutrition and the practical challenges 
              of running a food business in today's competitive market.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Our Approach</h2>
        <div className="cards-container">
          <div className="card">
            <h3>Science-First</h3>
            <p>Every piece of advice and content is rooted in peer-reviewed nutrition science, ensuring accuracy and credibility.</p>
          </div>
          <div className="card">
            <h3>Practical & Accessible</h3>
            <p>We translate complex nutrition science into actionable advice that fits busy student and professional lifestyles.</p>
          </div>
          <div className="card">
            <h3>Business-Savvy</h3>
            <p>For food businesses, we combine nutrition expertise with marketing strategy to create compelling, credible content.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 