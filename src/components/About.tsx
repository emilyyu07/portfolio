"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { siteData } from "@/lib/siteData";

export function About() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;

    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.18 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="mx-auto w-full max-w-[1120px] scroll-mt-24 px-5 py-28 md:px-12"
    >
      <div className="max-w-[43rem]">
        <p className="terminal-label">e:\ about</p>
        <p className="mt-5 text-[1.03rem] leading-8 text-[var(--text)] opacity-[0.82]">{siteData.intro}</p>
      </div>

      <div className="mt-14 grid gap-[1.8rem]">
        {siteData.experiences.map((experience, index) => (
          <motion.article
            key={`${experience.role}-${experience.company}`}
            initial={{ opacity: 0, y: 22 }}
            animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.13 }}
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
      </div>
    </section>
  );
}




