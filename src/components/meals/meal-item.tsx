import Link from "next/link";
import Image from "next/image";
import React from "react";
import { MealItemProps } from "@/types/meals/meals-types";

const MealItem: React.FC<MealItemProps> = ({ title, slug, image, summary, creator }) => {
  return (
    <article className="flex flex-col justify-between h-full rounded-md shadow-md overflow-hidden transition-all duration-300 text-[#ddd6cb] bg-gradient-to-r from-[#2c1e19] to-[#25200f]">
      <header>
        <div className="relative h-60 w-full">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>

        <div className="p-2 text-center">
          <h2 className="text-2xl font-montserrat font-bold">{title}</h2>
          <p className="text-sm text-[#cfa69b] italic">by {creator}</p>
        </div>
      </header>
      <div className="flex flex-col justify-between h-full p-4">
        <p className="text-lg">{summary}</p>
        <div className="text-right mt-4">
          <Link
            href={`/meals/${slug}`}
            className="inline-block mt-4 px-4 py-2 rounded-lg bg-gradient-to-r from-[#f9572a] to-[#ff9b05] text-white font-bold text-lg hover:from-[#fd4715] hover:to-[#f9b241] shadow-md"
          >
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
};

export default MealItem;
