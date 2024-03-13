import Image from "next/image";
import MailImage from "./images/courrier.png"
import Github2 from "./images/github2.png"
import LinkedIn from "./images/linkedin.png"
import LogoBlanc from "./images/monogramDianaFarhatBlanc.png"
import LogoNoir from "./images/monogramDianaFarhatNoir.png"
import Photo from "./images/photoLinkedIn.jpg"
import FullStack from "./images/full-stack.png"
import Database from "./images/database.png"
import Agile from "./images/agile.png"
import ComputerDesktop from "./images/computer-desktop.png"
import Development from "./images/development.png"
import Puzzle from "./images/puzzle.png"
import CV from "./images/cvScreenshot.png"
import Download from "./images/download.png"

export default function Home() {
  return (
    <main className="w-full h-full ">

      {/* NAV BAR */}
      <nav className=" flex flex-row text-center h-24">
        <ul className="flex justify-center items-center text-center w-full gap-2 ">
          <li className="hover:text-custom-purple transition-all duration-200"><a href="#aboutMe">About Me</a></li>
          <span>|</span>
          <li className="hover:text-custom-purple transition-all duration-200"><a href="#work">Work</a></li>
          <span>|</span>
          <li className="hover:text-custom-purple transition-all duration-200"><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <div className="w-full flex flex-row-reverse justify-start">
        {/* RIGTH BAR SECTION */}
        <div className="m-4 flex items-center ">
        <ul className="flex flex-col w-5 gap-5  ">
            <li className=" transition-all duration-200">
              <a href="#mail">
                <Image src={MailImage} alt="mail"/>
              </a>
            </li>
            
            <li className=" transition-all duration-200">
              <a href="#github">
                <Image src={Github2} alt="github"/>
              </a>
            </li>
            
            <li className=" transition-all duration-200">
              <a href="#linkedIn">
                <Image src={LinkedIn} alt="linkedIn"/>
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col w-full h-full justify-stretch border-r border-r-custom-purple">
        {/* INTRO SECTION */}
        <div className="bg-custom-purple w-full flex flex-row h-96">
          <div className="flex w-1/3 relative translate-y-5">
            <Image className="absolute" src={LogoNoir} alt="logo"/>
            <Image className="absolute w-50 -translate-y-4 translate-x-2"src={LogoBlanc} alt="logo"/>
          </div>
          <div className="flex w-2/3 flex-col gap-5 justify-center">
            <p className="text-white text-left text-5xl font-normal">Hello. I’m Diana Farhat.</p>
            <p className="text-white text-left text-xl font-light">I’m a <span className="text-black">Full-Stack Developper</span> and a <span className="text-black"><br></br>Object-Oriented Programmer</span>.</p>
            <p className="text-white text-left text-2xl font-light">Lets bring you project to life.</p>
          </div>
        </div>
      

        {/* ABOUT ME SECTION */}
        <div className="bg-custom-gray w-full h-96 flex px-20 gap-10">
        
          <div className="flex w-2/3 flex-col gap-2 justify-center">
            <p className="text-custom-purple text-left text-lg font-medium">ABOUT ME</p>
            <p className="text-black text-left text-lg font-light">I'm a full-stack developer and a programmer with a passion for building beautiful, functional web experiences. My toolkit includes Angular, ReactJS, Spring Boot, databases technologies, and a dash of desktop development magic! I thrive in collaborative environments and love solving problems creatively.</p>
          </div>
          <div className="flex w-1/3 h-full items-center justify-end">
            <Image className="rounded-full w-96 h-auto scale-75 object-contain " src={Photo} alt="photo"/>
          </div>
        </div>

        {/* SKILLSET SECTION */}
        <div className="w-full flex border-right h-full ">

          <div className="bg-custom-purple w-1/4 flex justify-center text-white">
            <p className="-rotate-90 flex items-center text-7xl">Skillset.</p>
          </div>

          <div className="bg-white w-3/4 h-full ">

          {/* SKILLSET GRID */}
          <div className="container m-auto grid grid-cols-2 grid-rows-3 gap-14 px-10 py-28">
            <div className="">
              <Image className="w-10 pb-5 hover:scale-110 transition-all duration-200 ease-in-out" src={FullStack} alt="fullStack"/>
              <p className="font-bold pb-2">Full-Stack Web Development</p>
              <p className="text-light">I craft robust and visually appealing web experiences. My expertise includes modern front-end frameworks (Angular, ReactJS), robust back-end technologies (Node.js, Java, Spring Boot, ASP.Net), and efficient REST API integration.</p>
            </div>
            <div className="">
              <Image className="w-10 pb-5 hover:scale-110 transition-all duration-200 ease-in-out" src={Database} alt="database"/>
              <p className="font-bold pb-2">Database Mastery</p>
              <p>I comfortably navigate relational (SQL, MySQL, Oracle) and non-relational (MongoDB) databases. This allows me to design and implement scalable data solutions to power your applications.</p>
            </div>
            <div className="">
              <Image className="w-10 pb-5 scale-[115%] hover:scale-125 transition-all duration-200 ease-in-out" src={Agile} alt="agile"/>
              <p className="font-bold pb-2">Adaptable Development Practices</p>
              <p>I'm proficient in Agile methodologies, version control (Git), and essential tools like UML to streamline development processes and ensure collaborative success.</p>
            </div>
            <div className="">
              <Image className="w-10 pb-5 hover:scale-110 transition-all duration-200 ease-in-out" src={ComputerDesktop} alt="computerDesktop"/>
              <p className="font-bold pb-2">Desktop Application Development</p>
              <p>I have experience building desktop applications (Windows Forms, WPF) in C#, enhancing my understanding of user interface design and cross-platform considerations.</p>
            </div>
            <div className="">
              <Image className="w-10 pb-5 hover:scale-110 transition-all duration-200 ease-in-out" src={Development} alt="development"/>
              <p className="font-bold pb-2">Responsive & User-Centric Design</p>
              <p>I prioritize crafting websites that adapt seamlessly across devices and deliver intuitive user experiences, utilizing my skills in  HTML5, CSS3, Bootstrap, and Tailwind CSS.</p>
            </div>
            <div className="">
              <Image className="w-10 pb-5 hover:scale-110 transition-all duration-200 ease-in-out" src={Puzzle} alt="puzzle"/>
              <p className="font-bold pb-2">Problem Solving </p>
              <p>I possess the analytical skills to quickly diagnose complex issues and implement creative solutions, constantly seeking new technologies to optimize results.</p>
            </div>

          </div>


          </div>


        </div>


        {/* TECHNOLOGIES SECTION */}
        <div className="bg-white w-full h-36">

        </div>


        {/* PROJECTS SECTION */}
        {/* SKILLSET SECTION */}
        <div className="w-full flex border-right h-full ">

          <div className="bg-custom-purple w-1/4 flex justify-center text-white">
            <p className="-rotate-90 flex items-center text-7xl">Projects.</p>
          </div>

          <div className="bg-custom-purple w-3/4 h-full px-10 py-28">

          {/* SKILLSET GRID */}
          <div className="container m-auto grid grid-cols-2 grid-rows-3 gap-14">
            <div className="bg-white aspect-square rounded-md shadow-lg">
              
            </div>
            <div className="bg-white aspect-square rounded-md shadow-lg">
              
            </div>
            <div className="bg-white aspect-square rounded-md shadow-lg">
              
            </div>
            <div className="bg-white aspect-square rounded-md shadow-lg">
              d
            </div>
            <div className="bg-white aspect-square rounded-md shadow-lg">
              
            </div>
            <div className="bg-white aspect-square rounded-md shadow-lg">
             
            </div>

          </div>


          </div>


        </div>

        {/* CURRICULUM VITAE SECTION */}
        <div className="w-full flex h-full">

          <div className="bg-custom-gray w-1/4 flex justify-center text-custom-purple">
            <p className="-rotate-90 flex items-center text-7xl whitespace-nowrap">Curriculum Vitaea.</p>
          </div>

          <div className="bg-custom-gray w-3/4 h-full py-28 flex justify-center">
            <div className="bg-custom-gray w-[85%] shadow-lg relative">

              <div className="opacity-0 hover:opacity-100 bg-custom-purple bg-opacity-5 backdrop-blur-sm flex cursor-pointer absolute h-full w-full justify-center items-center transition-all duration-200 ease-in-out">
                <button className="btn">Download CV
                  <span></span>
                </button>
              </div>
              
              <Image className="rounded-lg" src={CV} alt="cv"/>
              
            </div>
          </div>


        </div>

        {/* CONTACT SECTION */}
        </div>
        
      </div>

   
    </main>
  );
}
