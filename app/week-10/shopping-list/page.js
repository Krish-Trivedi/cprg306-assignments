"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUserAuth } from "../../contexts/AuthContext";

import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";

import { getItems, addItem } from "../_services/shopping-list-service";

export default function Page() {
  const { user } = useUserAuth();
  const router = useRouter();

  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");

  useEffect(() => {
    if (user === null) {
      router.push("/week-10");
    }
  }, [user]);

  useEffect(() => {
    if (!user) return;

    async function loadItems() {
      const firestoreItems = await getItems(user.uid);
      setItems(firestoreItems);
    }

    loadItems();
  }, [user]);

  async function handleAddItem(newItem) {
    if (!user) return;

    const id = await addItem(user.uid, newItem);

    const itemWithId = {
      id,
      ...newItem,
    };

    setItems([...items, itemWithId]);
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

  if (!user) {
    return <p className="p-6 text-center">Redirecting to login...</p>;
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
