import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "Task Management Board",
    description:
      "A task management kanban board in React.",
    image: "/trelloclone.png",
    github: "https://github.com/hqasmei/thankful-thoughts",
    // link: "https://thankfulthoughts.io/",
  },
  {
    name: "Dealership Review Portal",
    description: "A full-stack Dealership Review Portal using Django, IBM Cloud, SQLite, and Kubernetes.",
    image: "/trelloclone.png",
    github: "https://github.com/sansquoi/CloudAppDevelopment_Capstone",
    // link: "https://platoio.com/register",
  },
  {
    name: "PlushCV",
    description:
      "A two-column one-page resume template with 71 stars and 25 forks on github.",
    image: "/plushcv.png",
    github: "https://github.com/sansquoi/plushcv",
    // link: "https://github.com/sansquoi/PlushCV",
  },
]

const items = [
  {
    id: 1,
    src: 'https://images.pexels.com/photos/1037995/pexels-photo-1037995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: 'link here',
  },
  {
    id: 2,
    src: 'https://images.pexels.com/photos/1037995/pexels-photo-1037995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: 'link here',
  },
  {
    id: 3,
    src: 'https://images.pexels.com/photos/1037995/pexels-photo-1037995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: 'link here',
  },
  {
    id: 4,
    src: 'https://images.pexels.com/photos/1037995/pexels-photo-1037995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: 'link here',
  },
  {
    id: 5,
    src: 'https://images.pexels.com/photos/1037995/pexels-photo-1037995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: 'link here',
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <div className="my-12 pb-12 ">
        <h1 className="my-10 text-center font-bold text-4xl text-white">
          ./projects
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>
      
        <div className="">
          <div className="flex flex-row gap-4 flex-wrap justify-center">
            {projects.map((project, idx) => {
              return (   
                    <div key={idx} className="sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                      <div className="">
                          <Link href={project.github}>
                            <Image
                              src={project.image}
                              alt=""                        
                              width={1000}
                              height={1000}
                              className="rounded-xl shadow-xl hover:opacity-70 shadow-2xl"
                            />
                          </Link>
                        </div>
                        <div className="mt-8">
                        <h1 className="text-2xl font-bold mb-6 bg-gradient-to-tr from-red-900 via-blue-800 to-teal-900 bg-clip-text text-transparent">{project.name}</h1>
                        <div className="fill-black  mb-6 ">
                            <Link href={project.github} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gradient-to-tr from-red-900 via-blue-800 to-teal-900 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition ease-in-out delay-0 bg-white-500 hover:-translate-y-1 hover:scale-110 hover:bg-orange-500 duration-300 hover:from-pink-500 hover:to-yellow-500" target="_blank">                              
                              <p className=""> Github</p> 
                              <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                              </svg>
                            </Link>                            
                          </div>
                          
                          <p className="text-xl leading-7 mb-4 bg-gradient-to-tr from-red-900 via-blue-800 to-teal-900 bg-clip-text text-transparent ">
                            {project.description}
                          </p>
                      </div>
                    </div>
                
              )
            })}
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
