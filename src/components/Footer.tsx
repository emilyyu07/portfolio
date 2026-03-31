"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  EmailIcon,
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
} from "@/components/Icons";
import { siteData } from "@/lib/siteData";

const iconMap = {
  LinkedIn: LinkedInIcon,
  GitHub: GitHubIcon,
  Email: EmailIcon,
  Instagram: InstagramIcon,
} as const;

const sectionReveal = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

function getClockString() {
  const formatter = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone: "America/New_York",
  });

  return formatter.format(new Date()).toLowerCase();
}

function TypewriterClock({ text, start }: { text: string; start: boolean }) {
  const [visibleText, setVisibleText] = useState("");
  const [typingDone, setTypingDone] = useState(false);
  const hasStartedRef = useRef(false);

  useEffect(() => {
    if (!start || hasStartedRef.current) {
      return;
    }

    hasStartedRef.current = true;

    let index = 0;
    const timer = window.setInterval(() => {
      index += 1;
      setVisibleText(text.slice(0, index));

      if (index >= text.length) {
        window.clearInterval(timer);
        setTypingDone(true);
      }
    }, 40);

    return () => window.clearInterval(timer);
  }, [start, text]);

  if (!start) {
    return null;
  }

  return (
    <>
      {typingDone ? text : visibleText}
      <span className="type-cursor">|</span>
    </>
  );
}

export function Footer() {
  const [clock, setClock] = useState(getClockString);
  const [clockStarted, setClockStarted] = useState(false);

  useEffect(() => {
    const timer = window.setInterval(() => setClock(getClockString()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionReveal}
      onViewportEnter={() => setClockStarted(true)}
      className="relative mt-10 overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "var(--sunset-image)" }}
      />
      <div className="absolute inset-0 bg-[rgba(10,10,10,0.66)]" />

      <div className="relative z-10 mx-auto grid w-full max-w-[1120px] gap-12 px-5 py-24 text-[#F0F0F0] md:grid-cols-[1.4fr_0.8fr] md:px-12">
        <div>
          <a
            href={`mailto:${siteData.email}`}
            className="social-wrap text-[clamp(2.8rem,7vw,5.8rem)] font-[300] leading-[0.94] tracking-[-0.06em] transition-opacity duration-300 hover:opacity-80"
          >
            {siteData.email}
          </a>
          <p className="mt-8 min-h-[1.2em] courier-text text-[0.95rem] tracking-[0.18em] text-[#D6D6D6]">
            {">_"} <TypewriterClock text={`${clock} est`} start={clockStarted} />
          </p>
        </div>

        <div className="flex flex-col items-start justify-between gap-12 md:items-end">
          <div className="flex flex-col items-start gap-4 md:items-end">
            {siteData.socials.map((social) => {
              const Icon = iconMap[social.label as keyof typeof iconMap];

              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={social.href.startsWith("mailto:") ? undefined : "noreferrer"}
                  className="social-wrap text-[#D6D6D6] transition-colors duration-300 hover:text-white"
                >
                  <Icon className="h-[18px] w-[18px]" />
                </a>
              );
            })}
          </div>

          <div className="space-y-3 text-left md:text-right">
            <p className="courier-text text-[0.82rem] tracking-[0.2em] text-[#D6D6D6]">
              reach out ^
            </p>
            <p className="courier-text text-[0.78rem] tracking-[0.18em] text-[#BDBDBD]">
              © 2026 emily yu
            </p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
