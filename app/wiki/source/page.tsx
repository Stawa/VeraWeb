"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@default/components/navbar";
import Footer from "@default/components/footer";

const SourceCode = () => {
  const packages = [
    {
      name: "GTTS",
      description: "Core functionality and utilities for V.E.R.A",
      link: "https://github.com/Stawa/GTTS",
      language: "TypeScript",
      available: true,
      implemented: true,
      onProgress: false,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500"
        >
          <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
          <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" />
          <path d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z" />
        </svg>
      ),
    },
    {
      name: "Vera Core",
      description: "Core functionality and utilities for V.E.R.A",
      link: "https://github.com/Stawa/Vera-Core",
      language: "C#",
      available: true,
      implemented: false,
      onProgress: true,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 sm:w-8 sm:h-8 text-purple-500"
        >
          <path
            fillRule="evenodd"
            d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Vera Visual",
      description:
        "Displays text for voice input and text output on display for V.E.R.A",
      link: "#",
      language: "C#",
      available: false,
      implemented: false,
      onProgress: true,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 sm:w-8 sm:h-8 text-green-500"
        >
          <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
          <path
            fillRule="evenodd"
            d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ];

  return (
    <>
      <Navbar />
      <main className="bg-gray-100 dark:bg-gray-950 text-gray-900 dark:text-white min-h-screen pt-16 sm:pt-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-100/30 via-purple-100/30 to-teal-100/30 dark:from-indigo-900/30 dark:via-purple-900/30 dark:to-teal-900/30 opacity-40"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 sm:mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 leading-tight">
            V.E.R.A Source Code
          </h1>
          <div className="max-w-3xl mx-auto mb-8 sm:mb-12">
            <p className="text-base sm:text-lg md:text-xl text-center mb-6 sm:mb-8">
              Explore the packages that power V.E.R.A. Each package is designed
              to handle specific functionalities of our Virtual Entity for
              Responsive Assistant.
            </p>
            <div className="flex justify-center mb-6 sm:mb-8">
              <div className="bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900 dark:to-purple-900 rounded-lg p-3 sm:p-4 shadow-lg max-w-2xl w-full">
                <div className="flex items-center mb-2">
                  <svg
                    className="h-4 w-4 sm:h-5 sm:w-5 text-indigo-600 dark:text-indigo-400 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm sm:text-base font-semibold text-indigo-800 dark:text-indigo-200">
                    Exciting news!
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                  In the future, V.E.R.A will be rewritten in C# for enhanced
                  performance.
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white/80 to-indigo-100/80 dark:from-black/60 dark:to-indigo-900/60 backdrop-filter backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/50"
              >
                <div className="flex items-center mb-3 sm:mb-4">
                  {pkg.icon}
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white ml-2 sm:ml-3">
                    {pkg.name}
                  </h2>
                  <div className="flex ml-auto">
                    {pkg.implemented && (
                      <span className="px-1.5 py-0.5 text-2xs sm:text-xs font-semibold text-green-800 bg-green-200 rounded-full mr-1 sm:mr-2">
                        Implemented
                      </span>
                    )}
                    {pkg.onProgress && (
                      <span className="px-1.5 py-0.5 text-2xs sm:text-xs font-semibold text-yellow-800 bg-yellow-200 rounded-full">
                        In Progress
                      </span>
                    )}
                    {!pkg.implemented && !pkg.onProgress && (
                      <span className="px-1.5 py-0.5 text-2xs sm:text-xs font-semibold text-red-800 bg-red-200 rounded-full">
                        Deprecated
                      </span>
                    )}
                  </div>
                </div>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-2">
                  {pkg.description}
                </p>
                <p className="text-xs sm:text-sm text-indigo-600 dark:text-indigo-400 mb-3 sm:mb-4">
                  Language: {pkg.language}
                </p>
                {pkg.available ? (
                  <a
                    href={pkg.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm sm:text-base text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-200 transition-colors duration-200"
                  >
                    View on GitHub
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 ml-1 sm:ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                ) : (
                  <span className="text-sm sm:text-base text-gray-500 dark:text-gray-400">
                    Coming soon
                  </span>
                )}
              </div>
            ))}
          </div>
          <div className="mt-8 sm:mt-12 max-w-6xl mx-auto">
            <Link
              href="/wiki"
              className="inline-flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105 shadow-lg text-sm sm:text-base group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2 transform group-hover:translate-x-[-4px] transition-transform"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
              Back to Wiki
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default SourceCode;
