import { useState, useEffect } from "react";
import AlphabetFilter from "../../components/AlphabetFilter";
import { Link } from "react-router-dom";

interface Meal {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
}

export default function TasteBook() {
  const [selectedLetter, setSelectedLetter] = useState<string>("");
  const [meals, setMeals] = useState<Meal[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const baseUrl = import.meta.env.VITE_MEALDB_API


  useEffect(() => {
    const fetchMeals = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `${baseUrl}/search.php?f=${selectedLetter}`
        )

        const data = await res.json();
        setMeals(data.meals || [])
      } catch (err) {
        console.error("Error fetching meals", err);
        setMeals([]);
      } finally {
        setLoading(false);
      }
    }
    fetchMeals();
  }, [selectedLetter])




  return (
    <>
      <div className="flex flex-col w-full">
        <AlphabetFilter onSelect={setSelectedLetter} />
        {loading && <span className="loading loading-dots loading-xl m-auto my-4"></span>}
        {!loading && meals && meals.length === 0 && (
          <p>No meals found for "{selectedLetter.toUpperCase()}"</p>
        )}
        {Array.isArray(meals) ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
            {meals.map((meal) => (
              <Link to={`/meal/${meal.idMeal}`} key={meal.idMeal}>
                <main className="card bg-base-100 w-96 shadow-md">
                  <figure>
                    <img
                      src={meal.strMealThumb}
                      alt={meal.strMeal} />
                  </figure>
                  <footer className="card-body">
                    <h2 className="card-title">{meal.strMeal}</h2>
                    <aside className="flex flex-col gap-2 justify-between">
                      <p className="text-start text-[18px] leading-[100%] text-slate-200/80">Food Area: {meal.strArea}</p>
                      <p className="text-start text-[18px] leading-[100%] text-slate-200/80">Food Category: {meal.strCategory}</p>
                    </aside>

                    <div className="card-actions justify-end">
                      <button className="btn btn-primary">View More</button>
                    </div>
                  </footer>
                </main>

              </Link>
            ))}
          </div>
        ) : (
          <p>no meals found. Please choose an alphabet</p>
        )
        }
      </div>
    </>
  )
}
