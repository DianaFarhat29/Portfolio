import React, { useEffect, useState } from "react";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import ProjectVideo from "../components/projectVideo";
import InfiniteLooper from "../infiniteLooper";
import Github2 from "../gifs/images/github2.png";
import Website from "../gifs/images/website.png";
import PetCarePlaceholder from "../gifs/images/FramePetCare.png";
import PenduPlaceholder from "../gifs/images/FramePendu.png";
import GradeFlowPlaceholder from "../gifs/images/FrameGradeFlow.png";
import CliniqueClicPlaceholder from "../gifs/images/FrameClinique.png";
import ParrotMentorPlaceholder from "../gifs/images/FrameParrot.png";
import LalalandYogaPlaceholder from "../gifs/images/FrameLalaland.png";
import { Project } from "../interfaces";

///////////////////////////// TECHNOLOGIES DATA CONSTANTS ///////////////////////////////

const html5 = { color: "bg-html-color", text: "HTML5" };
const angular = { color: "bg-angular-color", text: "Angular" };
const typescript = { color: "bg-typescript-color", text: "Typescript" };
const spring = { color: "bg-spring-color", text: "Spring Boot" };
const mysql = { color: "bg-mysql-color", text: "MySQL" };
const bootstrap = { color: "bg-bootstrap-color", text: "Bootstrap5" };
const wpf = { color: "bg-wpf-color", text: "WPF" };
const csharp = { color: "bg-csharp-color", text: "C#" };
const entityFramework = { color: "bg-entity-color", text: "Entity Framework" };
const tailwindCss = { color: "bg-tailwind-color", text: "Tailwind CSS" };
const javascript = { color: "bg-javascript-color", text: "Javascript" };
const java = { color: "bg-java-color", text: "Java" };
const thymeleaf = { color: "bg-thymeleaf-color", text: "Thymeleaf" };
const windowsForm = { color: "bg-windowsforms-color", text: "Windows Forms" };

const petCare: Project = {
  title: "PetCare Tracker",
  aboutFr:
    "Développement d'une application web conviviale de suivi des soins pour animaux de compagnie conçue pour aider les propriétaires à gérer les rendez-vous, à créer des profils d'animaux personnalisés et à obtenir des conseils sur les soins quotidiens. Elle est développée à l'aide d'Angular, TypeScript, Spring Boot, MySQL et Bootstrap. De plus, elle dispose d'un compte administrateur avec des fonctions d'administration avancées.",
  about:
    "A user-friendly pet care tracking web application designed to assist owners with appointment management, personalized pet profiles, and daily care guidance; built using Angular, TypeScript, Spring Boot, MySQL, and Bootstrap. Includes administrative account for advanced management functions.",
  video: "/videos/PetCareTracker.mp4",
  github: "https://github.com/DianaFarhat29/PetCare-Tracker.git",
  technologies: [html5, angular, typescript, java, spring, mysql, bootstrap],
  website: "",
  placeholder: PetCarePlaceholder.src,
  bgColor: "#56d4e0"
};

const pendu: Project = {
  title: "Le Pendu",
  aboutFr:
    "Développement d'une application WPF en C# utilisant Entity Framework, qui redonne vie au jeu classique du «Pendu» avec un gameplay captivant, des paramètres personnalisables, une page pour consulter l'historique de vos parties et la possibilité de personnaliser le dictionnaire de mots en anglais et en français.",
  about:
    "A WPF application in C# and with Entity Framework, bringing the classic 'Hangman' game to life with engaging gameplay, customizable settings, a page to view your game history, and the ability to customize the word dictionary in both English and French.",
  video: "/videos/LePendu.mp4",
  github: "https://github.com/DianaFarhat29/BonhommePendu.git",
  technologies: [wpf, csharp, entityFramework],
  website: "",
  placeholder: PenduPlaceholder.src,
  bgColor: "#ffffff"

};

const gradeFlow: Project = {
  title: "GradeFlow",
  aboutFr:
    "Une application web de gestion des étudiants basée sur le web, utilisant Java, Spring, Thymeleaf, HTML, Tailwind CSS et Javascript. Elle comprend l'authentification des utilisateurs et la gestion des étudiants, des cours et des notes.",
  about:
    "A web-based student management web application using Java, Spring, Thymeleaf, HTML, Tailwind CSS and Javascript, featuring user authentication and students/courses/grades management.",
  video: "/videos/GradeFlow.mp4",
  github: "https://github.com/DianaFarhat29/GradeFlow.git",
  technologies: [
    html5,
    tailwindCss,
    javascript,
    java,
    spring,
    thymeleaf,
    mysql,
  ],
  website: "",
  placeholder: GradeFlowPlaceholder.src,
  bgColor: "#e5e7eb"

};

const cliniqueClic: Project = {
  title: "Clinique Clic",
  aboutFr:
    "Développement d'un système sécurisé de prise de rendez-vous médicaux utilisant Java, Spring Boot, MySQL et Bootstrap. Mise en oeuvre de fonctionnalités telles que la réservation de rendez-vous, l'échange de documents et d’un tableau de bord administratif.",
  about:
    "A web-based medical appointment system for patients and doctors, featuring secure login, appointment booking, document exchange, and administrative functions. Built with Java, Spring Boot, Spring MVC, HTML5, CSS3, JavaScript and MySQL.",
  video: "/videos/CliniqueClic.mp4",
  github: "https://github.com/DianaFarhat29/Clinique-Clic.git",
  technologies: [html5, bootstrap, javascript, java, spring, thymeleaf, mysql],
  website: "",
  placeholder: CliniqueClicPlaceholder.src,
  bgColor: "#618cc6"

};

const parrotMentor: Project = {
  title: "Parrot Mentor",
  aboutFr:
    "Création d'une application Windows Forms en C# pour la gestion des étudiants et des programmes reliés à un établissement d'enseignement.",
  about:
    "A Windows Forms application in C#, managing students and programs of teaching establishments.",
  video: "/videos/ParrotMentor.mp4",
  github: "https://github.com/DianaFarhat29/ParrotMentor.git",
  technologies: [windowsForm, csharp],
  website: "",
  placeholder: ParrotMentorPlaceholder.src,
  bgColor: "#c1a5f9"

};

const lalalandYoga: Project = {
  title: "Lalaland Yoga",
  aboutFr:
    "Conception d'un site web visuellement attrayant pour une retraite de yoga sur lalalandyoga.com, utilisant HTML5 et Tailwind CSS. Intégration d'un formulaire de contact API pour simplifier la communication client.",
  about:
    "A website for a modern wellness yoga retreat at lalalandyoga.com with HTML5, Tailwind CSS and an API-integrated contact form for streamlined communication.",
  video: "/videos/LalalandYoga.mp4",
  github: "https://github.com/DianaFarhat29/Lalaland-Yoga-Retreats.git",
  technologies: [html5, tailwindCss, javascript],
  website: "https://lalalandyoga.com/",
  placeholder: LalalandYogaPlaceholder.src,
  bgColor: "#ffffff"

};

interface ProjectSectionProps {
  language: string;
  selectedProject: Project | null;
  state: { isPaneOpen: boolean };
  setState: React.Dispatch<React.SetStateAction<{ isPaneOpen: boolean }>>;
  setSelectedProject: React.Dispatch<React.SetStateAction<Project | null>>;
}

const ProjectSection: React.FC<ProjectSectionProps> = ({
  language,
  selectedProject,
  state,
  setState,
  setSelectedProject,
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="grid w-full grid-flow-row grid-cols-1 gap-10 md:pl-14 lg:grid-cols-2">
      {[petCare, lalalandYoga, gradeFlow, cliniqueClic, parrotMentor, pendu].map((project) => (
        <div
          key={project.title}
          className="relative flex cursor-pointer flex-col rounded-md  shadow-xl "
          style={{backgroundColor: project.bgColor}}
          onClick={() => {
            setState({ isPaneOpen: true });
            setSelectedProject(project);
          }}
        >
          <ProjectVideo
            videoSrc={project.video}
            altText={project.title}
            placeholderSrc={project.placeholder}
          />
          <div className={`bottom-0 flex h-2/6 w-full justify-center items-center gap-1 py-4 md:gap-2 rounded-b-md`}>
            <InfiniteLooper speed={60} direction="left">
              {project.technologies.map((technology) => (
                <div key={technology.text} className="w-full pr-3">
                  <div
                    className={`w-full rounded-full text-white ${technology.color} h-fit whitespace-nowrap px-4 py-1 text-xs shadow-sm md:text-sm`}
                  >
                    {technology.text}
                  </div>
                </div>
              ))}
            </InfiniteLooper>
          </div>
        </div>
      ))}
      <SlidingPane
        className="some-custom-class max-w-[1080px]"
        overlayClassName="some-custom-overlay-class"
        title={language == "en" ? "Go back" : "Retour"}
        isOpen={state.isPaneOpen}
        width="80%"
        onRequestClose={() => {
          setState({ isPaneOpen: false });
        }}
      >
        {selectedProject && (
          <div className="flex flex-col gap-10 overflow-y-auto">
            <div className="flex flex-col gap-5 pt-5">
              <p className="text-2xl font-semibold">{selectedProject.title}</p>
              <video controls={false} autoPlay className="rounded-md ">
                <source src={selectedProject.video} type="video/mp4" />
              </video>
            </div>
            <div className="flex flex-col gap-5">
              <p className="font-semibold">
                {language == "en" ? "About" : "À propos"}
              </p>
              {language == "en" ? (
                <p className="break-words">{selectedProject.about}</p>
              ) : (
                <p className="break-words">{selectedProject.aboutFr}</p>
              )}
            </div>
            <div className="flex flex-col gap-5">
              <p className="font-semibold">Technologies</p>
              <div className="flex w-full flex-wrap gap-3">
                {selectedProject.technologies.map((technology: any) => (
                  <div
                    key={technology.text}
                    className={`rounded-full text-white ${technology.color} px-4 py-1 text-white shadow-md`}
                  >
                    {technology.text}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-5 pt-2">
              <div className="flex items-center gap-2">
                <a
                  href={selectedProject.github}
                  target="blank"
                  className="h-auto w-6"
                >
                  <img src={Github2.src} alt="" />
                </a>
                <p className="font-semibold">Github</p>
              </div>
              <a
                href={selectedProject.github}
                className="text-gray-500 break-words"
                target="blank"
              >
                {selectedProject.github}
              </a>
            </div>
            {selectedProject.website !== "" && (
              <div className="flex flex-col gap-5 pt-2">
                <div className="flex items-center gap-2">
                  <a
                    href={selectedProject.website}
                    target="blank"
                    className="h-auto w-6"
                  >
                    <img src={Website.src} alt="" />
                  </a>
                  <p className="font-semibold">
                    {language == "en" ? "Website" : "Site web"}
                  </p>
                </div>
                <a
                  href={selectedProject.website}
                  className="text-gray-500 break-words"
                  target="blank"
                >
                  {selectedProject.website}
                </a>
              </div>
            )}
          </div>
        )}
      </SlidingPane>
    </div>
  );
};

export default ProjectSection;