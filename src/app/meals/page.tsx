import { Suspense } from "react";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/libs/meals";
import Link from "next/link";
import Loading from "./loading";

async function Meals() {
  const meals = await getMeals();

  return <MealsGrid meals={meals} />;
}

export default function MealsPage() {
  return (
    <>
      <header className="flex flex-col items-center text-center gap-12 my-12 mx-auto w-[90%] max-w-[75rem] text-[#ddd6cb] text-xl">
        <h1 className="font-montserrat text-4xl font-bold">
          Delicious meals, created{" "}
          <span className="bg-gradient-to-r from-[#f9572a] to-[#ff8a05] bg-clip-text text-transparent">
            by you
          </span>
        </h1>
        <p>Choose your favorite recipe and cook it yourself. It is easy and fun!</p>
        <p className="mt-4">
          <Link
            href="/meals/share"
            className="inline-block px-4 py-2 rounded-lg bg-gradient-to-r from-[#f9572a] to-[#ff9b05] text-white font-bold hover:opacity-90"
          >
            Share Your Favorite Recipe
          </Link>
        </p>
      </header>
      <main className="w-full flex justify-center">
        <Suspense fallback={<Loading />}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
