"use client";

import { useTranslations } from "next-intl";
import dynamic from 'next/dynamic'
import LanguageSwitcher from "./LanguageSwitcher";
import Image from 'next/image'
import Link from "next/link";

const ThemeToggle = dynamic(() => import('./ThemeToggle'), { ssr: false })

export default function Header() {
  const t = useTranslations("HomePage");

  return (
    <header className="w-full border-b border-gray-300 dark:border-gray-700 
                       bg-white dark:bg-gray-900 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Name */}
        <div className="text-xl font-semibold text-gray-900 dark:text-gray-100">
        <Link 
          href="/" 
          scroll={true} 
          aria-label="Home"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <Image src="/icon0.svg" alt="Logo" width={40} height={40} />
        </Link>
        </div>

        {/* Right actions */}
        <div className="flex items-center space-x-4">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
