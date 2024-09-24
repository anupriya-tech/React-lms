import React from 'react';
import CardData from './CardData';
import Middelcard from './Middelcard';
import Completedbatch from './Completedbatch';

function Card({ category, name, dateRange, time, description }) {
  return (
    <div>
    <div className="">
      <div className="box-border h-48 w-72 p-4 border-2 rounded-lg shadow-[rgba(1,41,81)_0px_-6px_0px_0px]">
        <p className="text-lg font-bold">{category}</p>
        <p className="text-md"> {name}</p>
        <p className="text-sm">{description}</p>
        <p className="text-sm">{dateRange}</p>
        <p className="text-sm mb-2 border-dashed border-b border-gray-400">{time}</p>
        <button
          type="button"
          className="mt-2 focus:outline-none text-white bg-blue-950 hover:bg-purple-800 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-xs px-2 py-1.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-500"
        >
          View Detail
        </button>
      </div>
    </div>
  </div>
  );
}

export default Card;
