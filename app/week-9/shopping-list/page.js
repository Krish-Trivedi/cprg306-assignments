"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUserAuth } from "../../contexts/AuthContext";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";

export default function Page() {
  const { user } = useUserAuth();
  const router = useRouter();
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  useEffect(() => {
    if (user === null) {
      router.push("/week-9");
    }
  }, [user]);

  if (!user) {
    return <p className="p-6 text-center">Redirecting to login...</p>;
  }

  function handleAddItem(newItem) {
    setItems([...items, newItem]);
  }

  function cleanItemName(name) {
    return name
      .split(",")[0]
      .replace(/[^\p{L}\p{N}\s]/gu, "")
      .trim()
      .toLowerCase();
  }

  function handleItemSelect(itemName) {
    const cleanName = cleanItemName(itemName);
    setSelectedItemName(cleanName);
  }

  return (
    <main className="p-6 flex flex-col md:flex-row gap-4">
      <div className="flex-1 flex flex-col gap-4">
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>
      <div className="flex-1">
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </main>
  );
}
