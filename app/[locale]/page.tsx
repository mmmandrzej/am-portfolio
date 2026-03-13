'use client';

import { useTranslations } from 'next-intl';
import Hero from "@/components/Hero";
import Projects from '@/components/Projects';
import { personalInfo } from '@/data/personal';
import AboutMe from '@/components/AboutMe';
import ContactSection from '@/components/Contact';
import Footer from '@/components/Footer';
import SkillsSection from '@/components/SkillsSection';

const profilePicture = "/images/am_picture.jpg"

export default function Home() {
  const t = useTranslations("HomePage");

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 p-6 ">
      <Hero
        profilePicture={profilePicture}
        fullName={t('home.fullName')}
        shortDescription={t('home.shortDescription')}
        contactButton={t('home.contact')}
        contactEmail={personalInfo.email}
      />

      <AboutMe />
      <SkillsSection />
      <Projects />
      <ContactSection
        contactButton={t('home.contact')}
        contactEmail={personalInfo.email}
      />
      
      <Footer
        fullName={t('home.fullName')}
        footerInfo={t('footer.footerInfo')}
      />
    </main>
  );
}