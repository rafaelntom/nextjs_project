"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface HeaderLinkProps {
  href: string;
  children: string;
}

const HeaderLink: React.FC<HeaderLinkProps> = ({ href, children }) => {
  const path = usePathname();

  return (
    <Link
      href={href}
      className={`relative text-[#ddd6cb] font-bold px-4 py-2 rounded-md transition duration-300 hover:text-amber-400 ${
        path.startsWith(href) ? "text-amber-400" : ""
      }`}
    >
      {children}
      <span
        className={`absolute left-0 bottom-0 w-0 h-1 bg-amber-400 transition-all duration-300 group-hover:w-full ${
          path.startsWith(href) ? "w-full" : ""
        }`}
      ></span>
    </Link>
  );
};

export default HeaderLink;
