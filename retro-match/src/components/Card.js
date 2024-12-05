// src/components/Card.js
import React from 'react';

const Card = ({ item, onSwipeRight, onSwipeLeft }) => {
  return (
    <div className="card">
      <img src={item.image} alt={item.title} />
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <p>{item.price}</p>
      <button onClick={() => onSwipeRight(item)}>Swipe Right</button>
      <button onClick={() => onSwipeLeft(item)}>Swipe Left</button>
    </div>
  );
};

export default Card;