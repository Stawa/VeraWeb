"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@default/components/navbar";
import Footer from "@default/components/footer";

const VeraCoreDocsMainMenu = () => {
  const sections = [
    {
      title: "API Reference",
      description: "Detailed documentation of Vera Core's API.",
      link: "https://docs.vera-ai.my.id",
      target: "_blank",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 inline-block mr-2 text-indigo-600 dark:text-indigo-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
    },
    {
      title: "Examples",
      description: "Practical examples and use cases for Vera Core.",
      link: "https://github.com/Stawa/Vera/tree/main/examples",
      target: "_blank",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 inline-block mr-2 text-indigo-600 dark:text-indigo-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
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
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 relative z-10">
          <div className="flex flex-col min-h-[calc(100vh-theme(spacing.16))] sm:min-h-[calc(100vh-theme(spacing.20))]">
            <div className="flex-1 mt-0">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 sm:mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 leading-tight">
                Vera Core Documentation
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-center mb-12 sm:mb-16 max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
                Explore the power of Vera Core through our comprehensive
                documentation and practical examples.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto mb-8">
                {sections.map((section, index) => (
                  <Link key={index} href={section.link} target={section.target}>
                    <div className="bg-gradient-to-br from-white/80 to-indigo-100/80 dark:from-black/60 dark:to-indigo-900/60 backdrop-filter backdrop-blur-lg rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 h-full flex flex-col justify-between border border-indigo-200 dark:border-indigo-800">
                      <div>
                        <div className="flex items-center mb-3 sm:mb-4">
                          {section.icon}
                          <h2 className="text-lg md:text-xl lg:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-600">
                            {section.title}
                          </h2>
                        </div>
                        <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4">
                          {section.description}
                        </p>
                      </div>
                      <div className="mt-4">
                        <span className="inline-flex items-center text-sm sm:text-base text-indigo-600 dark:text-indigo-400 hover:text-pink-500 dark:hover:text-pink-400 transition-colors duration-300">
                          Explore Now
                          <svg
                            className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="mx-auto max-w-4xl flex justify-start mt-8">
                <Link
                  href="/docs"
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
                    Back to Documentation
                  </span>
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
