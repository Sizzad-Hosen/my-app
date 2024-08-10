"use client";

import { useEffect, useState } from "react";

const Meals = () => {
  const [search, setSearch] = useState('f');
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState('');

  const load = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_MEAL_API_BASE_URL}/search.php?f=${search}`);

      const data = await res.json();
      if (data.meals) {
        setMeals(data.meals);
        setError('');
      } else {
        setMeals([]);
        setError('No meals found');
      }
    } catch (error) {
      console.error("Error fetching meals:", error);
      setError(error.message);
    }
  };

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = () => {
    load();
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <div>
      <input 
        onChange={handleInputChange} 
        className="border-transparent outline-none" 
        type="text" 
        placeholder="Meal Search" 
        value={search}
      />
      <button 
        onClick={handleSearch} 
        className="border-t-cyan-500 bg-red-600 text-white p-2 ml-2"
      >
        Search
      </button>
      <div>
        {meals.length > 0 ? (
          meals.map((meal) => (
            <div key={meal.idMeal} className="border p-2 mb-2">
              <img src={meal?.strMealThumb} alt={meal?.strMeal} className="w-1/2 h-auto"/>
              <h2 className="text-2xl">{meal?.strMeal}</h2>
              <h2 className="text-lg">{meal?.strCategory}</h2>
            </div>
          ))
        ) : (
          <p>{error}</p>
        )}
      </div>
    </div>
  );
};

export default Meals;
