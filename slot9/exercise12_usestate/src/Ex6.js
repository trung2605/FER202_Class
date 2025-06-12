
import React, { useState, useMemo } from 'react';

const allItems = [
  'Apple',
  'Banana',
  'Orange',
  'Grape',
  'Pineapple',
  'Strawberry',
  'Blueberry',
  'Mango',
  'Kiwi',
  'Peach'
];

function Ex6() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredItems = useMemo(() => {
    return allItems.filter(item =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', margin: '10px' }}>
      <h2>Bài 6: Search Filter (Ex6.js)</h2>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search for items..."
        style={{ padding: '8px', width: '250px', marginBottom: '10px' }}
      />
      <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
        {filteredItems.length === 0 ? (
          <p>No items found.</p>
        ) : (
          filteredItems.map((item, index) => (
            <li key={index} style={{ padding: '5px 0' }}>{item}</li>
          ))
        )}
      </ul>
    </div>
  );
}

export default Ex6;