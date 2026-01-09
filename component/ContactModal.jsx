import React, { useState } from 'react';
import './ContactModal.css'

const ContactModal = ({ isOpen, onClose }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('')
    const res = await fetch('http://localhost:5000/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, phone, subject, message })
    })
    if (res.ok) {
      setStatus('Message sent successfully. We will respond soon.')
      setName(''); setEmail(''); setPhone(''); setSubject(''); setMessage('')
    } else {
      setStatus('Failed to send message.')
    }
  }

  return (
    <div className={`contact-modal-overlay ${isOpen ? 'open' : ''}`}>
    
      <div className="contact-modal-backdrop" onClick={onClose}></div>
      
      <div className="contact-modal-content">
        <button className="close-btn" onClick={onClose}>&times;</button>
        
        <div className="contact-container">
          <div className="contact-left">
            <h1>Send a <span className="highlight">message.</span></h1>
            <div className="contact-details">
              <p>Email: info@atechsole.com</p>
              <p>Phone: +92 325 3344552</p>
            </div>
          </div>
          
          <div className="contact-right">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Your name</label>
                  <input type="text" placeholder="Full name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="form-group">
                  <label>Email address</label>
                  <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label>(Optional)</label>
                  <input type="tel" placeholder="Phone number" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
                <div className="form-group">
                  <label>Subject</label>
                  <input type="text" placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
                </div>
              </div>
              
              <div className="form-group full-width">
                <label>Your message</label>
                <textarea placeholder="Tell us what you want to know?" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
              </div>
              
              <div className="form-footer">
                <label className="checkbox-label">
                  <input type="checkbox" />
                  <span>I am bound by the terms of the Service I accept Privacy Policy</span>
                </label>
                
                <button type="submit" className="submit-btn">Send message</button>
                {status && <div className="submit-status">{status}</div>}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
