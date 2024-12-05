// src/components/CardContainer.js
import React, { useState, useEffect } from 'react';
import Card from './Card';

const CardContainer = () => {
  const [items, setItems] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => setItems(data));
  }, []);

  const handleSwipeRight = (item) => {
    console.log('Swiped right:', item);
    setCurrentIndex(currentIndex + 1);
  };

  const handleSwipeLeft = (item) => {
    console.log('Swiped left:', item);
    setCurrentIndex(currentIndex + 1);
  };

  if (items.length === 0 || currentIndex >= items.length) {
    return <div>No more items</div>;
  }

  return (
    <Card
      item={items[currentIndex]}
      onSwipeRight={handleSwipeRight}
      onSwipeLeft={handleSwipeLeft}
    />
  );
};

export default CardContainer;