import { ArrowUp, Heart } from "lucide-react";
import { useTranslations } from "next-intl";

type FooterProps = {
    fullName: string;
    footerInfo: string;
};

export default function Footer({ fullName, footerInfo }: FooterProps) {
    const currentYear = new Date().getFullYear();
    const t = useTranslations("HomePage");

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="w-full py-12 transition-colors duration-300">
            <div className="max-w-5xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">

                    {/* Copyright & Info */}
                    <div className="text-sm text-gray-500 dark:text-gray-400 text-center md:text-left">
                        <p className="font-medium text-gray-900 dark:text-gray-200 mb-1">
                            &copy; {currentYear} {fullName}
                        </p>
                        <p className="flex items-center justify-center md:justify-start gap-1.5 opacity-80">
                            {footerInfo}
                            <span className="inline-block">
                                <Heart className="w-3 h-3 text-emerald-500 fill-emerald-500/20" />
                            </span>
                        </p>
                    </div>

                    {/* Back to Top Button */}
                    <button
                        onClick={scrollToTop}
                        className="group cursor-pointer flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-500/50 transition-all active:scale-95 shadow-sm"
                    >
                        <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider whitespace-nowrap">
                            {t('footer.backToTop')}
                        </span>
                        <div className="p-1 rounded-full bg-white dark:bg-gray-800 group-hover:bg-emerald-500 group-hover:text-white transition-colors flex-shrink-0">
                            <ArrowUp className="w-3 h-3" />
                        </div>
                    </button>

                </div>
            </div>
        </footer>
    );
}
