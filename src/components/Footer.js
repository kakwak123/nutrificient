import React from 'react';
import { Link } from 'react-router-dom';
import InstagramIcon from '../Img/Instagram.jpg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ marginBottom: '1rem' }}>Nutrificient</h3>
          <p>Transforming lives through nutrition and wellness</p>
        </div>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '2rem',
          marginBottom: '2rem'
        }}>
          <div>
            <h4 style={{ marginBottom: '1rem' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>About</Link>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link to="/services" style={{ color: 'white', textDecoration: 'none' }}>Services</Link>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 style={{ marginBottom: '1rem' }}>Services</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '0.5rem' }}>Personal Nutrition Advice</li>
              <li style={{ marginBottom: '0.5rem' }}>Student Wellness Workshops</li>
              <li style={{ marginBottom: '0.5rem' }}>Content Creation</li>
              <li style={{ marginBottom: '0.5rem' }}>Business Branding</li>
            </ul>
          </div>
          
          <div>
            <h4 style={{ marginBottom: '1rem' }}>Contact Info</h4>
            <p style={{ marginBottom: '0.5rem' }}>Giriyeong Park</p>
            <p style={{ marginBottom: '0.5rem' }}>info@nutrificient.com</p>
            <p style={{ marginBottom: '0.5rem' }}>+61 479 105 978</p>
            <p>568 Collins Street, Melbourne, VIC, Australia</p>
          </div>
        </div>
        
        <div className="social-links">
          <a href="https://facebook.com" aria-label="Facebook">📘</a>
          <a href="https://www.instagram.com/qkr_rl_fud/" aria-label="Instagram">
            <img src={InstagramIcon} alt="Instagram" style={{ width: '24px', height: '24px' }} />
          </a>
          <a href="https://twitter.com" aria-label="Twitter">🐦</a>
          <a href="https://linkedin.com" aria-label="LinkedIn">💼</a>
        </div>
        
        <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid #555' }}>
          <p>&copy; 2024 Nutrificient. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 