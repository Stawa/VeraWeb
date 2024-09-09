"use client";

import Link from "next/link";
import { NavLink, LanguageOption } from "./types";

export const ThemeToggle = ({
  resolvedTheme,
  toggleTheme,
}: {
  resolvedTheme: string;
  toggleTheme: () => void;
}) => {
  return (
    <button
      onClick={toggleTheme}
      className="text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition duration-300"
      aria-label={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} mode`}
    >
      {resolvedTheme === "dark" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
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
          aria-hidden="true"
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
  );
};

export const LanguageMenu = ({
  language,
  toggleLanguageMenu,
  isLanguageMenuOpen,
  availableLanguages,
  changeLanguage,
}: {
  language: string;
  toggleLanguageMenu: () => void;
  isLanguageMenuOpen: boolean;
  availableLanguages: LanguageOption[];
  changeLanguage: (code: string) => void;
}) => {
  return (
    <div className="relative">
      <button
        className="text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition duration-300 flex items-center"
        onClick={toggleLanguageMenu}
        aria-expanded={isLanguageMenuOpen}
        aria-haspopup="true"
        aria-label="Select language"
      >
        <span className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          {language.toUpperCase()}
        </span>
      </button>
      {isLanguageMenuOpen && (
        <div className="absolute right-0 mt-2 py-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-xl z-20">
          {availableLanguages.map((lang) => (
            <button
              key={lang.code}
              className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 w-full text-left flex items-center"
              onClick={() => changeLanguage(lang.code)}
              aria-label={`Change language to ${lang.name}`}
            >
              {lang.icon}
              <span className="ml-2">{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export const MobileMenu = ({
  isMenuOpen,
  navLinks,
  toggleMenu,
  resolvedTheme,
  toggleTheme,
  toggleLanguageMenu,
  isLanguageMenuOpen,
  availableLanguages,
  changeLanguage,
}: {
  isMenuOpen: boolean;
  isScrolled: boolean;
  navLinks: NavLink[];
  toggleMenu: () => void;
  resolvedTheme: string;
  toggleTheme: () => void;
  toggleLanguageMenu: () => void;
  isLanguageMenuOpen: boolean;
  availableLanguages: LanguageOption[];
  changeLanguage: (code: string) => void;
}) => {
  return (
    <div className="md:hidden">
      <button
        onClick={toggleMenu}
        className="text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition duration-300"
        aria-expanded={isMenuOpen}
        aria-label="Toggle mobile menu"
      >
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          {isMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white/90 dark:bg-black/90 backdrop-blur-md shadow-md">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 dark:text-gray-100 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition duration-300"
              >
                <span className="flex items-center">
                  {link.icon}
                  <span className="ml-2">{link.text}</span>
                </span>
              </Link>
            ))}
            <button
              onClick={toggleTheme}
              className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-900 dark:text-gray-100 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition duration-300"
              aria-label={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} mode`}
            >
              <span className="flex items-center">
                {resolvedTheme === "dark" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
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
                    className="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                )}
                <span>
                  Switch to {resolvedTheme === "dark" ? "Light" : "Dark"} Mode
                </span>
              </span>
            </button>
            <div className="relative">
              <button
                onClick={toggleLanguageMenu}
                className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-900 dark:text-gray-100 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition duration-300"
                aria-expanded={isLanguageMenuOpen}
                aria-haspopup="true"
                aria-label="Select language"
              >
                <span className="flex items-center justify-between">
                  <span className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Select Language</span>
                  </span>
                  <svg
                    className={`w-5 h-5 transition-transform duration-200 ${
                      isLanguageMenuOpen ? "transform rotate-180" : ""
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </button>
              {isLanguageMenuOpen && (
                <div className="mt-2 space-y-2 px-3">
                  {availableLanguages.map((lang) => (
                    <button
                      key={lang.code}
                      className="flex items-center w-full text-left py-2 text-base font-medium text-gray-900 dark:text-gray-100 hover:text-indigo-600 dark:hover:text-indigo-400 transition duration-300"
                      onClick={() => changeLanguage(lang.code)}
                      aria-label={`Change language to ${lang.name}`}
                    >
                      {lang.icon}
                      <span className="ml-2">{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
