"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { siteData } from "@/lib/siteData";
import { GitHubIcon } from "@/components/Icons";

const sectionReveal = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
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
      className="mx-auto w-full max-w-[1120px] scroll-mt-24 px-5 py-24 md:px-12"
    >
      <div className="mb-10 flex items-end justify-between gap-6">
        <div>
          <p className="terminal-label">e:\ projects</p>
          <p className="mt-5 max-w-[34rem] text-[1.03rem] leading-8 text-[var(--text)] opacity-[0.82]">
            here&apos;s what i&apos;ve been building.
          </p>
        </div>
      </div>

      <div className="grid gap-[1.8rem] lg:grid-cols-3">
        {siteData.projects.map((project) => (
          <motion.a
            key={project.name}
            href={project.href}
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="project-card group flex flex-col overflow-hidden rounded-[0.75rem] border border-[var(--border)] bg-[var(--panel)] p-4 shadow-[0_10px_30px_rgba(0,0,0,0.03)] transition-[border-color,box-shadow,background-color] duration-300 hover:border-[var(--border-hover)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.06)]"
          >
            <div className="relative aspect-[5/4] overflow-hidden rounded-[0.5rem]">
              <Image
                src={project.image}
                alt={project.name}
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.06]"
              />
            </div>

            <div className="flex flex-1 flex-col pt-5">
              <h3 className="text-[1.6rem] font-[300] tracking-[-0.03em] text-[var(--text)]">
                {project.name}
              </h3>
              <p className="meta-text mt-3">{project.stack}</p>
              <p className="mt-5 flex-1 text-[0.98rem] leading-7 text-[var(--text)] opacity-[0.78]">
                {project.description}
              </p>
              <span className="meta-text mt-6 inline-flex transition-colors duration-300 group-hover:text-[var(--text)]">
                <GitHubIcon className="h-[18px] w-[18px]" />
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </motion.section>
  );
}
