"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import { useTranslations } from "next-intl";
import { Search, X } from "lucide-react";

const categoryColors: Record<string, string> = {
  "core-stack": "#10b981",
  "backend": "#3b82f6",
  "test-automation": "#f472b6",
  "devops": "#a78bfa",
  "frontend": "#fb923c",
  "observability": "#2dd4bf",
  "messaging": "#f87171",
  "ways-of-working": "#94a3b8",
};

export default function SkillsSection() {
  const t = useTranslations("HomePage.skills");
  
  // 1. Change default to "backend" ID
  const [activeCategory, setActiveCategory] = useState("backend");
  const [searchQuery, setSearchQuery] = useState("");
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  const groups = t.raw("groups") as { id: string; label: string; skills: string[] }[];

  // 2. Process categories as Objects {id, label} instead of just strings
  const { allSkills, categoryOptions } = useMemo(() => {
    const skills = groups.flatMap((group) =>
      group.skills.map((skill) => ({
        name: skill,
        categoryId: group.id,
        categoryLabel: group.label,
      }))
    );
    
    const uniqueSkills = Array.from(new Map(skills.map(s => [s.name, s])).values());
    
    // Create category list with IDs for logic and Labels for UI
    const options = [
      { id: "all", label: t('allLabel') || "All" }, 
      ...groups.map((g) => ({ id: g.id, label: g.label }))
    ];
    
    return { allSkills: uniqueSkills, categoryOptions: options };
  }, [groups, t]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // 3. Filter using the ID
  const filteredSkills = useMemo(() => {
    return allSkills.filter((skill) => {
      const matchesCategory = activeCategory === "all" || skill.categoryId === activeCategory;
      const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [allSkills, activeCategory, searchQuery]);

  return (
    <section ref={sectionRef} id="skills" className="w-full py-20 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header Section */}
        <div className={`text-center mb-10 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4">
            {t('title')}
          </h2>
          <div className="h-1 w-20 bg-emerald-600 mx-auto rounded-full mb-10" />

          {/* Search Bar - Fixed visibility in Dark Mode */}
          <div className="max-w-md mx-auto mb-8 relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-emerald-500 transition-colors" />
            <input
              type="text"
              placeholder={t('searchPlaceholder')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-10 py-3 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 focus:border-emerald-500 outline-none transition-all text-sm shadow-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery("")} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
          
          {/* Filters using ID for logic, Label for text */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categoryOptions.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl font-medium text-[11px] uppercase tracking-wider transition-all border ${
                  activeCategory === cat.id 
                  ? "bg-emerald-600 border-emerald-600 text-white shadow-md" 
                  : "bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 text-gray-500 dark:text-gray-400 hover:border-emerald-500/50"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filteredSkills.length > 0 ? (
            filteredSkills.map((skill, i) => {
              const dotColor = categoryColors[skill.categoryId] || "#888";
              return (
                <div
                  key={`${skill.name}-${i}`}
                  className="group relative p-5 min-h-[100px] flex flex-col justify-start rounded-3xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 transition-all duration-300 hover:border-emerald-500/50 dark:hover:border-emerald-400/50 hover:shadow-lg hover:-translate-y-1"
                >
                  <div 
                    className="w-2 h-2 rounded-full mb-3" 
                    style={{ backgroundColor: dotColor, boxShadow: `0 0 8px ${dotColor}60` }} 
                  />
                  <h3 className="text-sm font-bold text-gray-900 dark:text-white leading-tight">
                    {skill.name}
                  </h3>
                  <p className="text-[9px] uppercase tracking-widest text-gray-400 dark:text-gray-500 font-bold mt-auto pt-2">
                    {skill.categoryLabel}
                  </p>
                </div>
              );
            })
          ) : (
            <div className="col-span-full py-20 text-center text-gray-500 dark:text-gray-400 italic">
              {t('noResults', { query: searchQuery })}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className={`mt-12 pt-6 border-t border-gray-200 dark:border-gray-800 flex flex-wrap items-center justify-center sm:justify-start gap-x-8 gap-y-3 transition-all duration-1000 ${visible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="flex items-center gap-2">
                <span className="text-[10px] uppercase tracking-[0.15em] text-emerald-600 dark:text-emerald-500 font-bold">{t('footer.totalStack')}:</span>
                <span className="text-[12px] font-medium text-gray-500 dark:text-gray-400">{t('footer.technologies', { count: allSkills.length })}</span>
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-700" />
            <div className="flex items-center gap-2">
                <span className="text-[10px] uppercase tracking-[0.15em] text-emerald-600 dark:text-emerald-500 font-bold">{t('footer.experience')}:</span>
                <span className="text-[12px] font-medium text-gray-500 dark:text-gray-400">{t('footer.years', { count: 10 })}</span>
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-700" />
            <div className="flex items-center gap-2">
                <span className="text-[10px] uppercase tracking-[0.15em] text-emerald-600 dark:text-emerald-500 font-bold">{t('footer.focus')}:</span>
                <span className="text-[12px] font-medium text-gray-500 dark:text-gray-400">{t('footer.enterprise')}</span>
            </div>
        </div>
      </div>
    </section>
  );
}