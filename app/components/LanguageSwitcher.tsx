"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const languages = [
  { code: "en", label: "EN" },
  { code: "pl", label: "PL" },
  { code: "ru", label: "RU" }
];

export default function LanguageSwitcher({ current }: { current: string }) {
  const pathname = usePathname();

  // Remove first segment (/en, /pl, /ru)
  const restOfPath = pathname.split("/").slice(2).join("/") || "";

  return (
    <div className="flex gap-2">
      {languages.map((lang) => (
        <Link
          key={lang.code}
          href={`/${lang.code}/${restOfPath}`}
          className={`px-3 py-1 rounded-md text-sm border transition
            ${
              current === lang.code
                ? "bg-bottleGreen text-white"
                : "hover:bg-gray-200 dark:hover:bg-gray-700"
            }
          `}
        >
          {lang.label}
        </Link>
      ))}
    </div>
  );
}