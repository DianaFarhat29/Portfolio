"use client";

///////////////////////////// IMAGES IMPORTS ///////////////////////////////

import MailImage from "./images/courrier.png";
import Github2 from "./images/github2.png";
import LinkedIn from "./images/linkedin.png";
import LogoNoir from "./images/monogramDianaFarhatNoir.png";
import Photo from "./images/photoLinkedIn.jpg";
import FullStack from "./images/full-stack.png";
import Database from "./images/database.png";
import Agile from "./images/agile.png";
import ComputerDesktop from "./images/computer-desktop.png";
import Development from "./images/development.png";
import Puzzle from "./images/puzzle.png";
import CV from "./images/cvScreenshot.png";
import CvFr from "./images/cvFr.png";
import Html from "./images/HTML5.png";
import Spring from "./images/spring.png";
import Angular from "./images/angular-logo.png";
import Java from "./images/java2.webp";
import TailwindCss from "./images/tailwind.png";
import Css from "./images/CSS3.png";
import AspNet from "./images/asp.net.png";
import DownArrow from "./images/down.png";
import Csharp from "./images/Csharp.png";
import EntityFramework from "./images/entityFramework.jpg";
import Javascript from "./images/javascript.jpg";
import ReactJs from "./images/reactJs.png";
import Oracle from "./images/oracle.png";
import MySql from "./images/mySql.jpg";
import Bootstrap from "./images/bootstrap.svg";
import Typescript from "./images/typescript.png";
import WPF from "./images/wpf.png";
import WindowsForm from "./images/winforms.png";
import Thymeleaf from "./images/thymeleaf.png";
import Website from "./images/website.png";
import Help from "./images/aide.png";
import Next from "./images/next.webp";
import Anglais from "./images/united-states.png";
import Francais from "./images/france.png";

///////////////////////////// OTHER IMPORTS ///////////////////////////////

import React, { Component, useState, useEffect } from "react";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import InfiniteLooper from "./infiniteLooper";
import emailjs from "emailjs-com";
import { Fade } from "react-awesome-reveal";
import { Player } from "@lottiefiles/react-lottie-player";

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

const petCare = {
  title: "PetCare Tracker",
  aboutFr:
    "Développement d'une application web conviviale de suivi des soins pour animaux de compagnie conçue pour aider les propriétaires à gérer les rendez-vous, à créer des profils d'animaux personnalisés et à obtenir des conseils sur les soins quotidiens. Elle est développée à l'aide d'Angular, TypeScript, Spring Boot, MySQL et Bootstrap. De plus, elle dispose d'un compte administrateur avec des fonctions d'administration avancées.",
  about:
    "A user-friendly pet care tracking web application designed to assist owners with appointment management, personalized pet profiles, and daily care guidance; built using Angular, TypeScript, Spring Boot, MySQL, and Bootstrap. Includes administrative account for advanced management functions.",
  video: "/videos/PetCareTracker.mp4",
  github: "https://github.com/DianaFarhat29/PetCare-Tracker.git",
  technologies: [html5, angular, typescript, java, spring, mysql, bootstrap],
  website: "",
};

const pendu = {
  title: "Le Pendu",
  aboutFr:
    "Développement d'une application WPF en C# utilisant Entity Framework, qui redonne vie au jeu classique du «Pendu» avec un gameplay captivant, des paramètres personnalisables, une page pour consulter l'historique de vos parties et la possibilité de personnaliser le dictionnaire de mots en anglais et en français.",
  about:
    "A WPF application in C# and with Entity Framework, bringing the classic 'Hangman' game to life with engaging gameplay, customizable settings, a page to view your game history, and the ability to customize the word dictionary in both English and French.",
  video: "/videos/LePendu.mp4",
  github: "https://github.com/DianaFarhat29/BonhommePendu.git",
  technologies: [wpf, csharp, entityFramework],
  website: "",
};

const gradeFlow = {
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
};

const cliniqueClic = {
  title: "Clinique Clic",
  aboutFr:
    "Développement d'un système sécurisé de prise de rendez-vous médicaux utilisant Java, Spring Boot, MySQL et Bootstrap. Mise en oeuvre de fonctionnalités telles que la réservation de rendez-vous, l'échange de documents et d’un tableau de bord administratif.",
  about:
    "A web-based medical appointment system for patients and doctors, featuring secure login, appointment booking, document exchange, and administrative functions. Built with Java, Spring Boot, Spring MVC, HTML5, CSS3, JavaScript and MySQL.",
  video: "/videos/CliniqueClic.mp4",
  github: "https://github.com/DianaFarhat29/Clinique-Clic.git",
  technologies: [html5, bootstrap, javascript, java, spring, thymeleaf, mysql],
  website: "",
};

const parrotMentor = {
  title: "Parrot Mentor",
  aboutFr:
    "Création d'une application Windows Forms en C# pour la gestion des étudiants et des programmes reliés d'établissements d'enseignement, .",
  about:
    "A Windows Forms application in C#, managing students and programs of teaching establishments.",
  video: "/videos/ParrotMentor.mp4",
  github: "https://github.com/DianaFarhat29/ParrotMentor.git",
  technologies: [windowsForm, csharp],
  website: "",
};

const lalalandYoga = {
  title: "Lalaland Yoga",
  aboutFr:
    "Conception d'un site web visuellement attrayant pour une retraite de yoga sur lalalandyoga.com, utilisant HTML5 et Tailwind CSS. Intégration d'un formulaire de contact API pour simplifier la communication client.",
  about:
    "A website for a modern wellness yoga retreat at lalalandyoga.com with HTML5, Tailwind CSS and an API-integrated contact form for streamlined communication.",
  video: "/videos/LalalandYoga.mp4",
  github: "https://github.com/DianaFarhat29/Lalaland-Yoga-Retreats.git",
  technologies: [html5, tailwindCss, javascript],
  website: "https://lalalandyoga.com/",
};

export default function Home() {
  const [state, setState] = useState({
    isPaneOpen: false,
  });

  const [selectedProject, setSelectedProject] = useState(petCare);
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
        "h18n34H5pvggDSR7I"
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
                  "Oops, une erreur s'est produite. Envoyer un nouveau message?"
                );
          }
        }
      );
  }

  return (
    <main className=" w-full h-full relative">
      {/* ///////////////////////////// NAV BAR ///////////////////////////// */}

      <div className="flex  w-full items-center max-w-screen-2xl mx-auto">
        <div className="flex  justify-center items-center w-32 h-10  relative md:translate-y-0 md:translate-x-0  -translate-x-2">
          <img className=" absolute " src={LogoNoir.src} alt="logo" />
        </div>
        {state.isPaneOpen == false && (
          <div className=" flex flex-row text-center h-24  bg-white w-full justify-center items-center text-sm md:text-base">
            <ul className="flex justify-center items-center text-center w-fit gap-2 fixed p-2 mt-2 px-5 bg-white rounded-2xl z-30">
              <li className="hover:text-custom-purple transition-all duration-200 ">
                <a href="#aboutMe">
                  {language == "en" ? "About me" : "À propos"}
                </a>
              </li>
              <span>|</span>
              <li className="hover:text-custom-purple transition-all duration-200">
                <a href="#work">{language == "en" ? "Work" : "Travail"}</a>
              </li>
              <span>|</span>
              <li className="hover:text-custom-purple transition-all duration-200">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        )}

        {/* ///////////////////////////// LANGUAGE CHANGE (ENG OR FR) ///////////////////////////// */}

        <div className="flex flex-col gap-2 h-10 w-32 relative items-start justify-center ">
          {/* ///////////////////////////// ENGLISH ///////////////////////////// */}

          {language == "en" && (
            <div className="flex flex-col justiy-center gap-2 bg-white rounded p-2  hover:shadow transition-all absolute top-0 translate-x-6 md:translate-x-0">
              <button
                className={`flex gap-1 items-center justify-between w-full font-semibold p-1 bg-white
            `}
                onClick={() =>
                  changingLanguage
                    ? setChangingLanguage(false)
                    : setChangingLanguage(true)
                }
              >
                <img src={Anglais.src} alt="" className="w-5" />
              </button>
              {changingLanguage && (
                <button
                  onClick={() => {
                    setLanguage("fr");
                    setChangingLanguage(false);
                  }}
                  className={`flex gap-2 items-center justify-between w-full p-1 bg-white
            `}
                >
                  <img src={Francais.src} alt="" className="w-5" />
                </button>
              )}
            </div>
          )}

          {/* ///////////////////////////// FRENCH ///////////////////////////// */}

          {language == "fr" && (
            <div className="flex flex-col justiy-center gap-2 bg-white rounded p-2  hover:shadow transition-all absolute top-0 md:translate-y-0 md:translate-x-0 translate-y-12 translate-x-6">
              <button
                className={`flex gap-1 items-center justify-between w-full font-semibold p-1 bg-white
            `}
                onClick={() =>
                  changingLanguage
                    ? setChangingLanguage(false)
                    : setChangingLanguage(true)
                }
              >
                <img src={Francais.src} alt="" className="w-5" />
              </button>

              {changingLanguage && (
                <button
                  onClick={() => {
                    setLanguage("en");
                    setChangingLanguage(false);
                  }}
                  className={`flex gap-2 items-center justify-between w-full p-1 bg-white
            `}
                >
                  <img src={Anglais.src} alt="" className="w-5" />
                </button>
              )}
            </div>
          )}
        </div>
        <div className="md:p-6"></div>
      </div>

      <div className=" flex flex-col md:flex-row-reverse w-full ">
        {/* ///////////////////////////// RIGHT SIDE NAV BAR ///////////////////////////// */}

        {state.isPaneOpen == false && (
          <div className="flex items-center md:h-full bg-white p-2 md:p-6 justify-center ">
            <ul className="flex md:flex-col md:w-5 gap-5 md:fixed items-center justify-center bottom-0 top-0 z-50">
              <li className=" transition-all duration-200 hover:scale-125">
                <a href="mailto:diana.farhat@outlook.com" target="blank">
                  <img src={MailImage.src} alt="mail" className="w-5" />
                </a>
              </li>

              <li className=" transition-all duration-200 hover:scale-125">
                <a href="https://github.com/DianaFarhat29" target="blank">
                  <img src={Github2.src} alt="github" className="w-5" />
                </a>
              </li>

              <li className=" transition-all duration-200 hover:scale-125">
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

        <div className="flex flex-col w-full h-full justify-stretch border-r border-r-custom-purple bg-custom-purple ">
          <div className="bg-gradient-to-t from-custom-gray to-custom-purple">
            {/* ///////////////////////////// INTRO SECTION ///////////////////////////// */}

            <div className="items-center justify-center flex flex-col-reverse md:flex-row  p-5 md:p-20 py-20 gap-20 md:gap-10 md:w-3/4 mx-auto max-w-screen-2xl">
              {language == "en" ? (
                <div className="flex flex-1 flex-col gap-5 justify-center items-center md:items-start ">
                  <Fade cascade triggerOnce damping={0.5} duration={1000}>
                    <p className="text-white text-3xl md:text-5xl font-normal text-center md:text-left">
                      Hello. I’m Diana Farhat.
                    </p>
                    <p className="text-white text-center md:text-left text-xl font-light">
                      I’m a{" "}
                      <span className="text-black">Full-Stack Developper</span>{" "}
                      and a{" "}
                      <span className="text-black">
                        Object-Oriented Programmer.
                      </span>
                    </p>
                    <p className="text-white text-2xl md:text-3xl font-light">
                      Lets bring your project to life.
                    </p>
                  </Fade>
                </div>
              ) : (
                <div className="flex flex-1 flex-col gap-5 justify-center items-center md:items-start ">
                  <Fade cascade triggerOnce damping={0.5} duration={1000}>
                    <p className="text-white text-3xl md:text-5xl font-normal text-center md:text-left">
                      Bonjour. Je suis Diana Farhat.
                    </p>
                    <p className="text-white text-center md:text-left text-xl font-light">
                      Je suis une{" "}
                      <span className="text-black ">
                        développeuse Full-Stack
                      </span>{" "}
                      et une{" "}
                      <span className="text-black">
                        <br></br>programmeuse spécialisée en languages orientées
                        objet.
                      </span>
                    </p>
                    <p className="text-white text-2xl md:text-3xl font-light">
                      Donnons vie à votre projet.
                    </p>
                  </Fade>
                </div>
              )}

              {/* ///////////////////////////// LOTTIE ANIMATION ///////////////////////////// */}

              <div className="flex w-1/3 justify-center relative items-center  ">
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
              <div className="md:w-3/4 mx-auto flex flex-col-reverse md:flex-row-reverse justify-center items-center gap-10 p-5 md:p-20 py-20 max-w-screen-2xl">
                <div className="flex w-full md:flex-1 flex-col gap-2 justify-center ">
                  <Fade cascade triggerOnce damping={0.5} duration={1000}>
                    <p className="text-custom-purple text-center md:text-left text-2xl font-medium">
                      {language == "en" ? "ABOUT ME" : "À PROPOS"}
                    </p>
                    <p className="text-black text-center md:text-left text-lg font-light">
                      {language == "en"
                        ? "I'm a full-stack developer and a programmer with a passion for building beautiful, functional web experiences. My toolkit includes Angular, ReactJS, Spring Boot, databases technologies, and a dash of desktop development magic! I thrive in collaborative environments and love solving problems creatively."
                        : "Je suis une développeuse full-stack et une programmeuse passionnée par la création d'expériences Web magnifiques et fonctionnelles. Ma boîte à outils comprend Angular, ReactJS, Spring Boot, des technologies de bases de données et une touche de magie de développement pour ordinateurs de bureau ! Je m'épanouis dans des environnements collaboratifs et j'adore résoudre les problèmes de manière créative."}
                    </p>
                  </Fade>
                </div>
                <div className="flex h-full items-center  ">
                  <Fade cascade triggerOnce duration={2000}>
                    <img
                      className="w-full max-w-40 md:max-w-52 shadow-xl object-cover rounded-full"
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
            className=" border-right bg-gradient-to-b from-custom-gray to-white  "
            id="work"
          >
            <div className="w-full flex flex-col md:flex-row h-full mx-auto p-5 md:p-20 py-20 gap-20 md:gap-10 max-w-screen-2xl">
              <div className="md:w-1/4 flex justify-center relative items-center text-custom-purple">
                <div className="md:-rotate-90 flex items-center text-5xl md:text-7xl whitespace-nowrap">
                  <Fade duration={1500} triggerOnce>
                    {language == "en" ? "Skillset." : "Compétences."}
                  </Fade>
                </div>
              </div>

              <div className=" md:w-3/4 h-full  ">
                {/* ///////////////////////////// SKILLSET GRID ///////////////////////////// */}

                <div className="container m-auto grid grid-cols-1 md:grid-cols-2 grid-rows-3 gap-14 text-lg">
                  {/* ///////////////////////////// FULL-STACK WEB DEVELOPMENT ///////////////////////////// */}

                  <div className="">
                    <Fade duration={1500} triggerOnce>
                      <img
                        className="w-10 pb-5 hover:scale-110 transition-all duration-200 ease-in-out"
                        src={FullStack.src}
                        alt="fullStack"
                      />
                      <p className="font-bold pb-2">
                        {language == "en"
                          ? "Full-Stack Web Development"
                          : "Développement Web Full-Stack"}
                      </p>
                      <p className="text-light">
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
                        className="w-10 pb-5 hover:scale-110 transition-all duration-200 ease-in-out"
                        src={Database.src}
                        alt="database"
                      />
                      <p className="font-bold pb-2">
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
                        className="w-10 pb-5 scale-[115%] hover:scale-125 transition-all duration-200 ease-in-out"
                        src={Agile.src}
                        alt="agile"
                      />
                      <p className="font-bold pb-2">
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
                        className="w-10 pb-5 hover:scale-110 transition-all duration-200 ease-in-out"
                        src={ComputerDesktop.src}
                        alt="computerDesktop"
                      />
                      <p className="font-bold pb-2">
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
                        className="w-10 pb-5 hover:scale-110 transition-all duration-200 ease-in-out"
                        src={Development.src}
                        alt="development"
                      />
                      <p className="font-bold pb-2">
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
                        className="w-10 pb-5 hover:scale-110 transition-all duration-200 ease-in-out"
                        src={Puzzle.src}
                        alt="puzzle"
                      />
                      <p className="font-bold pb-2">
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

         <div className="bg-white w-full h-full py-10 flex ">
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

          <div className=" bg-gradient-to-b from-white via-custom-purple to-[#ECECEC] ">
            <div className="w-full flex flex-col border-right h-full p-5 md:p-20 py-20 gap-20 max-w-screen-2xl mx-auto">
              <div className="w-full md:pl-14 flex flex-row-reverse md:flex-row gap-2 justify-center items-center">
                <Fade duration={1500} triggerOnce>
                  <p className="text-left text-3xl md:text-5xl font-medium text-custom-purple">
                    {language == "en" ? "MY PROJECTS." : "Mes projets."}
                  </p>
                  <div className="relative group ">
                    <img
                      className="w-10 hover:scale-110 transition-all duration-200 ease-in-out cursor-pointer"
                      src={Help.src}
                      alt="help"
                    />

                    <div className="group-hover:opacity-100  absolute z-10 -right-[350%] -top-[150%]  md:translate-x-1 inline-block px-3 py-2 text-sm font-medium  transition-opacity duration-300 bg-white rounded-lg shadow-sm opacity-0 ">
                      {language == "en"
                        ? "Hover to animate, click for description."
                        : "Survolez pour animer, cliquez pour la description."}

                      <div className="tooltip-arrow" data-popper-arrow></div>
                    </div>
                  </div>
                </Fade>
              </div>

              {/* ///////////////////////////// RIGHT PANNEL SLIDE FOR PROJECT DESCRIPTION ///////////////////////////// */}

              <SlidingPane
                className="some-custom-class "
                overlayClassName="some-custom-overlay-class "
                title={language == "en" ? "Go back" : "Retour"}
                isOpen={state.isPaneOpen}
                width="60%"
                onRequestClose={() => {
                  setState({ isPaneOpen: false });
                }}
              >
                {selectedProject && (
                  <div className="flex flex-col gap-10 text-lg">
                    <div className="flex flex-col gap-5 pt-5">
                      <p className="text-2xl font-semibold">
                        {selectedProject.title}
                      </p>

                      <video controls={false} autoPlay className="rounded-md">
                        <source src={selectedProject.video} type="video/mp4" />
                      </video>
                    </div>

                    {/* ///////////////////////////// ABOUT THE PROJECT ///////////////////////////// */}

                    <div className="flex flex-col gap-5">
                      <p className="font-semibold">
                        {" "}
                        {language == "en" ? "About" : "À propos"}
                      </p>
                      {language == "en" ? (
                        <p className="">{selectedProject.about}</p>
                      ) : (
                        <p>{selectedProject.aboutFr}</p>
                      )}
                    </div>

                    {/* ///////////////////////////// PROJECT TECHNOLOGIES ///////////////////////////// */}

                    <div className="flex flex-col gap-5">
                      <p className="font-semibold">Technologies</p>
                      <div className="flex flex-wrap w-full gap-3 whitespace-nowrap">
                        {selectedProject.technologies.map((technology) => {
                          return (
                            <div
                              key={technology.text}
                              className={`rounded-full text-white ${technology.color} px-4 py-1 shadow-md whitespace-nowrap text-white`}
                            >
                              {" "}
                              {technology.text}{" "}
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* ///////////////////////////// GITHUB LINK OF PROJECT ///////////////////////////// */}

                    <div className="flex flex-col gap-5 pt-2 ">
                      <div className="flex gap-2 items-center">
                        <a
                          href={selectedProject.github}
                          target="blank"
                          className="w-8 h-auto"
                        >
                          <img src={Github2.src} alt="" />
                        </a>{" "}
                        <p className="font-semibold">Github</p>
                      </div>
                      <a
                        href={selectedProject.github}
                        className="text-md md:text-lg text-gray-500 "
                        target="blank"
                      >
                        {selectedProject.github}
                      </a>{" "}
                    </div>

                    {/* ///////////////////////////// WEBSITE LINK OF PROJECT ///////////////////////////// */}

                    {selectedProject.website !== "" && (
                      <div className="flex flex-col gap-5 pt-2">
                        <div className="flex gap-2 items-center">
                          <a
                            href={selectedProject.website}
                            target="blank"
                            className="w-8 h-auto"
                          >
                            <img src={Website.src} alt="" />
                          </a>{" "}
                          <p className="font-semibold">
                            {language == "en" ? "Website" : "Site web"}
                          </p>
                        </div>
                        <a
                          href={selectedProject.website}
                          className="text-md md:text-lg text-gray-500"
                          target="blank"
                        >
                          {selectedProject.website}
                        </a>{" "}
                      </div>
                    )}
                  </div>
                )}
              </SlidingPane>

              <Fade duration={1500} triggerOnce>
                {/* ///////////////////////////// GRID ///////////////////////////// */}

                <div className=" grid grid-cols-1 lg:grid-cols-2 grid-flow-row gap-10 w-full md:pl-14 ">
                  <div
                    className="shadow-xl relative  flex flex-col bg-[#56D4E0] rounded-md cursor-pointer"
                    onClick={() => {
                      setState({ isPaneOpen: true });
                      setSelectedProject(petCare);
                    }}
                  >
                    {/* ///////////////////////////// PETCARE TRACKER PROJECT ///////////////////////////// */}

                    <video
                      className="rounded-t-md h-5/6"
                      onMouseOver={(e) => (e.target as HTMLVideoElement).play()}
                      onMouseOut={(e) => {
                        const video = e.target as HTMLVideoElement;
                        video.pause();
                        video.currentTime = 0;
                      }}
                      muted
                      src={petCare.video}
                    />

                    <div className="flex justify-center gap-1 md:gap-2 pb-4  h-1/6 bottom-0 w-full">
                      <InfiniteLooper speed={60} direction="left">
                        {petCare.technologies.map((technology) => {
                          return (
                            <div key={technology.text} className="pr-3 w-full ">
                              <div
                                className={`rounded-full w-full text-white ${technology.color} py-1 px-4 text-xs md:text-sm shadow-sm h-fit whitespace-nowrap`}
                              >
                                {technology.text}
                              </div>{" "}
                            </div>
                          );
                        })}
                      </InfiniteLooper>
                    </div>
                  </div>

                  {/* ///////////////////////////// LE PENDU PROJECT ///////////////////////////// */}

                  <div className="flex flex-col bg-white shadow-xl rounded-md relative">
                  <div
                    className="shadow-xl relative flex flex-col bg-white rounded-md cursor-pointer"
                    onClick={() => {
                      setState({ isPaneOpen: true });
                      setSelectedProject(pendu);
                    }}
                  >
                      <video
                  className="rounded-t-md h-5/6"
                        onMouseOver={(e) =>
                          (e.target as HTMLVideoElement).play()
                        }
                        onMouseOut={(e) => {
                          const video = e.target as HTMLVideoElement;
                          video.pause();
                          video.currentTime = 0;
                        }}
                        muted
                        src={pendu.video}
                      />

                  <div className="flex justify-center gap-1 md:gap-2 pb-4 h-1/6 bottom-0 w-full">
                        {pendu.technologies.map((technology) => {
                          return (
                            <div
                              key={technology.text}
                              className="flex justify-center "
                            >
                              <div
                                className={`rounded-full w-full text-white ${technology.color} py-1 px-4 text-xs md:text-sm shadow-sm h-fit whitespace-nowrap`}
                              >
                                {technology.text}
                              </div>{" "}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* ///////////////////////////// GRADEFLOW PROJECT ///////////////////////////// */}

                  <div
                    className="shadow-xl relative flex flex-col bg-[#1F2936] rounded-md cursor-pointer"
                    onClick={() => {
                      setState({ isPaneOpen: true });
                      setSelectedProject(gradeFlow);
                    }}
                  >
                      <video
                        className="rounded-t-md"
                        onMouseOver={(e) =>
                          (e.target as HTMLVideoElement).play()
                        }
                        onMouseOut={(e) => {
                          const video = e.target as HTMLVideoElement;
                          video.pause();
                          video.currentTime = 0;
                        }}
                        muted
                        src={gradeFlow.video}
                      />

<div className="flex justify-center gap-1 md:gap-2 pb-4  bottom-0 w-full">
                      <InfiniteLooper speed={60} direction="left">
                        {gradeFlow.technologies.map((technology) => {
                          return (
                            <div key={technology.text} className="pr-3 w-full ">
                              <div
                                className={`rounded-full w-full text-white ${technology.color} py-1 px-4 text-xs md:text-sm shadow-sm h-fit whitespace-nowrap`}
                              >
                                {technology.text}
                              </div>{" "}
                            </div>
                          );
                        })}
                      </InfiniteLooper>
                    </div>
                  </div>

                  {/* ///////////////////////////// CLINIQUE CLIC PROJECT ///////////////////////////// */}

               
                  <div
                    className="shadow-xl relative flex flex-col bg-[#618CC6] rounded-md cursor-pointer"
                    onClick={() => {
                      setState({ isPaneOpen: true });
                      setSelectedProject(cliniqueClic);
                    }}
                  >
                      <video
                  className="rounded-t-md"
                        onMouseOver={(e) =>
                          (e.target as HTMLVideoElement).play()
                        }
                        onMouseOut={(e) => {
                          const video = e.target as HTMLVideoElement;
                          video.pause();
                          video.currentTime = 0;
                        }}
                        muted
                        src={cliniqueClic.video}
                      />

                <div className="flex justify-center gap-1 md:gap-2 pb-4  bottom-0 w-full">
                      <InfiniteLooper speed={60} direction="left">
                        {cliniqueClic.technologies.map((technology) => {
                          return (
                            <div key={technology.text} className="pr-3 w-full ">
                              <div
                                className={`rounded-full w-full text-white ${technology.color} py-1 px-4 text-xs md:text-sm shadow-sm h-fit whitespace-nowrap`}
                              >
                                {technology.text}
                              </div>{" "}
                            </div>
                          );
                        })}
                      </InfiniteLooper>
                    </div>
                  </div>

                  {/* ///////////////////////////// PARROT MENTOR PROJECT ///////////////////////////// */}

       
                  <div
                    className="shadow-xl relative flex flex-col bg-[#C0A5F9] rounded-md cursor-pointer"
                    onClick={() => {
                      setState({ isPaneOpen: true });
                      setSelectedProject(parrotMentor);
                    }}
                  >
                      <video
                   className="rounded-t-md h-5/6"
                        onMouseOver={(e) =>
                          (e.target as HTMLVideoElement).play()
                        }
                        onMouseOut={(e) => {
                          const video = e.target as HTMLVideoElement;
                          video.pause();
                          video.currentTime = 0;
                        }}
                        muted
                        src={parrotMentor.video}
                      />

<div className="flex justify-center gap-1 md:gap-2 pb-4 h-1/6 bottom-0 w-full">
                      {parrotMentor.technologies.map((technology) => {
                        return (
                          <div
                            key={technology.text}
                            className="flex justify-center "
                          >
                            <div
                              className={`rounded-full w-full text-white ${technology.color} py-1 px-4 text-xs md:text-sm shadow-sm h-fit whitespace-nowrap`}
                            >
                              {technology.text}
                            </div>{" "}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* ///////////////////////////// LALALAND YOGA PROJECT ///////////////////////////// */}

                  <div
                    className="shadow-xl relative flex flex-col bg-white rounded-md cursor-pointer w-full"
                    onClick={() => {
                      setState({ isPaneOpen: true });
                      setSelectedProject(lalalandYoga);
                    }}
                  >
                      <video
              className="rounded-t-md lg:h-5/6"
                        onMouseOver={(e) =>
                          (e.target as HTMLVideoElement).play()
                        }
                        onMouseOut={(e) => {
                          const video = e.target as HTMLVideoElement;
                          video.pause();
                          video.currentTime = 0;
                        }}
                        muted
                        src={lalalandYoga.video}
                      />

<div className="flex justify-center gap-1 md:gap-2 pb-4 lg:h-1/6 bottom-0 w-full">
                      {lalalandYoga.technologies.map((technology) => {
                        return (
                          <div
                            key={technology.text}
                            className="flex justify-center "
                          >
                            <div
                              className={`rounded-full w-full text-white ${technology.color} py-1 px-4 text-xs md:text-sm shadow-sm h-fit whitespace-nowrap`}
                            >
                              {technology.text}
                            </div>{" "}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                </div>
                {language == "en" ? (
                  <p className="text-center  md:pl-14">
                    This portfolio was developped using <span className="rounded-full w-full text-white bg-react-color py-1 px-4 shadow-sm h-fit whitespace-nowrap">ReactJS</span>, <span className="rounded-full w-full text-white bg-next-color py-1 px-4 shadow-sm h-fit whitespace-nowrap">Next.js</span>, <span className="rounded-full w-full text-white bg-typescript-color py-1 px-4 shadow-sm h-fit whitespace-nowrap">Typescript</span> and <span className="rounded-full w-full text-white bg-tailwind-color py-1 px-4 shadow-sm h-fit whitespace-nowrap leading-10">Tailwind CSS</span>.</p>
                ) : (
                  <p className="text-center  md:pl-14 h-10">
                    Ce portfolio a été développé en utilisant <span className="rounded-full w-full text-white bg-react-color py-1 px-4 shadow-sm h-fit whitespace-nowrap">ReactJS</span>, <span className="rounded-full w-full text-white bg-next-color py-1 px-4 shadow-sm h-fit whitespace-nowrap">Next.js</span>, <span className="rounded-full w-full text-white bg-typescript-color py-1 px-4 shadow-sm h-fit whitespace-nowrap">Typescript</span> et <span className="rounded-full w-full text-white bg-tailwind-color py-1 px-4 shadow-sm h-fit whitespace-nowrap leading-10">Tailwind CSS</span>.
                  </p>
                )}
              </Fade>
            </div>

          </div>

          {/* ///////////////////////////// CURRICULUM VITAE SECTION ///////////////////////////// */}

          <div className="w-full  h-full bg-custom-gray ">
            <div className=" max-w-screen-2xl mx-auto">
              <Fade duration={1500} triggerOnce>
                <div className="flex flex-col md:flex-row p-5 md:p-20 py-20 gap-20">
                  <div className=" md:w-1/4 flex justify-center text-custom-purple relative items-center">
                    <p className="md:-rotate-90 flex items-center text-3xl md:text-7xl whitespace-nowrap absolute">
                      Curriculum Vitaea.
                    </p>
                  </div>

                  <div className=" md:w-3/4 h-full flex justify-center">
                    <div
                      className="bg-custom-gray
                 shadow-lg relative"
                    >
                      {language == "en" ? (
                        <div className="opacity-0 hover:opacity-100 bg-custom-purple bg-opacity-5 backdrop-blur-sm flex cursor-pointer absolute h-full w-full justify-center items-center transition-all duration-200 ease-in-out">
                          <a
                            href="https://drive.google.com/uc?export=download&id=19YAobmTBActnU1EVxhNuYG6tNKWvayAe"
                            className="btn"
                          >
                            Download CV
                          </a>
                        </div>
                      ) : (
                        <div className="opacity-0 hover:opacity-100 bg-custom-purple bg-opacity-5 backdrop-blur-sm flex cursor-pointer absolute h-full w-full justify-center items-center transition-all duration-200 ease-in-out">
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
            className=" bg-gradient-to-t from-custom-purple  to-[#ECECEC] pb-5"
            id="contact"
          >
            <div className="w-full flex md:flex-row flex-col border-right h-full p-5 md:p-20 py-20 gap-20 max-w-screen-2xl mx-auto">
              <div className=" md:w-1/4  flex justify-center text-custom-purple md:text-white relative items-center">
                <div className="md:-rotate-90 flex items-center text-3xl md:text-7xl whitespace-nowrap absolute">
                  <Fade duration={1500} triggerOnce>
                    {language == "en" ? "Let’s connect." : "Connectons-nous."}
                  </Fade>
                </div>
              </div>

              <div className=" w-full md:w-2/3 h-full ">
                <p className="pb-10 text-lg md:text-xl font-normal text-gray-800 text-center md:text-start">
                  {language == "en"
                    ? "If you are interested to work with me, feel free to send me a message!"
                    : "Si vous êtes intéressé(e) à travailler avec moi, n'hésitez pas à m'envoyer un message !"}
                </p>
                <Fade duration={1500} triggerOnce>
                  <form
                    onSubmit={sendEmail}
                    className="space-y-8"
                    id="form-email"
                  >
                    <div>
                      <label className="block mb-2 text-md text-white">
                        {language == "en" ? "Your name" : "Votre nom"}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="from_name"
                        className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 "
                        required
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-md text-white">
                        {language == "en" ? "Your email" : "Votre courriel"}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="from_email"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
                        required
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block mb-2 text-md text-white ">
                        {language == "en" ? "Your message" : "Votre message"}
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        className="block p-2.5 w-full text-md bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 "
                      ></textarea>
                    </div>
                    <button className="cta flex items-baseline" type="submit">
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
                  </form>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-end w-full h-20  relative">    
      <div className="flex  justify-center items-center w-10 md:w-14  bg-white shadow rounded -top-5 md:-top-7 absolute cursor-pointer" onClick={() =>  window.scrollTo(0, 0)} >
          <img className="scale-125" src={LogoNoir.src} alt="logo" />
        </div>
       <p className="p-4">{language == "en" ? "© 2024 Diana Farhat. All Rights Reserved." : "© 2024 Diana Farhat. Tous droits réservés."}</p></div>
    </main>
  );
}
