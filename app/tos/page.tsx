"use client";

import React from "react";
import Navbar from "@default/components/navbar";
import Footer from "@default/components/footer";

const TermsOfService = () => {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      content:
        "By accessing or using V.E.R.A, you agree to comply with and be bound by these Terms of Service. If you do not agree to these terms, please do not use our service.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      ),
    },
    {
      title: "2. Use of Service",
      content:
        "You agree to use V.E.R.A only for lawful purposes and in accordance with these Terms. You are prohibited from violating or attempting to violate the security of the Service.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
        />
      ),
    },
    {
      title: "3. Intellectual Property",
      content:
        "The content, features, and functionality of V.E.R.A are owned by us and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
        />
      ),
    },
    {
      title: "4. Limitation of Liability",
      content:
        "V.E.R.A and its affiliates will not be liable for any indirect, incidental, special, consequential or punitive damages resulting from your use of the service.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        />
      ),
    },
    {
      title: "5. Changes to Terms",
      content:
        "We reserve the right to modify these Terms at any time. Your continued use of V.E.R.A after any such changes constitutes your acceptance of the new Terms.",
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
                Terms of Service
              </h1>
              <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed font-light max-w-3xl mx-auto">
                Please read these terms carefully before using V.E.R.A
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
                  className="bg-gradient-to-br from-white/80 to-indigo-100/80 dark:from-black/60 dark:to-indigo-900/60 rounded-2xl p-6 sm:p-8 flex flex-col items-center space-y-4 sm:space-y-6 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50"
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

export default TermsOfService;
