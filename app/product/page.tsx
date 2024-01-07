"use client";
import { useRecipe } from "@/hooks/useRecipe";
import Image from "next/image";
import Link from "next/link";

export default function Product() {
  const { isLoading, recipe } = useRecipe();
  console.log(recipe);
  if (!isLoading && recipe) {
    return (
      <div className="flex">
        {recipe.map(function (el: {
          aisle: string;
          id: number | string;
          image: string;
          name: string;
        }) {
          return (
            <Link href={`/product/${el.id}`} key={el.id}>
              {el.aisle}
            </Link>
          );
        })}
      </div>
    );
  } else {
    return <h2>Loading...</h2>;
  }
}
