"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    setMounted(true);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  if (!mounted) {
    return null;
  }

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 dark:bg-black/90 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 via-blue-700 to-purple-800 dark:from-cyan-400 dark:via-blue-500 dark:to-purple-600 hover:from-purple-600 hover:via-pink-700 hover:to-red-800 dark:hover:from-purple-400 dark:hover:via-pink-500 dark:hover:to-red-500 transition-all duration-300"
            >
              V.E.R.A
            </Link>
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            <Link
              href="#our-team"
              className="text-gray-800 dark:text-gray-200 hover:text-cyan-600 dark:hover:text-cyan-400 transition duration-300 relative group"
            >
              <span className="relative z-10 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
                Our Team
              </span>
              <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-cyan-600 dark:bg-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
            <button
              onClick={toggleTheme}
              className="text-gray-800 dark:text-gray-200 hover:text-cyan-600 dark:hover:text-cyan-400 transition duration-300"
            >
              {resolvedTheme === "dark" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
            </button>
          </div>
          <div className="md:hidden">
            <button
              className="text-gray-800 dark:text-gray-200 focus:outline-none group"
              onClick={toggleMenu}
            >
              <div className="relative w-6 h-6">
                <span
                  className={`absolute inset-0 transform transition-transform duration-300 ${
                    isMenuOpen ? "rotate-180" : ""
                  }`}
                >
                  <svg
                    className="w-full h-full"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="16" />
                    <line x1="8" y1="12" x2="16" y2="12" />
                  </svg>
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/90 dark:bg-black/90 backdrop-blur-md">
          <Link
            href="#our-team"
            className="text-gray-800 dark:text-gray-200 block px-3 py-2 rounded-md text-base font-medium hover:text-cyan-600 dark:hover:text-cyan-400 transition duration-300"
          >
            Our Teams
          </Link>
          <button
            onClick={toggleTheme}
            className="text-gray-800 dark:text-gray-200 block w-full text-left px-3 py-2 rounded-md text-base font-medium hover:text-cyan-600 dark:hover:text-cyan-400 transition duration-300"
          >
            {resolvedTheme === "dark"
              ? "Switch to Light Mode"
              : "Switch to Dark Mode"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
