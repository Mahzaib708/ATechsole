import React from 'react'
import './HowItWorks.css'

const HowItWorks = () => {
  const steps = [
    {
      title: 'Expert Team',
      description: 'Skilled professionals with over 12 years of industry experience and proven track record.',
      icon: (
        <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1.5">
          <defs>
            <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#6D28D9" />
            </linearGradient>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" fill="url(#purpleGradient)" stroke="none" filter="url(#glow)"/>
          <circle cx="9" cy="7" r="4" fill="url(#purpleGradient)" stroke="none" filter="url(#glow)"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" fill="url(#purpleGradient)" stroke="none" opacity="0.7"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75" fill="url(#purpleGradient)" stroke="none" opacity="0.7"/>
        </svg>
      )
    },
    {
      title: 'Agile Development',
      description: 'Flexible methodologies ensuring timely delivery and continuous improvement',
      icon: (
        <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1.5">
          <defs>
            <linearGradient id="orangeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#D97706" />
            </linearGradient>
          </defs>
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="url(#orangeGradient)" stroke="none" filter="url(#glow)"/>
        </svg>
      )
    },
    {
      title: 'Client Centric',
      description: 'Tailored solutions designed to meet your unique business requirements.',
      icon: (
        <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1.5">
          <defs>
            <linearGradient id="pinkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#EC4899" />
              <stop offset="100%" stopColor="#DB2777" />
            </linearGradient>
          </defs>
          <circle cx="12" cy="12" r="10" fill="url(#pinkGradient)" stroke="none" opacity="0.2"/>
          <circle cx="12" cy="12" r="6" fill="url(#pinkGradient)" stroke="none" opacity="0.6"/>
          <circle cx="12" cy="12" r="2" fill="url(#pinkGradient)" stroke="none"/>
          <path d="M12 2v4M12 18v4M2 12h4M18 12h4" stroke="url(#pinkGradient)" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      title: 'Global Reach',
      description: 'Serving clients across multiple countries with 24/7 support.',
      icon: (
        <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1.5">
          <defs>
            <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#2563EB" />
            </linearGradient>
          </defs>
          <circle cx="12" cy="12" r="10" fill="url(#blueGradient)" stroke="none" />
          <path d="M2 12h20" stroke="white" strokeWidth="1" opacity="0.5"/>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="white" strokeWidth="1" opacity="0.5"/>
        </svg>
      )
    },
    {
      title: 'Full Support',
      description: 'Comprehensive maintenance and support throughout the project lifecycle.',
      icon: (
        <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1.5">
          <defs>
            <linearGradient id="cyanGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#22d3ee" />
              <stop offset="100%" stopColor="#0891b2" />
            </linearGradient>
          </defs>
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" fill="url(#cyanGradient)" stroke="none" filter="url(#glow)"/>
        </svg>
      )
    },
    {
      title: 'Cost Effective',
      description: 'Competitive pricing without compromising on quality or innovation.',
      icon: (
        <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1.5">
          <defs>
            <linearGradient id="greenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#34d399" />
              <stop offset="100%" stopColor="#059669" />
            </linearGradient>
          </defs>
          <path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="url(#greenGradient)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    }
  ]

  return (
    <section className="how-it-works">
      <div className="hiw-header">
        <h2 className="hiw-title">Why Choose ATechSole</h2>
        <p className="hiw-subtitle">
          Partner with us for unparalleled expertise and exceptional results.
        </p>
      </div>

      <div className="timeline-container">
        <div className="timeline-line"></div>
        
        {steps.map((step, index) => (
          <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
            <div className="timeline-title-wrapper">
              <h3 className="timeline-block-title">{step.title}</h3>
            </div>
            <div className="timeline-content">
              <div className="timeline-icon">
                {step.icon}
              </div>
              <div className="timeline-popup">
                <p>{step.description}</p>
              </div>
            </div>
            <div className="timeline-dot"></div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default HowItWorks
