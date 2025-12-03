"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const supported = ["en", "pl", "ru"];

  const changeLanguage = (newLocale: string) => {
    const segments = pathname.split("/");
    segments[1] = newLocale;
    router.push(segments.join("/"));
  };

  return (
    <div className="flex items-center bg-gray-200 dark:bg-gray-800 rounded-full p-1">
      {supported.map((lng) => (
        <button
          key={lng}
          onClick={() => changeLanguage(lng)}
          className={`px-3 py-1 text-sm rounded-full transition
            ${
              locale === lng
                ? "bg-emerald-800 text-white"
                : "text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700"
            }`}
        >
          {lng.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

