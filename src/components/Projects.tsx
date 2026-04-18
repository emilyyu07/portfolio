"use client";

import { motion } from "framer-motion";
import { siteData } from "@/lib/siteData";

const sectionReveal = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const listReveal = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemReveal = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Projects() {
  return (
    <motion.section
      id="projects"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.32 }}
      variants={sectionReveal}
      className="mx-auto w-full max-w-[1280px] scroll-mt-24 px-5 py-24 md:px-12"
    >
      <p className="projects-command">$ ls ./projects</p>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.32 }}
        variants={listReveal}
        className="projects-list"
      >
        {siteData.projects.map((project) => (
          <motion.a
            key={project.name}
            href={project.href}
            target="_blank"
            rel="noreferrer"
            variants={itemReveal}
            className="project-row group"
          >
            <div className="project-info">
              <span className="project-dirname">{project.name}</span>
              <span className="project-stack">{project.stack}</span>
              <span className={`project-desc${project.descriptionTbd ? " project-desc-muted" : ""}`}>
                {project.description}
              </span>
            </div>

            <div className="project-right">
              <div className="project-preview" data-name={project.previewName} />
              <span className="project-arrow">-&gt;</span>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </motion.section>
  );
}
