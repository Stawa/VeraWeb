import React, { useState, useEffect } from "react";
import Link from "next/link";

const Loading = () => {
  const [showSkip, setShowSkip] = useState(false);
  const [loadingText, setLoadingText] = useState("Loading");

  useEffect(() => {
    const skipTimer = setTimeout(() => setShowSkip(true), 3000);
    const textInterval = setInterval(() => {
      setLoadingText((prev) =>
        prev === "Loading..." ? "Loading" : prev + "."
      );
    }, 500);

    return () => {
      clearTimeout(skipTimer);
      clearInterval(textInterval);
    };
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-teal-100 dark:from-indigo-900 dark:via-purple-900 dark:to-teal-900 px-4">
      <span className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-pulse mb-4 text-center">
        V.E.R.A
      </span>
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 dark:text-gray-300 mb-4 text-center">
        {loadingText}
      </p>
      {showSkip && (
        <Link
          href="/"
          className="text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors duration-300 flex items-center"
        >
          <span className="text-sm sm:text-base">Continue to Homepage</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 sm:h-5 sm:w-5 ml-1"
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
      )}
    </div>
  );
};

export default Loading;
