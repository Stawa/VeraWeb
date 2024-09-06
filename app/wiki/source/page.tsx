"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@default/components/navbar";
import Footer from "@default/components/footer";

interface Package {
  name: string;
  description: string;
  link: string;
  language: string;
  available: boolean;
  implemented: boolean;
  onProgress: boolean;
  icon: React.ReactNode;
}

const PackageContent: React.FC<{ pkg: Package }> = ({ pkg }) => (
  <>
    <div className="flex items-center mb-3 sm:mb-4">
      {pkg.icon}
      <h3 className="text-lg md:text-xl lg:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-600 ml-2">
        {pkg.name}
      </h3>
    </div>
    <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4">
      {pkg.description}
    </p>
    <div className="mt-auto">
      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-indigo-600 bg-indigo-200 dark:text-indigo-200 dark:bg-indigo-800 last:mr-0 mr-1">
        {pkg.language}
      </span>
      {pkg.implemented ? (
        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200 dark:text-green-200 dark:bg-green-800 last:mr-0 mr-1">
          Implemented
        </span>
      ) : pkg.onProgress ? (
        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-yellow-600 bg-yellow-200 dark:text-yellow-200 dark:bg-yellow-800 last:mr-0 mr-1">
          In Progress
        </span>
      ) : (
        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-red-600 bg-red-200 dark:text-red-200 dark:bg-red-800 last:mr-0 mr-1">
          Not Implemented
        </span>
      )}
    </div>
  </>
);

const SourceCode: React.FC = () => {
  const packages: Package[] = [
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
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 leading-tight">
            V.E.R.A Source Code
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6 sm:mb-8 text-center max-w-4xl mx-auto leading-relaxed">
            Explore the packages that power V.E.R.A. Each package is designed to
            handle specific functionalities of our Virtual Entity for Responsive
            Assistant.
          </p>
          <div className="max-w-2xl mx-auto mb-8 bg-gradient-to-br from-yellow-100 to-amber-200 dark:from-yellow-900 dark:to-amber-800 rounded-lg p-4 shadow-md flex items-start border-l-4 border-yellow-500 dark:border-yellow-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-yellow-600 dark:text-yellow-400 mr-3 mt-1 flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div>
              <h2 className="text-xl font-bold text-yellow-800 dark:text-yellow-200 mb-2">
                Important Announcement
              </h2>
              <p className="text-sm text-yellow-900 dark:text-yellow-100">
                We are excited to announce that V.E.R.A will be migrating from
                TypeScript to C# (.NET). This transition will enhance our
                Virtual Entity for Responsive Assistant. Stay tuned for updates!
              </p>
            </div>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {packages.map((pkg, index) => (
                <div key={index}>
                  {pkg.available ? (
                    <a
                      href={pkg.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div
                        className={`bg-gradient-to-br from-white/80 to-indigo-100/80 dark:from-black/60 dark:to-indigo-900/60 backdrop-filter backdrop-blur-lg rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 h-full flex flex-col justify-between ${
                          pkg.onProgress
                            ? "border-yellow-500"
                            : "border-green-500"
                        } border-2`}
                      >
                        <PackageContent pkg={pkg} />
                      </div>
                    </a>
                  ) : (
                    <div
                      className={`bg-gradient-to-br from-white/80 to-indigo-100/80 dark:from-black/60 dark:to-indigo-900/60 backdrop-filter backdrop-blur-lg rounded-2xl p-6 sm:p-8 shadow-md transition-all duration-300 h-full flex flex-col justify-between border-red-500 border-2 opacity-70 cursor-not-allowed`}
                    >
                      <PackageContent pkg={pkg} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="mx-auto max-w-4xl flex justify-start mt-8">
            <Link
              href="/wiki"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-2xl text-gray-900 dark:text-white bg-gradient-to-br from-white/80 to-indigo-100/80 dark:from-black/60 dark:to-indigo-900/60 backdrop-filter backdrop-blur-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 border border-indigo-200 dark:border-indigo-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2 text-indigo-600 dark:text-indigo-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-600">
                Back to Wiki
              </span>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default SourceCode;
