import React, { useState } from 'react';
import './Photo.css'; 

// Sample photo data (replace with your own)
const photos = [
  { id: 1, src: 'https://images.pexels.com/photos/1475248/pexels-photo-1475248.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', caption: 'Beautiful Sunset' },
  { id: 2, src: 'https://images.pexels.com/photos/913215/pexels-photo-913215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', caption: 'Mountain Landscape' },
  { id: 3, src: 'https://images.pexels.com/photos/219692/pexels-photo-219692.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', caption: 'City Lights' },
  // Add more photos here
];

function PhotoGallery() {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const goToPreviousPhoto = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? photos.length - 1 : prevIndex - 1));
    };
  
    const goToNextPhoto = () => {
      setCurrentIndex((prevIndex) => (prevIndex === photos.length - 1 ? 0 : prevIndex + 1));
    };

  return (
   <>
   <div className="photo-gallery">
      <div className="photo-card">
        <img src={photos[currentIndex].src} alt={photos[currentIndex].caption} />
        <div className="caption">{photos[currentIndex].caption}</div>
      </div>
      <div className="photo-buttons">
        <button onClick={goToPreviousPhoto}>Previous</button>
        <button onClick={goToNextPhoto}>Next</button>
      </div>
    </div>
   </>
  );
};

export default PhotoGallery;
