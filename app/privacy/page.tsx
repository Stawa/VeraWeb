"use client";

import React from "react";
import Navbar from "@default/components/navbar";
import Footer from "@default/components/footer";

const PrivacyPolicy = () => {
  const sections = [
    {
      title: "1. Information Collection",
      content:
        "We collect information you provide directly to us when using V.E.R.A. This may include personal information such as your name, email address, and usage data.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      ),
    },
    {
      title: "2. Use of Information",
      content:
        "We use the information we collect to provide, maintain, and improve our services, as well as to communicate with you about V.E.R.A and related offerings.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
        />
      ),
    },
    {
      title: "3. Data Security",
      content:
        "We implement appropriate technical and organizational measures to protect the security of your personal information against unauthorized access, alteration, disclosure, or destruction.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
        />
      ),
    },
    {
      title: "4. Third-Party Services",
      content:
        "We may use third-party services that collect, monitor and analyze this type of information in order to increase our Service's functionality. These third-party service providers have their own privacy policies addressing how they use such information.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
        />
      ),
    },
    {
      title: "5. Changes to Privacy Policy",
      content:
        "We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the 'last updated' date.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        />
      ),
    },
  ];

  return (
    <>
      <Navbar />
      <main className="bg-gray-100 dark:bg-gray-950 text-gray-900 dark:text-white min-h-screen">
        <section className="pt-20 sm:pt-20 md:pt-32 pb-12 sm:pb-20 md:pb-32 border-b-2 border-indigo-300 dark:border-indigo-800 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-100/30 via-purple-100/30 to-teal-100/30 dark:from-indigo-900/30 dark:via-purple-900/30 dark:to-teal-900/30 opacity-40"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 leading-tight">
                Privacy Policy
              </h1>
              <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed font-light max-w-3xl mx-auto">
                Your privacy is important to us. This policy outlines how we
                handle your data.
              </p>
            </div>
          </div>
        </section>
        <section className="py-16 sm:py-24 border-b-2 border-indigo-300 dark:border-indigo-800 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-100/30 via-purple-100/30 to-teal-100/30 dark:from-indigo-900/30 dark:via-purple-900/30 dark:to-teal-900/30 opacity-40"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
              {sections.map((section, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white/90 to-indigo-100/90 dark:from-black/80 dark:to-indigo-900/80 rounded-2xl p-6 sm:p-8 flex flex-col items-center space-y-4 sm:space-y-6 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50"
                >
                  <div className="flex-shrink-0 flex items-center justify-center w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-600 rounded-full">
                    <svg
                      className="h-8 sm:h-12 w-8 sm:w-12 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      {section.icon}
                    </svg>
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">
                      {section.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
