"use client";

import { useEffect, useRef, useState } from "react"; // Added hooks
import { projects } from "@/data/projects";
import { useTranslations } from "next-intl";
import { ArrowRight, FolderCode } from "lucide-react";

export default function Projects() {
  const t = useTranslations("HomePage.projects");

  // Animation State
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      id="projects" 
      className="w-full py-16 md:py-24 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header - Slides up first */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4">
            {t("name")}
          </h2>
          <div className="h-1.5 w-16 bg-emerald-500 mx-auto rounded-full mb-6" />
        </div>

        {/* Projects Grid - Slides up with a 300ms delay */}
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 transition-all duration-1000 delay-300 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative flex flex-col h-full bg-white dark:bg-gray-900 rounded-[2rem] border border-gray-200 dark:border-gray-800 hover:border-emerald-500/50 transition-all duration-500 overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-emerald-500/5"
            >
              {/* Decorative Watermark Icon */}
              <div className="absolute -top-6 -right-6 p-8 opacity-[0.03] dark:opacity-[0.05] group-hover:scale-125 group-hover:-rotate-12 transition-all duration-700 pointer-events-none">
                <FolderCode className="w-40 h-40 text-emerald-600" />
              </div>

              <div className="p-8 md:p-10 flex flex-col h-full relative z-10">
                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-[10px] uppercase tracking-wider font-bold rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-900/50 transition-transform group-hover:scale-105"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Title & Description */}
                <div className="flex-grow">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {t(project.nameKey)}
                  </h3>
                  <p className="text-[15px] md:text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-10">
                    {t(project.descriptionKey)}
                  </p>
                </div>

                {/* Action Link */}
                <div className="pt-6 border-t border-gray-100 dark:border-gray-800">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-sm font-bold text-gray-900 dark:text-white group/btn transition-all"
                  >
                    <span className="relative">
                      {t("viewProject")}
                      <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-emerald-500 transition-all group-hover/btn:w-full" />
                    </span>
                    <div className="p-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950 text-emerald-500 group-hover/btn:bg-emerald-500 group-hover/btn:text-white transition-all duration-300">
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </div>
                  </a>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500">
                <div className="absolute -inset-px rounded-[2rem] border-2 border-emerald-500/20 shadow-[0_0_30px_rgba(16,185,129,0.05)]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}