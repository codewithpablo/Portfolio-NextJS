import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import Image from "next/image";

const TimelineEvent = ({ title, description, top, year }) => (
  <div className="relative ml-10 mb-8">
    <div
      className={`absolute top-${top} -left-[46px] w-3 h-3 bg-red-500 rounded-full`}
    ></div>
    <span className="text-sm text-light text-gray-400">{year}</span>
    <h3 className="text-sm font-semibold">{title}</h3>
    <p className="text-sm text-gray-700 mt-2">{description}</p>
  </div>
);


const infoData = [
  { image: "user-round.svg", text: "Pablo Alonso" },
  { image: "phone.svg", text: "+54 9 3624 123698" },
  { image: "email.svg", text: "pabloalonsonext@gmail.com" },
  { image: "github.svg", text: "github.com/codewithpablo" },
  { image: "linkedin.svg", text: "linkedin.com/in/codewithpablo" },
  { image: "home.svg", text: "Chaco, Argentina" },
];

const techStack = [
  { iconClass: "devicon-javascript-plain", title: "JavaScript", color: "bg-yellow-400" },
  { iconClass: "devicon-react-original", title: "React", color: "bg-blue-400" },
  { iconClass: "devicon-tailwindcss-plain", title: "TailwindCSS", color: "bg-sky-300" },
  { iconClass: "devicon-nextjs-plain", title: "Next.js", color: "bg-gray-800" },
  { iconClass: "devicon-git-plain", title: "Git", color: "bg-orange-400" },
  { iconClass: "devicon-github-original", title: "GitHub", color: "bg-black" },
];



const TechCard = ({ iconClass, title, color }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className={`w-20 h-20 rounded-full ${color} shadow-md flex items-center justify-center`}>
        <div className="text-white text-3xl">
          <i className={iconClass}></i>
        </div>
      </div>
      <p className="text-gray-700 mt-2 text-sm font-semibold">{title}</p>
    </div>
  );
};

const About = () => {
  return (
    <div className="flex flex-col md:flex-row md:gap-20 max-w-[1000px] md:h-[500px] overflow-y-hidden mx-auto my-20">
      {/* Imagen de perfil */}
      <div className="flex-1 items-center mt-5 hidden md:flex md:flex-col">
       <div className="text-center flex flex-col gap-5">
          <h2 className="text-gray-800 text-5xl font-bold">About Me</h2>
          <p className="text-gray-400">Personal info, my awesome journey and technologies I use</p>
       </div>
        <div className="relative size-[300px] rounded-full overflow-hidden shadow-lg mb-5 mt-10">
          <Image src="/fotoDePabloConCamisa.jpg" alt="pablo" fill />
        </div>
      </div>

      {/* Contenido de Tabs */}
      <div className="w-full p-5">
        <Tabs defaultValue="tab1">
          {/* Lista de pestañas */}
          <TabsList className="rounded-full border w-full flex justify-between mb-10">
            <TabsTrigger className="flex-1 text-center h-full w-full p-0 m-0 rounded-full data-[state=active]:bg-red-500  data-[state=active]:text-white font-light" value="tab1">Personal Info</TabsTrigger>
            <TabsTrigger className="flex-1 text-center  h-full w-full p-0 m-0 rounded-full data-[state=active]:bg-red-500  data-[state=active]:text-white font-light" value="tab2">Qualifications</TabsTrigger>
            <TabsTrigger className="flex-1 text-center  h-full w-full p-0 m-0 rounded-full data-[state=active]:bg-red-500  data-[state=active]:text-white font-light" value="tab3">Skills</TabsTrigger>
          </TabsList>

          {/* Contenido de cada pestaña */}
          <div>
            <TabsContent value="tab1">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center md:text-left">Buildind projects since beginning  of 2023</h2>
              <p className="text-gray-500 mb-4">
                I'm a passionate developer with expertise in front-end web technologies. I specialize in creating scalable applications using modern frameworks.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {infoData.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 py-3 px-6 md:w-[285px] text-sm bg-red-100 rounded-full shadow">
                    <Image src={item.image} width={20} height={20} alt={`image-${index}`} />
                    <p className="text-red-700">{item.text}</p>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="tab2">
            <div className="flex  space-x-12 py-12 px-6">
                {/* Sección de experiencias */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-6">
                    <Image  src="/briefcase-business.svg" width={25} height={25} alt="briefcase"/>
                    <h2 className="text-sm font-semibold">Experiences</h2>
                  </div>
                  <div className="relative border-l-[1px] h-full border-gray-300">
                    <TimelineEvent
                      title="Mentor at Informatorio"
                      description="Taught Python, SQL and Django during 4 months: from July to September"
                      top="0"
                      year="2024"
                    />
                    <TimelineEvent
                      title="Internship at ECOM"
                      description="I collaborated in a project destined to a website made for the ministry of security of the province I live in"
                      top="0"
                      year="2024"
                    />
                  </div>
                </div>

                {/* Sección de historial académico */}
                <div className="flex-1">
                <div className="flex items-center gap-2 mb-6">
                    <Image  src="/graduation-cap.svg" width={25} height={25} alt="graduation-cap"/>
                    <h2 className="text-sm font-semibold">Academic History</h2>
                  </div>
                  <div className="relative border-l-[1px] border-gray-300 h-full">
                    <TimelineEvent
                      title="Modern Languges Deparment of UNNE" 
                      description="I graduated with an Upper Intermediate Level Of Enlgish (B1)."
                      top="0"
                      year="2018 - 2022"
                    />
                    <TimelineEvent
                      title="E.E.T N°24 'Simon de Iriondo'"
                      description="I graduated form High School in 2019 as Computer Science Technician."
                      top="0"
                      year="2014 - 2019"
                    />
                  </div>
                </div>
              </div>

            </TabsContent>

            <TabsContent value="tab3">
              <h2 className="text-2xl font-bold text-gray-700 my-12  text-center">Technologies I Use</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-12">
                {techStack.map((tech, index) => (
                  <TechCard key={index} iconClass={tech.iconClass} title={tech.title} color={tech.color} />
                ))}
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default About;
