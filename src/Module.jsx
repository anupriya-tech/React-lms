import React, { useState } from 'react';
import ModulePopup from './ModulePopup'; // Adjust import path

function Module({ toggleModal1 }) {
  const [searchQuery, setSearchQuery] = useState("");

  const cardData = [
    {
      id: 1,
      category: 'Frontend/Nitin/23-sep',
      name: 'Core Python',
      duration: '45 Days',
      totalTopics: 29,
      fees: 11150,
    },
    {
      id: 2,
      category: 'Data Science',
      name: 'CCNA Networking',
      duration: '45 Days',
      totalTopics: 15,
      fees: 25000,
    },
    {
      id: 3,
      category: '4:30/FS/13MAR',
      name: 'Cyber Security',
      duration: '60 Days',
      totalTopics: 11,
      fees: 65000,
    },
    {
      id: 4,
      category: 'Data Science',
      name: 'Digital Markting',
      duration: '60 Days',
      totalTopics: 20,
      fees: 35000,
    },
    {
      id: 5,
      category: 'Web Development',
      name: 'Back end Development',
      duration: '90 Days',
      totalTopics: 40,
      fees: 45000,
    },
    {
      id: 6,
      category: 'Web Development',
      name: 'Front end Development',
      duration: '90 Days',
      totalTopics: 40,
      fees: 45000,
    },
  ];

  // Filter card data based on the search query
  const filteredCards = cardData.filter(card =>
    card.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="gap-4 grid-cols-4 mt-10 ms-60 mr-60 justify-top">
      <i className="fa-solid fa-magnifying-glass relative top-2 left-9 transform -translate-y-1/2"></i>
      <input
        className="border-gray-600 box-content h-2 w-60 p-4 rounded-full pl-10"
        type="text"
        placeholder="Search here"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      /><br /><br />
      
      <div className="grid grid-cols-2 gap-4 max-[640px]:grid-cols-1">
        {filteredCards.length > 0 ? (
          filteredCards.map(card => (
            <div key={card.id} className="box-border h-32 w-full p-4 border-2 rounded-lg shadow-[rgba(1,41,81)_0px_-6px_0px_0px]">
              <p className="text-blue-900 font-bold flex justify-between">
                {card.name}
                <ModulePopup toggleModal1={toggleModal1} />
              </p>
              <div className="flex gap-2">
                <div className="box-border h-10 w-20 p-1 text-xs border-2 rounded-lg border-solid border-b-green-700">Duration<br/>{card.duration}</div>
                <div className="box-border h-10 w-20 p-1 text-xs border-2 rounded-lg border-solid border-b-green-700">Total Topics<br/>{card.totalTopics}</div>
                <div className="box-border h-10 w-20 p-1 text-xs border-2 rounded-lg border-solid border-b-green-700">Fees<br/>{card.fees}</div>
              </div>
            </div>
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
}

export default Module;
