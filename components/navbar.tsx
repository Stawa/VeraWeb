"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import Flag from "react-world-flags";
import { NavLink, LanguageOption } from "./NavbarComponents/types";
import { ThemeToggle, LanguageMenu, MobileMenu } from "./NavbarComponents/main";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const [language, setLanguage] = useState("en");
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    setMounted(true);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsLanguageMenuOpen(false);
  };

  const toggleTheme = () =>
    setTheme(resolvedTheme === "dark" ? "light" : "dark");

  const changeLanguage = (lang: string) => {
    setLanguage(lang);
    setIsLanguageMenuOpen(false);
  };

  const toggleLanguageMenu = () => setIsLanguageMenuOpen(!isLanguageMenuOpen);

  if (!mounted) return null;

  const availableLanguages: LanguageOption[] = [
    {
      code: "en",
      name: "English",
      icon: <Flag code="US" height={16} width={24} />,
    },
    {
      code: "es",
      name: "Spanish",
      icon: <Flag code="ES" height={16} width={24} />,
    },
    {
      code: "fr",
      name: "French",
      icon: <Flag code="FR" height={16} width={24} />,
    },
  ];

  const navLinks: NavLink[] = [
    {
      href: "/wiki",
      text: "Wiki",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
        </svg>
      ),
    },
    {
      href: "/docs",
      text: "Documentation",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled || isMenuOpen ? "bg-white/90 dark:bg-black/90 backdrop-blur-md shadow-md" : "bg-transparent"}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-2xl sm:text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 via-blue-700 to-purple-800 dark:from-cyan-400 dark:via-blue-500 dark:to-purple-600 hover:from-purple-600 hover:via-pink-700 hover:to-red-800 dark:hover:from-purple-400 dark:hover:via-pink-500 dark:hover:to-red-500 transition-all duration-300"
            >
              V.E.R.A
            </Link>
          </div>
          <div className="hidden md:flex space-x-4 lg:space-x-8 items-center">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition duration-300 relative group"
              >
                <span className="relative z-10 flex items-center">
                  {link.icon}
                  {link.text}
                </span>
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-indigo-600 dark:bg-indigo-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
            ))}
            <LanguageMenu
              language={language}
              toggleLanguageMenu={toggleLanguageMenu}
              isLanguageMenuOpen={isLanguageMenuOpen}
              availableLanguages={availableLanguages}
              changeLanguage={changeLanguage}
            />
            <ThemeToggle
              toggleTheme={toggleTheme}
              resolvedTheme={resolvedTheme || "light"}
            />
          </div>
          <MobileMenu
            toggleMenu={toggleMenu}
            isMenuOpen={isMenuOpen}
            navLinks={navLinks}
            toggleTheme={toggleTheme}
            resolvedTheme={resolvedTheme || "light"}
            toggleLanguageMenu={toggleLanguageMenu}
            isLanguageMenuOpen={isLanguageMenuOpen}
            availableLanguages={availableLanguages}
            changeLanguage={changeLanguage}
            isScrolled={isScrolled}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
