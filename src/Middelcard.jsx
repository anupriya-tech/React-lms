import React, { useState } from 'react';
import Upcoming from './Upcoming'; 
import Completedbatch from './Completedbatch'; 
import CardData from './CardData';

function Middelcard() {
  const [component, setComponent] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  console.log("Current component:", component); // Debugging log

  function compoLoader(a) {
    setComponent(a);
  }

  // This is a placeholder function to simulate fetching data based on the component
  const getDataForComponent = () => {
    switch (component) {
      case 1:
        return <CardData searchQuery={searchQuery} />;
      case 2:
        return <Upcoming searchQuery={searchQuery} />;
      case 3:
        return <Completedbatch searchQuery={searchQuery} />;
      default:
        return null;
    }
  };

  return (
    <div className="mt-10 ms-60 bg-#f1f0f0">
      {/* Search Input */}
      <div className="relative mb-6 pt-4">
        <input
          className="border-gray-600 box-content h-2 w-60 p-4 rounded-full pl-10"
          type="text"
          placeholder="Search here"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <i className="fa-solid fa-magnifying-glass absolute top-8 left-3 transform -translate-y-1/2"></i>
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mb-10">
        <button
          onClick={() => compoLoader(1)}
          className="bg-transparent hover:bg-blue-950 text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded"
        >
          Current
        </button>
        <button
          onClick={() => compoLoader(2)}
          className="bg-transparent hover:bg-blue-950 text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded"
        >
          Upcoming
        </button>
        <button
          onClick={() => compoLoader(3)}
          className="bg-transparent hover:bg-blue-950 text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded"
        >
          Completed
        </button>
      </div>

      {/* Conditional Rendering of Components */}
      <div>
        {getDataForComponent()}
        
      </div>
      
    </div>
  );
}

export default Middelcard;
