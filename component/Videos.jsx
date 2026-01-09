import React from 'react';
import './Gallery.css';
import Footer from './Footer';

// Importing videos from assets
import video1 from '../assets/Event-videos/video (1).mp4';
import video2 from '../assets/Event-videos/video (2).mp4';
import video3 from '../assets/Event-videos/video (3).mp4';
import video4 from '../assets/Event-videos/video (4).mp4';
import video5 from '../assets/Event-videos/video (5).mp4';
import video6 from '../assets/Event-videos/video (6).mp4';
import video7 from '../assets/Event-videos/video (7).mp4';
import video8 from '../assets/Event-videos/video (8).mp4';
import video9 from '../assets/Event-videos/video (9).mp4';

const videos = [
  { id: 1, src: video1,  },
  { id: 2, src: video2, },
  { id: 3, src: video3,  },
  { id: 4, src: video4,  },
  { id: 5, src: video5,  },
  { id: 6, src: video6, },
  { id: 7, src: video7, },
  { id: 8, src: video8, },
  { id: 9, src: video9, },
];

const Videos = () => {
  return (
    <>
      <div className="gallery-container">
        <div className="gallery-header">
          <h1>Video Gallery</h1>
          <p>Watch our latest stories and highlights</p>
        </div>
        <div className="gallery-grid video-grid">
          {videos.map((video) => (
            <div key={video.id} className="gallery-item video-item">
              <video controls poster="https://images.unsplash.com/photo-1536240478700-b869070f9279?w=600&auto=format&fit=crop&q=60">
                <source src={video.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
             
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Videos;
