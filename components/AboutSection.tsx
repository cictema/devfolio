import React from "react"
import Image from "next/image"

const skills = [
  { skill: "Retrieval-Augmented Generation" },
  { skill: "LangChain" },
  { skill: "Langflow" },
  { skill: "Vector Databases" },
  { skill: "Conversation Design" },
  { skill: "Chatbot Development" },
  { skill: "Microsoft Bot Framework" },
  { skill: "Rasa" },
  { skill: "Dialogflow" },
  { skill: "Python" },
  { skill: "React" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "DevOps" },
  { skill: "C#" },
  { skill: "Java" },
  { skill: "C" },
  { skill: "Linux" },
  { skill: "SQL" },
  { skill: ".NET" },
  { skill: "Node.js" },
  { skill: "Next.js" },
  { skill: "Django" },
  { skill: "Docker" },
  { skill: "Kubernetes" },
  { skill: "Swagger" },
  { skill: "Postman" },
  { skill: "WebAPI" },
  { skill: "SOAP" },
  { skill: "Bash" },
  { skill: "Fuzzing" },
  { skill: "Bootstrap" },
  { skill: "Tailwind CSS" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "Azure" },
  { skill: "AWS" },
  { skill: "IBM Cloud" },
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="flex flex-col text-center items-center justify-center">
        <h1 className="my-10 text-center font-bold text-4xl text-white">
          <div className="flex items-center justify-center">
            {/* <span className="underline3">about me </span> */}
            <span className="text-4xl font-semibold bg-gradient-to-tr from-red-500 via-yellow-400 to-red-400 bg-clip-text text-transparent background-animate">
              About Me
            </span>
          </div>
          <hr className="w-6 h-1 mx-auto my-4 bg-gray-100 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-3xl font-bold mb-6 md:text-left text-zinc-200">
              Get to know me!
            </h1>
            <div className="text-xl prose-invert bg-gradient-to-tr from-red-400 via-blue-200 to-teal-400 bg-clip-text text-transparent background-animate">
              <p>
                Hi, my name is Shubham and I am a{" "}
                <span className="font-bold">{"highly ambitious"}</span>,
                <span className="font-bold">{" self-motivated"}</span>, and
                <span className="font-bold">{" driven"}</span> software engineer.
              </p>
              <br />
              <p>
                Currently, I’m expanding my expertise in Conversational AI. At Cantonica, I’m developing cutting-edge chatbots using Retrieval-Augmented Generation (RAG) for PWA marketplaces. This work involves conversation design and creating intelligent systems that provide dynamic, real-time responses, enhancing user engagement and interaction. My experience in conversation design allows me to craft smooth, intuitive interactions, ensuring users have a seamless experience with the chatbot interfaces.
              </p>
              <br />
              <p>
                My personal motto is to always {" "}
                <span className="text-white">
                  strive for continous improvement
                </span>{" "}
                and that&#39;s what I aim for. With a deep passion for
                technology and an eagerness to expand the boundaries of possibility,
                I&apos;m excited about the future of my career
                and am always on the lookout for new and exciting opportunities. 🙂
              </p>
            </div>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-3xl font-bold mb-6 text-zinc-200">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-700 rounded font-bold prose-invert bg-white transition ease-in-out delay-0 bg-white-500 "
                  >
                    {/* hover:-translate-y-1 hover:scale-110 hover:bg-orange-500 duration-300 */}
                    {item.skill}
                  </p>
                )
              })}
            </div>
            <Image
              src="/about_section/hero-image.svg"
              alt=""
              width={325}
              height={325}
              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
