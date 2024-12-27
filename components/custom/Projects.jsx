import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import Image from "next/image";

const projects = {
  frontend: [
    {
      title: "Travel Reservation Landing",
      description: "Made with React, TailwindCSS, and TypeScript.",
      image: "/map.jpg",
      link: "https://elegant-starburst-499b6b.netlify.app/",
    },
    {
      title: "Rental Car App",
      description: "Made with Next JS, TailwindCSS, and TypeScript.",
      image: "/audi.jpg",
      link: "https://car-rental-app-next-js.vercel.app/",
    },
    {
      title: "Ecommerce",
      description: "Made with HTML, CSS, and JavaScript.",
      image: "/cart.jpg",
      link: "https://pablonalonso.github.io/E-Commerce-JavaScript/index.html",
    },
    {
      title: "To-Do List",
      description: "Made with pure React",
      image: "/todo-pencil.jpg",
      link: "#",
    },
  ],
  backend: [],
};

const Projects = () => {
  return (
    <div className="my-[50px]">
      <h2 className="text-center text-red-500 font-bold text-2xl my-4">My Projects</h2>
      <Tabs defaultValue="tab1" className="w-full flex flex-col items-center py-10">
        {/* Lista de pestañas */}
        <TabsList className="flex flex-col md:flex-row gap-5 w-fit md:border p-0 rounded-full">
          <TabsTrigger
            value="tab1"
            className="w-[200px] data-[state=active]:bg-red-500 border md:border-0 rounded-full data-[state=active]:text-white data-[state=active]:rounded-full transition-all duration-300"
          >
            Front End
          </TabsTrigger>
          <TabsTrigger
            value="tab2"
            className="w-[200px] border md:border-0 rounded-full data-[state=active]:bg-red-500 data-[state=active]:text-white data-[state=active]:rounded-full transition-all duration-300"
          >
            Backend
          </TabsTrigger>
        </TabsList>

        {/* Contenido de Front End */}
        <TabsContent
          value="tab1"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 py-6 max-w-[1000px] mx-auto"
        >
          {projects.frontend.map((project, index) => (
            <div
              key={index}
              className="border bg-gray-100 shadow-xl hover:scale-105 transform transition-all duration-300 rounded-2xl overflow-hidden h-[400px] w-[90%] sm:w-[300px] mx-auto"
            >
              <Image
                src={project.image}
                width={600}
                height={200}
                className="object-cover h-[200px] w-full"
                alt="project image"
              />

              <div className="flex flex-col justify-between h-[200px] items-center text-center gap-4 p-4">
                <div className="text-sm flex flex-col gap-2">
                  <h3 className="font-semibold text-lg">{project.title}</h3>
                  <p className="text-sm text-gray-600">{project.description}</p>
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-500 hover:underline"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </TabsContent>

        {/* Contenido de Backend */}
        <TabsContent
          value="tab2"
          className="flex flex-wrap justify-center gap-6 py-6"
        >
          {projects.backend.length > 0 ? (
            projects.backend.map((project, index) => (
              <div
                key={index}
                className="bg-white border shadow-md rounded-lg p-5 w-[90%] sm:w-[300px] mx-auto"
              >
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-sm text-gray-600">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-500 mt-3 inline-block hover:underline"
                >
                  View Project
                </a>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No backend projects available at the moment.</p>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Projects;
