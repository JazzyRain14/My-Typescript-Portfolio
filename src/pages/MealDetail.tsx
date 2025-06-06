import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

interface Meal {
    idMeal: string;
    strMeal: string;
    strCategory: string;
    strArea: string;
    strInstructions: string;
    strMealThumb: string;
}
export default function MealDetail() {

    const { id } = useParams<{ id: string }>();
    const [meal, setMeal] = useState<Meal | null>(null);

    const baseUrl = import.meta.env.VITE_MEALDB_API

    useEffect(() => {
        const fetchMeal = async () => {
            try {
                const res = await fetch(`${baseUrl}/lookup.php?i=${id}`);
                const data = await res.json();
                console.log(data);

                setMeal(data.meals?.[0] || null);
            } catch (err) {
                console.error("Error Loading meal details", err);
            }
        }
        fetchMeal();
    }, [id]);

    if (!meal) return <p>Loading or meal not found...</p>

    return (
        <div className="card md:card-side  bg-base-100 shadow-sm">
            <figure>
                <img
                    className=""
                    src={meal.strMealThumb}
                    alt="Movie" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{meal.strMeal}</h2>
                <p className="text-sm text-gray-600 mb-2">
                    {meal.strCategory} - {meal.strArea}
                </p>
                <p className="max-w-[500px]">{meal.strInstructions}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Watch</button>
                </div>
            </div>
        </div>
    );
}
