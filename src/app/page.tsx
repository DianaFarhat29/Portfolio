"use client";

///////////////////////////// IMAGES IMPORTS ///////////////////////////////

import MailImage from "./gifs/images/courrier.png";
import Github2 from "./gifs/images/github2.png";
import LinkedIn from "./gifs/images/linkedin.png";
import LogoNoir from "./gifs/images/monogramDianaFarhatNoir.png";
import Photo from "./gifs/images/photoLinkedIn.jpg";
import FullStack from "./gifs/images/full-stack.png";
import Database from "./gifs/images/database.png";
import Agile from "./gifs/images/agile.png";
import ComputerDesktop from "./gifs/images/computer-desktop.png";
import Development from "./gifs/images/development.png";
import Puzzle from "./gifs/images/puzzle.png";
import CV from "./gifs/images/cvScreenshot.png";
import CvFr from "./gifs/images/cvFr.png";
import Html from "./gifs/images/HTML5.png";
import Spring from "./gifs/images/spring.png";
import Angular from "./gifs/images/angular-logo.png";
import Java from "./gifs/images/java2.webp";
import TailwindCss from "./gifs/images/tailwind.png";
import Css from "./gifs/images/CSS3.png";
import AspNet from "./gifs/images/asp.net.png";
import DownArrow from "./gifs/images/down.png";
import Csharp from "./gifs/images/Csharp.png";
import EntityFramework from "./gifs/images/entityFramework.jpg";
import Javascript from "./gifs/images/javascript.jpg";
import ReactJs from "./gifs/images/reactJs.png";
import Oracle from "./gifs/images/oracle.png";
import MySql from "./gifs/images/mySql.jpg";
import Bootstrap from "./gifs/images/bootstrap.svg";
import Typescript from "./gifs/images/typescript.png";
import WPF from "./gifs/images/wpf.png";
import WindowsForm from "./gifs/images/winforms.png";
import Thymeleaf from "./gifs/images/thymeleaf.png";
import Website from "./gifs/images/website.png";
import Help from "./gifs/images/aide.png";
import Next from "./gifs/images/next.webp";
import Anglais from "./gifs/images/united-states.png";
import Francais from "./gifs/images/france.png";
import PetCarePlaceholder from "./gifs/images/FramePetCare.png";
import PenduPlaceholder from "./gifs/images/FramePendu.png";
import GradeFlowPlaceholder from "./gifs/images/FrameGradeFlow.png";
import CliniqueClicPlaceholder from "./gifs/images/FrameClinique.png";
import ParrotMentorPlaceholder from "./gifs/images/FrameParrot.png";
import LalalandYogaPlaceholder from "./gifs/images/FrameLalaland.png";

///////////////////////////// OTHER IMPORTS ///////////////////////////////

import React, { Component, useState, useEffect } from "react";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import InfiniteLooper from "./infiniteLooper";
import emailjs from "emailjs-com";
import { Fade } from "react-awesome-reveal";
import { Player } from "@lottiefiles/react-lottie-player";
import { Textarea } from "@material-tailwind/react";
import ProjectSection from "./components/ProjectSection";
import { Project } from "./interfaces";

///////////////////////////// TECHNOLOGIES IMAGES CONSTANTS ///////////////////////////////

const images = [
  { id: "html", src: Html.src, alt: "HTML5 Logo" },
  { id: "spring", src: Spring.src, alt: "Spring Logo" },
  { id: "angular", src: Angular.src, alt: "Angular Logo" },
  { id: "java", src: Java.src, alt: "Java Logo" },
  { id: "tailwind", src: TailwindCss.src, alt: "Tailwind CSS Logo" },
  { id: "css", src: Css.src, alt: "CSS3 Logo" },
  { id: "asp", src: AspNet.src, alt: "ASP.NET Logo" },
  { id: "csharp", src: Csharp.src, alt: "Csharp Logo" },
  { id: "entity", src: EntityFramework.src, alt: "Entity Framework Logo" },
  { id: "javascript", src: Javascript.src, alt: "Javascript Logo" },
  { id: "react", src: ReactJs.src, alt: "ReactJS Logo" },
  { id: "next", src: Next.src, alt: "Next.js Logo" },
  { id: "oracle", src: Oracle.src, alt: "Oracle Logo" },
  { id: "mysql", src: MySql.src, alt: "MySql Logo" },
  { id: "bootstrap", src: Bootstrap.src, alt: "Bootstrap Logo" },
  { id: "typescript", src: Typescript.src, alt: "Typescript Logo" },
  { id: "wpf", src: WPF.src, alt: "WPF Logo" },
  { id: "windowsForm", src: WindowsForm.src, alt: "Windows Form Logo" },
  { id: "thymeleaf", src: Thymeleaf.src, alt: "Thymeleaf Logo" },
].map((image) => ({
  id: crypto.randomUUID(),
  image,
}));

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

///////////////////////////// PROJECTS DATA CONSTANTS ///////////////////////////////

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
};

const parrotMentor: Project = {
  title: "Parrot Mentor",
  aboutFr:
    "Création d'une application Windows Forms en C# pour la gestion des étudiants et des programmes reliés d'établissements d'enseignement, .",
  about:
    "A Windows Forms application in C#, managing students and programs of teaching establishments.",
  video: "/videos/ParrotMentor.mp4",
  github: "https://github.com/DianaFarhat29/ParrotMentor.git",
  technologies: [windowsForm, csharp],
  website: "",
  placeholder: ParrotMentorPlaceholder.src,
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
};

export default function Home() {
  const [state, setState] = useState({
    isPaneOpen: false,
  });

  const [selectedProject, setSelectedProject] = useState<Project | null>(
    petCare,
  ); // Ensure type is Project or null
  const [hoveredProject, setHoveredProject] = useState("");

  const [sendText, setSendText] = useState("Send");
  const [sendTextFr, setSendTextFr] = useState("Envoyer");

  const [language, setLanguage] = useState("fr");
  const [changingLanguage, setChangingLanguage] = useState(false);
  ///////////////////////////// EMAILJS FUNCTION ///////////////////////////////

  function sendEmail(event: any) {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_le7h5bq",
        "template_oh36xyg",
        event.target,
        "h18n34H5pvggDSR7I",
      )
      .then(
        (result) => {
          event.target.reset();
          {
            language == "en" ? setSendText("Sent!") : setSendTextFr("Envoyé!");
          }
        },
        (error) => {
          {
            language == "en"
              ? setSendText("Oops, something wrong happened. Send again?")
              : setSendTextFr(
                  "Oops, une erreur s'est produite. Envoyer un nouveau message?",
                );
          }
        },
      );
  }

  return (
    <main className="relative h-full w-full">
      {/* ///////////////////////////// NAV BAR ///////////////////////////// */}

      <div className="mx-auto flex w-full max-w-screen-2xl items-center">
        <div className="relative flex h-10 w-32 -translate-x-2 items-center justify-center md:translate-x-0 md:translate-y-0">
          <img className="absolute" src={LogoNoir.src} alt="logo" />
        </div>
        {state.isPaneOpen == false && (
          <div className="flex h-24 w-full flex-row items-center justify-center bg-white text-center text-sm md:text-base">
            <ul className="fixed z-30 mt-2 flex w-fit items-center justify-center gap-2 rounded-2xl bg-white p-2 px-5 text-center">
              <li className="transition-all duration-200 hover:text-custom-purple">
                <a href="#aboutMe">
                  {language == "en" ? "About me" : "À propos"}
                </a>
              </li>
              <span>|</span>
              <li className="transition-all duration-200 hover:text-custom-purple">
                <a href="#work">{language == "en" ? "Work" : "Travail"}</a>
              </li>
              <span>|</span>
              <li className="transition-all duration-200 hover:text-custom-purple">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        )}

        {/* ///////////////////////////// LANGUAGE CHANGE (ENG OR FR) ///////////////////////////// */}

        <div className="relative flex h-10 w-32 flex-col items-end justify-center gap-2 pr-3">
          {/* ///////////////////////////// ENGLISH ///////////////////////////// */}

          {language == "en" && (
            <div className="justiy-center absolute top-0 flex flex-col gap-2 rounded bg-white p-2 transition-all hover:shadow">
              <button
                className={`flex w-full items-center gap-2 p-1 font-semibold`}
                onClick={() =>
                  changingLanguage
                    ? setChangingLanguage(false)
                    : setChangingLanguage(true)
                }
              >
                <span>EN</span>
              </button>
              {changingLanguage && (
                <button
                  onClick={() => {
                    setLanguage("fr");
                    setChangingLanguage(false);
                  }}
                  className={`flex w-full items-center gap-2 p-1 transition-all duration-200 ease-in-out hover:text-custom-purple`}
                >
                  <span>FR</span>
                </button>
              )}
            </div>
          )}

          {/* ///////////////////////////// FRENCH ///////////////////////////// */}

          {language == "fr" && (
            <div className="justiy-center absolute top-0 flex flex-col gap-2 rounded bg-white p-2 transition-all hover:shadow">
              <button
                className={`flex w-full items-center gap-2 p-1 font-semibold`}
                onClick={() =>
                  changingLanguage
                    ? setChangingLanguage(false)
                    : setChangingLanguage(true)
                }
              >
                <span>FR</span>
              </button>
              {changingLanguage && (
                <button
                  onClick={() => {
                    setLanguage("en");
                    setChangingLanguage(false);
                  }}
                  className={`flex w-full items-center gap-2 p-1 transition-all duration-200 ease-in-out hover:text-custom-purple`}
                >
                  <span>EN</span>
                </button>
              )}
            </div>
          )}
        </div>
        <div className="md:p-6"></div>
      </div>

      <div className="flex w-full flex-col md:flex-row-reverse">
        {/* ///////////////////////////// RIGHT SIDE NAV BAR ///////////////////////////// */}

        {state.isPaneOpen == false && (
          <div className="flex items-center justify-center bg-white p-2 md:h-full md:p-6">
            <ul className="bottom-0 top-0 z-50 flex items-center justify-center gap-5 md:fixed md:w-5 md:flex-col">
              <li className="transition-all duration-200 hover:scale-125">
                <a href="mailto:diana.farhat@outlook.com" target="blank">
                  <img src={MailImage.src} alt="mail" className="w-5" />
                </a>
              </li>

              <li className="transition-all duration-200 hover:scale-125">
                <a href="https://github.com/DianaFarhat29" target="blank">
                  <img src={Github2.src} alt="github" className="w-5" />
                </a>
              </li>

              <li className="transition-all duration-200 hover:scale-125">
                <a
                  href="https://www.linkedin.com/in/diana-farhat/"
                  target="blank"
                >
                  <img src={LinkedIn.src} alt="linkedIn" className="w-5" />
                </a>
              </li>
            </ul>
          </div>
        )}

        <div className="flex h-full w-full flex-col justify-stretch border-r border-r-custom-purple bg-custom-purple">
          <div className="bg-gradient-to-t from-custom-gray to-custom-purple">
            {/* ///////////////////////////// INTRO SECTION ///////////////////////////// */}

            <div className="mx-auto flex max-w-screen-2xl flex-col-reverse items-center justify-center gap-20 p-5 py-20 md:w-3/4 md:flex-row md:gap-10 md:p-20">
              {language == "en" ? (
                <div className="flex flex-1 flex-col items-center justify-center gap-5 md:items-start">
                  <Fade cascade triggerOnce damping={0.5} duration={1000}>
                    <p className="text-center text-3xl font-normal text-white md:text-left md:text-5xl">
                      Hello. I’m Diana Farhat.
                    </p>
                    <p className="text-center text-lg font-light text-white md:text-left">
                      I’m a{" "}
                      <span className="text-black">Full-Stack Developper</span>{" "}
                      and a{" "}
                      <span className="text-black">
                        Object-Oriented Programmer.
                      </span>
                    </p>
                    <p className="text-2xl font-light text-white md:text-3xl">
                      Lets bring your project to life.
                    </p>
                  </Fade>
                </div>
              ) : (
                <div className="flex flex-1 flex-col items-center justify-center gap-5 md:items-start">
                  <Fade cascade triggerOnce damping={0.5} duration={1000}>
                    <p className="text-center text-3xl font-normal text-white md:text-left md:text-5xl">
                      Bonjour. Je suis Diana Farhat.
                    </p>
                    <p className="text-center text-lg font-light text-white md:text-left">
                      Je suis une{" "}
                      <span className="text-black">
                        développeuse Full-Stack
                      </span>{" "}
                      et une{" "}
                      <span className="text-black">
                        <br></br>programmeuse spécialisée en languages orientées
                        objet.
                      </span>
                    </p>
                    <p className="text-2xl font-light text-white md:text-3xl">
                      Donnons vie à votre projet.
                    </p>
                  </Fade>
                </div>
              )}

              {/* ///////////////////////////// LOTTIE ANIMATION ///////////////////////////// */}

              <div className="relative flex w-1/3 items-center justify-center">
                <Fade triggerOnce damping={0.5} duration={2000}>
                  <Player
                    autoplay
                    loop
                    src="https://lottie.host/161a97bd-48e1-43d1-ae0d-37226d36ac39/Dw4iFJe7G6.json"
                    className="w-full min-w-60"
                  ></Player>
                </Fade>
              </div>
            </div>

            {/* ///////////////////////////// ABOUT ME SECTION ///////////////////////////// */}

            <div className=" " id="aboutMe">
              <div className="mx-auto flex max-w-screen-2xl flex-col-reverse items-center justify-center gap-10 p-5 py-20 md:w-3/4 md:flex-row-reverse md:p-20">
                <div className="flex w-full flex-col justify-center gap-2 md:flex-1">
                  <Fade cascade triggerOnce damping={0.5} duration={1000}>
                    <p className="text-center text-2xl font-medium text-custom-purple md:text-left">
                      {language == "en" ? "About me" : "À propos"}
                    </p>
                    <p className="text-center font-light text-black md:text-left">
                      {language == "en"
                        ? "I'm a Full-Stack developer and a programmer with a passion for building beautiful, functional web experiences. My toolkit includes Angular, ReactJS, Spring Boot, databases technologies, and a dash of desktop development magic! I thrive in collaborative environments and love solving problems creatively."
                        : "Je suis une développeuse Full-Stack et une programmeuse passionnée par la création d'expériences Web magnifiques et fonctionnelles. Ma boîte à outils comprend Angular, ReactJS, Spring Boot, des technologies de bases de données et une touche de magie de développement pour ordinateurs de bureau ! Je m'épanouis dans des environnements collaboratifs et j'adore résoudre les problèmes de manière créative."}
                    </p>
                  </Fade>
                </div>
                <div className="flex h-full items-center">
                  <Fade cascade triggerOnce duration={2000}>
                    <img
                      className="w-full max-w-40 rounded-full object-cover shadow-xl md:max-w-52"
                      src={Photo.src}
                      alt="photo"
                    />
                  </Fade>
                </div>
              </div>
            </div>
          </div>

          {/* ///////////////////////////// SKILLSET SECTION ///////////////////////////// */}

          <div
            className="border-right bg-gradient-to-b from-custom-gray to-white"
            id="work"
          >
            <div className="mx-auto flex h-full w-full max-w-screen-2xl flex-col gap-20 p-5 py-20 md:flex-row md:gap-10 md:p-20">
              <div className="relative flex items-center justify-center text-custom-purple md:w-1/4">
                <div className="flex items-center whitespace-nowrap text-5xl md:-rotate-90 md:text-7xl">
                  <Fade duration={1500} triggerOnce>
                    {language == "en" ? "Skillset." : "Compétences."}
                  </Fade>
                </div>
              </div>

              <div className="h-full md:w-3/4">
                {/* ///////////////////////////// SKILLSET GRID ///////////////////////////// */}

                <div className="container m-auto grid grid-cols-1 grid-rows-3 gap-14 md:grid-cols-2">
                  {/* ///////////////////////////// FULL-STACK WEB DEVELOPMENT ///////////////////////////// */}

                  <div className="">
                    <Fade duration={1500} triggerOnce>
                      <img
                        className="w-10 pb-5 transition-all duration-200 ease-in-out hover:scale-110"
                        src={FullStack.src}
                        alt="fullStack"
                      />
                      <p className="pb-2 text-lg font-bold">
                        {language == "en"
                          ? "Full-Stack Web Development"
                          : "Développement Web Full-Stack"}
                      </p>
                      <p className="">
                        {language == "en"
                          ? "I craft robust and visually appealing web experiences. My expertise includes modern front-end frameworks (Angular, ReactJS), robust back-end technologies (Node.js, Java,  Spring Boot, ASP.Net), and efficient REST API integration."
                          : "Je crée des expériences web robustes et visuellement attrayantes. Mon expertise comprend des frameworks front-end modernes (Angular, ReactJS), des technologies back-end solides (Node.js, Java, Spring Boot, ASP.Net) et une intégration efficace des API REST."}
                      </p>
                    </Fade>
                  </div>

                  {/* ///////////////////////////// DATABASE MASTERY ///////////////////////////// */}

                  <div className="">
                    <Fade duration={1500} triggerOnce>
                      <img
                        className="w-10 pb-5 transition-all duration-200 ease-in-out hover:scale-110"
                        src={Database.src}
                        alt="database"
                      />
                      <p className="pb-2 text-lg font-bold">
                        {language == "en"
                          ? "Database Mastery"
                          : "Maîtrise des bases de données"}
                      </p>
                      <p>
                        {language == "en"
                          ? "I comfortably navigate relational (SQL, MySQL, Oracle) and non-relational (MongoDB) databases. This allows me to design and implement scalable data solutions to power your applications."
                          : "Je suis à l'aise avec les bases de données relationnelles (SQL, MySQL, Oracle) et non relationnelles (MongoDB). Cette expertise me permet de concevoir et d'implémenter des solutions de données évolutives et adaptées aux besoins de vos applications."}
                      </p>
                    </Fade>
                  </div>

                  {/* ///////////////////////////// ADAPTABLE DEVELOPMENT PRACTICES ///////////////////////////// */}

                  <div className="">
                    <Fade duration={1500} triggerOnce>
                      <img
                        className="w-10 scale-[115%] pb-5 transition-all duration-200 ease-in-out hover:scale-125"
                        src={Agile.src}
                        alt="agile"
                      />
                      <p className="pb-2 text-lg font-bold">
                        {language == "en"
                          ? "Adaptable Development Practices"
                          : "Pratiques de développement adaptables"}
                      </p>
                      <p>
                        {language == "en"
                          ? "I'm proficient in Agile methodologies, version control (Git), and essential tools like UML to streamline development processes and ensure collaborative success."
                          : "Je maîtrise les méthodologies Agile, le contrôle de version (Git) et les outils essentiels comme UML pour rationaliser les processus de développement et assurer un succès collaboratif."}
                      </p>
                    </Fade>
                  </div>

                  {/* ///////////////////////////// DESKTOP APPLICATION DEVELOPMENT ///////////////////////////// */}

                  <div className="">
                    <Fade duration={1500} triggerOnce>
                      <img
                        className="w-10 pb-5 transition-all duration-200 ease-in-out hover:scale-110"
                        src={ComputerDesktop.src}
                        alt="computerDesktop"
                      />
                      <p className="pb-2 text-lg font-bold">
                        {language == "en"
                          ? "Desktop Application Development"
                          : "Développement d'applications de bureau"}
                      </p>
                      <p>
                        {language == "en"
                          ? "I have experience building desktop applications (Windows Forms, WPF) in C#, enhancing my understanding of user interface design and cross-platform considerations."
                          : "J'ai de l'expérience dans la création d'applications de bureau (Windows Forms, WPF) en C#, ce qui renforce ma compréhension de la conception d'interfaces utilisateur et des considérations multiplateformes."}
                      </p>
                    </Fade>
                  </div>

                  {/* ///////////////////////////// RESPONSIVE & USER-CENTRIC DESIGN ///////////////////////////// */}

                  <div className="">
                    <Fade duration={1500} triggerOnce>
                      <img
                        className="w-10 pb-5 transition-all duration-200 ease-in-out hover:scale-110"
                        src={Development.src}
                        alt="development"
                      />
                      <p className="pb-2 text-lg font-bold">
                        {language == "en"
                          ? "Responsive & User-Centric Design"
                          : "Conception réactive et centrée sur l'utilisateur"}
                      </p>
                      <p>
                        {language == "en"
                          ? "I prioritize crafting websites that adapt seamlessly across devices and deliver intuitive user experiences, utilizing my skills in HTML5, CSS3, Bootstrap, and Tailwind CSS."
                          : "Je donne la priorité à la création de sites Web qui s'adaptent parfaitement à tous les appareils et offrent des expériences utilisateur intuitives, en utilisant mes compétences en HTML5, CSS3, Bootstrap et Tailwind CSS."}
                      </p>
                    </Fade>
                  </div>

                  {/* ///////////////////////////// PROBLEM SOLVING ///////////////////////////// */}

                  <div className="">
                    <Fade duration={1500} triggerOnce>
                      <img
                        className="w-10 pb-5 transition-all duration-200 ease-in-out hover:scale-110"
                        src={Puzzle.src}
                        alt="puzzle"
                      />
                      <p className="pb-2 text-lg font-bold">
                        {" "}
                        {language == "en"
                          ? "Problem Solving"
                          : "Résolution de problèmes"}{" "}
                      </p>
                      <p>
                        {language == "en"
                          ? "I possess the analytical skills to quickly diagnose complex issues and implement creative solutions, constantly seeking new technologies to optimize results."
                          : "Je possède les capacités analytiques nécessaires pour diagnostiquer rapidement des problèmes complexes et mettre en œuvre des solutions créatives, en recherchant constamment de nouvelles technologies pour optimiser les résultats."}
                      </p>
                    </Fade>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ///////////////////////////// TECHNOLOGIES BANNER SECTION ///////////////////////////// */}

          <div className="flex h-full w-full bg-white py-10">
            <InfiniteLooper speed={60} direction="left">
              {images.map(({ id, image }) => (
                <div
                  key={image.id}
                  className="contentBlock-banner contentBlock--one"
                >
                  <img
                    id={image.id}
                    src={image.src}
                    alt={image.alt}
                    className="max-h-20 w-auto"
                  />{" "}
                </div>
              ))}
              {images.map(({ id, image }) => (
                <div
                  key={image.id}
                  className="contentBlock-banner contentBlock--one"
                >
                  <img
                    id={image.id}
                    src={image.src}
                    alt={image.alt}
                    className="max-h-20 w-auto"
                  />{" "}
                </div>
              ))}
            </InfiniteLooper>
          </div>

          {/* ///////////////////////////// PROJECTS SECTION ///////////////////////////// */}

          <div className="bg-gradient-to-b from-white via-custom-purple to-[#ECECEC]">
            <div className="border-right mx-auto flex h-full w-full max-w-screen-2xl flex-col gap-20 p-5 py-20 md:p-20">
              <div className="flex w-full flex-row-reverse items-center justify-center gap-2 md:flex-row md:pl-14">
                <Fade duration={1500} triggerOnce>
                  <p className="text-left text-3xl font-medium text-custom-purple md:text-5xl">
                    {language == "en" ? "My projects." : "Mes projets."}
                  </p>
                  <div className="group relative">
                    <img
                      className="w-10 cursor-pointer transition-all duration-200 ease-in-out hover:scale-110"
                      src={Help.src}
                      alt="help"
                    />

                    <div className="absolute -right-[350%] -top-[150%] z-10 inline-block rounded-lg bg-white px-3 py-2 text-sm font-medium opacity-0 shadow-sm transition-opacity duration-300 group-hover:opacity-100 md:translate-x-1">
                      {language == "en"
                        ? "Hover to animate, click for description."
                        : "Survolez pour animer, cliquez pour la description."}

                      <div className="tooltip-arrow" data-popper-arrow></div>
                    </div>
                  </div>
                </Fade>
              </div>

              <ProjectSection
                language={language}
                selectedProject={selectedProject}
                state={state}
                setState={setState}
                setSelectedProject={setSelectedProject}
              />

              <Fade duration={1500} triggerOnce>
                {language == "en" ? (
                  <p className="text-center md:pl-14">
                    This portfolio was developped using{" "}
                    <span className="h-fit w-full whitespace-nowrap rounded-full bg-react-color px-4 py-1 leading-10 text-white shadow-sm">
                      ReactJS
                    </span>
                    ,{" "}
                    <span className="h-fit w-full whitespace-nowrap rounded-full bg-next-color px-4 py-1 leading-10 text-white shadow-sm">
                      Next.js
                    </span>
                    ,{" "}
                    <span className="h-fit w-full whitespace-nowrap rounded-full bg-typescript-color px-4 py-1 leading-10 text-white shadow-sm">
                      TypeScript
                    </span>{" "}
                    and{" "}
                    <span className="h-fit w-full whitespace-nowrap rounded-full bg-tailwind-color px-4 py-1 leading-10  text-white shadow-sm">
                      Tailwind CSS
                    </span>
                    .
                  </p>
                ) : (
                  <p className="h-10 text-center md:pl-14">
                    Ce portfolio a été développé en utilisant{" "}
                    <span className="h-fit w-full whitespace-nowrap rounded-full bg-react-color px-4 py-1 leading-10 text-white shadow-sm">
                      ReactJS
                    </span>
                    ,{" "}
                    <span className="h-fit w-full whitespace-nowrap rounded-full bg-next-color px-4 py-1 leading-10 text-white shadow-sm">
                      Next.js
                    </span>
                    ,{" "}
                    <span className="h-fit w-full whitespace-nowrap rounded-full bg-typescript-color px-4 py-1 leading-10 text-white shadow-sm">
                      TypeScript
                    </span>{" "}
                    et{" "}
                    <span className="h-fit w-full whitespace-nowrap rounded-full bg-tailwind-color px-4 py-1 leading-10 text-white shadow-sm">
                      Tailwind CSS
                    </span>
                    .
                  </p>
                )}
              </Fade>
            </div>
          </div>

          {/* ///////////////////////////// CURRICULUM VITAE SECTION ///////////////////////////// */}

          <div className="h-full w-full bg-custom-gray">
            <div className="mx-auto max-w-screen-2xl">
              <Fade duration={1500} triggerOnce>
                <div className="flex flex-col gap-20 p-5 py-20 md:flex-row md:p-20">
                  <div className="relative flex items-center justify-center text-custom-purple md:w-1/4">
                    <p className="absolute flex items-center whitespace-nowrap text-3xl md:-rotate-90 md:text-7xl">
                      Curriculum Vitaea.
                    </p>
                  </div>

                  <div className="flex h-full justify-center md:w-3/4">
                    <div className="relative rounded-lg bg-custom-gray shadow-lg">
                      {language == "en" ? (
                        <div className="absolute rounded-lg flex h-full w-full cursor-pointer items-center justify-center bg-custom-purple bg-opacity-5 opacity-0 backdrop-blur-sm transition-all duration-200 ease-in-out hover:opacity-100">
                          <a
                            href="https://drive.google.com/uc?export=download&id=1RQVvwJUIy7xn_uURk4SKFlbcvVKRHaxP"
                            className="btn"
                          >
                            Download CV
                          </a>
                        </div>
                      ) : (
                        <div className="absolute rounded-lg flex h-full w-full cursor-pointer items-center justify-center bg-custom-purple bg-opacity-5 opacity-0 backdrop-blur-sm transition-all duration-200 ease-in-out hover:opacity-100">
                          <a
                            href="https://drive.google.com/uc?export=download&id=1nKQ-NyqwhgDC3vV36BwIWGIiTMaH6XQJ"
                            className="btn"
                          >
                            Téléchager CV
                          </a>
                        </div>
                      )}

                      {language == "en" ? (
                        <img className="rounded-lg" src={CV.src} alt="cv" />
                      ) : (
                        <img className="rounded-lg" src={CvFr.src} alt="cv" />
                      )}
                    </div>
                  </div>
                </div>
              </Fade>
            </div>
          </div>

          {/* ///////////////////////////// CONTACT SECTION ///////////////////////////// */}

          <div
            className="bg-gradient-to-t from-custom-purple to-[#ECECEC] pb-5"
            id="contact"
          >
            <div className="border-right mx-auto flex h-full w-full max-w-screen-2xl flex-col gap-20 p-5 py-20 md:flex-row md:p-20">
              <div className="relative flex items-center justify-center text-custom-purple md:w-1/4 md:text-white">
                <div className="absolute flex items-center whitespace-nowrap text-3xl md:-rotate-90 md:text-7xl">
                  <Fade duration={1500} triggerOnce>
                    {language == "en" ? "Let’s connect." : "Connectons-nous."}
                  </Fade>
                </div>
              </div>

              <div className="h-full w-full md:w-2/3">
                <p className="pb-10 text-center text-lg font-normal text-gray-800 md:text-start">
                  {language == "en"
                    ? "If you are interested to work with me, feel free to send me a message!"
                    : "Si vous êtes intéressé(e) à travailler avec moi, n'hésitez pas à m'envoyer un message !"}
                </p>
                <Fade duration={1500} triggerOnce>
                  <form onSubmit={sendEmail} className="" id="form-email">
                    <div className="space-y-8 rounded-lg bg-white p-10">
                      <div className="relative h-11 w-full min-w-[200px] rounded-none">
                        <input
                          id="name"
                          name="from_name"
                          required
                          placeholder={
                            language == "en" ? "Your name" : "Votre nom"
                          }
                          className="peer rounded-none h-full w-full border-b border-blue-gray-200 bg-transparent pb-1.5 pt-4 text-blue-gray-900 outline outline-0 transition-all placeholder:opacity-0 placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 focus:placeholder:opacity-100 disabled:border-0 disabled:bg-blue-gray-50"
                        />
                        <label className="after:content[''] pointer-events-none absolute -top-1.5 left-0 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                          {language == "en" ? "Name" : "Nom"}
                        </label>
                      </div>

                      <div className="relative h-11 w-full min-w-[200px] rounded-none">
                        <input
                          id="email"
                          name="from_email"
                          required
                          placeholder={
                            language == "en" ? "Your email" : "Votre courriel"
                          }
                          className="peer rounded-none h-full w-full border-b border-blue-gray-200 bg-transparent pb-1.5 pt-4 text-blue-gray-900 outline outline-0 transition-all placeholder:opacity-0 placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 focus:placeholder:opacity-100 disabled:border-0 disabled:bg-blue-gray-50"
                        />
                        <label className="after:content[''] pointer-events-none absolute -top-1.5 left-0 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                          {language == "en" ? "Email" : "Courriel"}
                        </label>
                      </div>

                      <div className="relative h-auto w-full min-w-[200px] rounded-none">
                        <textarea
                          id="message"
                          name="message"
                          required
                          placeholder={
                            language === "en" ? "Your message" : "Votre message"
                          }
                          className="peer -mb-1 h-full w-full border-b border-l-0 border-r-0 border-t-0 border-blue-gray-200 bg-transparent pb-1.5 pl-0 pt-4 text-blue-gray-900 outline outline-0 transition-all placeholder:opacity-0 placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 focus:placeholder:opacity-100 disabled:border-0 disabled:bg-blue-gray-50"
                          rows={6}
                        ></textarea>
                        <label className="after:content[''] pointer-events-none absolute -top-1.5 left-0 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                          {language === "en" ? "Message" : "Message"}
                        </label>
                      </div>

                      <button
                        className="cta flex items-baseline pt-5"
                        type="submit"
                      >
                        {language == "en" ? (
                          <span className="hover-underline-animation">
                            {" "}
                            {sendText}{" "}
                          </span>
                        ) : (
                          <span className="hover-underline-animation">
                            {" "}
                            {sendTextFr}{" "}
                          </span>
                        )}
                        <svg
                          id="arrow-horizontal"
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="10"
                          viewBox="0 0 46 16"
                        >
                          <path
                            id="Path_10"
                            data-name="Path 10"
                            d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                            transform="translate(30)"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </form>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex h-20 w-full items-end justify-center">
        <div
          className="absolute -top-5 flex w-10 cursor-pointer items-center justify-center rounded bg-white shadow md:-top-7 md:w-14"
          onClick={() => window.scrollTo(0, 0)}
        >
          <img className="scale-125" src={LogoNoir.src} alt="logo" />
        </div>
        <p className="p-4">
          {language == "en"
            ? "© 2024 Diana Farhat. All Rights Reserved."
            : "© 2024 Diana Farhat. Tous droits réservés."}
        </p>
      </div>
    </main>
  );
}
