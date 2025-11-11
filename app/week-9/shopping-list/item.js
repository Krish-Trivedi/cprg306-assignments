"use client";

export default function Item({ name, quantity, category, onSelect }) {
  return (
    <li
      className="p-3 flex justify-between items-center hover:bg-blue-50 rounded-lg group"
      onClick={() => onSelect(name)}
    >
      <div>
        <p className="text-gray-800 font-medium hover:text-blue-600">{name}</p>
        <p className="text-lg text-black">
          {quantity} × {category}
        </p>
      </div>
      <span className="text-black hover:text-blue-500 text-lg">➜</span>
    </li>
  );
}
