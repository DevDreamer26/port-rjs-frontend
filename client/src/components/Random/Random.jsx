import React, { useState, useEffect } from 'react';
import './Random.css';

const Random = () => {
  const [randomCoolThing, setRandomCoolThing] = useState('');

  const fetchRandomCoolThing = async () => {
    try {
      const response = await fetch('https://backend-portfolio-637j.onrender.com/api/randomCoolThing');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setRandomCoolThing(data.coolThing);
    } catch (error) {
      console.error('Error fetching random cool thing:', error);
    }
  };

  useEffect(() => {
    fetchRandomCoolThing();
  }, []); 

  return (
    <div className="random-container">
      <h1 className="random-title">Random world</h1>
      <button className="random-button" onClick={fetchRandomCoolThing}>
        Click me
      </button>
      {randomCoolThing && (
        <div className="random-cool-thing">
          <p style={{ fontSize: '30px' }}>{randomCoolThing}</p>
        </div>
      )}
    </div>
  );
};

export default Random;
