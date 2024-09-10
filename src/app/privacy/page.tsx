import React from "react";
import Link from "next/link";
import Navbar from "@default/components/navbar";
import Footer from "@default/components/footer";
import Section from "@data/privacy/section.json";
import { useTranslations } from "next-intl";

export const metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy outlines how we handle and protect your personal data.",
};

const PrivacyPolicy = () => {
  const t = useTranslations("privacy");

  return (
    <>
      <Navbar />
      <main className="bg-gray-100 dark:bg-gray-950 text-gray-900 dark:text-white min-h-screen">
        <section className="py-16 sm:py-24 border-b-2 border-indigo-300 dark:border-indigo-800 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-100/30 via-purple-100/30 to-teal-100/30 dark:from-indigo-900/30 dark:via-purple-900/30 dark:to-teal-900/30 opacity-40"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 leading-tight">
              {t("title")}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6 sm:mb-8 text-center max-w-4xl mx-auto leading-relaxed">
              {t("description")}
            </p>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                {Section.map((section, index) => (
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
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d={section.icon}
                          />
                        </svg>
                        <h3 className="text-lg md:text-xl lg:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-600">
                          {index + 1}. {t(`sections.${index}.title`)}
                        </h3>
                      </div>
                      <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4">
                        {t(`sections.${index}.content`)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mx-auto max-w-4xl mt-12 flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0">
              <Link
                href="/"
                className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-medium rounded-2xl text-gray-900 dark:text-white bg-gradient-to-br from-white/80 to-indigo-100/80 dark:from-black/60 dark:to-indigo-900/60 hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 border border-indigo-200 dark:border-indigo-800 w-auto"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 sm:h-5 w-4 sm:w-5 mr-2 text-indigo-600 dark:text-indigo-400"
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
                  {t("backToHome")}
                </span>
              </Link>
              <Link
                href="/tos"
                className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-medium rounded-2xl text-gray-900 dark:text-white bg-gradient-to-br from-white/80 to-indigo-100/80 dark:from-black/60 dark:to-indigo-900/60 hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 border border-indigo-200 dark:border-indigo-800 w-auto"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-600">
                  {t("termsOfService")}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 sm:h-5 w-4 sm:w-5 ml-2 text-indigo-600 dark:text-indigo-400"
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
        </section>
      </main>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
