"use client";

import { useEffect, useRef, useState } from "react"; // Added hooks
import { CheckCircle2, Server, ShieldCheck, Workflow, Activity, Layout } from "lucide-react";
import { useTranslations } from "next-intl";

const ABOUT_CARDS = [
  { id: "backend", icon: Server },
  { id: "distributed", icon: ShieldCheck },
  { id: "devops", icon: Workflow },
  { id: "quality", icon: Activity },
  { id: "frontend", icon: Layout }
] as const;

export default function AboutMe() {
  const t = useTranslations("HomePage.about");
  
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
      id="about" 
      className="w-full py-16 md:py-24 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header Section - Animates first */}
        <div className={`text-center mb-12 md:mb-20 transition-all duration-1000 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4">
            {t('name')}
          </h2>
          <div className="h-1.5 w-16 bg-emerald-600 mx-auto rounded-full mb-8" />
          <p className="max-w-2xl mx-auto text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed px-2">
            {t.rich('description', {
              highlight: (chunks) => (
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                  {chunks}
                </span>
              )
            })}
          </p>
        </div>

        {/* Optimized Grid - Delayed entrance for staggering effect */}
        <div className={`grid gap-4 md:gap-6 lg:grid-cols-2 lg:gap-8 transition-all duration-1000 delay-300 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {ABOUT_CARDS.map(({ id, icon: Icon }, index) => {
            const itemsObj = t.raw(`sections.${id}.items`);
            const itemKeys = Object.keys(itemsObj);
            const isLastOddItem = index === 4;

            return (
              <div
                key={id}
                className={`group relative p-6 md:p-8 rounded-[2rem] bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-1
                  ${isLastOddItem ? "lg:col-span-2 lg:max-w-[calc(50%-16px)] lg:mx-auto w-full" : ""}
                `}
              >
                {/* Responsive Watermark */}
                <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-[0.08] group-hover:rotate-12 transition-all duration-700 pointer-events-none">
                  <Icon size={100} strokeWidth={1} className="md:hidden text-emerald-600" />
                  <Icon size={140} strokeWidth={1} className="hidden md:block text-emerald-600" />
                </div>

                <div className="relative">
                  {/* Adaptive Icon Container */}
                  <div className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-2xl mb-6 md:mb-8
                    bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400
                    group-hover:bg-emerald-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-emerald-500/30
                    transition-all duration-300 ease-out"
                  >
                    <Icon 
                      size={22} 
                      strokeWidth={1.5} 
                      className="md:hidden transition-transform duration-500 group-hover:scale-110" 
                    />
                    <Icon 
                      size={26} 
                      strokeWidth={1.5} 
                      className="hidden md:block transition-transform duration-500 group-hover:scale-110" 
                    />
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3 md:mb-4 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {t(`sections.${id}.title`)}
                  </h3>

                  <p className="text-[14px] md:text-[15px] text-gray-600 dark:text-gray-400 leading-relaxed mb-6 md:mb-8">
                    {t.rich(`sections.${id}.description`, {
                      highlight: (chunks) => (
                        <span className="text-gray-900 dark:text-gray-200 font-semibold group-hover:text-emerald-700 dark:group-hover:text-emerald-300 transition-colors">
                          {chunks}
                        </span>
                      )
                    })}
                  </p>

                  <ul className="grid grid-cols-1 gap-y-3 md:gap-y-4">
                    {itemKeys.map((key) => (
                      <li key={key} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400 group/item">
                        <CheckCircle2 className="w-4 h-4 mt-0.5 text-emerald-500 shrink-0 transition-transform group-hover/item:scale-125" />
                        <span className="group-hover:text-gray-900 dark:group-hover:text-gray-200 transition-colors">
                          {t(`sections.${id}.items.${key}`)}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}