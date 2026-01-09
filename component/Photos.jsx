import React from 'react';
import './Gallery.css';
import Footer from './Footer';


import img1 from '../assets/Event-images/image (1).jpeg';
import img2 from '../assets/Event-images/image (2).jpeg';
import img3 from '../assets/Event-images/image (3).jpeg';
import img4 from '../assets/Event-images/image (4).jpeg';
import img5 from '../assets/Event-images/image (5).jpeg';
import img6 from '../assets/Event-images/image (6).jpeg';
import img7 from '../assets/Event-images/image (7).jpeg';
import img8 from '../assets/Event-images/image (13).jpeg';
import img9 from '../assets/Event-images/image (9).jpeg';
import img10 from '../assets/Event-images/image (10).jpeg';
import img11 from '../assets/Event-images/image (11).jpeg';
import img12 from '../assets/Event-images/image (12).jpeg';

const photos = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12];

// Videos imports
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
  { id: 1, src: video1 },
  { id: 2, src: video2 },
  { id: 3, src: video3 },
  { id: 4, src: video4 },
  { id: 5, src: video5 },
  { id: 6, src: video6 },
  { id: 7, src: video7 },
  { id: 8, src: video8 },
  { id: 9, src: video9 }
];

const Photos = () => {
  return (
    <>
      <div className="gallery-container">
        <div className="gallery-header">
          <h1>Photo Gallery</h1>
          <p>Capturing moments and memories</p>
        </div>
        <div className="gallery-grid">
          {photos.map((img, index) => (
            <div key={index} className="gallery-item">
              <img src={img} alt={`Gallery ${index + 1}`} loading="lazy" />
              <div className="gallery-overlay">
                <span>View Image</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
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

export default Photos;
