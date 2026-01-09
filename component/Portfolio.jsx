import React from 'react';
import './Portfolio.css';
import Footer from './Footer';

const projects = [
  {
    id: '01',
    title: 'E-COMMERCE APP',
    category: 'Global Retail Solution',
    description: 'Developed a scalable e-commerce platform handling 1M+ transactions monthly with integrated AI recommendations.',
    image: 'https://plus.unsplash.com/premium_vector-1682311028452-0220af078701?w=352&dpr=2&h=367&auto=format&fit=crop&q=60&ixlib=rb-4.1.0'
  },
  {
    id: '02',
    title: 'HealthCare System ',
    category: 'Medical Records Management',
    description: 'Built a secure HIPAA-compliant system for managing patient records and appointments for 50+ clinics.',
    image: 'https://plus.unsplash.com/premium_photo-1670459707416-26dad95d99af?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fG1lZGljYWwlMjByZWNvcmQlMjBtYW5hZ2VtZW50JTIwYXBwfGVufDB8fDB8fHww'
  },
  {
    id: '03',
    title: 'FinTech App',
    category: 'Mobile Banking Solution',
    description: 'Created a secure mobile banking application with biometric authentication and real-time transactions.',
    image: 'https://plus.unsplash.com/premium_photo-1739995619666-7b47645fb2e2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9iaWxlJTIwYmFua2luZyUyMGFwcHxlbnwwfHwwfHx8MA%3D%3D'
  },
  {
    id: '04',
    title: 'AI Analytics',
    category: ' Business Intelligence Platform',
    description: 'Implemented AI-powered analytics dashboard providing real-time insights and predictive forecasting.',
    image: 'https://images.unsplash.com/photo-1764601842167-ba701eed47f5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fEFJJTIwYW5hbHl0aWNzfGVufDB8fDB8fHww'
  },
  {
    id: '05',
    title: 'Logistics System',
    category: 'Supply Chain Management',
    description: 'Developed end-to-end logistics platform with real-time tracking and automated dispatch system.',
    image: 'https://media.istockphoto.com/id/1499972630/photo/global-logistics-network-3d-illustration-logistic-map-delivery-global-cargo-transportation.webp?a=1&b=1&s=612x612&w=0&k=20&c=BzyqbsGNxBQuAIsOwg4CG4wGpxG_9eI9WgetId4qXp4='
  },
  {
    id: '06',
    title: 'EdTech Platform',
    category: 'Online Learning System',
    description: 'Built comprehensive LMS supporting 100K+ students with live streaming and interactive assessments.',
    image: 'https://plus.unsplash.com/premium_vector-1698192041909-3a5a4a6ee089?w=352&dpr=2&h=367&auto=format&fit=crop&q=60&ixlib=rb-4.1.0'
  },
  {
    id: '07',
    title: 'Smart City IoT',
    category: 'Urban Sensor Network',
    description: 'Deployed city-wide IoT sensors with real-time dashboards for traffic, air quality, and utilities monitoring.',
    image: 'https://plus.unsplash.com/premium_photo-1687205277517-5fa36b31b4f1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U21hcnQlMjBDaXR5JTIwSW9UfGVufDB8fDB8fHww'
  },
  {
    id: '08',
    title: 'SaaS Analytics',
    category: 'Multi-tenant Platform',
    description: 'Delivered a secure multi-tenant analytics SaaS with role-based access and custom reporting.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0'
  },
  {
    id: '09',
    title: 'Travel Booking Engine',
    category: 'High-Scale Reservations',
    description: 'Engineered a resilient booking system handling peak loads with dynamic pricing and inventory sync.',
    image: 'https://plus.unsplash.com/premium_photo-1681487924146-c091598b7e8a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8VHJhdmVsJTIwQm9va2luZyUyMEVuZ2luZXxlbnwwfHwwfHx8MA%3D%3D'
  },
  {
    id: '10',
    title: 'AgriTech Monitoring',
    category: 'Precision Farming',
    description: 'Built satellite + sensor-based crop health monitoring with AI recommendations for yield improvement.',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0'
  }
];

const Portfolio = () => {
  return (
    <>
    <div className="portfolio-container">
      <div className='portfolio-intro'>
        <h1>Portfolio</h1>
        <p>Showcasing our successful projects and client achievements</p>
      </div>
      <div className="portfolio-header">
        <h1>Our Recent Projects</h1>
        <p>Explore the successful projects we've delivered</p>
      </div>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div 
            key={project.id} 
            className="portfolio-card-wrapper" 
            style={{ animationDelay: `${0.3 + index * 0.15}s` }}
          >
            <div className="portfolio-card">
              <div className="portfolio-card-top">
                <img src={project.image} alt={project.title} />
                <div className="portfolio-overlay">
                  <button className="view-btn">View Details</button>
                </div>
              </div>
              <div className="portfolio-card-bottom">
                <h3>{project.title}</h3>
                <h4 className="cyan-text">{project.category}</h4>
                <p>{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Portfolio;
