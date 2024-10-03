import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"


const logodesigns = [
  {
    name: "UtahSec",
    description: "A logo for University of Utah's cybersecurity club.",
    image: "/design_section/utahsec1.png",
  },
  {
    name: "CTF Team",
    description: "A logo for University of Utah's official capture-the-flag team.",
    image: "/design_section/utahsec3.png",
  },
]

const convdesigns = [
  {
    name: "Case Study: Movie Recommendation Engine ",
    description: "A slide deck explaining the design and motivation behind MovieLang, a movie recommendation engine built with Langflow and Next.js.",
    image: "/design_section/convdesign-movielang.png",
    link: "https://www.behance.net/gallery/209369627/Conversation-Design-MovieLang"
  },

]


const DesignSection = () => {
  return (
    <section id="designs">
      <div className="my-9 pb-12 ">
        <h1 className="my-10 text-center font-bold text-4xl text-white">
          <span className="text-4xl font-semibold bg-gradient-to-tr from-red-500 via-yellow-400 to-red-400 bg-clip-text text-transparent background-animate">
            Design
          </span>
          <hr className="w-6 h-1 mx-auto my-4 bg-gray-200 border-0 rounded"></hr>
        </h1>

        <h1 className="my-10 text-center text-3xl text-white">
          <div id="conv_design" className="flex items-center justify-center">
            <span className="underline2">
              Conversation Design
            </span>
          </div>
          {/* <hr className="w-6 h-1 mx-auto my-4 bg-gray-100 border-0 rounded"></hr> */}
        </h1>

        <div className="">
          <div className="flex flex-row gap-4 flex-wrap justify-center">
            {convdesigns.map((project, idx) => {
              return (
                <div key={idx} className="sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 p-6 border-solid border-4  border-gray-900 rounded-lg shadow bg-white">
                  <div className="">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-t-xl shadow-xl hover:opacity-70 shadow-2xl object-cover"
                      />
                    </Link>
                  </div>
                  <div className="mt-6">
                    <h1 className="text-2xl font-bold mb-6 bg-gradient-to-tr from-red-900 via-blue-800 to-teal-900 bg-clip-text text-transparent">{project.name}</h1>
                    <div className="flex gap-4 mb-6">
                      {/* <Link href={project.github} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gradient-to-tr from-blue-900 via-blue-800 to-blue-800 rounded-lg  hover:-translate-y-1 hover:scale-110 hover:bg-red-500 duration-300 hover:from-pink-500 hover:to-red-600" target="_blank">
                        <p className=""> Github</p>
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                      </Link> */}
                      {project.link && (
                        <Link href={project.link} className="font-bold inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gradient-to-tr from-red-600 via-blue-800 to-red-600 rounded-lg  hover:-translate-y-1 hover:scale-110 hover:bg-red-600 duration-300 hover:from-pink-500 hover:to-red-600" target="_blank">
                          <p className=""> Visit</p>
                          <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                          </svg>
                        </Link>
                      )}
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

        <hr className="w-6 h-1 mx-auto my-4 bg-gray-100 border-0 rounded"></hr>


        <h1 className="my-10 text-center text-3xl text-white">
          <div className="flex items-center justify-center">
            <span className="underline2">
              Logos
            </span>
          </div>
          {/* <hr className="w-6 h-1 mx-auto my-4 bg-gray-100 border-0 rounded"></hr> */}
        </h1>

        <div className="flex flex-row gap-4 flex-wrap justify-center">
          {logodesigns.map((design, idx) => {
            return (
              <div key={idx} className="sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 p-6 bg-white border border-gray-200 rounded-lg shadow bg-white">
                <div className="">
                  <Image
                    src={design.image}
                    alt=""
                    width={1000}
                    height={1000}
                    className="rounded-t-xl shadow-xl hover:opacity-70 shadow-2xl"
                  />
                </div>
                <div className="mt-8">
                  <h1 className="text-2xl font-bold mb-6 bg-gradient-to-tr from-red-900 via-blue-800 to-teal-900 bg-clip-text text-transparent">{design.name}</h1>

                  <p className="text-xl leading-7 mb-4 bg-gradient-to-tr from-red-900 via-blue-800 to-teal-900 bg-clip-text text-transparent ">
                    {design.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default DesignSection
