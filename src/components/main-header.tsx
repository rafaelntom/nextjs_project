import Image from "next/image";
import Link from "next/link";
import React from "react";
import logoImage from "@/assets/logo.png";

const MainHeader = () => {
  return (
    <header className="flex justify-between items-center p-8 md:px-[10%]">
      <Link
        href="/"
        className="flex items-center gap-8 text-[#ddd6cb] font-bold uppercase tracking-wide text-xl font-[Montserrat]"
      >
        <Image
          src={logoImage.src}
          alt="Food plate with food on it"
          width={80}
          height={80}
          className="w-20 h-20 object-contain drop-shadow-lg"
        />
        NextLevel Food
      </Link>

      <nav>
        <ul className="flex gap-6 text-lg">
          <li>
            <Link
              href="/meals"
              className="text-[#ddd6cb] font-bold px-4 py-2 rounded-md transition duration-300 hover:bg-gradient-to-r from-[#ff8a05] to-[#f9b331] hover:bg-clip-text hover:text-transparent hover:shadow-[0_0_18px_rgba(248,190,42,0.8)]"
            >
              Browse Meals
            </Link>
          </li>
          <li>
            <Link
              href="/meals/share"
              className="text-[#ddd6cb] font-bold px-4 py-2 rounded-md transition duration-300 hover:bg-gradient-to-r from-[#ff8a05] to-[#f9b331] hover:bg-clip-text hover:text-transparent hover:shadow-[0_0_18px_rgba(248,190,42,0.8)]"
            >
              Share Meals
            </Link>
          </li>
          <li>
            <Link
              href="/community"
              className="text-[#ddd6cb] font-bold px-4 py-2 rounded-md transition duration-300 hover:bg-gradient-to-r from-[#ff8a05] to-[#f9b331] hover:bg-clip-text hover:text-transparent hover:shadow-[0_0_18px_rgba(248,190,42,0.8)]"
            >
              Community
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
