"use client";

import { useState, useEffect } from "react";

async function fetchMealIdeas(ingredient) {
  if (!ingredient) return [];
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    const data = await response.json();
    return data.meals || [];
  } catch (error) {
    console.error("Error fetching meal ideas:", error);
    return [];
  }
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  async function loadMealIdeas() {
    const mealIdeas = await fetchMealIdeas(ingredient);
    setMeals(mealIdeas);
  }

  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div className="p-4 bg-white/60 backdrop-blur-md border border-gray-200 rounded-2xl shadow-lg transition-all hover:shadow-2xl w-full">
      <h2 className="text-xl font-bold mb-2 text-black">
        Meal Ideas {ingredient ? `for "${ingredient}"` : ""}
      </h2>

      {!ingredient ? (
        <p>Select an item from the list to see meal ideas.</p>
      ) : meals.length === 0 ? (
        <p>No meal ideas found for {ingredient}.</p>
      ) : (
        <ul className="grid grid-cols-2 gap-3">
          {meals.map((meal) => (
            <li
              key={meal.idMeal}
              className="flex flex-col items-center border rounded-lg p-2"
            >
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="w-24 h-24 rounded-md object-cover"
              />
              <p className="text-center text-sm font-medium mt-1">
                {meal.strMeal}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
