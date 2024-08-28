"use client";

import Footer from "@default/components/footer";
import Navbar from "@default/components/navbar";
import Waves from "react-animated-waves";
import Image from "next/image";

export default function Home() {
  const tutorial = [
    {
      title: "Plug in the Adapter",
      description:
        "Connect the V.E.R.A adapter to a power source to begin setup.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      ),
    },
    {
      title: "Connect the Microphone",
      description:
        "Attach the microphone to the designated port on the V.E.R.A device.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
        />
      ),
    },
    {
      title: "Activate V.E.R.A",
      description:
        "Say 'Hello V.E.R.A' to activate. Ask your question, and V.E.R.A will respond.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      ),
    },
  ];
  const features = [
    {
      title: "Switching Languages",
      description: "Switch between languages easily with the V.E.R.A device.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      ),
    },
    {
      title: "Voice Recognition",
      description:
        "V.E.R.A can recognize your voice and respond to your questions.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      ),
    },
  ];
  const team = [
    {
      name: "Jordan",
      role: "Leader of Team",
      image: "",
      github: false,
    },
    {
      name: "Shivano",
      role: "-",
      image: "",
      github: false,
    },
    {
      name: "Damodara",
      role: "V.E.R.A Developer",
      image: "",
      github: "https://github.com/Stawa",
    },
    {
      name: "Aryareva",
      role: "Logo Designer",
      image: "",
      github: false,
    },
    {
      name: "Gaura",
      role: "Poster Designer",
      image: "",
      github: false,
    },
    {
      name: "Sandi",
      role: "Poster Designer",
      image: "",
      github: false,
    },
    {
      name: "Wahdeva",
      role: "-",
      image: "",
      github: false,
    },
    {
      name: "Nanta",
      role: "-",
      image: "",
      github: false,
    },
  ];

  return (
    <>
      <Navbar />
      <main className="bg-gray-950 text-white min-h-screen">
        <section className="pt-20 sm:pt-20 md:pt-32 pb-12 sm:pb-20 md:pb-32 border-b-2 border-indigo-800 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 via-purple-900/30 to-teal-900/30 opacity-40"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 leading-tight animate-pulse">
                V.E.R.A
              </h1>
              <p className="text-xl sm:text-2xl md:text-3xl mb-4 sm:mb-6 text-gray-300 leading-relaxed font-light">
                Virtual Entity For Responsive Assistant
              </p>
              <p className="text-lg sm:text-xl text-indigo-300 font-semibold italic mb-6 sm:mb-10">
                &quot;A Tool That Serves To Help Blind People&quot;
              </p>
              <div className="mt-8 sm:mt-12">
                <a
                  href="#learn-more"
                  className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105 shadow-lg text-sm sm:text-base"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
            <Waves amplitude={20} colors={["#FF6AC6", "#436EDB", "#FF6AC6"]} />
          </div>
        </section>
        <section className="py-16 sm:py-20 border-b-2 border-indigo-800 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 via-purple-900/30 to-teal-900/30 opacity-40"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-10 sm:mb-16 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-600">
              Experience V.E.R.A in Action
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-2xl relative group border-4 border-indigo-600">
                <video
                  className="w-full h-full object-cover"
                  poster="/VERA.png"
                  controls
                >
                  <source src="/VERA.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="mt-8 text-center">
                <p className="text-lg sm:text-xl text-gray-300">
                  Experience V.E.R.A in action. This demo showcases the key
                  features and functionality of our responsive assistant.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="learn-more"
          className="py-16 sm:py-20 border-b-2 border-indigo-800 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 via-purple-900/30 to-teal-900/30 opacity-40"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-10 sm:mb-16 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-600">
              How to Use V.E.R.A
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
              {tutorial.map((step, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-black/60 to-indigo-900/60 backdrop-filter backdrop-blur-lg rounded-2xl p-6 sm:p-8 flex flex-col items-center space-y-4 sm:space-y-6 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50"
                >
                  <div className="flex-shrink-0 flex items-center justify-center w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-600 rounded-full">
                    <svg
                      className="h-8 sm:h-12 w-8 sm:w-12 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      {step.icon}
                    </svg>
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">
                      Step {index + 1}: {step.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-16 sm:py-24 border-b-2 border-indigo-800 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 via-purple-900/30 to-teal-900/30 opacity-40"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-10 sm:mb-16 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-600">
              V.E.R.A Features
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 justify-center">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-black/60 to-indigo-900/60 backdrop-filter backdrop-blur-lg rounded-2xl p-6 sm:p-8 flex flex-col items-center space-y-4 sm:space-y-6 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50"
                >
                  <div className="flex-shrink-0 flex items-center justify-center w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-600 rounded-full">
                    <svg
                      className="h-8 sm:h-12 w-8 sm:w-12 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      {feature.icon}
                    </svg>
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section
          id="our-team"
          className="py-16 sm:py-24 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 via-purple-900/30 to-teal-900/30 opacity-40"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-10 sm:mb-16 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-600">
              V.E.R.A Team
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-center">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-black/60 to-indigo-900/60 backdrop-filter backdrop-blur-lg rounded-2xl p-6 sm:p-8 flex flex-col items-center space-y-4 sm:space-y-6 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50"
                >
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={128}
                      height={128}
                      className="rounded-full object-cover border-4 border-purple-500"
                    />
                  ) : (
                    <div className="w-24 sm:w-32 h-24 sm:h-32 rounded-full bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-600 flex items-center justify-center text-white text-3xl sm:text-4xl font-bold">
                      {member.name[0]}
                    </div>
                  )}
                  <div className="text-center">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2">
                      {member.name}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4">
                      {member.role}
                    </p>
                    {member.github && (
                      <a
                        href={
                          typeof member.github === "string"
                            ? member.github
                            : "#"
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-400 hover:text-indigo-300 transition-colors duration-300 flex items-center justify-center text-sm sm:text-base"
                      >
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5 mr-2"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                            clipRule="evenodd"
                          />
                        </svg>
                        GitHub
                      </a>
                    )}
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
}
