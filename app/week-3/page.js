import ItemList from './item-list';

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-black mb-8">
          Shopping List
        </h1>
        <div>
          <ItemList />
        </div>
      </div>
    </main>
  );
}