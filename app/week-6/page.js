import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="p-6 bg-black flex flex-col items-center">
      <h1 className="justify-content text-center text-2xl font-bold mb-4">
        Shopping List
      </h1>
      <ItemList />
    </main>
  );
}
