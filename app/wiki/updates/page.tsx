"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@default/components/navbar";
import Footer from "@default/components/footer";

const Updates = () => {
  const changelogs = [
    {
      version: "1.0.0",
      date: "2024-08-25",
      time: "9AM GMT+8",
      changes: [
        "Initial release of V.E.R.A",
        "Basic object recognition",
        "Text-to-speech functionality",
        "Simple user interface",
      ],
    },
  ];

  return (
    <>
      <Navbar />
      <main className="bg-gray-100 dark:bg-gray-950 text-gray-900 dark:text-white min-h-screen pt-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-100/30 via-purple-100/30 to-teal-100/30 dark:from-indigo-900/30 dark:via-purple-900/30 dark:to-teal-900/30 opacity-40"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 leading-tight flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 mr-4 text-purple-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            V.E.R.A Updates
          </h1>
          <div className="max-w-4xl mx-auto">
            {changelogs.map((log, index) => (
              <div
                key={index}
                className="mb-12 bg-gradient-to-br from-white/80 to-indigo-100/80 dark:from-black/60 dark:to-indigo-900/60 backdrop-filter backdrop-blur-lg rounded-2xl p-6 sm:p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50"
              >
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2 flex items-center">
                  Version {log.version}
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  Released on {log.date} at {log.time}
                </p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                  {log.changes.map((change, changeIndex) => (
                    <li key={changeIndex} className="mb-2 flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2 text-green-500 flex-shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      {change}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12 flex justify-start max-w-4xl mx-auto">
            <Link
              href="/wiki"
              className="inline-flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105 shadow-lg text-base group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2 transform group-hover:translate-x-[-4px] transition-transform"
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

export default Updates;
