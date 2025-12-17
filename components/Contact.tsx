import { personalInfo } from "@/data/personal";
import { Mail, Github, Linkedin, MessageSquare, ArrowUpRight, MapPin } from "lucide-react";
import { useTranslations } from "next-intl";

type ContactProps = {
    contactButton: string;
    contactEmail: string;
  };

export default function ContactSection({ contactEmail, contactButton }: ContactProps) {
  const socials = [
    { icon: <Github className="w-5 h-5" />, label: "GitHub", href: personalInfo.github, color: "hover:text-emerald-500" },
    { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", href: personalInfo.linkedin, color: "hover:text-blue-500" },
  ];
  const t = useTranslations("HomePage");

  return (
    <section id="contact" className="w-full py-20 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6">
        
        <div className="relative overflow-hidden rounded-[2.5rem] bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-2xl shadow-emerald-500/5">

          <div className="relative z-10 p-8 md:p-16 text-center">
            {/* Location Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/80 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-400 text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-md">
              <MapPin className="w-3 h-3 animate-bounce" />
              Warsaw, Poland
            </div>

            <div className="flex flex-col items-center">
              {/* <div className="inline-flex p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 mb-6 shadow-sm">
                <MessageSquare className="w-6 h-6" />
              </div> */}
              
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {t('contact.title')}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg mb-10 max-w-md mx-auto leading-relaxed">
                {t('contact.description')}
              </p>

              {/* Main Email CTA */}
              <a
                href={`mailto:${contactEmail}`}
                className="group inline-flex items-center gap-3 px-10 py-5 bg-gray-900 dark:bg-emerald-500 text-white dark:text-gray-950 rounded-2xl font-bold text-lg transition-all hover:scale-[1.02] active:scale-95 shadow-xl hover:shadow-emerald-500/20 mb-12"
              >
                <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                {contactButton}
              </a>
            </div>

            {/* Social Links Row */}
            <div className="pt-8 border-t border-gray-100 dark:border-gray-800/50">
              <p className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em] mb-6">
                {t('contact.socialsLabel')}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/50 dark:bg-gray-800/30 backdrop-blur-sm border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 transition-all ${social.color} hover:border-current hover:shadow-lg group`}
                  >
                    {social.icon}
                    <span className="font-medium">{social.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all -translate-y-1 translate-x-1" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
