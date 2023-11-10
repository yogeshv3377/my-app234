import React, { useState } from 'react';
import "/.Chatgbt.css";

const data = [
  { id: 1, name: 'Item 1', ratings: 4, imageUrl: 'https://example.com/image1.jpg' },
  { id: 2, name: 'Item 2', ratings: 3, imageUrl: 'https://example.com/image2.jpg' },
  // Add more items as needed
];

const ItemList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredItems = data.filter(
    item => item.name.toLowerCase().includes(searchTerm.toLowerCase()) || item.id.toString() === searchTerm
  );

  return (
    <div className="item-list">
      <input
        type="text"
        placeholder="Search by Name or ID"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {filteredItems.map((item) => (
        <div key={item.id} className="item-card">
          <img src={item.imageUrl} alt={item.name} />
          <h3>{item.name}</h3>
          <p>Ratings: {item.ratings}</p>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
