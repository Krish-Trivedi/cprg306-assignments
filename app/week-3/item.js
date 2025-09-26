export default function Item({ name, quantity, category }) {
  return (
    <li className="hover:bg-sky-700 bg-white dark:bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="font-bold text-lg text-grey-800">{name}</h3>
          <p className="text-grey-600">Category: {category}</p>
        </div>
        <span className="text-xl font-medium dark:text-white bg-blue-500 text-blue-800 px-3 py-1 rounded-full font-semibold">
          Qty: {quantity}
        </span>
      </div>
    </li>
  );
}