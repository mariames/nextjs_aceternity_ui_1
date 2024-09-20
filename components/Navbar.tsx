"use client";
import React, { useState } from "react";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-9 z-50 p-4 bg-white shadow-md rounded-lg mx-auto max-w-7xl mt-8">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a href="#">Kompyte</a>
        </div>

        {/* Desktop Menu Items */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium ml-3 mr-3">
          <li>
            <a href="#" className="hover:text-gray-900">
              Plans
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-900">
              Resources
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-900">
              Kompyte GPT
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-900">
              Login
            </a>
          </li>
        </ul>

        {/* Menu Toggle (Hamburger Icon) */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="focus:outline-none text-gray-700"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden mt-4 space-y-4 text-gray-700 font-medium">
          <li>
            <a href="#" className="block hover:text-gray-900">
              Plans
            </a>
          </li>
          <li>
            <a href="#" className="block hover:text-gray-900">
              Resources
            </a>
          </li>
          <li>
            <a href="#" className="block hover:text-gray-900">
              Kompyte GPT
            </a>
          </li>
          <li>
            <a href="#" className="block hover:text-gray-900">
              Login
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};
