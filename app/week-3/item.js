export default function Item({ name, quantity, category }) {
  return (
    <li className="hover:bg-sky-700 bg-white rounded-lg px-6 py-8">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="font-bold text-lg text-black">{name}</h3>
          <p className="text-black">Category: {category}</p>
        </div>
        <span className="text-xl font-medium dark:text-white bg-blue-500 text-blue-800 px-3 py-1 rounded-full font-semibold">
          Qty: {quantity}
        </span>
      </div>
    </li>
  );
}