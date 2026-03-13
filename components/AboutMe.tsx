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

  return (
    <section id="about" className="w-full py-20 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4">
            {t('name')}
          </h2>
          <div className="h-1 w-20 bg-emerald-600 mx-auto rounded-full mb-6" />
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
            {t.rich('description', {
              highlight: (chunks) => (
                <span className="text-emerald-600 dark:text-emerald-400 font-medium">
                  {chunks}
                </span>
              )
            })}
          </p>
        </div>

        {/* Change the mapping to include index */}
        <div className="grid gap-8 md:grid-cols-2">
          {ABOUT_CARDS.map(({ id, icon: Icon }, index) => {
            const itemsObj = t.raw(`sections.${id}.items`);
            const itemKeys = Object.keys(itemsObj);

            // Logic: If it's the 5th item (index 4) and we are on md screens or larger
            const isLastOddItem = index === 4;

            return (
              <div
                key={id}
                className={`group relative p-8 rounded-3xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-emerald-500/50 dark:hover:border-emerald-400/50 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1
          ${isLastOddItem ? "md:col-span-2 md:max-w-[calc(50%-1rem)] md:mx-auto w-full" : ""}
        `}
              >
                {/* ... rest of your card content ... */}
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Icon className="w-24 h-24 text-emerald-600" />
                </div>

                <div className="relative">
                  <div className="inline-flex p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 mb-6">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {t(`sections.${id}.title`)}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                    {t.rich(`sections.${id}.description`, {
                      highlight: (chunks) => (
                        <span className="text-gray-900 dark:text-gray-200 font-medium">
                          {chunks}
                        </span>
                      )
                    })}
                  </p>

                  <ul className="space-y-3">
                    {itemKeys.map((key) => (
                      <li key={key} className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                        {t(`sections.${id}.items.${key}`)}
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