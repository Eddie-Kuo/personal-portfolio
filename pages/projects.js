/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import Head from "next/head";
import React from "react";
import AdditionalProjectCard from "../components/AdditionalProjectCard";
import ProjectCard from "../components/ProjectCard";
import ProjectCardThree from "../components/ProjectCardThree";
import ProjectCardTwo from "../components/ProjectCardTwo";
import { additionalProjects } from "../components/utils/additionalProjects";

export default function Projects() {
  const notableProjects = additionalProjects.map((project) => (
    <AdditionalProjectCard
      key={project.id}
      name={project.name}
      description={project.description}
      githubLink={project.githubLink}
      deployedLink={project.deployedLink}
      tech={project.tech}
      picture={project.picture}
      cover={project.cover}
      note={project.note}
    />
  ));
  return (
    <>
      <Head>
        <title>Eddie Kuo</title>
      </Head>
      <main className="flex flex-col items-center bg-light dark:bg-dark">
        <div className="max-w-7xl sm:py-10 px-6 w-full">
          <motion.h3
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1.2,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            viewport={{ once: true }}
            className="uppercase tracking-[10px] md:tracking-[15px] text-xl font-bold text-center my-8 sm:mb-24 sm:mt-16 text-darkText dark:text-light"
          >
            Some Things I've Built
          </motion.h3>
          <div className="flex flex-col items-center my-10">
            <ProjectCard />
            <ProjectCardTwo />
            <ProjectCardThree />
          </div>

          <motion.h3
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1.2,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            viewport={{ once: true }}
            className="tracking-[10px] md:tracking-[15px] text-xl font-bold text-center my-10 sm:my-24 text-darkText dark:text-light"
          >
            Other Notable Projects
          </motion.h3>
          <div className="grid place-content-center md:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-2 mb-16">
            {notableProjects}
          </div>
        </div>
      </main>
    </>
  );
}
