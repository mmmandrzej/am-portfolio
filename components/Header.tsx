"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import dynamic from 'next/dynamic';
import { Menu, X, Home, User, Briefcase, Mail } from "lucide-react";
import Image from 'next/image';
import Link from "next/link";
import { useLocale } from "next-intl";

const ThemeToggle = dynamic(() => import('./ThemeToggle'), { ssr: false });
const LanguageSwitcher = dynamic(() => import('./LanguageSwitcher'), { ssr: false });

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const locale = useLocale();
  const t = useTranslations("HomePage");

  const navLinks = [
    { name: "Home", href: "#home", icon: <Home className="w-4 h-4" /> },
    { name: "About", href: "#about", icon: <User className="w-4 h-4" /> },
    { name: "Projects", href: "#projects", icon: <Briefcase className="w-4 h-4" /> },
    { name: "Contact", href: "#contact", icon: <Mail className="w-4 h-4" /> },
  ];

  return (
    <header className="fixed top-0 w-full z-50 transition-all duration-300">
      <div className="w-full bg-white/80 dark:bg-gray-900 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-800/50">
        <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
          
          {/* Logo */}
          <Link href={`/${locale}`} className="hover:scale-105 transition-transform">
            <Image src="/icon0.svg" alt="Logo" width={42} height={42} />
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* RIGHT ACTIONS */}
          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center bg-gray-100/50 dark:bg-gray-800/50 p-1 rounded-2xl border border-gray-200/50 dark:border-gray-700/50">
              <LanguageSwitcher />
              <div className="w-px h-4 bg-gray-300 dark:bg-gray-700 mx-1" />
              <ThemeToggle />
            </div>

            {/* BURGER BUTTON (Mobile Only) */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 transition-all duration-300 overflow-hidden ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <nav className="flex flex-col p-6 gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-4 text-lg font-semibold text-gray-900 dark:text-white hover:text-emerald-500"
            >
              <span className="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600">
                {link.icon}
              </span>
              {link.name}
            </a>
          ))}
          {/* Switchers inside Mobile Menu for small screens */}
          <div className="sm:hidden flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-800">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}
