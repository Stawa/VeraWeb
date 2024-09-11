"use client";

import { useEffect, useState, useMemo } from "react";
import { useTranslations } from "next-intl";
import Step from "@data/step.json";
import Team from "@data/team.json";
import Feature from "@data/feature.json";
import Footer from "@default/components/footer";
import Navbar from "@default/components/navbar";
import Waves from "react-animated-waves";
import Image from "next/image";

interface TeamMember {
  name: string;
  role: string;
  instagram?: string;
  github?: string;
  image?: string;
}

export default function Home() {
  const t = useTranslations("main");
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>(Team);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProfilePicture = async (member: TeamMember) => {
      if (!member.instagram) return member;

      try {
        const response = await fetch(
          `/api/instagram?username=${member.instagram}`
        );
        const { profilePicUrl } = await response.json();
        return { ...member, image: profilePicUrl };
      } catch (error) {
        return member;
      }
    };

    const fetchAllProfilePictures = async () => {
      setLoading(true);
      const updatedTeam = await Promise.all(Team.map(fetchProfilePicture));
      setTeamMembers(updatedTeam);
      setLoading(false);
    };

    fetchAllProfilePictures();
  }, []);

  const renderedMembers = useMemo(() => {
    return teamMembers.map((member, index) => (
      <div
        key={index}
        className="bg-gradient-to-br from-white/60 to-indigo-100/60 dark:from-black/60 dark:to-indigo-900/60 rounded-2xl p-6 sm:p-8 flex flex-col items-center space-y-4 sm:space-y-6 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50"
      >
        {member.image ? (
          <Image
            src={member.image}
            alt={member.name}
            width={128}
            height={128}
            className={`rounded-full object-cover border-4 border-purple-500 ${loading ? "animate-pulse" : ""}`}
            loading="lazy"
            decoding="async"
            sizes="128px"
          />
        ) : (
          <div
            className={`w-24 sm:w-32 h-24 sm:h-32 rounded-full bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-600 flex items-center justify-center text-white text-3xl sm:text-4xl font-bold ${loading ? "animate-pulse" : ""}`}
          >
            {member.name[0]}
          </div>
        )}
        <div className="text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white mb-1 sm:mb-2">
            {member.name}
          </h3>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-3 sm:mb-4">
            {t(`member.${index}.role`, { fallback: member.role })}
          </p>
          <div className="flex justify-center space-x-4">
            {member.github && (
              <a
                href={typeof member.github === "string" ? member.github : "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors duration-300 flex items-center justify-center text-sm sm:text-base"
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
            {member.instagram && (
              <a
                href={member.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600 hover:text-pink-500 dark:text-pink-400 dark:hover:text-pink-300 transition-colors duration-300 flex items-center justify-center text-sm sm:text-base"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
                Instagram
              </a>
            )}
          </div>
        </div>
      </div>
    ));
  }, [teamMembers, loading]);

  return (
    <>
      <Navbar />
      <main className="bg-gray-100 dark:bg-gray-950 text-gray-900 dark:text-white min-h-screen">
        <section className="pt-20 sm:pt-20 md:pt-32 pb-12 sm:pb-20 md:pb-32 border-b-2 border-indigo-300 dark:border-indigo-800 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-100/30 via-purple-100/30 to-teal-100/30 dark:from-indigo-900/30 dark:via-purple-900/30 dark:to-teal-900/30 opacity-40"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 leading-tight animate-pulse">
                V.E.R.A
              </h1>
              <p className="text-xl sm:text-2xl md:text-3xl mb-4 sm:mb-6 text-gray-700 dark:text-gray-300 leading-relaxed font-light">
                {t("intro.subtitle")}
              </p>
              <p className="text-lg sm:text-xl text-indigo-600 dark:text-indigo-400 font-semibold italic mb-6 sm:mb-10">
                &quot;{t("intro.description")}&quot;
              </p>
              <div className="mt-8 sm:mt-12 relative z-20">
                <a
                  href="#learn-more"
                  className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105 shadow-lg text-sm sm:text-base"
                >
                  {t("intro.learnMore")}
                </a>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 pointer-events-none z-10 hidden sm:block">
            <Waves amplitude={20} colors={["#FF6AC6", "#436EDB", "#FF6AC6"]} />
          </div>
        </section>
        <section className="py-16 sm:py-20 border-b-2 border-indigo-300 dark:border-indigo-800 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-100/30 via-purple-100/30 to-teal-100/30 dark:from-indigo-900/30 dark:via-purple-900/30 dark:to-teal-900/30 opacity-40"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-2 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-600">
              {t("awards.awardWinningInnovation")}
            </h2>
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-6">
                {t("awards.awardDescription")}
              </p>
              <div className="bg-gradient-to-br from-white/80 to-indigo-100/80 dark:from-black/60 dark:to-indigo-900/60 rounded-2xl p-4 sm:p-6 mb-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-indigo-300 dark:border-indigo-700 max-w-2xl mx-auto">
                <h3 className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 mb-3">
                  {t("awards.silverMedalWinner")}
                </h3>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                  {t("veraRecognition")}
                </p>
                <p className="text-xs sm:text-sm text-indigo-600 dark:text-indigo-400 font-semibold">
                  {t("awardDate")}
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 sm:py-20 border-b-2 border-indigo-300 dark:border-indigo-800 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-100/30 via-purple-100/30 to-teal-100/30 dark:from-indigo-900/30 dark:via-purple-900/30 dark:to-teal-900/30 opacity-40"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-10 sm:mb-16 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-600">
              {t("experienceVeraInAction")}
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-2xl relative group border-4 border-indigo-600">
                <iframe
                  className="w-full h-full min-h-[250px] sm:min-h-[350px] md:min-h-[450px]"
                  src="https://www.youtube.com/embed/M6bKa2Hqi2I"
                  title={t("veraDemoVideo")}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="mt-8 text-center">
                <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300">
                  {t("experienceVeraDescription")}
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="learn-more"
          className="py-16 sm:py-20 border-b-2 border-indigo-300 dark:border-indigo-800 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-200 via-purple-200 to-teal-200 dark:from-indigo-900/30 dark:via-purple-900/30 dark:to-teal-900/30 opacity-40"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-10 sm:mb-16 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-600">
              {t("howToUseVera")}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
              {Step.map((step, index) => (
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
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={step.icon}
                      />
                    </svg>
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">
                      {t("step")} {index + 1}: {t(`steps.${index}.title`)}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                      {t(`steps.${index}.description`)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-16 sm:py-24 border-b-2 border-indigo-300 dark:border-indigo-800 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 via-purple-100 to-teal-100 dark:from-indigo-900/30 dark:via-purple-900/30 dark:to-teal-900/30 opacity-40"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-10 sm:mb-16 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-600">
              {t("veraFeatures")}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 justify-center">
              {Feature.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white to-indigo-100 dark:from-black/60 dark:to-indigo-900/60 rounded-2xl p-6 sm:p-8 flex flex-col items-center space-y-4 sm:space-y-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50"
                >
                  <div className="flex-shrink-0 flex items-center justify-center w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-600 rounded-full">
                    <svg
                      className="h-8 sm:h-12 w-8 sm:w-12 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={feature.icon}
                      />
                    </svg>
                  </div>
                  <div className="text-center flex flex-col h-full justify-between">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">
                        {t(`features.${index}.title`)}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                        {t(`features.${index}.description`)}
                      </p>
                    </div>
                    <p
                      className={`text-sm sm:text-base mt-4 font-semibold uppercase tracking-wider rounded-full px-3 py-1 inline-block transform hover:scale-105 transition-transform duration-300 border ${
                        feature.implemented
                          ? "text-green-600 dark:text-green-400 bg-green-400/10 border-green-400/30"
                          : "text-yellow-600 dark:text-yellow-400 bg-yellow-400/10 border-yellow-400/30"
                      }`}
                    >
                      {feature.implemented ? t("implemented") : t("comingSoon")}
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
              {t("veraTeam")}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-center">
              {renderedMembers}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
