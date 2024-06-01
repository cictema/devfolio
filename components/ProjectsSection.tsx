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

const ProjectsSection = () => {
  return (
    <section id="projects">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
      <h1 className="my-10 text-center font-bold text-4xl text-white">
        ./projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>
      
      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.github}>
                      <Image
                        src={project.image}
                        alt=""                        
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70 border-solid border-2 border-zinc-950"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6 bg-gradient-to-tr from-red-300 via-blue-200 to-teal-600 bg-clip-text text-6xl text-transparent">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-blue-100 ">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4 fill-white">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer fill-white"
                        />
                      </Link>
                      {/* <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link> */}
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
      </div>
    </section>
  )
}

export default ProjectsSection
