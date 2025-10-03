"use client";

import { useState } from "react";

export default function NewItem() {
  const [Count, setCount] = useState(1);

  const increment = () => {
    if (Count < 20) {
      setCount(Count + 1);
    }
  };

  const decrement = () => {
    if (Count > 1) {
      setCount(Count - 1);
    }
  };

  return (
    <div className="flex border border-gray-200 rounded p-4 space-y-20 bg-white">
      <h2 className="text-black font-bold">Select Quantity</h2>

      <div className="flex items-center space-x-4">
        <button
          onClick={decrement}
          disabled={Count === 1}
          className="px-4 py-2 rounded-lg font-bold bg-red-500 text-white hover:bg-red-600 disabled:bg-gray-300 disabled:text-gray-500"
          arial-label="decrease count"
        >
          -
        </button>

        <span className="text-black font-bold">{Count}</span>

        <button
          onClick={increment}
          disabled={Count === 20}
          className= "px-4 py-2 rounded-lg font-bold bg-green-500 text-white hover:bg-green-600 disabled:bg-gray-300 disabled:text-gray-500"
          aria-label="increase count"          
        >
          +
        </button>
      </div>
    </div>
  );
}
