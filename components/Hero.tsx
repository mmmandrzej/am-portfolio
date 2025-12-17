"use client";

import Image from "next/image";
import { Mail } from "lucide-react";

type HeroProps = {
  profilePicture: string;
  fullName: string;
  shortDescription: string;
  contactButton: String;
  contactEmail?: string;
};

export default function Hero({ profilePicture, fullName, shortDescription, contactButton, contactEmail }: HeroProps) {
  return (
    <section id="hero" className="relative min-h-[80vh] flex flex-col items-center justify-center py-20 overflow-hidden transition-colors duration-500">
      {/* todo - min-h-screen instead of min-h-[80vh] */}
      
      {/* 1. Background Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-emerald-500/10 dark:bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-3xl w-full px-6 text-center">
        
        {/* 2. Profile Image with Multi-layered Glow */}
        <div className="flex justify-center mb-8">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-tr from-emerald-600 to-green-400 rounded-full blur opacity-40 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
            <div className="relative flex items-center justify-center bg-white dark:bg-gray-300 rounded-full p-1.5">
              <Image
                src={profilePicture}
                alt="Profile"
                width={160}
                height={160}
                className="rounded-full grayscale-[20%] hover:grayscale-0 transition-all duration-500 border-2 border-emerald-500/20"
                priority
              />
            </div>
            {/* Animated Status Indicator */}
            <span className="absolute bottom-4 right-4 flex h-5 w-5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-5 w-5 bg-emerald-500 border-4 border-white dark:border-gray-300"></span>
            </span>
          </div>
        </div>

        {/* 3. Name with Gradient Text */}
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-gray-900 via-gray-800 to-gray-600 dark:from-white dark:via-gray-100 dark:to-gray-400">
            {fullName}
          </span>
        </h1>

        {/* 4. Description with Balanced Line Height */}
        <p className="text-m md:text-lg text-gray-600 dark:text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto">
          {shortDescription}
        </p>

        {/* 5. Integrated Action Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {contactEmail && (
            <a
              href={`mailto:${contactEmail}`}
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 dark:bg-emerald-500 text-white rounded-2xl font-bold transition-all hover:bg-emerald-700 dark:hover:bg-emerald-400 hover:scale-[1.02] active:scale-95 shadow-xl shadow-emerald-500/20"
            >
              <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              {contactButton}
            </a>
          )}
          
        </div>
      </div>

      {/* Subtle Bottom Divider */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent" />
    </section>
  );
}
