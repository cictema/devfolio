"use client" // this is a client component
import React from "react"
import Image from "next/image"
import { Link } from "react-scroll/modules"
import { Link as Scroll } from "react-scroll/modules"

import { HiArrowDown } from "react-icons/hi"
import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineLinkedin,
  AiOutlineYoutube,
} from "react-icons/ai"
const HeroSection = () => {
  return (
    <section id="home">
      {/* <div></> */}
      <div className="min-h-screen flex flex-col justify-center items-center">
        <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-16 md:py-20 md:flex-row md:space-x-4 md:text-left">
          <div className="md:mt-2 md:w-1/2">
            <Image
              src="/profile.png"
              alt=""
              width={400}
              height={400}
              className="rounded-full shadow-2xl"
            />
          </div>
          <div className="md:mt-2 md:w-3/5 prose-invert text-white">
            <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl text-white">hi, i&#39;m</h1>
            <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl bg-red-600 bg-clip-text text-7xl text-transparent">shubham!</h1>
            <p className="text-lg mt-4 mb-6 md:text-2xl text-white`">
              I&#39;m a versatile{" "}
              <span className="font-semibold bg-gradient-to-tr from-red-500 via-yellow-400 to-red-400 bg-clip-text text-transparent background-animate">
                Conversational AI Engineer{" "}
              </span> and
              <span className="font-semibold bg-gradient-to-tr from-red-500 via-yellow-400 to-red-400 bg-clip-text text-transparent background-animate">
                {" "} Software Developer{" "}
              </span>
              working on
              <Scroll
                // key={idx}
                to="conversational_ai_projects"
                className={
                  ""
                }
                activeClass="active"
                spy={true}
                smooth={true}
                // offset={-100}
                duration={500}
              >
                {/* {item.label} */}
                <span className="font-color:yellow font-semibold underline2">
                  {" "} Generative AI
                </span>
              </Scroll>
              {", "}
              <Scroll
                to="conv_design"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
              >
                {/* {item.label} */}
                <span className="font-color:yellow font-semibold underline2">
                  {" "} Conversation Design
                </span>
              </Scroll>{", "}
              <Scroll
                to="web_projects"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
              >
                {/* {item.label} */}
                <span className="font-color:yellow font-semibold underline2">
                  {" "} Full Stack Software Development
                </span>
              </Scroll>
              {", "}  and <span className="font-semibold underline2">
                {" "} HPC {" "}
              </span>. Working towards building software that empowers and inspires users.
            </p>
            <div className="space-x-2">
              <Link
                to="projects"
                className="font-bold prose-invert px-8 py-2.5 rounded shadow bg-gradient-to-tr from-blue-900 via-blue-800 to-blue-800 transition ease-in-out delay-0 bg-white-500 hover:-translate-y-1 hover:scale-110 hover:bg-red-600 duration-300 hover:from-red-500 hover:to-red-600"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Projects
              </Link>
              <button className="font-bold prose-invert px-8 py-2 rounded shadow bg-gradient-to-tr from-blue-900 via-blue-800 to-blue-800 transition ease-in-out delay-0 bg-white-500 hover:-translate-y-1 hover:scale-110 hover:bg-red-600 duration-300 hover:from-red-500 hover:to-red-600">
                <a className="" href="https://github.com/cystema" rel="noreferrer" target="_blank">
                  Github
                </a>
              </button>
              <button className="font-bold prose-invert px-8 py-2 rounded shadow bg-gradient-to-tr from-blue-900 via-blue-800 to-blue-800 transition ease-in-out delay-0 bg-white-500 hover:-translate-y-1 hover:scale-110 hover:bg-red-600 duration-300 hover:from-red-500 hover:to-red-600">
                <a className="" href="https://www.linkedin.com/in/mazumders/" rel="noreferrer" target="_blank">
                  LinkedIn
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center text-center justify-center fill-white">
          <Link
            to="about"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <HiArrowDown size={50} className="animate-bounce fill-white" />
          </Link>

        </div>
      </div>
    </section>
  )
}

export default HeroSection
