"use client";

import { useState } from "react";
import Item from "./item";

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) =>
    sortBy === "name"
      ? a.name.localeCompare(b.name)
      : a.category.localeCompare(b.category)
  );

  return (
    <div className="p-6 bg-white/60 backdrop-blur-md border border-gray-200 rounded-2xl shadow-lg transition-all hover:shadow-2xl w-full">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        Shopping List
      </h2>

      <div className="mb-4 flex gap-2">
        <button
          onClick={() => setSortBy("name")}
          className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
            sortBy === "name"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-black"
          }`}
        >
          Sort by Name
        </button>

        <button
          onClick={() => setSortBy("category")}
          className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
            sortBy === "category"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-black"
          }`}
        >
          Sort by Category
        </button>
      </div>

      <ul className="divide-y divide-gray-200">
        {sortedItems.map((item, index) => (
          <Item key={index} {...item} onSelect={onItemSelect} />
        ))}
      </ul>
    </div>
  );
}
