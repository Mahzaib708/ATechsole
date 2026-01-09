import React from 'react';
import './CTASection.css';
import logoImage from '../assets/atechsole-new-logo.png';


const CTASection = ({ onContactClick }) => {
  return (
    <section className="cta-section">
      <div className="cta-content">
        <h3 className="cta-subtitle">Grow Your Business with</h3>
        <h1 className="cta-title">ATECHSOLE</h1>
        <button className="cta-button" onClick={onContactClick}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 2L11 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Let's Start
        </button>

        <div className='cta-contact'>
          <h4>Reach Out to Us</h4>
          <div className='cta-items-row'>
            <div className='cta-contact-item'>
              <img src='https://cdn-icons-png.flaticon.com/128/9764/9764472.png' alt='timing' />
              <p>Mon-Fri: 9AM-6PM</p>
            </div>
            <div className='cta-contact-item'>
              <img src='https://cdn-icons-png.flaticon.com/128/18004/18004562.png' alt='location' />
              <p>Johar Town Lahore</p>
            </div>
            <div className='cta-contact-item'>
              <img src='https://cdn-icons-png.flaticon.com/128/1959/1959251.png' alt='Phone' />
              <p>+92 325 3344552</p>
            </div>
            <div className='cta-contact-item'>
              <img src='https://cdn-icons-png.flaticon.com/128/18857/18857153.png' alt='Email' />
              <p>info@atechsole.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="cta-image-container">
        <img src={logoImage} alt="Robot Mascot" className="cta-logo" />
      </div>

      <div className="cta-footer">
        <div className="cta-footer-content">
          <p>© 2025 ATechSole. All rights reserved. <span className="separator">|</span> <a href="#">Privacy Policy</a> <span className="separator">|</span> <a href="#">Terms of Service</a></p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
