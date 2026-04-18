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

export function About() {
  return (
    <motion.section
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.32 }}
      variants={sectionReveal}
      className="mx-auto w-full max-w-[1280px] scroll-mt-24 px-5 py-24 md:px-12"
    >
      <div className="max-w-[43rem]">
        <div className="about-terminal">
          <p className="about-command">$ cat about.md</p>
          <p className="about-blurb">{siteData.intro}</p>
          <p className="about-idle">
            <span className="about-prompt">~$</span>
            <span className="about-cursor">▌</span>
          </p>
        </div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.32 }}
        variants={listReveal}
        className="mt-14 grid gap-[1.8rem]"
      >
        <p className="experience-command">$ ls -l experience/</p>
        {siteData.experiences.map((experience) => (
          <motion.article
            key={`${experience.role}-${experience.company}`}
            variants={itemReveal}
            className="grid gap-5 border-b border-[var(--border)] pb-7 md:grid-cols-[1.35fr_0.9fr] md:items-start"
          >
            <div>
              <p className="courier-text text-[0.92rem] tracking-[0.18em] text-[var(--text)]">
                {">_"} {experience.role}
              </p>
              <p className="meta-text pl-8 pt-3">{experience.subtext}</p>
            </div>

            <div className="flex flex-col gap-2 text-right text-[var(--muted)] md:items-end">
              <span className="font-sans text-[1rem] font-[400] tracking-[0.08em] text-[var(--text)]">
                {experience.company}
              </span>
              <span className="font-sans text-[0.85rem] tracking-[0.16em] text-[var(--muted)]">
                {experience.timeFrame}
              </span>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </motion.section>
  );
}
