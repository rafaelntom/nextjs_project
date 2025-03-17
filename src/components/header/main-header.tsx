import Image from "next/image";
import Link from "next/link";
import React from "react";
import logoImage from "@/assets/logo.png";
import HeaderLink from "./header-link";

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
            <li className="group">
              <HeaderLink href="/meals">Browse Meals</HeaderLink>
            </li>
          </li>

          <li className="group">
            <HeaderLink href="/community">Foodies Community</HeaderLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
