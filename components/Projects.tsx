"use client";

import { projects } from "@/data/projects";
import { useTranslations } from "next-intl";
import EastIcon from "@mui/icons-material/East";

export default function Projects() {
  const t = useTranslations("HomePage");

  return (
    <section className="max-w-6xl mx-auto mb-16">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center border-b border-gray-200 dark:border-gray-700 pb-2 transition-colors duration-500">
        {t("projects")}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-fr">
        {projects.map((project) => (
          <div
            key={project.id}
            className="
              relative bg-white/90 dark:bg-gray-800/90 
              p-6 rounded-xl shadow-md 
              border border-white/20 dark:border-white/10
              transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg 
              overflow-hidden flex flex-col
            "
          >
            {/* Content */}
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                {t(project.nameKey)}
              </h3>

              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {t(project.descriptionKey)}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="
                      px-2 py-1 
                      bg-gray-100 dark:bg-gray-700 
                      text-gray-800 dark:text-gray-200
                      text-xs font-medium rounded-full
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Button */}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-2
                px-4 py-2 
                bg-gray-900 dark:bg-gray-700 
                text-white text-sm font-semibold 
                rounded-lg shadow-sm
                hover:bg-gray-800 dark:hover:bg-gray-600
                transition-all duration-300
                self-start
              "
            >
              {t("viewProject")}
              <EastIcon className="text-white" fontSize="small" />
            </a>

            {/* Glow effect */}
            <div className="
              absolute inset-0 rounded-xl 
              bg-emerald-500/10 blur-xl 
              opacity-0 hover:opacity-100 
              transition-opacity duration-300 pointer-events-none
            "></div>
          </div>
        ))}
      </div>
    </section>
  );
}
