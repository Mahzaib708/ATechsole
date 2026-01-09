import React, { useState } from 'react';
import './Events.css';


import img1 from '../assets/Events/event-one.jpeg';
import img2 from '../assets/Events/event-two.jpeg';
import img3 from '../assets/Events/event-three.jpeg';
import img4 from '../assets/Events/event-four.jpeg';

const eventData = [
  { id: 1, title: 'Event One', image: img1 },
  { id: 2, title: 'Event Two', image: img2 },
  { id: 3, title: 'Event Three', image: img3 },
  { id: 4, title: 'Event Four', image: img4 },
];

const Events = () => {
  const [hoveredEvent, setHoveredEvent] = useState(null);

  return (
    <div className="events-container">
      {/* Background Image Layer */}
      <div className="event-bg-layer">
        {eventData.map((event) => (
          <img
            key={event.id}
            src={event.image}
            alt={event.title}
            className={`bg-image ${hoveredEvent === event.id ? 'visible' : ''}`}
          />
        ))}
       
      </div>

      <div className="events-list">
        {eventData.map((event) => (
          <div
            key={event.id}
            className={`event-item ${hoveredEvent === event.id ? 'active' : ''}`}
            onMouseEnter={() => setHoveredEvent(event.id)}
            onMouseLeave={() => setHoveredEvent(null)}
          >
            <h2>{event.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
