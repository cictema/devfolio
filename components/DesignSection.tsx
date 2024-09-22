import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"


const designs = [
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

const DesignSection = () => {
  return (
    <section id="designs">
    <div className="my-9 pb-12 ">
      <h1 className="my-10 text-center font-bold text-4xl text-white">
        ./design
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-row gap-4 flex-wrap justify-center">
        {designs.map((design, idx) => {
          return (
            <div key={idx} className="sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 p-6 bg-white border border-gray-200 rounded-lg shadow bg-white">
              <div className="">
                    <Image
                      src={design.image}
                      alt=""                        
                      width={1000}
                      height={1000}
                      className="rounded-xl shadow-xl hover:opacity-70 shadow-2xl"
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
