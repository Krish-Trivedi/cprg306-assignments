export default function Item({ name, quantity, category }) {
  return (
    <li className="border-b py-2">
      <div className="font-medium">{name}</div>
      <div>Quantity: {quantity}</div>
      <div className="text-sm text-gray-500">Category: {category}</div>
    </li>
  );
}
