"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@default/components/navbar";
import Footer from "@default/components/footer";

const VeraCoreDocsMainMenu = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sections = [
    {
      title: "API Reference",
      description: "Detailed documentation of Vera Core's API.",
      link: "/docs/core/api",
    },
    {
      title: "Examples",
      description: "Practical examples and use cases for Vera Core.",
      link: "https://github.com/Stawa/Vera/tree/main/examples",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="bg-gray-100 dark:bg-gray-950 text-gray-900 dark:text-white min-h-screen pt-16 sm:pt-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-100/30 via-purple-100/30 to-teal-100/30 dark:from-indigo-900/30 dark:via-purple-900/30 dark:to-teal-900/30 opacity-40"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 relative z-10">
          <div className="flex flex-col lg:flex-row min-h-[calc(100vh-theme(spacing.16))] sm:min-h-[calc(100vh-theme(spacing.20))]">
            {isDesktop && (
              <nav className="lg:w-64 lg:mr-8 lg:border-r-4 lg:border-indigo-200 dark:lg:border-indigo-700 border-indigo-200">
                <div className="h-full bg-transparent p-6 overflow-y-auto">
                  <h2 className="text-xl font-semibold mb-4 text-indigo-600 dark:text-indigo-400">
                    Vera Core
                  </h2>
                  <ul className="space-y-2">
                    {sections.map((item, index) => (
                      <li key={index}>
                        <Link href={item.link}>
                          <span className="block text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200 py-1">
                            {item.title}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </nav>
            )}
            <div className="flex-1 mt-0">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 sm:mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 leading-tight">
                Vera Core Documentation
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-center mb-8 sm:mb-12 max-w-3xl mx-auto">
                Welcome to the Vera Core documentation.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {sections.map((section, index) => (
                  <Link key={index} href={section.link}>
                    <div className="bg-gradient-to-br from-white/80 to-indigo-100/80 dark:from-gray-800/80 dark:to-indigo-900/80 backdrop-filter backdrop-blur-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 h-full flex flex-col justify-between transform hover:scale-105">
                      <div>
                        <h2 className="text-2xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-400 dark:to-purple-500">
                          {section.title}
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300 text-lg">
                          {section.description}
                        </p>
                      </div>
                      <div className="mt-6">
                        <span className="inline-block bg-indigo-600 dark:bg-indigo-500 text-white py-2 px-4 rounded-full hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors duration-300">
                          Learn more &rarr;
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="mt-12 flex flex-col sm:flex-row justify-between items-center max-w-4xl mx-auto space-y-4 sm:space-y-0">
                <Link
                  href="/docs"
                  className="group bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-2 px-4 rounded-full hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 flex items-center shadow-md hover:shadow-lg"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 transform group-hover:-translate-x-1 transition-transform duration-300"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-semibold">Back to Docs</span>
                </Link>
                <Link
                  href="/docs/core/api"
                  className="group bg-gradient-to-r from-blue-500 to-teal-400 text-white py-2 px-4 rounded-full hover:from-blue-600 hover:to-teal-500 transition-all duration-300 flex items-center shadow-md hover:shadow-lg"
                >
                  <span className="font-semibold">Next: API Reference</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default VeraCoreDocsMainMenu;
