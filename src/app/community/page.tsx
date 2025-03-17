import Image from "next/image";
import React from "react";

import mealIcon from "@/assets/icons/meal.png";
import communityIcon from "@/assets/icons/community.png";
import eventsIcon from "@/assets/icons/events.png";

const CommunityPage = () => {
  return (
    <>
      <header className="flex flex-col items-center gap-12 my-12 mx-auto w-[90%] max-w-5xl text-[#ddd6cb] text-xl text-center">
        <h1 className="font-montserrat text-4xl font-bold">
          One shared passion:{" "}
          <span className="bg-gradient-to-r from-[#f9572a] to-[#ff8a05] bg-clip-text text-transparent">
            Food
          </span>
        </h1>
        <p className="text-lg">Join our community and share your favorite recipes!</p>
      </header>
      <main className="w-[90%] max-w-2xl mx-auto text-center">
        <h2 className="font-montserrat text-3xl mb-12 text-[#ddd6cb]">Community Perks</h2>
        <ul className="list-none my-12 p-0 flex flex-col gap-12">
          <li className="flex flex-col items-center gap-8">
            <Image
              src={mealIcon}
              alt="A delicious meal"
              className="w-32 h-32 object-contain"
            />
            <p className="font-montserrat text-2xl font-bold text-[#ddd6cb]">
              Share & discover recipes
            </p>
          </li>
          <li className="flex flex-col items-center gap-8">
            <Image
              src={communityIcon}
              alt="A crowd of people, cooking"
              className="w-32 h-32 object-contain"
            />
            <p className="font-montserrat text-2xl font-bold text-[#ddd6cb]">
              Find new friends & like-minded people
            </p>
          </li>
          <li className="flex flex-col items-center gap-8">
            <Image
              src={eventsIcon}
              alt="A crowd of people at a cooking event"
              className="w-32 h-32 object-contain"
            />
            <p className="font-montserrat text-2xl font-bold text-[#ddd6cb]">
              Participate in exclusive events
            </p>
          </li>
        </ul>
      </main>
    </>
  );
};

export default CommunityPage;
