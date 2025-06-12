
import React, { useState } from 'react';

function Ex5() {
  const [selectedColor, setSelectedColor] = useState('white');

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', margin: '10px' }}>
      <h2>Bài 5: Color Switcher (Ex5.js)</h2>
      <label htmlFor="color-select" style={{ marginRight: '10px' }}>Choose a color:</label>
      <select
        id="color-select"
        value={selectedColor}
        onChange={handleColorChange}
        style={{ padding: '8px' }}
      >
        <option value="white">White</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="yellow">Yellow</option>
        <option value="purple">Purple</option>
      </select>

      <div
        style={{
          marginTop: '20px',
          width: '200px',
          height: '100px',
          backgroundColor: selectedColor,
          border: '1px solid #333',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: selectedColor === 'white' || selectedColor === 'yellow' ? 'black' : 'white',
          fontWeight: 'bold'
        }}
      >
        This div changes color!
      </div>
    </div>
  );
}

export default Ex5;