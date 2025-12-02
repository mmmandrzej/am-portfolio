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
      technologies: ["React", "Next.js", "Node.js"],
      link: "https://github.com/yourproject",
    },
    {
      id: "projectB",
      nameKey: "projectBName",
      descriptionKey: "projectBDescription",
      technologies: ["TypeScript", "Tailwind", "Vercel"],
      link: "https://github.com/yourprojectB",
    },
  ];