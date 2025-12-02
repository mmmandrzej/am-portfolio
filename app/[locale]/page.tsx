'use client';

import { useTranslations } from 'next-intl';
import Hero from "@/components/Hero";
import Projects from '@/components/Projects';

const profilePicture = "/images/am_picture.jpg"

export default function Home() {
  const t = useTranslations("HomePage");

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 p-6 ">

      {/* Hero Section */}
      <Hero
        profilePicture={profilePicture}
        fullName={t('fullName')}
        shortDescription={t('shortDescription')}
        contactEmail="your@email.com"
      />


      {/* Achievements Section */}
      <section className="max-w-6xl mx-auto mb-16">
  <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center border-b border-gray-200 dark:border-gray-700 pb-2 transition-colors duration-500">
    {t('achievements')}
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {/* Achievement Card 1 */}
    <div className="relative bg-white/60 dark:bg-gray-800/60 backdrop-blur-md p-6 rounded-2xl shadow-md border border-white/20 dark:border-white/10 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl overflow-hidden">
      
      {/* Subtle glow */}
      <div className="absolute -inset-2 bg-emerald-500/10 rounded-2xl blur-2xl pointer-events-none"></div>
      
      {/* Content */}
      <p className="relative text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
        <span className="font-semibold text-emerald-800 dark:text-green-400">✔</span>{" "}
        Led development of an internal banking dashboard, improving reporting efficiency for multiple teams.
      </p>
    </div>

    {/* Achievement Card 2 */}
    <div className="relative bg-white/60 dark:bg-gray-800/60 backdrop-blur-md p-6 rounded-2xl shadow-md border border-white/20 dark:border-white/10 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl overflow-hidden">
      
      {/* Subtle glow */}
      <div className="absolute -inset-2 bg-emerald-500/10 rounded-2xl blur-2xl pointer-events-none"></div>
      
      {/* Content */}
      <p className="relative text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
        <span className="font-semibold text-emerald-800 dark:text-green-400">✔</span>{" "}
        Streamlined insurance claim processing applications, enhancing client satisfaction and operational speed.
      </p>
    </div>
  </div>
</section>


    {/* Projects Section */}
    <Projects />

      {/* Footer */}
      <footer className="text-center text-gray-600 dark:text-gray-300 py-6 ">
        &copy; {new Date().getFullYear()} {t('fullName')}. {t('footerInfo')}
      </footer>
    </main>
  );
}