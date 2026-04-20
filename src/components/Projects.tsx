"use client";

import Image from "next/image";
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
              <div className="project-stack" aria-label={`${project.name} tech stack`}>
                {project.stack.split(",").map((item) => item.trim()).filter(Boolean).map((stackItem, index) => (
                  <span key={`${project.name}-${stackItem}-${index}`} className="project-stack-item">
                    {stackItem}
                  </span>
                ))}
              </div>
              <p className={`project-desc${project.descriptionTbd ? " project-desc-muted" : ""}`}>
                {project.description}
              </p>
            </div>

            <div className="project-right">
              <div className="project-preview">
                <div className="project-preview-content">
                  <Image
                    src={project.previewImage}
                    alt={`${project.name.replace("/", "")} project preview`}
                    fill
                    sizes="(max-width: 767px) 100vw, 180px"
                    className="project-preview-image"
                  />
                </div>
              </div>
              <span className="project-arrow">-&gt;</span>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </motion.section>
  );
}
