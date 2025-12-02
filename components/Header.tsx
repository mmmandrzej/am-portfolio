"use client";

import { useTranslations } from "next-intl";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const t = useTranslations("HomePage");

  return (
    <header className="w-full border-b border-gray-300 dark:border-gray-700 
                       bg-white/70 dark:bg-gray-900/70 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Name */}
        <div className="text-xl font-semibold text-gray-900 dark:text-gray-100">
          {t("fullName")}
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
