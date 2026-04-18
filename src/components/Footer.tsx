"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect } from "react";
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
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Footer() {
  useEffect(() => {
    function updateFooterClock() {
      const el = document.getElementById("footer-date-output");
      if (!el) return;

      const now = new Date();
      const days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
      const months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];

      const day = days[now.getDay()];
      const month = months[now.getMonth()];
      const date = String(now.getDate()).padStart(2, "0");
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");
      const year = now.getFullYear();

      el.textContent = `${day} ${month} ${date} ${hours}:${minutes}:${seconds} EST ${year}`;
    }

    updateFooterClock();
    const timer = window.setInterval(updateFooterClock, 1000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionReveal}
      className="footer relative mt-10 overflow-hidden"
    >
      <div className="absolute inset-0">
        <Image
          src="/water.jpg"
          alt=""
          fill
          priority={false}
          sizes="100vw"
          className="footer-sunset-image"
        />
      </div>
      <div className="footer-sunset-wash absolute inset-0" />

      <div className="relative z-10 mx-auto grid w-full max-w-[1280px] gap-12 px-5 py-24 font-[700] text-[#ffffe3] md:grid-cols-[1.4fr_0.8fr] md:px-12">
        <div>
          <a
            href={`mailto:${siteData.email}`}
            className="social-wrap text-[clamp(2.8rem,7vw,5.8rem)] font-[700] leading-[0.94] tracking-[-0.06em] transition-opacity duration-300 hover:opacity-80"
          >
            {siteData.email}
          </a>
          <div className="footer-clock mt-8">
            <span className="footer-clock-command">$ date</span>
            <span className="footer-clock-output" id="footer-date-output" />
          </div>
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
                  className="social-wrap text-[#ffffe3] transition-opacity duration-300 hover:opacity-80"
                >
                  <Icon className="h-[18px] w-[18px]" />
                </a>
              );
            })}
          </div>

          <div className="space-y-3 text-left md:text-right">
            <p className="courier-text text-[0.82rem] tracking-[0.2em] text-[#ffffe3]">
              reach out ^
            </p>
            <p className="courier-text text-[0.78rem] tracking-[0.18em] text-[#ffffe3]">
              © 2026 emily yu
            </p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
