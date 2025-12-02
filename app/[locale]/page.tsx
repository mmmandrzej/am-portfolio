'use client';

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';

const fullName = "Andrzej Moskalczuk";
const profilePicture = "/images/am_picture.jpg"

export default function Home() {
  const t = useTranslations("HomePage");
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [dark]);


  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 p-6 transition-colors duration-500">
      {/* Dark Mode Toggle */}
      <div className="fixed top-4 left-4 flex items-center space-x-2">
        <span className="text-gray-900 dark:text-gray-100 text-sm">🌞</span>
        <button
          onClick={() => setDark(!dark)}
          className={`w-12 h-6 flex items-center bg-gray-300 dark:bg-gray-600 rounded-full p-1 transition-colors duration-300 ${
            dark ? 'justify-end' : 'justify-start'
          }`}
        >
          <div className="w-4 h-4 bg-white rounded-full shadow-md transition-transform duration-300"></div>
        </button>
        <span className="text-gray-900 dark:text-gray-100 text-sm">🌙</span>
      </div>


      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center mb-16">
        <div className="bg-white dark:bg-gray-800 shadow-2xl rounded-3xl p-10 max-w-lg w-full text-center border border-gray-200 dark:border-gray-700 transition-colors duration-500">
          <div className="flex justify-center mb-6">
            <Image
              src={profilePicture}
              alt="Profile"
              width={120}
              height={120}
              className="rounded-full shadow-md border-4 border-[#4a6f54]"
            />
          </div>
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100 transition-colors duration-500">{fullName}</h1>
          <p className="text-gray-700 dark:text-gray-300 mb-8 text-lg leading-relaxed transition-colors duration-500">
            Experienced Software Engineer with over a decade in banking, insurance, and public sectors. Passionate about building reliable solutions and improving user experience.
          </p>
          <div className="flex justify-center space-x-8 mb-8">
            <Link href="https://github.com/yourprofile" className="text-[#4a6f54] dark:text-green-400 font-semibold hover:underline text-lg transition-colors duration-500" target="_blank">GitHub</Link>
            <Link href="https://linkedin.com/in/yourprofile" className="text-[#4a6f54] dark:text-green-400 font-semibold hover:underline text-lg transition-colors duration-500" target="_blank">LinkedIn</Link>
          </div>
          <a href="mailto:your@email.com" className="inline-block px-8 py-4 bg-[#4a6f54] dark:bg-green-700 text-white rounded-xl font-semibold text-lg hover:bg-[#3e5a45] dark:hover:bg-green-800 transition shadow-md">
            {t('contact')}
          </a>
        </div>
      </section>


      {/* Achievements Section */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6 text-center transition-colors duration-500">{t('achievements')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 transition-colors duration-500">
            <p className="text-gray-700 dark:text-gray-300">Led development of an internal banking dashboard, improving reporting efficiency for multiple teams.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 transition-colors duration-500">
            <p className="text-gray-700 dark:text-gray-300">Streamlined insurance claim processing applications, enhancing client satisfaction and operational speed.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 transition-colors duration-500">
            <p className="text-gray-700 dark:text-gray-300">Migrated legacy systems to modern stacks including React, Next.js, and Node.js, increasing maintainability.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 transition-colors duration-500">
            <p className="text-gray-700 dark:text-gray-300">Improved customer onboarding processes, reducing errors by 30% and optimizing team workflows.</p>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="text-center text-gray-600 dark:text-gray-300 py-6 transition-colors duration-500">
        &copy; {new Date().getFullYear()} {fullName}. All rights reserved.
      </footer>
    </main>
  );
}