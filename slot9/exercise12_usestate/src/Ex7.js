import React, { useState } from 'react';

function Ex7() {
  const [items, setItems] = useState([
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    'Item 5',
  ]);

  const [draggingItemIndex, setDraggingItemIndex] = useState(null);

  const handleDragStart = (e, index) => {
    setDraggingItemIndex(index);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, dropIndex) => {
    e.preventDefault();
    if (draggingItemIndex === null || draggingItemIndex === dropIndex) {
      return;
    }

    const newItems = [...items];
    const [draggedItem] = newItems.splice(draggingItemIndex, 1);
    newItems.splice(dropIndex, 0, draggedItem);

    setItems(newItems);
    setDraggingItemIndex(null);
  };

  const handleDragEnd = () => {
    setDraggingItemIndex(null);
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', margin: '10px' }}>
      <h2>Bài 7: Drag and Drop List (Ex7.js)</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {items.map((item, index) => (
          <li
            key={item}
            draggable
            onDragStart={(e) => handleDragStart(e, index)}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, index)}
            onDragEnd={handleDragEnd}
            style={{
              padding: '10px',
              margin: '5px 0',
              border: '1px solid #ddd',
              backgroundColor: draggingItemIndex === index ? '#f0f0f0' : 'white',
              cursor: 'grab',
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Ex7;