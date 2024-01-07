"use client";
import { useEffect, useState } from "react";
export function useRecipe() {
  const [recipe, setRecipe] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    try {
      const GetRecipe = async () => {
        setIsLoading(true);
        const res = await fetch(
          `https://api.spoonacular.com/recipes/716429/information?apiKey=e1f99ae4e9524cae8fc48e136df03553`
        );
        if (!res.ok) throw new Error("Response was not ok from api");
        const data = await res.json();
        setRecipe(() => data.extendedIngredients);
        setIsLoading(false);
      };
      GetRecipe();
    } catch (error: any) {
      console.log(`${error.message}`);
    }
  }, []);
  return { recipe, isLoading };
}
