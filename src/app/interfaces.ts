interface Technology {
    color: string;
    text: string;
  }
  
  interface Project {
    title: string;
    aboutFr: string;
    about: string;
    video: string;
    github: string;
    website: string;
    technologies: Technology[];
    placeholder: string; 
  }

  export type { Project, Technology };