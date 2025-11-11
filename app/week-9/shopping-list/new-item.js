"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const increment = () => {
    if (quantity < 20) setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newItem = {
      id: Math.random().toString(36).substring(2, 9),
      name: name.trim(),
      quantity: quantity,
      category: category,
    };

    onAddItem(newItem);
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white shadow-md rounded-xl p-6 space-y-4"
    >
      <h2 className="text-xl font-bold text-black">Add a New Item</h2>

      <div>
        <label className="font-medium text-black mb-1">Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="e.g, milk, 4L 🥛"
          className="w-full border border-gray-300 text-black rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block font-medium text-black mb-1">Quantity:</label>
        <div className="flex items-center space-x-3">
          <button
            type="button"
            onClick={decrement}
            className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600"
          >
            -
          </button>
          <span className="text-lg text-black font-semibold">{quantity}</span>
          <button
            type="button"
            onClick={increment}
            className="px-3 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600"
          >
            +
          </button>
        </div>
      </div>

      <div>
        <label className="block font-medium text-gray-700 mb-1">
          Category:
        </label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full border border-gray-300 text-black rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen foods">Frozen Foods</option>
          <option value="canned goods">Canned Goods</option>
          <option value="dry goods">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 font-semibold"
      >
        Add item
      </button>
    </form>
  );
}
