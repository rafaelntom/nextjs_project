import Link from "next/link";
import React from "react";

const MealsPage: React.FC = () => {
  return (
    <>
      <header className="flex gap-12 my-12 mx-auto w-[90%] max-w-6xl">
        <div className="w-[40rem] h-[25rem] bg-gray-700"></div>
        <div>
          <div className="text-[#ddd6cb] text-xl">
            <h1 className="text-3xl font-bold font-montserrat tracking-widest uppercase bg-gradient-to-r from-[#f9572a] to-[#ffc905] bg-clip-text text-transparent">
              NextLevel Food for NextLevel Foodies
            </h1>
            <p>Taste & share food from all over the world.</p>
          </div>
          <div className="text-xl flex gap-4 mt-4">
            <Link
              href="/community"
              className="text-[#ff9b05] font-normal hover:text-[#f9b241]"
            >
              Join the Community
            </Link>
            <Link
              href="/meals"
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#f9572a] to-[#ff9b05] text-white font-bold text-lg hover:from-[#fd4715] hover:to-[#f9b241] shadow-md"
            >
              Explore Meals
            </Link>
          </div>
        </div>
      </header>
      <main>
        <section className="flex flex-col text-[#ddd6cb] text-xl max-w-2xl w-[90%] my-8 mx-auto text-center">
          <h2 className="text-2xl font-bold">How it works</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite recipes with the
            world. It&apos;s a place to discover new dishes, and to connect with other food
            lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect with other food
            lovers.
          </p>
        </section>

        <section className="flex flex-col text-[#ddd6cb] text-xl max-w-2xl w-[90%] my-8 mx-auto text-center">
          <h2 className="text-2xl font-bold">Why NextLevel Food?</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite recipes with the
            world. It&apos;s a place to discover new dishes, and to connect with other food
            lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect with other food
            lovers.
          </p>
        </section>
      </main>
    </>
  );
};

export default MealsPage;
