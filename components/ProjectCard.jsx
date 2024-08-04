import React from "react";
import ProjectImage from "./ProjectImage";
import { motion } from "framer-motion";
import { AiOutlineGithub, AiOutlineLink } from "react-icons/ai";

export default function ProjectCard() {
  return (
    <>
      <motion.div
        initial={{ y: 40 }}
        whileInView={{ y: 0, opacity: [0.5, 0.8, 1] }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative flex md:flex-row md:justify-between justify-center w-full h-96 items-center max-w-5xl"
      >
        <ProjectImage
          className="rounded-lg w-[700px] h-[380px] md:w-[450px] md:h-[300px] lg:w-[550px] lg:h-[400px] opacity-80 hover:opacity-100"
          link="https://github.com/Eddie-Kuo/intellicourse-ai"
          image={"/images/Craft-cover.jpg"}
        />

        <div className="absolute rounded-lg bg-dark/75 top-0 bottom-0 right-0 left-0 flex flex-col items-start justify-center md:hidden z-10 px-8 gap-0.5">
          <a className="text-blueRings font-serif text-sm">Featured Project</a>
          <a className="text-highlight font-serif text-xl">IntelliCourse.AI</a>
          <p className="text-light font-serif text-sm py-5">
            Ciao is a mobile app developed with React Native to solve the issue
            of recommendations getting lost in past conversations. The main
            purpose of Ciao is to be able to document your favorite places by
            city for your friends to view and visit, sharing your memorable
            experiences with the people you care about most.
          </p>
          <ul className="flex flex-row gap-2 text-[#b0b0b0] font-serif text-sm">
            <li>Next.js</li>
            <li>TypeScript</li>
            <li>TailwindCSS</li>
            <li>OpenAI</li>
            <li>Turso</li>
            <li>Drizzle</li>
          </ul>
          <ul className="flex flex-row gap-2 text-[#b0b0b0] font-serif text-xs ot-1">
            <a
              href="https://github.com/Eddie-Kuo/intellicourse-ai"
              target="_blank"
            >
              <AiOutlineGithub size={30} />
            </a>
            <a href="https://intellicourse-ai.vercel.app/" target="_blank">
              <AiOutlineLink size={30} />
            </a>
          </ul>
        </div>

        <div className="hidden md:flex flex-col text-end justify-center absolute right-0 top-0 bottom-0 max-w-[50%]">
          <h5 className="font-serif text-sm font-bold pb-3 text-darkText dark:text-light/70">
            Featured Project
          </h5>
          <h3 className="z-10 font-serif text-2xl font-bold pb-3 text-darkText dark:text-light">
            IntelliCourse.AI
          </h3>
          <p className="z-10 rounded-md text-start bg-dark/80 dark:bg-textBgLight/90 font-serif text-light dark:text-darkText pr-1 pl-3 py-2">
            A fullstack web application built to empower users in their learning
            journey with the help of AI. Users can enter a topic of choice and
            allow AI to generate a detailed course, chapters, and related videos
            along with an &quot;end of course&quot; quiz to ensure proficiency
            on the given topic.
          </p>
          <ul className="flex flex-row gap-2 justify-end z-10 font-serif text-md pt-3 dark:text-light/70">
            <li>Next.js</li>
            <li>TypeScript</li>
            <li>TailwindCSS</li>
            <li>OpenAI</li>
            <li>Turso</li>
            <li>Drizzle</li>
          </ul>
          <ul className="flex flex-row gap-2 justify-end text-[#b0b0b0] font-serif text-md pt-3">
            <a
              href="https://github.com/Eddie-Kuo/intellicourse-ai"
              target="_blank"
            >
              <AiOutlineGithub size={30} className="dark:text-light/100" />
            </a>
            <a href="https://intellicourse-ai.vercel.app/" target="_blank">
              <AiOutlineLink size={30} />
            </a>
          </ul>
        </div>
      </motion.div>
    </>
  );
}
