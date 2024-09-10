import React from "react";
import Link from "next/link";
import Navbar from "@default/components/navbar";
import Footer from "@default/components/footer";
import Section from "@data/troubleshoot/items.json";
import { useTranslations } from "next-intl";

export const metadata = {
  title: "Troubleshooting",
  description: "Find solutions to common issues with V.E.R.A",
};

const Troubleshooting = () => {
  const t = useTranslations("troubleshooting");

  return (
    <>
      <Navbar />
      <main className="bg-gray-100 dark:bg-gray-950 text-gray-900 dark:text-white min-h-screen">
        <section className="pt-20 sm:pt-20 md:pt-32 pb-12 sm:pb-20 md:pb-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-100/30 via-purple-100/30 to-teal-100/30 dark:from-indigo-900/30 dark:via-purple-900/30 dark:to-teal-900/30 opacity-40"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 leading-tight">
              {t("title")}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6 sm:mb-8 text-center max-w-4xl mx-auto leading-relaxed">
              {t("description")}
            </p>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                {Section.map((item, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-white/80 to-indigo-100/80 dark:from-black/60 dark:to-indigo-900/60 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 h-full flex flex-col justify-between border border-indigo-200 dark:border-indigo-800"
                  >
                    <div>
                      <div className="flex items-center mb-3 sm:mb-4">
                        <svg
                          className="w-6 h-6 sm:w-8 sm:h-8 mr-2 sm:mr-3 text-indigo-600 dark:text-indigo-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
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
                              d={item.icon}
                            />
                          </svg>
                        </svg>
                        <h3 className="text-lg md:text-xl lg:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-600">
                          {t(`problems.${index}.problem`)}
                        </h3>
                      </div>
                      <ul className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4">
                        {item.solutions.map((_solution, solutionIndex) => (
                          <li
                            key={solutionIndex}
                            className="mb-2 flex items-start"
                          >
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
                            {t(`problems.${index}.solutions.${solutionIndex}`)}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mx-auto max-w-4xl flex justify-start mt-8">
              <Link
                href="/wiki"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-2xl text-gray-900 dark:text-white bg-gradient-to-br from-white/80 to-indigo-100/80 dark:from-black/60 dark:to-indigo-900/60 hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 border border-indigo-200 dark:border-indigo-800"
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
                  {t("backToWiki")}
                </span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Troubleshooting;
