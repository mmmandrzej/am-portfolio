"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import { useTranslations } from "next-intl";

// We keep the colors in the component as they are UI-specific
const categoryColors: Record<string, string> = {
  "core-stack": "#10b981",
  "backend": "#3b82f6",
  "test-automation": "#f472b6",
  "devops": "#a78bfa",
  "frontend": "#fb923c",
  "observability": "#2dd4bf",
  "messaging": "#f87171",
  "ways-of-working": "#94a3b8", // Slate for methodologies
};

export default function SkillsSection() {
  const t = useTranslations("HomePage.skills");
  const [activeCategory, setActiveCategory] = useState("All");
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  // 1. Get raw data from JSON
  const groups = t.raw("groups") as { id: string; label: string; skills: string[] }[];

  // 2. Memoize processed skills for performance
  const { allSkills, categories } = useMemo(() => {
    const skills = groups.flatMap((group) =>
      group.skills.map((skill) => ({
        name: skill,
        categoryId: group.id,
        categoryLabel: group.label,
      }))
    );
    
    // Remove duplicates if a skill exists in multiple groups
    const uniqueSkills = Array.from(new Map(skills.map(s => [s.name, s])).values());
    const cats = ["All", ...groups.map((g) => g.label)];
    
    return { allSkills: uniqueSkills, categories: cats };
  }, [groups]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const filteredSkills = activeCategory === "All"
    ? allSkills
    : allSkills.filter((s) => s.categoryLabel === activeCategory);

  return (
    <section ref={sectionRef} id="skills" className="w-full py-20 transition-colors duration-300 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header Section */}
        <div className={`text-center mb-16 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4">
            {t('title')}
          </h2>
          <div className="h-1 w-20 bg-emerald-600 mx-auto rounded-full mb-8" />

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-2xl font-medium text-xs uppercase tracking-wider transition-all border ${
                  activeCategory === cat 
                  ? "bg-emerald-600 border-emerald-600 text-white shadow-md" 
                  : "bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 text-gray-500 dark:text-gray-400 hover:border-emerald-500/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {filteredSkills.map((skill, i) => {
            const dotColor = categoryColors[skill.categoryId] || "#888";
            
            return (
              <div
                key={`${skill.name}-${i}`}
                style={{ transitionDelay: `${visible ? i * 20 : 0}ms` }}
                className={`group relative p-6 rounded-3xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 transition-all duration-500 shadow-sm ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                } hover:border-emerald-500/50 dark:hover:border-emerald-400/50 hover:shadow-xl hover:-translate-y-1`}
              >
                <div 
                  className="w-2 h-2 rounded-full mb-4 transition-transform group-hover:scale-125" 
                  style={{ backgroundColor: dotColor, boxShadow: `0 0 10px ${dotColor}60` }} 
                />
                <h3 className="text-base font-bold text-gray-900 dark:text-white transition-colors">
                  {skill.name}
                </h3>
                <p className="text-[9px] uppercase tracking-widest text-gray-500 dark:text-gray-400 font-bold mt-2">
                  {skill.categoryLabel}
                </p>
              </div>
            );
          })}
        </div>

        {/* Compact, Subdued Footer */}
        <div className={`mt-12 pt-6 border-t border-gray-200 dark:border-gray-800 flex flex-wrap items-center justify-center sm:justify-start gap-x-8 gap-y-3 transition-all duration-1000 delay-500 ${visible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex items-center gap-2">
            <span className="text-[9px] uppercase tracking-[0.15em] text-emerald-600 dark:text-emerald-500 font-bold">Total Stack:</span>
            <span className="text-[11px] font-medium text-gray-500 dark:text-gray-400">{allSkills.length} Technologies</span>
          </div>
          <div className="hidden sm:block w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-700" />
          <div className="flex items-center gap-2">
            <span className="text-[9px] uppercase tracking-[0.15em] text-emerald-600 dark:text-emerald-500 font-bold">Experience:</span>
            <span className="text-[11px] font-medium text-gray-500 dark:text-gray-400">10+ Years</span>
          </div>
          <div className="hidden sm:block w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-700" />
          <div className="flex items-center gap-2">
            <span className="text-[9px] uppercase tracking-[0.15em] text-emerald-600 dark:text-emerald-500 font-bold">Focus:</span>
            <span className="text-[11px] font-medium text-gray-500 dark:text-gray-400">Enterprise</span>
          </div>
        </div>
      </div>
    </section>
  );
}