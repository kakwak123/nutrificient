import React from 'react';

const About = () => {
  return (
    <div>
      <section className="hero">
        <h1>About Nutrificient</h1>
        <p>Nutrition Science with Purpose</p>
      </section>

              {/* Giryeong's Personal Intro + Photo */}
      <section className="section">
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 2fr', 
          gap: '3rem', 
          alignItems: 'center',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          <div style={{ textAlign: 'center' }}>
            <img 
              src="/img/john_profile.jpg" 
              alt="Giryeong Park" 
              style={{
                width: '250px',
                height: '250px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '4px solid #667eea',
                marginBottom: '1rem'
              }}
            />
            <h3 style={{ color: '#667eea', marginBottom: '0.5rem' }}>Giryeong Park</h3>
            <p style={{ fontStyle: 'italic', color: '#666' }}>Founder</p>
          </div>
          <div>
            <h2 style={{ marginBottom: '1.5rem' }}>Meet Giryeong</h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1rem' }}>
                              Hi! I'm Giryeong, a nutrition scientist passionate about making evidence-based nutrition 
              accessible to everyone. I believe that good nutrition shouldn't be complicated or overwhelming.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1rem' }}>
              My journey started with a fascination for how food affects our bodies and minds. 
              Today, I help young professionals, students, and food businesses navigate the complex 
              world of nutrition with practical, science-backed guidance.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
              When I'm not researching the latest nutrition studies or creating content, you'll find me 
              experimenting with new recipes, exploring Melbourne's food scene, or sharing nutrition tips 
              on social media.
            </p>
          </div>
        </div>
      </section>

      {/* Mission + Values */}
      <section className="section" style={{ backgroundColor: '#f8f9fa' }}>
                 <h2>Our Mission & Values</h2>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', marginBottom: '3rem' }}>
          <h3 style={{ color: '#667eea', marginBottom: '1rem' }}>Mission</h3>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
            To bridge the gap between nutrition science and practical application, making evidence-based 
            nutrition guidance accessible, engaging, and actionable for young adults, students, and food businesses.
          </p>
        </div>
        <div className="cards-container">
          <div className="card">
            <h3>🔬 Science-First</h3>
            <p>Every piece of advice and content is rooted in peer-reviewed nutrition science, ensuring accuracy and credibility.</p>
          </div>
          <div className="card">
            <h3>💡 Practical & Accessible</h3>
            <p>We translate complex nutrition science into actionable advice that fits busy student and professional lifestyles.</p>
          </div>
          <div className="card">
            <h3>🚀 Business-Savvy</h3>
            <p>For food businesses, we combine nutrition expertise with marketing strategy to create compelling, credible content.</p>
          </div>
        </div>
      </section>

      {/* Timeline: How Nutrificient Started */}
      <section className="section">
        <h2>How Nutrificient Started</h2>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                     <div style={{ 
             display: 'grid', 
             gridTemplateColumns: 'auto 1fr', 
             gap: '2rem',
             alignItems: 'center',
             marginBottom: '2rem'
           }}>
             <div style={{ 
               background: '#667eea', 
               color: 'white', 
               padding: '1rem', 
               borderRadius: '50%',
               width: '60px',
               height: '60px',
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'center',
               fontWeight: 'bold'
             }}>
               2020
             </div>
             <div>
               <h4 style={{ color: '#667eea', marginBottom: '0.5rem' }}>The Curiosity Begins</h4>
               <p>Developed a deep interest in nutrition and how food affects our bodies and minds. Started researching nutrition science and experimenting with healthy eating habits.</p>
             </div>
           </div>
           <div style={{ 
             display: 'grid', 
             gridTemplateColumns: 'auto 1fr', 
             gap: '2rem',
             alignItems: 'center',
             marginBottom: '2rem'
           }}>
             <div style={{ 
               background: '#667eea', 
               color: 'white', 
               padding: '1rem', 
               borderRadius: '50%',
               width: '60px',
               height: '60px',
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'center',
               fontWeight: 'bold'
             }}>
               2022
             </div>
             <div>
               <h4 style={{ color: '#667eea', marginBottom: '0.5rem' }}>The Realization</h4>
               <p>Noticed the gap between nutrition science and practical application. Many people struggled to find reliable, actionable nutrition advice that fit their busy lifestyles.</p>
             </div>
           </div>
           <div style={{ 
             display: 'grid', 
             gridTemplateColumns: 'auto 1fr', 
             gap: '2rem',
             alignItems: 'center',
             marginBottom: '2rem'
           }}>
             <div style={{ 
               background: '#667eea', 
               color: 'white', 
               padding: '1rem', 
               borderRadius: '50%',
               width: '60px',
               height: '60px',
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'center',
               fontWeight: 'bold'
             }}>
               2024
             </div>
             <div>
               <h4 style={{ color: '#667eea', marginBottom: '0.5rem' }}>The Academic Journey</h4>
               <p>Started studying Bachelor of Nutrition Science at Monash University, turning my passion into formal education and gaining deeper knowledge of evidence-based nutrition.</p>
             </div>
           </div>
           <div style={{ 
             display: 'grid', 
             gridTemplateColumns: 'auto 1fr', 
             gap: '2rem',
             alignItems: 'center'
           }}>
             <div style={{ 
               background: '#667eea', 
               color: 'white', 
               padding: '1rem', 
               borderRadius: '50%',
               width: '60px',
               height: '60px',
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'center',
               fontWeight: 'bold'
             }}>
               2025
             </div>
             <div>
               <h4 style={{ color: '#667eea', marginBottom: '0.5rem' }}>Today</h4>
               <p>Currently studying nutrition science while helping students, young professionals, and food businesses with practical, science-backed nutrition guidance and content creation.</p>
             </div>
           </div>
        </div>
      </section>

      {/* Fun Facts & Credentials */}
      <section className="section" style={{ backgroundColor: '#f8f9fa' }}>
        <h2>Credentials & Fun Facts</h2>
        <div className="cards-container">
          <div className="card">
            <h3>🎓 Education</h3>
            <ul style={{ paddingLeft: '1.5rem' }}>
              <li><strong>Monash University</strong> - Bachelor of Nutrition Science</li>
                             <li><strong>IB Diploma</strong> - Biology & Chemistry</li>
              <li>Ongoing professional development in nutrition research</li>
            </ul>
          </div>
                     <div className="card">
             <h3>🏆 Certifications</h3>
             <ul style={{ paddingLeft: '1.5rem' }}>
               <li><strong>Working with Children Check (WWC)</strong></li>
               <li>Food Safety Certification</li>
             </ul>
           </div>
          <div className="card">
            <h3>🌟 Fun Facts</h3>
            <ul style={{ paddingLeft: '1.5rem' }}>
              <li>Can speak 3 languages fluently</li>
              <li>Loves experimenting with fusion recipes</li>
              <li>Believes the best nutrition advice comes from understanding individual lifestyles</li>
              <li>Passionate about making healthy eating accessible to everyone</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 