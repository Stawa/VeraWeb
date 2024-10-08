import React from "react";
import Link from "next/link";
import Navbar from "@default/components/navbar";
import Footer from "@default/components/footer";
import Packages from "@data/docs/packages.json";
import { useTranslations } from "next-intl";

export const metadata = {
  title: "Documentation",
  description:
    "Explore the comprehensive documentation for V.E.R.A, a cutting-edge virtual assistant designed to revolutionize human-computer interaction.",
};

const DocsMainMenu = () => {
  const t = useTranslations("docs");

  return (
    <>
      <Navbar />
      <main className="bg-gray-100 dark:bg-gray-950 text-gray-900 dark:text-white min-h-screen pt-16 sm:pt-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-100/30 via-purple-100/30 to-teal-100/30 dark:from-indigo-900/30 dark:via-purple-900/30 dark:to-teal-900/30 opacity-40"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 leading-tight">
            {t("title")}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6 sm:mb-8 text-center max-w-4xl mx-auto leading-relaxed">
            {t("description")}
          </p>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {Packages.map((pkg, index) => (
                <div key={index}>
                  {pkg.available ? (
                    <Link href={pkg.path}>
                      <div
                        className={`bg-gradient-to-br from-white/80 to-indigo-100/80 dark:from-black/60 dark:to-indigo-900/60 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 h-full flex flex-col justify-between ${
                          pkg.onDevelopment
                            ? "border-yellow-500"
                            : "border-green-500"
                        } border-2`}
                      >
                        <PackageContent index={index} pkg={pkg} />
                      </div>
                    </Link>
                  ) : (
                    <div
                      className={`bg-gradient-to-br from-white/80 to-indigo-100/80 dark:from-black/60 dark:to-indigo-900/60     rounded-2xl p-6 sm:p-8 shadow-md transition-all duration-300 h-full flex flex-col justify-between border-red-500 border-2 opacity-70 cursor-not-allowed`}
                    >
                      <PackageContent index={index} pkg={pkg} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="mx-auto max-w-4xl flex justify-start mt-8">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-2xl text-gray-900 dark:text-white bg-gradient-to-br from-white/80 to-indigo-100/80 dark:from-black/60 dark:to-indigo-900/60     hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 border border-indigo-200 dark:border-indigo-800"
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
                {t("backToHome")}
              </span>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

interface Package {
  name: string;
  path: string;
  available: boolean;
  onDevelopment: boolean;
  description: string;
  icon: string;
}

const PackageContent = ({ index, pkg }: { index: number; pkg: Package }) => {
  const t = useTranslations("docs");

  return (
    <>
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
              d={pkg.icon}
            />
          </svg>
          <h2 className="text-lg md:text-xl lg:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-600 flex items-center justify-between w-full">
            <span>{pkg.name}</span>
            {!pkg.available && (
              <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-red-100 text-red-800 ml-2">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </span>
            )}
            {pkg.onDevelopment && (
              <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800 ml-2">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
            )}
          </h2>
        </div>
        <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4">
          {t(`packages.${index}.description`)}
        </p>
      </div>
      <div className="mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <span className="inline-flex items-center text-sm sm:text-base text-indigo-600 dark:text-indigo-400 hover:underline mb-2 sm:mb-0">
          {t("exploreDocumentation")}
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
    </>
  );
};

export default DocsMainMenu;
