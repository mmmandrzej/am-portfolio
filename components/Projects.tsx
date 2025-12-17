"use client";

import { projects } from "@/data/projects";
import { useTranslations } from "next-intl";
import { ArrowRight, FolderCode } from "lucide-react";

export default function Projects() {
  const t = useTranslations("HomePage");

  return (
    <section id="projects" className="w-full py-20 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4">
            {t("projects")}
          </h2>
          <div className="h-1.5 w-16 bg-emerald-500 mx-auto rounded-full mb-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative flex flex-col h-full bg-gray-50 dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-800 hover:border-emerald-500/50 transition-all duration-300 overflow-hidden"
            >
              {/* Subtle Decorative Icon Background */}
              <div className="absolute -top-4 -right-4 p-8 opacity-[0.03] dark:opacity-[0.05] group-hover:scale-110 transition-transform duration-500">
                <FolderCode className="w-32 h-32 text-emerald-600" />
              </div>

              <div className="p-8 flex flex-col h-full">
                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 text-[10px] uppercase tracking-wider font-bold rounded-md bg-emerald-100/50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 border border-emerald-200/50 dark:border-emerald-800/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Title & Desc */}
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 transition-colors">
                    {t(project.nameKey)}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                    {t(project.descriptionKey)}
                  </p>
                </div>

                {/* Action Button */}
                <div className="pt-6 border-t border-gray-200 dark:border-gray-800">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-gray-900 dark:text-white group/btn transition-all"
                  >
                    <span className="relative">
                      {t("viewProject")}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all group-hover/btn:w-full" />
                    </span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform text-emerald-500" />
                  </a>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500">
                <div className="absolute -inset-px rounded-3xl border-2 border-emerald-500/20 shadow-[0_0_20px_rgba(16,185,129,0.1)]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
