"use client";
import Image from "next/image";
import MailImage from "./images/courrier.png";
import Github2 from "./images/github2.png";
import LinkedIn from "./images/linkedin.png";
import LogoBlanc from "./images/monogramDianaFarhatBlanc.png";
import LogoNoir from "./images/monogramDianaFarhatNoir.png";
import Photo from "./images/photoLinkedIn.jpg";
import FullStack from "./images/full-stack.png";
import Database from "./images/database.png";
import Agile from "./images/agile.png";
import ComputerDesktop from "./images/computer-desktop.png";
import Development from "./images/development.png";
import Puzzle from "./images/puzzle.png";
import CV from "./images/cvScreenshot.png";
import Html from "./images/HTML5.png";
import Spring from "./images/spring.png";
import Angular from "./images/angular-logo.png";
import Java from "./images/java2.webp";
import TailwindCss from "./images/tailwind.png";
import Css from "./images/CSS3.png";
import AspNet from "./images/asp.net.png";
import type { StaticImageData } from "next/image";
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
import React, { Component, useState, useEffect } from "react";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import PetCareGif from "./gifs/PetCareTracker.gif";
import LePenduGif from "./gifs/LePendu.gif";
import GradeFlowGif from "./gifs/GradeFlow.gif";
import CliniqueClicGif from "./gifs/CliniqueClic.gif";
import ParrotMentorGif from "./gifs/ParrotMentor.gif";
import LalalandYogaGif from "./gifs/LalalandYoga.gif";
import Website from "./images/website.png";
import InfiniteLooper from "./infiniteLooper";
import emailjs from 'emailjs-com';
import { useTranslation } from 'react-i18next';




// Arrays of the logos of the infinite banner of technologies
const images = [
  { id: "html", src: Html, alt: "HTML5 Logo" },
  { id: "spring", src: Spring, alt: "Spring Logo" },
  { id: "angular", src: Angular, alt: "Angular Logo" },
  { id: "java", src: Java, alt: "Java Logo" },
  { id: "tailwind", src: TailwindCss, alt: "Tailwind CSS Logo" },
  { id: "css", src: Css, alt: "CSS3 Logo" },
  { id: "asp", src: AspNet, alt: "ASP.NET Logo" },
  { id: "csharp", src: Csharp, alt: "Csharp Logo" },
  { id: "entity", src: EntityFramework, alt: "Entity Framework Logo" },
  { id: "javascript", src: Javascript, alt: "Javascript Logo" },
  { id: "react", src: ReactJs, alt: "ReactJS Logo" },
  { id: "oracle", src: Oracle, alt: "Oracle Logo" },
  { id: "mysql", src: MySql, alt: "MySql Logo" },
  { id: "bootstrap", src: Bootstrap, alt: "Bootstrap Logo" },
  { id: "typescript", src: Typescript, alt: "Typescript Logo" },
  { id: "wpf", src: WPF, alt: "WPF Logo" },
  { id: "windowsForm", src: WindowsForm, alt: "Windows Form Logo" },
  { id: "thymeleaf", src: Thymeleaf, alt: "Thymeleaf Logo" },
].map((image) => ({
  id: crypto.randomUUID(),
  image,
}));

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

const petCare = {
  title: "PetCare Tracker",
  about:
    "A user-friendly pet care tracking web application designed to assist owners with vaccination schedules, appointment management, personalized pet profiles, and daily care guidance; built using Angular, TypeScript, Spring Boot, MySQL, and Bootstrap.",
  gif: PetCareGif,
  github: "https://github.com/DianaFarhat29/PetCare-Tracker.git",
  technologies: [html5, angular, typescript, java, spring, mysql, bootstrap],
  website: "",
};

const pendu = {
  title: "Le Pendu",
  about:
    "A WPF application in C# and with Entity Framework, bringing the classic 'Hangman' game to life with engaging gameplay and customizable settings.",
  gif: LePenduGif,
  github: "https://github.com/DianaFarhat29/BonhommePendu.git",
  technologies: [wpf, csharp, entityFramework],
  website: "",
};

const gradeFlow = {
  title: "GradeFlow",
  about:
    "A web-based student management web application using Java, Spring, Thymeleaf, HTML, Tailwind CSS and Javascript. It featuring user authentication and course/grade management.",
  gif: GradeFlowGif,
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
  about:
    "A web-based medical appointment system for patients and doctors, featuring secure login, appointment booking, document exchange, and administrative functions. Built with Java, Spring Boot, Spring MVC, HTML5, CSS3, JavaScript and MySQL.",
  gif: CliniqueClicGif,
  github: "https://github.com/DianaFarhat29/Clinique-Clic.git",
  technologies: [html5, bootstrap, javascript, java, spring, thymeleaf, mysql],
  website: "",
};

const parrotMentor = {
  title: "Parrot Mentor",
  about:
    "A Windows Forms application in C#, managing teaching establishments, students, and programs.",
  gif: ParrotMentorGif,
  github: "https://github.com/DianaFarhat29/ParrotMentor.git",
  technologies: [windowsForm, csharp],
  website: "",
};

const lalalandYoga = {
  title: "Lalaland Yoga",
  about:
    "A website for a modern wellness yoga retreat at lalalandyoga.com with Tailwind CSS and an API-integrated contact form for streamlined communication.",
  gif: LalalandYogaGif,
  github: "https://github.com/DianaFarhat29/Lalaland-Yoga-Retreats.git",
  technologies: [html5, tailwindCss, javascript],
  website: "https://lalalandyoga.com/",
};

export default function Home() {
  const [state, setState] = useState({
    isPaneOpen: false,
  });

  const [selectedProject, setSelectedProject] = useState(petCare);

  const [sendText, setSendText] = useState("Send");


  const [language, setLanguage] = useState("en");

  function sendEmail(event : any) {
    event.preventDefault();

    emailjs.sendForm('service_le7h5bq', 'template_oh36xyg', event.target, 'h18n34H5pvggDSR7I')
      .then((result) => {
        event.target.reset(); 
        setSendText("Sent!");
      }, (error) => {
        setSendText("Oops, something wrong happened. Send again?");
      });
  }

  const { t, i18n } = useTranslation();


  const handleChangeLanguage = (lang: string | undefined) => {
    i18n.changeLanguage(lang);
  };

  return (
    <main className=" w-full h-full ">
    <div className="absolute right-0 flex gap-2 m-2 mr-10">
      <button onClick={() => setLanguage('en')} className={`${language == "en" && "font-bold"}`}>EN</button> |
      <button onClick={() => setLanguage('fr')} className={`${language == "fr" && "font-bold"}`}>FR</button>
    </div>

      {/* ================================================== NAV BAR ================================================== */}
      {state.isPaneOpen == false && 
           (
      <nav className=" flex flex-row text-center h-24  bg-white w-full justify-center items-center">
        <ul className="flex justify-center items-center text-center w-fit gap-2 fixed p-2 px-5 bg-white rounded-2xl z-30">
          <li className="hover:text-custom-purple transition-all duration-200">
            <a href="#aboutMe">{t('About me')}</a>
          </li>
          <span>|</span>
          <li className="hover:text-custom-purple transition-all duration-200">
            <a href="#work">Work</a>
          </li>
          <span>|</span>
          <li className="hover:text-custom-purple transition-all duration-200">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>)}

      <div className=" flex flex-row-reverse w-full">
        {/* ================================================== RIGTH BAR SECTION ================================================== */}
        {state.isPaneOpen == false && 
           (<div className="flex items-center h-full bg-white p-6 justify-center ">
            
          <ul className="flex flex-col w-5 gap-5 fixed items-center justify-center bottom-0 top-0 z-50">
            <li className=" transition-all duration-200 hover:scale-125" >
              <a href="mailto:diana.farhat@outlook.com" target="blank">
                <Image src={MailImage} alt="mail"/>
              </a>
            </li>

            <li className=" transition-all duration-200 hover:scale-125" >
              <a href="https://github.com/DianaFarhat29" target="blank">
                <Image src={Github2} alt="github" />
              </a>
            </li>

            <li className=" transition-all duration-200 hover:scale-125" >
              <a href="https://www.linkedin.com/in/diana-farhat/" target="blank">
                <Image src={LinkedIn} alt="linkedIn" />
              </a>
            </li>
          </ul>
        </div>)}
      
        

        <div className="flex flex-col w-full h-full justify-stretch border-r border-r-custom-purple">
          {/* ================================================== INTRO SECTION ================================================== */}
          <div className="bg-custom-purple w-full flex flex-row h-96">
            <div className="flex w-1/3 relative translate-y-5">
              <Image className="absolute" src={LogoNoir} alt="logo" />
              <Image
                className="absolute w-50 -translate-y-4 translate-x-2"
                src={LogoBlanc}
                alt="logo"
              />
            </div>
            {language == "en" ? (
            <div className="flex w-2/3 flex-col gap-5 justify-center">
              <p className="text-white text-left text-5xl font-normal">
                Hello. I’m Diana Farhat.
              </p>
              <p className="text-white text-left text-xl font-light">
                I’m a <span className="text-black">Full-Stack Developper</span>{" "}
                and a{" "}
                <span className="text-black">
                  <br></br>Object-Oriented Programmer.
                </span><nav></nav>
             
              </p>
              <p className="text-white text-left text-2xl font-light">
                Lets bring you project to life.
              </p>
            </div>
            ) :
            <div className="flex w-2/3 flex-col gap-5 justify-center">
            <p className="text-white text-left text-5xl font-normal">
              Salut. Je suis Diana Farhat.
            </p>
            <p className="text-white text-left text-xl font-light">
              Je suis une <span className="text-black">développeuse Full-Stack</span>{" "}
              et une{" "}
              <span className="text-black">
                <br></br>programmeuse spécialisée en languages orientées objet.
              </span><nav></nav>
              
            </p>
            <p className="text-white text-left text-2xl font-light">
              Donnons vie à vos idées.
            </p>
          </div> }
          </div>

          {/* ================================================== ABOUT ME SECTION ================================================== */}
          <div className="bg-gradient-to-b from-custom-purple to-[#ECECEC] shadow w-full h-96 flex px-20 gap-10" id="aboutMe">
            <div className="flex w-2/3 flex-col gap-2 justify-center">
              <p className="text-white text-left text-2xl font-medium">
              {language == "en" ? "ABOUT ME" : "À PROPOS"}
              </p>
              <p className="text-black text-left text-lg font-light">
              {language == "en" ?  "I'm a full-stack developer and a programmer with a passion for building beautiful, functional web experiences. My toolkit includes Angular, ReactJS, Spring Boot, databases technologies, and a dash of desktop development magic! I thrive in collaborative environments and love solving problems creatively." : "Je suis une développeuse full-stack et une programmeuse passionnée par la création d'expériences web belles et fonctionnelles. Mon kit d'outils comprend Angular, ReactJS, Spring Boot, les technologies de base de données et une touche de magie du développement de bureau! Je prospère dans des environnements collaboratifs et j'adore résoudre des problèmes de manière créative."}
              </p>
            </div>
            <div className="flex w-1/3 h-full items-center justify-end">
              <Image
                className="rounded-full w-96 h-auto scale-75 object-contain "
                src={Photo}
                alt="photo"
              />
            </div>
          </div>

          {/* ================================================== SKILLSET SECTION ================================================== */}
          <div className="w-full flex border-right h-full" id="work">
          <div className="bg-gradient-to-t from-custom-purple to-[#ECECEC] w-1/4 flex justify-center text-white relative items-center">
              <p className="-rotate-90 flex items-center text-7xl whitespace-nowrap absolute">Skillset.</p>
            </div>

            <div className=" w-3/4 h-full  bg-gradient-to-t from-white to-[#ECECEC]">
              {/* ================================================== SKILLSET GRID ================================================== */}
              <div className="container m-auto grid grid-cols-2 grid-rows-3 gap-14 px-10 py-28">
                <div className="">
                  <Image
                    className="w-10 pb-5 hover:scale-110 transition-all duration-200 ease-in-out"
                    src={FullStack}
                    alt="fullStack"
                  />
                  <p className="font-bold pb-2">{language == "en" ? "Full-Stack Web Development" : "en fr" } </p>
                  <p className="text-light">
                  {language == "en" ? "I craft robust and visually appealing web experiences. My expertise includes modern front-end frameworks (Angular, ReactJS), robust back-end technologies (Node.js, Java,  Spring Boot, ASP.Net), and efficient REST API integration." : "Je crée des expériences web robustes et visuellement attrayantes. Mon expertise comprend des frameworks front-end modernes (Angular, ReactJS), des technologies back-end robustes (Node.js, Java, Spring Boot, ASP.Net) et une intégration efficace des API REST."}
                  </p>
                </div>
                <div className="">
                  <Image
                    className="w-10 pb-5 hover:scale-110 transition-all duration-200 ease-in-out"
                    src={Database}
                    alt="database"
                  />
                  <p className="font-bold pb-2">{language == "en" ? "Database Mastery" : ""} </p>
                  <p>
                  {language == "en" ? "I comfortably navigate relational (SQL, MySQL, Oracle) and non-relational (MongoDB) databases. This allows me to design and implement scalable data solutions to power your applications." : "Je navigue confortablement dans les bases de données relationnelles (SQL, MySQL, Oracle) et non relationnelles (MongoDB). Cela me permet de concevoir et de mettre en œuvre des solutions de données évolutives pour alimenter vos applications."}
                  </p>
                </div>
                <div className="">
                  <Image
                    className="w-10 pb-5 scale-[115%] hover:scale-125 transition-all duration-200 ease-in-out"
                    src={Agile}
                    alt="agile"
                  />
                  <p className="font-bold pb-2">
                  {language == "en" ? "Adaptable Development Practices" : "Pratiques de développement adaptables"}
                  </p>
                  <p>
                  {language == "en" ? "I'm proficient in Agile methodologies, version control (Git), and essential tools like UML to streamline development processes and ensure collaborative success." : "Je suis compétente dans les méthodologies agiles, le contrôle de version (Git) et des outils essentiels comme UML pour rationaliser les processus de développement et garantir le succès collaboratif."}
                  </p>
                </div>
                <div className="">
                  <Image
                    className="w-10 pb-5 hover:scale-110 transition-all duration-200 ease-in-out"
                    src={ComputerDesktop}
                    alt="computerDesktop"
                  />
                  <p className="font-bold pb-2">
                    Desktop Application Development
                  </p>
                  <p>
                    I have experience building desktop applications (Windows
                    Forms, WPF) in C#, enhancing my understanding of user
                    interface design and cross-platform considerations.
                  </p>
                </div>
                <div className="">
                  <Image
                    className="w-10 pb-5 hover:scale-110 transition-all duration-200 ease-in-out"
                    src={Development}
                    alt="development"
                  />
                  <p className="font-bold pb-2">
                    Responsive & User-Centric Design
                  </p>
                  <p>
                    I prioritize crafting websites that adapt seamlessly across
                    devices and deliver intuitive user experiences, utilizing my
                    skills in HTML5, CSS3, Bootstrap, and Tailwind CSS.
                  </p>
                </div>
                <div className="">
                  <Image
                    className="w-10 pb-5 hover:scale-110 transition-all duration-200 ease-in-out"
                    src={Puzzle}
                    alt="puzzle"
                  />
                  <p className="font-bold pb-2">Problem Solving </p>
                  <p>
                    I possess the analytical skills to quickly diagnose complex
                    issues and implement creative solutions, constantly seeking
                    new technologies to optimize results.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ================================================== TECHNOLOGIES SECTION ================================================== */}
          <div className="bg-white w-full h-full py-28">
            <InfiniteLooper speed={60} direction="left">
              {images.map(({ id, image }) => (
                <div className="contentBlock-banner contentBlock--one">
                  <Image
                    id={image.id}
                    src={image.src}
                    alt={image.alt}
                    className="max-h-20 w-auto"
                  />{" "}
                </div>
              ))}
            </InfiniteLooper>
          </div>

          {/* ================================================== PROJECTS SECTION ================================================== */}
          <div className="w-full flex flex-col border-right h-full">
            <div className="bg-gradient-to-b from-custom-purple to-[#ECECEC] w-full h-full py-28 px-20 flex flex-col gap-5 items-center">
              <div className="w-full pl-14 flex flex-col gap-10 pb-5">
                <p className="text-left text-2xl font-medium text-white">
                  MY PROJECTS.
                </p>
                <div className="flex flex-col justify-center items-center gap-2">
                  <p className="text-left text-md font-normal text-lg text-white pb-3">
                    Hover to animate, click for description.
                  </p>
              
                </div>
              </div>
              {/* ================================================== PROJECTS GRID ================================================== */}

              {/* =========== Right Pannel Slide =========== */}
              <SlidingPane
                className="some-custom-class"
                overlayClassName="some-custom-overlay-class"
                title="Go back"
                isOpen={state.isPaneOpen}
                width="90%"
                onRequestClose={() => {
                  setState({ isPaneOpen: false });
                  setSelectedProject(petCare);
                }}
              >
                {selectedProject && (
                  <div className="flex flex-col gap-10">
                    <div className="flex flex-col gap-5 pt-5">
                      <p className="text-xl font-semibold">
                        {selectedProject.title}
                      </p>
                      <Image
                        src={selectedProject.gif}
                        alt=""
                        className="rounded-md max-w-4xl h-auto"
                      />
                    </div>

                    <div className="flex flex-col gap-5">
                      <p className="font-semibold">About</p>
                      <p>{selectedProject.about}</p>
                    </div>
                    <div className="flex flex-col gap-5">
                      <p className="font-semibold">Technologies</p>
                      <div className="flex flex-wrap w-full gap-3 whitespace-nowrap ">
                        {selectedProject.technologies.map((technology) => {
                          return (
                            <div
                              className={`rounded-full text-whites ${technology.color} py-1 px-3 text-sm shadow-md whitespace-nowrap text-white`}
                            >
                              {" "}
                              {technology.text}{" "}
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    <div className="flex flex-col gap-5 pt-2">
                      <div className="flex gap-2 items-center">
                        <a
                          href={selectedProject.github}
                          target="blank"
                          className="w-6 h-auto"
                        >
                          <Image src={Github2} alt="" />
                        </a>{" "}
                        <p className="font-semibold">Github</p>
                      </div>
                      <a
                        href={selectedProject.github}
                        className="text-sm text-gray-500"
                        target="blank"
                      >
                        {selectedProject.github}
                      </a>{" "}
                    </div>

                    {selectedProject.website !== "" && (
                      <div className="flex flex-col gap-5 pt-2">
                        <div className="flex gap-2 items-center">
                          <a
                            href={selectedProject.website}
                            target="blank"
                            className="w-6 h-auto"
                          >
                            <Image src={Website} alt="" />
                          </a>{" "}
                          <p className="font-semibold">Website</p>
                        </div>
                        <a
                          href={selectedProject.website}
                          className="text-sm text-gray-500"
                          target="blank"
                        >
                          {selectedProject.website}
                        </a>{" "}
                      </div>
                    )}
                  </div>
                )}
              </SlidingPane>

              <div className=" grid grid-cols-2 grid-flow-row gap-5 w-full pl-14 ">
                <div className="flex flex-col bg-white shadow-xl  rounded-md relative">
              
                  {/* ================================================== PETCARE TRACKER PROJECT ================================================== */}

                  <div
                    className=" h-64 rounded bg-petCare "
                    onClick={() => {
                      setState({ isPaneOpen: true });
                      setSelectedProject(petCare);
                    }}
                  ></div>
                  <div className="flex justify-center gap-3   ">
                    <div className="flex w-full gap-3 ">
                      <InfiniteLooper speed={60} direction="left">
                        {petCare.technologies.map((technology) => {
                          return (
                            <div className="pr-3 w-full ">
                              <div
                                className={`rounded-full w-full text-white ${technology.color} py-1 px-4 text-sm shadow-sm h-fit whitespace-nowrap `}
                              >
                                {technology.text}
                              </div>{" "}
                            </div>
                          );
                        })}
                      </InfiniteLooper>
                    </div>
                  </div>
                </div>

                {/* ================================================== LE PENDU PROJECT ================================================== */}
            <div className="flex flex-col bg-white shadow-xl  rounded-md relative">
                  <div
                    className="bg-white h-64 bg-lePendu rounded-t-md flex justify-center"
                    onClick={() => {
                      setState({ isPaneOpen: true });
                      setSelectedProject(pendu);
                    }}
                  ></div>

                  <div className="flex justify-center gap-2 bg-white pb-5 rounded-b-md ">
                  {pendu.technologies.map((technology) => {
                        return (
                          <div className="flex justify-center ">
                            <div
                              className={`rounded-full w-full text-white ${technology.color} py-1 px-4 text-sm shadow-sm h-fit whitespace-nowrap`}
                            >
                              {technology.text}
                            </div>{" "}
                          </div>
                        );
                      })}
                    
                  </div>
                </div>

                {/* ================================================== GRADEFLOW PROJECT ================================================== */}
            <div className="flex flex-col bg-white shadow-xl  rounded-md relative">
                  <div
                    className="bg-white h-64 bg-gradeFlow rounded-t-md"
                    onClick={() => {
                      setState({ isPaneOpen: true });
                      setSelectedProject(gradeFlow);
                    }}
                  ></div>

                  <div className="flex justify-center gap-2 bg-white pb-5 rounded-b-md">
                    <InfiniteLooper speed={60} direction="left">
                      {gradeFlow.technologies.map((technology) => {
                        return (
                          <div className="pr-3 w-full ">
                            <div
                              className={`rounded-full w-full text-white ${technology.color} py-1 px-4 text-sm shadow-sm h-fit whitespace-nowrap`}
                            >
                              {technology.text}
                            </div>{" "}
                          </div>
                        );
                      })}
                    </InfiniteLooper>
                  </div>
                </div>

                {/* ================================================== CLINIQUE CLIC PROJECT ================================================== */}
         <div className="flex flex-col bg-white shadow-xl  rounded-md relative">
                  <div
                    className="bg-white h-64 bg-cliniqueClic rounded-t-md"
                    onClick={() => {
                      setState({ isPaneOpen: true });
                      setSelectedProject(cliniqueClic);
                    }}
                  ></div>
                  <div className="flex justify-center gap-2 bg-white pb-5 rounded-b-md">
                    <InfiniteLooper speed={60} direction="left">
                      {cliniqueClic.technologies.map((technology) => {
                       return (
                        <div className="pr-3 w-full ">
                          <div
                            className={`rounded-full w-full text-white ${technology.color} py-1 px-4 text-sm shadow-sm h-fit whitespace-nowrap`}
                          >
                            {technology.text}
                          </div>{" "}
                        </div>
                      );
                      })}
                    </InfiniteLooper>
                  </div>
                </div>

                {/* ================================================== PARROT MENTOR PROJECT ================================================== */}
         <div className="flex flex-col bg-white shadow-xl  rounded-md relative">
                  <div
                    className="bg-white h-64 bg-parrotMentor rounded-t-md"
                    onClick={() => {
                      setState({ isPaneOpen: true });
                      setSelectedProject(parrotMentor);
                    }}
                  ></div>
                  <div className="flex justify-center gap-2 bg-white pb-5 pt-2 rounded-b-md">
                  {parrotMentor.technologies.map((technology) => {
                       return (
                        <div className="flex justify-center ">
                          <div
                            className={`rounded-full w-full text-white ${technology.color} py-1 px-4 text-sm shadow-sm h-fit whitespace-nowrap`}
                          >
                            {technology.text}
                          </div>{" "}
                        </div>
                      );
                      })}
                  </div>
                </div>

                {/* ================================================== LALALAND YOGA PROJECT ================================================== */}
                <div className="flex flex-col bg-white shadow-xl  rounded-md relative">
                  <div
                    className="bg-white h-64 bg-lalalandYoga rounded-t-md"
                    onClick={() => {
                      setState({ isPaneOpen: true });
                      setSelectedProject(lalalandYoga);
                    }}
                  ></div>
                  <div className="flex justify-center gap-2 bg-white pb-5 pt-2 rounded-b-md">
                  {lalalandYoga.technologies.map((technology) => {
                        return (
                          <div className="flex justify-center ">
                            <div
                              className={`rounded-full w-full text-white ${technology.color} py-1 px-4 text-sm shadow-sm h-fit whitespace-nowrap`}
                            >
                              {technology.text}
                            </div>{" "}
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ================================================== CURRICULUM VITAE SECTION ================================================== */}
          <div className="w-full flex h-full">
            <div className="bg-custom-gray w-1/4 flex justify-center text-custom-purple relative items-center">
              <p className="-rotate-90 flex items-center text-7xl whitespace-nowrap absolute">
                Curriculum Vitaea.
              </p>
            </div>

            <div className="bg-custom-gray w-3/4 h-full py-28 flex justify-center">
              <div className="bg-custom-gray w-[85%] shadow-lg relative">
                <div className="opacity-0 hover:opacity-100 bg-custom-purple bg-opacity-5 backdrop-blur-sm flex cursor-pointer absolute h-full w-full justify-center items-center transition-all duration-200 ease-in-out">
                  <a href="https://drive.google.com/uc?export=download&id=1qUutYykY6EZKtf1v3kLwn80aGYb7AEBU" className="btn" >
                    Download CV
                  </a>
                </div>

                <Image className="rounded-lg" src={CV} alt="cv" />
              </div>
            </div>
          </div>

          {/* ================================================== CONTACT SECTION ================================================== */}
          <div className="w-full flex border-right h-full bg-gradient-to-t from-custom-purple  to-[#ECECEC]" id="contact">
            <div className=" w-1/4 flex justify-center text-white relative items-center">
              <p className="-rotate-90 flex items-center text-7xl whitespace-nowrap absolute">
                Let’s connect.
              </p>
            </div>

            <div className="  w-3/4 h-full px-10 py-28">
              <p className="pb-10 text-xl font-normal text-gray-800">
                If you are interested to work with me, feel free to send me a
                message!
              </p>
              <form onSubmit={sendEmail} className="space-y-8" id="form-email">
                <div>
                  <label className="block mb-2 text-md text-white">Name</label>
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
                    Your email
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
                    Your message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="block p-2.5 w-full text-md bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 "
                  ></textarea>
                </div>
                <button className="cta flex items-baseline" type="submit">
                  <span className="hover-underline-animation"> {sendText} </span>
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
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}