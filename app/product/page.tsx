"use client";
import { useRecipe } from "@/hooks/useRecipe";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Product() {
  const { isLoading, recipe } = useRecipe();
  const pathname = usePathname();

  console.log(recipe);
  if (!isLoading && recipe) {
    return (
      <div className="flex">
        {recipe.map(function (el: {
          aisle: string;
          id: any;
          image: string;
          name: string;
          href: string;
        }) {
          const isActive = pathname.startsWith(el.href);
          console.log(isActive);
          return (
            <Link
              href={`/product/${el.id}`}
              key={el.id}
              style={
                isActive
                  ? { textDecoration: "none", backgroundColor: "red" }
                  : { textDecoration: "none" }
              }
            >
              {el.aisle}
            </Link>
          );
        })}
      </div>
    );
  }
}
