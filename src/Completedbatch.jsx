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
    category: '4;30/FS/13MAR',
    name: 'MERN STACK',
    description: 'nitin bela',
    dateRange: '2023-09-01 to 2023-11-01',
    time: '1:00 PM to 3:00 PM',
   
  },
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
    category: '4;30/FS/13MAR',
    name: 'MERN STACK',
    description: 'nitin bela',
    dateRange: '2023-09-01 to 2023-11-01',
    time: '1:00 PM to 3:00 PM',
   
  },
  // Add more card objects as needed
];

function Completedbatch() {
  return (
   

      <div className="columns-3 space-y-5 max-[640px]:inline  max-[900px]:inline">
        {cardData.map((card) => (
          <Card
            key={card.id}
            category={card.category}
            name={card.name}
            description={card.description}
            dateRange={card.dateRange}
            time={card.time}
          
          />
        ))}
      </div>
   
  );
}

export default Completedbatch;
