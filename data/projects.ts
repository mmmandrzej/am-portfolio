import { personalInfo } from "@/data/personal";

export type Project = {
    id: string;
    nameKey: string;           // translation key for name
    descriptionKey: string;    // translation key for description
    technologies: string[];    // list of tech badges
    link: string;              // external link
  };
  
  export const projects: Project[] = [
    {
      id: "projectA",
      nameKey: "projectAName",
      descriptionKey: "projectADescription",
      technologies: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
      link: "https://github.com/mmmandrzej/am-portfolio",
    },
  ];