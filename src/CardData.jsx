import React from 'react';
import Card from './Card'; // Ensure the Card component is imported

const cardData = [
  {
    id: 1,
    category: 'Frontend/Nitin/23-sep',
    name: 'MERN STACK',
    description: 'nitin bela',
    dateRange: '2023-08-01 to 2023-10-01',
    time: '10:00 AM to 12:00 PM',
  },
  {
    id: 2,
    category: 'Data Science',
    name: 'MERN STACK',
    description: 'nitin bela',
    dateRange: '2023-09-01 to 2023-11-01',
    time: '1:00 PM to 3:00 PM',
  },
  {
    id: 3,
    category: '4:30/FS/13MAR',
    name: 'MERN STACK',
    description: 'nitin bela',
    dateRange: '2023-09-01 to 2023-11-01',
    time: '1:00 PM to 3:00 PM',
  },
  // Add more card objects as needed
];

function DetailCard({ searchQuery }) {
  // Filter card data based on the search query
  const filteredCards = cardData.filter(card => 
    card.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    card.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    card.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex gap-4 max-[640px]:inline max-[900px]:inline">
      {filteredCards.length > 0 ? (
        filteredCards.map((card) => (
          <Card
            key={card.id}
            category={card.category}
            name={card.name}
            description={card.description}
            dateRange={card.dateRange}
            time={card.time}
          />
        ))
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
}

export default DetailCard;
