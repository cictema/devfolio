import React from "react"
import Image from "next/image"
import Link from "next/link"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const other_projects = [
  {
    name: "Mini-Blockchain",
    description:
      "A miniature implementation of a Blockchain, using Python 3 and Flask.",
    image: "/project_section/blockchain.png",
    github: "https://github.com/cystema/mini-blockchain",
  },
  {
    name: "PlushCV",
    description:
      "A two-column one-page resume template with 71 stars and 25 forks on github.",
    image: "/project_section/plushcv.png",
    github: "https://github.com/cystema/plushcv",
    link: "https://www.overleaf.com/latex/templates/plushcv/jybpnsftmdkf",
  },
  {
    name: "Academic Portfolio",
    description:
      "Academic Portfolio in Jekyll, built for a friend.",
    image: "/project_section/anupamportfolio.png",
    github: "https://github.com/cystema/anupam-portfolio",
    link: "https://cystema.github.io/anupam-portfolio/",
  },
]

const conversational_ai_projects = [
  {
    name: "MovieLang AI: Movies with Langflow",
    description:
      "Conversational AI tool powered by LangChain, Langflow, AstraDB, RAG, and GPT, offering seamless, intelligent movie recommendations through real-time data retrieval.",
    image: "/project_section/movielangai.png",
    github: "https://github.com/cystema/movielang-ai",
    link: "https://movielang.shubh.ink/"
  },
  {
    name: "OpenAPI Hierarchical Planning Agent",
    description:
      "Hierarchical API Planner using LangChain and the OpenAPI Toolkit to intelligently navigate and consume an API spec, determining and calling endpoints sequentially based on complex user queries.",
    image: "/project_section/hpa.png",
    github: "https://github.com/cystema/langchain-openapi-tmdb",
  },
  {
    name: "Insight Engine: CSV AI ",
    description:
      "Interactive conversational tool that leverages LangChain, HoloViz Panel, and OpenAI GPT to empower users to seamlessly upload, query, and interact with their CSV data. ",
    image: "/project_section/csvai.png",
    github: "https://github.com/cystema/langchain-panel-csv-query",
    link: "https://tight-water-9718.ploomberapp.io/app"
  },
  {
    name: "Movie AI Assistant",
    description:
      "Conversational chatbot leveraging Dialogflow and Gen AI to provide personalized movie recommendations based on user queries.",
    image: "/project_section/movieassistant.png",
    github: "https://github.com/cystema/movieassistant",
    link: "https://sites.google.com/view/movieassistant/home",
  },
  {
    name: "Insight Engine: PDF AI",
    description:
      "AI-powered application that allows interactions with PDF documents and provides intelligent responses in a conversational format using RAG, Langchain, OpenAI, and HuggingFace.",
    image: "/project_section/pdfassistant.png",
    github: "https://github.com/cystema/pdf-reader-langchain-streamlit",
    link: "https://pdf-insight-engine-langchain.streamlit.app/"
  },
  {
    name: "WikiLam: Wiki AI",
    description:
      "Conversational Wikipedia query tool that leverages LlamaIndex, Chainlit, and OpenAI GPT to help you query and interact with indexed Wikipedia pages in a conversational manner.",
    image: "/project_section/wikilam.png",
    github: "https://github.com/cystema/wikilam",
  },
  {
    name: "RAG + Langchain",
    description:
      "Walks through the process of integrating Google’s Gemini API with LangChain to create a Retrieval-Augmented Generation (RAG) system for querying PDFs.",
    image: "/project_section/rag_langchain.png",
    github: "https://github.com/cystema/rag-with-langchain",
  },
  {
    name: "Rasa Chatbot",
    description:
      "A simple chatbot built with Rasa and Flask.",
    image: "/project_section/rasa.png",
    github: "https://github.com/cystema/rasa-project",
  },
]

const web_projects = [
  {
    name: "Wordle",
    description:
      "An implementation of popular game Wordle, with NextJS. The game is fully responsive and can be played on any device.",
    image: "/project_section/wordle.png",
    github: "https://github.com/cystema/wordle",
    link: "https://wordle.shubh.ink/",
  },
  {
    name: "GPT-Copy",
    description:
      "A Firefox Plugin that allows you to copy ChatGPT output with the click of a button.",
    image: "/project_section/chatgptcopy.png",
    github: "https://github.com/cystema/chatgpt-copy",
  },
  {
    name: "NoShorts",
    description:
      "A Firefox Plugin that removes all YouTube Shorts elements from the search results.",
    image: "/project_section/noshorts.png",
    github: "https://github.com/cystema/NoShorts",
    link: "https://addons.mozilla.org/en-US/firefox/addon/noytshorts/",
  },

]


const projects = [
  {
    name: "CSV AI",
    description:
      "Interactive conversational tool that leverages LangChain, HoloViz Panel, and OpenAI GPT to empower users to seamlessly upload, query, and interact with their CSV data. ",
    image: "/project_section/csvai.png",
    github: "https://github.com/cystema/langchain-panel-csv-query",
    link: "https://tight-water-9718.ploomberapp.io/app"
  },
  {
    name: "WikiLam",
    description:
      "Conversational Wikipedia query tool that leverages LlamaIndex, Chainlit, and OpenAI GPT to help you query and interact with indexed Wikipedia pages in a conversational manner.",
    image: "/project_section/wikilam.png",
    github: "https://github.com/cystema/wikilam",
  },
  {
    name: "MovieAssistant",
    description:
      "Conversational chatbot leveraging generative AI and NLP to provide personalized movie recommendations based on user preferences.",
    image: "/project_section/movieassistant.png",
    github: "https://github.com/cystema/movieassistant",
    link: "https://sites.google.com/view/movieassistant/home",
  },
  {
    name: "AI-Powered Insight Engine for PDFs",
    description:
      "AI-powered application that allows interactions with PDF documents and provides intelligent responses in a conversational format using RAG, Langchain, OpenAI, and HuggingFace.",
    image: "/project_section/pdfassistant.png",
    github: "https://github.com/cystema/pdf-reader-langchain-streamlit",
    link: "https://pdf-insight-engine-langchain.streamlit.app/"
  },
  {
    name: "Wordle",
    description:
      "An implementation of popular game Wordle, with NextJS. The game is fully responsive and can be played on any device.",
    image: "/project_section/wordle.png",
    github: "https://github.com/cystema/wordle",
    link: "https://wordle.shubh.ink/",
  },
  {
    name: "Mini Blockchain",
    description:
      "A miniature implementation of a Blockchain, using Python 3 and Flask.",
    image: "/project_section/blockchain.png",
    github: "https://github.com/cystema/mini-blockchain",
  },
  {
    name: "RAG + Langchain",
    description:
      "Walks through the process of integrating Google’s Gemini API with LangChain to create a Retrieval-Augmented Generation (RAG) system for querying PDFs.",
    image: "/project_section/rag_langchain.png",
    github: "https://github.com/cystema/rag-with-langchain",
  },
  {
    name: "Rasa Chatbot",
    description:
      "A simple chatbot built with Rasa and Flask.",
    image: "/project_section/rasa.png",
    github: "https://github.com/cystema/rasa-project",
  },
  {
    name: "GPT-Copy",
    description:
      "A Firefox Plugin that allows you to copy ChatGPT output with the click of a button.",
    image: "/project_section/chatgptcopy.png",
    github: "https://github.com/cystema/chatgpt-copy",
  },
  {
    name: "NoShorts",
    description:
      "A Firefox Plugin that removes all YouTube Shorts elements from the search results.",
    image: "/project_section/noshorts.png",
    github: "https://github.com/cystema/NoShorts",
    link: "https://addons.mozilla.org/en-US/firefox/addon/noytshorts/",
  },
  {
    name: "PlushCV",
    description:
      "A two-column one-page resume template with 71 stars and 25 forks on github.",
    image: "/project_section/plushcv.png",
    github: "https://github.com/cystema/plushcv",
    link: "https://www.overleaf.com/latex/templates/plushcv/jybpnsftmdkf",
  },
  {
    name: "Academic Portfolio",
    description:
      "Academic Portfolio in Jekyll, built for a friend.",
    image: "/project_section/anupamportfolio.png",
    github: "https://github.com/cystema/anupam-portfolio",
    link: "https://cystema.github.io/anupam-portfolio/",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <div className="my-9 pb-12 ">
        <h1 className="my-10 text-center font-bold text-4xl text-white">
          <div className="flex items-center justify-center">
            <span className="text-4xl font-semibold bg-gradient-to-tr from-red-500 via-yellow-400 to-red-400 bg-clip-text text-transparent background-animate">
              Projects
            </span>

          </div>
          <hr className="w-6 h-1 mx-auto my-4 bg-gray-100 border-0 rounded"></hr>
        </h1>


        <h1 className="my-10 text-center text-3xl text-white">
          <div className="flex items-center justify-center">
            <span className="underline2">
              Conversational AI Projects
            </span>
          </div>
          {/* <hr className="w-6 h-1 mx-auto my-4 bg-gray-100 border-0 rounded"></hr> */}
        </h1>

        <div className="">
          <div className="flex flex-row gap-4 flex-wrap justify-center">
            {conversational_ai_projects.map((project, idx) => {
              return (
                <div key={idx} className="sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 p-6 bg-white border border-gray-200 rounded-lg shadow bg-gradient-to-br from-gray-100 via-blue-200 to-gray-100">
                  <div className="">
                    <Link href={project.github}>
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
                      <Link href={project.github} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gradient-to-tr from-blue-900 via-blue-800 to-blue-800 rounded-lg  hover:-translate-y-1 hover:scale-110 hover:bg-red-500 duration-300 hover:from-pink-500 hover:to-red-600" target="_blank">
                        <p className=""> Github</p>
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                      </Link>
                      {project.link && (
                        <Link href={project.link} className="font-bold inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gradient-to-tr from-blue-900 via-blue-800 to-blue-800 rounded-lg  hover:-translate-y-1 hover:scale-110 hover:bg-red-600 duration-300 hover:from-pink-500 hover:to-red-600" target="_blank">
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



        <h1 className="my-10 text-center text-3xl text-white">
          <div className="flex items-center justify-center">
            <span className="underline2">
              Web Projects
            </span>
          </div>
          {/* <hr className="w-6 h-1 mx-auto my-4 bg-gray-100 border-0 rounded"></hr> */}
        </h1>

        <div className="">
          <div className="flex flex-row gap-4 flex-wrap justify-center">
            {web_projects.map((project, idx) => {
              return (
                <div key={idx} className="sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 p-6 bg-white border border-gray-200 rounded-lg shadow bg-gradient-to-br from-gray-100 via-purple-200 to-gray-100">
                  <div className="">
                    <Link href={project.github}>
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
                      <Link href={project.github} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gradient-to-tr from-blue-900 via-blue-800 to-blue-800 rounded-lg  hover:-translate-y-1 hover:scale-110 hover:bg-red-500 duration-300 hover:from-pink-500 hover:to-red-600" target="_blank">
                        <p className=""> Github</p>
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                      </Link>
                      {project.link && (
                        <Link href={project.link} className="font-bold inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gradient-to-tr from-blue-900 via-blue-800 to-blue-800 rounded-lg  hover:-translate-y-1 hover:scale-110 hover:bg-red-600 duration-300 hover:from-pink-500 hover:to-red-600" target="_blank">
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

        <h1 className="my-10 text-center text-3xl text-white">
          <div className="flex items-center justify-center">
            <span className="underline2">
              Other Projects
            </span>
          </div>
          {/* <hr className="w-6 h-1 mx-auto my-4 bg-gray-100 border-0 rounded"></hr> */}
        </h1>

        <div className="">
          <div className="flex flex-row gap-4 flex-wrap justify-center">
            {other_projects.map((project, idx) => {
              return (
                <div key={idx} className="sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 p-6 bg-white border border-gray-200 rounded-lg shadow bg-white">
                  <div className="">
                    <Link href={project.github}>
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
                      <Link href={project.github} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gradient-to-tr from-blue-900 via-blue-800 to-blue-800 rounded-lg  hover:-translate-y-1 hover:scale-110 hover:bg-red-500 duration-300 hover:from-pink-500 hover:to-red-600" target="_blank">
                        <p className=""> Github</p>
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                      </Link>
                      {project.link && (
                        <Link href={project.link} className="font-bold inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gradient-to-tr from-blue-900 via-blue-800 to-blue-800 rounded-lg  hover:-translate-y-1 hover:scale-110 hover:bg-red-600 duration-300 hover:from-pink-500 hover:to-red-600" target="_blank">
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


      </div>


    </section>
  )
}

export default ProjectsSection
