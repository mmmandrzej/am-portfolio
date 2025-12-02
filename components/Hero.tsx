"use client";

import Image from "next/image";
import SocialLinks from "@/components/SocialLinks";

type HeroProps = {
  profilePicture: string;
  fullName: string;
  shortDescription: string;
  contactEmail?: string;
};

export default function Hero({ profilePicture, fullName, shortDescription, contactEmail }: HeroProps) {
  return (
    <section className="flex flex-col items-center justify-center mb-16">
      <div className="bg-white dark:bg-gray-800 shadow-2xl rounded-3xl p-10 max-w-lg w-full text-center border border-gray-200 dark:border-gray-700 relative">

        {/* Profile Image with subtle glow */}
        <div className="flex justify-center mb-6 relative">
          <Image
            src={profilePicture}
            alt="Profile"
            width={120}
            height={120}
            className="rounded-full shadow-md border-4 border-emerald-800 z-10"
          />
          <div className="absolute -inset-2 rounded-full bg-emerald-500/8 blur-xl animate-fadeSlow pointer-events-none"></div>
        </div>

        {/* Name and Description */}
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100 transition-colors duration-500">
          {fullName}
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mb-8 text-lg leading-relaxed transition-colors duration-500">
          {shortDescription}
        </p>

        {/* Social Links */}
        <SocialLinks />

        {/* Contact Button */}
        {contactEmail && (
          <a
            href={`mailto:${contactEmail}`}
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-lg bg-gradient-to-r from-emerald-700 to-emerald-800 dark:from-green-700 dark:to-green-800 text-white shadow-md transition-all duration-300 hover:shadow-lg hover:scale-[1.03] hover:from-emerald-600 hover:to-emerald-700 dark:hover:from-green-600 dark:hover:to-green-700 active:scale-[0.97] relative overflow-hidden"
          >
            <span className="relative z-10">Contact Me</span>
            <span className="absolute inset-0 rounded-xl bg-white/10 dark:bg-white/5 opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
          </a>
        )}
      </div>
    </section>
  );
}
