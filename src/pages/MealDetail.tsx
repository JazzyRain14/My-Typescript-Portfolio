import { useEffect, useState } from "react"
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate, useParams } from "react-router-dom"

interface IngredientItem {
    ingredient: string;
    measure: string;
}

interface Meal {
    idMeal: string;
    strMeal: string;
    strCategory: string;
    strArea: string;
    strInstructions: string;
    strMealThumb: string;
    [key: string]: any;
}
export default function MealDetail() {
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [meal, setMeal] = useState<Meal | null>(null);
    const [ingredients, setIngredients] = useState<IngredientItem[]>([]);

    const baseUrl = import.meta.env.VITE_MEALDB_API

    useEffect(() => {
        const fetchMeal = async () => {
            try {
                const res = await fetch(`${baseUrl}/lookup.php?i=${id}`);
                const data = await res.json();
                console.log(data);
                const mealData = data.meals?.[0] || null
                setMeal(mealData);

                const extractedIngredients: IngredientItem[] = [];
                for (let i = 1; i <= 20; i++) {
                    const ingredient = mealData[`strIngredient${i}`]
                    const measure = mealData[`strMeasure${i}`];

                    if (ingredient && ingredient.trim() !== "") {
                        extractedIngredients.push({ ingredient, measure });
                    }
                }
                setIngredients(extractedIngredients);

            } catch (err) {
                console.error("Error Loading meal details", err);
            }
        }
        fetchMeal();
    }, [id]);

    if (!meal) return <span className="loading loading-dots loading-xl m-auto my-4"></span>

    return (
        <>
            {meal ? (
                <div className="card md:card-side relative bg-base-100 shadow-sm">
                    <figure>
                        <img
                            className=" max-h-full h-full"
                            src={meal.strMealThumb}
                            alt="Movie" />
                    </figure>
                    <button onClick={()=>navigate(-1)} className="btn bg-base-10 m-5 text absolute top-0 left-0"><FaArrowLeft /> Go Back</button>
                    <div className="card-body">
                        <h2 className="card-title">{meal.strMeal}</h2>
                        <p className="text-sm text-gray-600 mb-2">
                            {meal.strCategory} - {meal.strArea}
                        </p>
                        <div className="collapse max-w-[500px] collapse-arrow bg-base-100 border border-base-300">
                            <input type="checkbox" name="my-accordion-3" />
                            <div className="collapse-title font-semibold">How to prepare</div>
                            <div className="collapse-content text-sm">{meal.strInstructions}</div>
                        </div>
                        <div>
                            <h1 className="text-lg font font-semibold my-2">Ingredients - 🧂</h1>
                            <ul className="list-disc list-inside">
                                {ingredients.map((item, index) => (
                                    <li key={index}>
                                        {item.ingredient} - {item.measure}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            ) : (<span className="loading loading-dots loading-xl m-auto my-4"></span>)}
        </>
    );
}
