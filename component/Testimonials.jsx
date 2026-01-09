import React, { useState } from 'react';
import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    name: "John Davidson",
    role: "CEO, TechCorp",
    image: "https://cdn-icons-png.flaticon.com/128/14663/14663189.png",
    review: "ATechSole transformed our business with their innovative web development solutions. Their team's expertise and dedication exceeded our expectations."
  },
  {
    id: 2,
    name: "Robert Park",
    role: "Director, Global Retail Inc",
    image: "https://cdn-icons-png.flaticon.com/128/14663/14663195.png",
    review: "Their AI solutions have revolutionized our customer service. We've seen a 40% increase in efficiency since implementation."
  },
  {
    id: 3,
    name: "Sarah Mitchell",
    role: "CTO, Finance Plus",
    image: "https://cdn-icons-png.flaticon.com/128/417/417776.png",
    review: "The cybersecurity implementation by ATechSole has been outstanding. We now have peace of mind knowing our data is fully protected."
  },
  {
    id: 4,
    name: "Emily Davis",
    role: "Founder, StartUpHub",
    image: "https://cdn-icons-png.flaticon.com/128/2342/2342011.png",
    review: "Their mobile app development team is fantastic. They brought our vision to life with a user-friendly and beautiful app."
  },
  {
    id: 5,
    name: "Michael Wilson",
    role: "Operations Manager, LogisticsPro",
    image: "https://cdn-icons-png.flaticon.com/128/4140/4140061.png",
    review: "Reliable, efficient, and cost-effective. ATechSole is our go-to partner for all cloud infrastructure needs."
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getCardStyle = (index) => {
    const diff = (index - activeIndex + testimonials.length) % testimonials.length;
    
    if (diff === 0) return 'center';
    if (diff === 1) return 'right';
    if (diff === testimonials.length - 1) return 'left';
    return 'hidden';
  };

  return (
    <div className="testimonials-section">
      <h2 className="testimonials-title">CLIENT TESTIMONIALS</h2>
      <p className="testimonials-subtitle">What our clients say about us</p>
      
      <div className="testimonials-container">
        <button className="nav-btn prev" onClick={prevSlide}>&#10094;</button>
        
        <div className="cards-wrapper">
          {testimonials.map((item, index) => (
            <div 
              key={item.id} 
              className={`testimonial-card ${getCardStyle(index)}`}
            >
              <div className="card-content">
                <img src={item.image} alt={item.name} className="client-img" />
                <h3 className="client-name">{item.name}</h3>
                <p className="client-role">{item.role}</p>
                <p className="client-review">"{item.review}"</p>
                <div className="rating">⭐⭐⭐⭐⭐</div>
              </div>
            </div>
          ))}
        </div>

        <button className="nav-btn next" onClick={nextSlide}>&#10095;</button>
      </div>

      <div className="dots-container">
        {testimonials.map((_, index) => (
          <span 
            key={index} 
            className={`dot ${index === activeIndex ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
