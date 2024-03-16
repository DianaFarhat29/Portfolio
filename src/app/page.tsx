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
import Banner from "./banner";
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
import React, { Component, useState } from "react";
import { render } from "react-dom";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import PetCareGif from "./gifs/PetCareTracker.gif";
import LePenduGif from "./gifs/LePendu.gif";
import GradeFlowGif from "./gifs/GradeFlow.gif";
import CliniqueClicGif from "./gifs/CliniqueClic.gif";
import ParrotMentorGif from "./gifs/ParrotMentor.gif";
import LalalandYogaGif from "./gifs/LalalandYoga.gif";
import Website from "./images/website.png";
import { Carousel } from 'flowbite-react';




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

const html5= {color:"html", text:"HTML5"};
const angular= {color:"angular", text:"Angular"};
const typescript= {color:"typescript", text:"Typescript"};
const spring= {color:"spring", text:"Spring Boot"};
const mysql= {color:"mysql", text:"MySQL"};
const bootstrap= {color:"bootstrap", text:"Bootstrap5"};
const wpf= {color:"wpf", text:"WPF"};
const csharp= {color:"csharp", text:"C#"};
const entityFramework= {color:"entity", text:"Entity Framework"};
const tailwindCss= {color:"tailwind", text:"Tailwind CSS"};
const javascript= {color:"javascript", text:"Javascript"};
const java= {color:"java", text:"Java"};
const thymeleaf= {color:"thymeleaf", text:"Thymeleaf"};
const windowsForm= {color:"windowsforms", text:"Windows Forms"};




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
  technologies: [html5, tailwindCss, javascript, java, spring, thymeleaf, mysql],
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
  technologies: [windowsForm,csharp],
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

  return (
    <main className="w-full h-full ">
      {/* ================================================== NAV BAR ================================================== */}
      <nav className=" flex flex-row text-center h-24">
        <ul className="flex justify-center items-center text-center w-full gap-2 ">
          <li className="hover:text-custom-purple transition-all duration-200">
            <a href="#aboutMe">About Me</a>
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
      </nav>

      <div className="w-full flex flex-row-reverse justify-start">
        {/* ================================================== RIGTH BAR SECTION ================================================== */}
        <div className="m-4 flex items-center ">
          <ul className="flex flex-col w-5 gap-5  ">
            <li className=" transition-all duration-200">
              <a href="#mail">
                <Image src={MailImage} alt="mail" />
              </a>
            </li>

            <li className=" transition-all duration-200">
              <a href="#github">
                <Image src={Github2} alt="github" />
              </a>
            </li>

            <li className=" transition-all duration-200">
              <a href="#linkedIn">
                <Image src={LinkedIn} alt="linkedIn" />
              </a>
            </li>
          </ul>
        </div>

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
            <div className="flex w-2/3 flex-col gap-5 justify-center">
              <p className="text-white text-left text-5xl font-normal">
                Hello. I’m Diana Farhat.
              </p>
              <p className="text-white text-left text-xl font-light">
                I’m a <span className="text-black">Full-Stack Developper</span>{" "}
                and a{" "}
                <span className="text-black">
                  <br></br>Object-Oriented Programmer
                </span>
                .
              </p>
              <p className="text-white text-left text-2xl font-light">
                Lets bring you project to life.
              </p>
            </div>
          </div>

          {/* ================================================== ABOUT ME SECTION ================================================== */}
          <div className="bg-custom-gray w-full h-96 flex px-20 gap-10">
            <div className="flex w-2/3 flex-col gap-2 justify-center">
              <p className="text-custom-purple text-left text-2xl font-medium">
                ABOUT ME
              </p>
              <p className="text-black text-left text-lg font-light">
                I'm a full-stack developer and a programmer with a passion for
                building beautiful, functional web experiences. My toolkit
                includes Angular, ReactJS, Spring Boot, databases technologies,
                and a dash of desktop development magic! I thrive in
                collaborative environments and love solving problems creatively.
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
          <div className="w-full flex border-right h-full ">
            <div className="bg-custom-purple w-1/4 flex justify-center text-white">
              <p className="-rotate-90 flex items-center text-7xl">Skillset.</p>
            </div>

            <div className="bg-white w-3/4 h-full ">
              {/* ================================================== SKILLSET GRID ================================================== */}
              <div className="container m-auto grid grid-cols-2 grid-rows-3 gap-14 px-10 py-28">
                <div className="">
                  <Image
                    className="w-10 pb-5 hover:scale-110 transition-all duration-200 ease-in-out"
                    src={FullStack}
                    alt="fullStack"
                  />
                  <p className="font-bold pb-2">Full-Stack Web Development</p>
                  <p className="text-light">
                    I craft robust and visually appealing web experiences. My
                    expertise includes modern front-end frameworks (Angular,
                    ReactJS), robust back-end technologies (Node.js, Java,
                    Spring Boot, ASP.Net), and efficient REST API integration.
                  </p>
                </div>
                <div className="">
                  <Image
                    className="w-10 pb-5 hover:scale-110 transition-all duration-200 ease-in-out"
                    src={Database}
                    alt="database"
                  />
                  <p className="font-bold pb-2">Database Mastery</p>
                  <p>
                    I comfortably navigate relational (SQL, MySQL, Oracle) and
                    non-relational (MongoDB) databases. This allows me to design
                    and implement scalable data solutions to power your
                    applications.
                  </p>
                </div>
                <div className="">
                  <Image
                    className="w-10 pb-5 scale-[115%] hover:scale-125 transition-all duration-200 ease-in-out"
                    src={Agile}
                    alt="agile"
                  />
                  <p className="font-bold pb-2">
                    Adaptable Development Practices
                  </p>
                  <p>
                    I'm proficient in Agile methodologies, version control
                    (Git), and essential tools like UML to streamline
                    development processes and ensure collaborative success.
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
            <div className="w-screen">
              <Banner images={images} speed={5000} />
            </div>
          </div>

          {/* ================================================== PROJECTS SECTION ================================================== */}
          <div className="w-full flex flex-col border-right h-full">
            <div className="bg-custom-purple w-full h-full py-28 px-20 flex flex-col gap-5 items-center">
              <div className="w-full pl-14 flex flex-col gap-10 pb-5">
                <p className="text-left text-2xl font-medium text-white">
                  MY PROJECTS.
                </p>
                <div className="flex flex-col justify-center items-center gap-2">
                  <p className="text-left text-md font-normal text-lg text-white pb-3">
                    Hover to animate, Click for description.
                  </p>
                  <Image
                    className="w-8 pb-3 hover:scale-110 transition-all duration-200 ease-in-out"
                    src={DownArrow}
                    alt="downArrow"
                  />
                </div>
              </div>
              {/* ================================================== PROJECTS GRID ================================================== */}

              {/* =========== Right Pannel Slide =========== */}
              <SlidingPane
                className="some-custom-class"
                overlayClassName="some-custom-overlay-class"
                title="Go back to the projects"
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
                      <p className="text-xl font-semibold">{selectedProject.title}</p>
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
                              className={`rounded-full text-whites bg-${technology.color}-color py-1 px-3 text-sm shadow-md whitespace-nowrap text-white`}
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
                    )
                      }


                    



                  </div>
                )
                      }
          
              </SlidingPane>

              <div className=" grid grid-cols-2 grid-flow-row gap-5 w-full pl-14 ">
                <div className="flex flex-col bg-white rounded-t-md">

                  {/* ================================================== PETCARE TRACKER PROJECT ================================================== */}
                  
                  <div
                    className="bg-white h-64 rounded bg-petCare"
                    onClick={() => {
                      setState({ isPaneOpen: true });
                      setSelectedProject(petCare);
                    }}
                  ></div>
                  <div className="flex justify-center gap-3 bg-white pb-5 rounded-b-md ">
                    <div className="flex w-full gap-3">
                    <Carousel>
                        {petCare.technologies.map((technology) => {
                          return (
                         
                            <div
                              className={`rounded-full w-full text-white bg-${technology.color}-color py-1 px-2 text-xs shadow-md h-fit whitespace-nowrap`}
                            >         
                              {technology.text}
                            </div>
                          );
                        })}
                            </Carousel>
                      </div>
                  </div>
                </div>

                <div className="flex flex-col">
                  <div className="bg-white h-64 bg-lePendu rounded-t-md" 
                  onClick={() => {
                      setState({ isPaneOpen: true });
                      setSelectedProject(pendu);
                    }}></div>
                  
                  <div className="flex justify-center gap-2 bg-white pb-5 rounded-b-md">
                
                    <p className="rounded-full text-white bg-wpf-color py-1 px-2 text-sm">
                      WPF
                    </p>
                    <p className="rounded-full text-white bg-csharp-color py-1 px-2 text-sm">
                      C#
                    </p>
                    <p className="rounded-full text-white bg-entity-color py-1 px-2 text-sm whitespace-nowrap">
                      Entity Framework
                    </p>
                  </div>
                </div>

                <div className="flex flex-col">
                  <div className="bg-white h-64 bg-gradeFlow rounded-t-md"        
                  onClick={() => {
                      setState({ isPaneOpen: true });
                      setSelectedProject(gradeFlow);
                    }}></div>
                  <div className="flex justify-center gap-2 bg-white pb-5 rounded-b-md">
                    <p className="rounded-full text-white bg-html-color py-1 px-2 text-sm">
                      HTML5
                    </p>
                    <p className="rounded-full text-white bg-tailwind-color py-1 px-2 text-sm whitespace-nowrap">
                      Tailwind CSS
                    </p>
                    <p className="rounded-full text-white bg-javascript-color py-1 px-2 text-sm">
                      Javascript
                    </p>
                    <p className="rounded-full text-white bg-java-color py-1 px-2 text-sm">
                      Java
                    </p>
                    <p className="rounded-full text-white bg-spring-color py-1 px-2 text-sm whitespace-nowrap">
                      Spring Boot
                    </p>
                    <p className="rounded-full text-white bg-thymeleaf-color py-1 px-2 text-sm">
                      Thymeleaf
                    </p>
                    <p className="rounded-full text-white bg-mysql-color py-1 px-2 text-sm">
                      MySql
                    </p>
                  </div>
                </div>

                <div className="flex flex-col">
                  <div className="bg-white h-64 bg-cliniqueClic rounded-t-md"        onClick={() => {
                      setState({ isPaneOpen: true });
                      setSelectedProject(cliniqueClic);
                    }}></div>
                  <div className="flex justify-center gap-2 bg-white pb-5 rounded-b-md">
                    <p className="rounded-full text-white bg-html-color py-1 px-2 text-sm">
                      HTML5
                    </p>
                    <p className="rounded-full text-white bg-bootstrap-color py-1 px-2 text-sm">
                      Bootstrap
                    </p>
                    <p className="rounded-full text-white bg-javascript-color py-1 px-2 text-sm">
                      Javascript
                    </p>
                    <p className="rounded-full text-white bg-java-color py-1 px-2 text-sm">
                      Java
                    </p>
                    <p className="rounded-full text-white bg-spring-color py-1 px-2 text-sm whitespace-nowrap">
                      Spring Boot
                    </p>
                    <p className="rounded-full text-white bg-thymeleaf-color py-1 px-2 text-sm">
                      Thymeleaf
                    </p>
                    <p className="rounded-full text-white bg-mysql-color py-1 px-2 text-sm">
                      MySql
                    </p>
                  </div>
                </div>

                <div className="flex flex-col">
                  <div className="bg-white h-64 bg-parrotMentor rounded-t-md"        onClick={() => {
                      setState({ isPaneOpen: true });
                      setSelectedProject(parrotMentor);
                    }}></div>
                  <div className="flex justify-center gap-2 bg-white pb-5 rounded-b-md">
                    <p className="rounded-full text-white bg-windowsforms-color py-1 px-2 text-sm whitespace-nowrap">
                      Windows Forms
                    </p>
                    <p className="rounded-full text-white bg-csharp-color py-1 px-2 text-sm">
                      C#
                    </p>
                  </div>
                </div>

                <div className="flex flex-col">
                  <div className="bg-white h-64 bg-lalalandYoga rounded-t-md"        onClick={() => {
                      setState({ isPaneOpen: true });
                      setSelectedProject(lalalandYoga);
                    }}></div>
                  <div className="flex justify-center gap-2 bg-white pb-5 rounded-b-md">
                    <p className="rounded-full text-white bg-html-color py-1 px-2 text-sm">
                      HTML5
                    </p>
                    <p className="rounded-full text-white bg-tailwind-color py-1 px-2 text-sm whitespace-nowrap">
                      Tailwind CSS
                    </p>
                    <p className="rounded-full text-white bg-javascript-color py-1 px-2 text-sm">
                      Javascript
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ================================================== CURRICULUM VITAE SECTION ================================================== */}
          <div className="w-full flex h-full">
            <div className="bg-custom-gray w-1/4 flex justify-center text-custom-purple">
              <p className="-rotate-90 flex items-center text-7xl whitespace-nowrap">
                Curriculum Vitaea.
              </p>
            </div>

            <div className="bg-custom-gray w-3/4 h-full py-28 flex justify-center">
              <div className="bg-custom-gray w-[85%] shadow-lg relative">
                <div className="opacity-0 hover:opacity-100 bg-custom-purple bg-opacity-5 backdrop-blur-sm flex cursor-pointer absolute h-full w-full justify-center items-center transition-all duration-200 ease-in-out">
                  <button className="btn">
                    Download CV
                    <span></span>
                  </button>
                </div>

                <Image className="rounded-lg" src={CV} alt="cv" />
              </div>
            </div>
          </div>

          {/* ================================================== CONTACT SECTION ================================================== */}
          <div className="w-full flex border-right h-full ">
            <div className="bg-custom-purple w-1/4 flex justify-center text-white">
              <p className="-rotate-90 flex items-center text-7xl whitespace-nowrap">
                Let’s connect.
              </p>
            </div>

            <div className="bg-custom-purple w-3/4 h-full px-10 py-28">
              <p className="pb-10 text-xl font-normal text-gray-800">
                If you are interested to work with me, feel free to send me a
                message!
              </p>
              <form action="#" className="space-y-8">
                <div>
                  <label className="block mb-2 text-md text-white">Name</label>
                  <input
                    type="text"
                    id="name"
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
                    rows={6}
                    className="block p-2.5 w-full text-md bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 "
                  ></textarea>
                </div>
                <button className="cta flex items-baseline">
                  <span className="hover-underline-animation"> Send </span>
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
