import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="flex gap-12 mx-auto my-12 w-[90%] max-w-[75rem]">
        <div className="w-[40rem] h-[25rem] bg-gray-700"></div>{" "}
        {/* Placeholder for slideshow */}
        <div>
          <div className="text-[#ddd6cb] text-xl">
            <h1 className="text-3xl font-bold uppercase tracking-wide bg-gradient-to-r from-[#f9572a] to-[#ffc905] bg-clip-text text-transparent">
              NextLevel Food for NextLevel Foodies
            </h1>
            <p>Taste & share food from all over the world.</p>
          </div>

          <div className="text-xl flex gap-4">
            <Link
              href="/community"
              className="inline-block mt-4 px-4 py-2 rounded-lg bg-gradient-to-r from-[#f9572a] to-[#ff9b05] text-white font-bold no-underline hover:from-[#fd4715] hover:to-[#f9b241]"
            >
              Join the Community
            </Link>
            <Link
              href="/meals"
              className="inline-block mt-4 px-4 py-2 rounded-lg bg-transparent font-normal text-[#ff9b05] no-underline hover:text-[#f9b241]"
            >
              Explore Meals
            </Link>
          </div>
        </div>
      </header>

      <main>
        <section className="flex flex-col text-[#ddd6cb] text-xl max-w-[50rem] w-[90%] mx-auto my-8 text-center">
          <h2 className="text-2xl font-bold">How it works</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite recipes with the
            world. It`&apos;`s a place to discover new dishes, and to connect with other food
            lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect with other food
            lovers.
          </p>
        </section>

        <section className="flex flex-col text-[#ddd6cb] text-xl max-w-[50rem] w-[90%] mx-auto my-8 text-center">
          <h2 className="text-2xl font-bold">Why NextLevel Food?</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite recipes with the
            world. It`&apos;`s a place to discover new dishes, and to connect with other food
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
}
