"use client";

import Link from "next/link";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Tooltip } from "@mui/material";

export default function SocialLinks() {
    return (
        <div className="flex justify-center space-x-6 mb-8">
            <Link href="https://github.com/yourprofile" target="_blank" aria-label="GitHub">
                <Tooltip title="GitHub" arrow>
                    <div className="w-12 h-12 rounded-full flex items-center justify-center
                        bg-gray-200 dark:bg-gray-700
                        hover:bg-emerald-600 dark:hover:bg-emerald-500
                        transition-all shadow-md
                        transform hover:scale-110 cursor-pointer">
                        <GitHubIcon className="text-emerald-900 dark:text-green-300" fontSize="medium" />
                    </div>
                </Tooltip>
            </Link>
            <Link href="https://linkedin.com/in/yourprofile" target="_blank" aria-label="LinkedIn">
                <Tooltip title="LinkedIn" arrow>
                    <div className="w-12 h-12 rounded-full flex items-center justify-center
                        bg-gray-200 dark:bg-gray-700
                        hover:bg-emerald-600 dark:hover:bg-emerald-500
                        transition-all shadow-md
                        transform hover:scale-110 cursor-pointer">
                        <LinkedInIcon className="text-emerald-900 dark:text-green-300" fontSize="medium" />
                    </div>
                </Tooltip>
            </Link>
        </div>
    );
}
