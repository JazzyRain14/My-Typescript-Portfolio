import { useState, useEffect } from "react";
import AlphabetFilter from "../../components/AlphabetFilter";

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
      <div className="flex flex-col-reverse">
        {loading && <p>Loading meals...</p>}
        {!loading && meals && meals.length === 0 && (
          <p>No meals found for "{selectedLetter.toUpperCase()}"</p>
        )}
        <AlphabetFilter onSelect={setSelectedLetter} />
      </div>
    </>
  )
}
