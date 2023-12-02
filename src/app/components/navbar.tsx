// Navbar.tsx
"use client";
import React, { useState } from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-11/12 flex justify-between items-center text-center">
      <div className=" relative md:hidden">
        <button
          onClick={toggleMenu}
          className="w-3/6"
        >
          <img src="/menu.svg" alt="" />
        </button>
        {isMenuOpen && (
          <div className="absolute right-0 mt-2 space-y-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg">
            <Link href={"/today"}>
              <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Today
              </p>
            </Link>
            <Link href={"/tomorrow"}>
              <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Tomorrow
              </p>
            </Link>
            <Link href={"/habits"}>
              <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Habits
              </p>
            </Link>
          </div>
        )}
      </div>
      <div className="w-1/6 hidden md:flex md:justify-between">
        <ul id="menu" className="flex space-x-4">
          <li>
            <Link href={"/today"}>Today</Link>
          </li>
          <li>
            <Link href={"/tomorrow"}>Tomorrow</Link>
          </li>
          <li>
            <Link href={"/habits"}>Habits</Link>
          </li>
        </ul>
      </div>
      <p className="w-1/6">Taskgame</p>
      <Link className="w-1/6 text-end" href={"/login"}>
        Login
      </Link>
    </nav>
  );
};

export default Navbar;
