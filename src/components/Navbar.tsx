"use client";

import Link from "next/link";
import { motion, useScroll } from "framer-motion";
import { useState } from "react";
import {
  EmailIcon,
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  MoonIcon,
  SunIcon,
} from "@/components/Icons";
import { siteData } from "@/lib/siteData";

const navLinks = [
  { label: "about", href: "#about" },
  { label: "projects", href: "#projects" },
  { label: "misc", href: "#misc" },
];

const iconMap = {
  LinkedIn: LinkedInIcon,
  GitHub: GitHubIcon,
  Email: EmailIcon,
  Instagram: InstagramIcon,
} as const;

export function Navbar() {
  const { scrollYProgress } = useScroll();
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof document !== "undefined" && document.documentElement.dataset.theme === "dark") {
      return "dark";
    }

    return "light";
  });

  function toggleTheme() {
    const nextTheme = theme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem("theme", nextTheme);
    setTheme(nextTheme);
  }

  const nextTheme = theme === "light" ? "dark" : "light";
  const ThemeToggleIcon = theme === "light" ? MoonIcon : SunIcon;

  return (
    <>
      <motion.div
        className="fixed inset-x-0 top-0 z-[70] h-[2.5px] origin-left bg-[var(--highlight)]"
        style={{ scaleX: scrollYProgress }}
      />
      <header className="sticky top-0 z-[60] border-b border-[var(--border)] bg-[var(--nav-bg)] backdrop-blur-xl transition-[background-color,border-color] duration-300">
        <div className="mx-auto flex w-full max-w-[1120px] items-center justify-between px-5 py-4 md:px-12">
          <Link
            href="#top"
            className="courier-text text-[0.92rem] tracking-[0.18em] text-[var(--text)] transition-opacity duration-300 hover:opacity-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--bg)]"
          >
            e:\
          </Link>

          <div className="flex items-center gap-4 md:gap-6">
            <nav className="hidden items-center gap-5 md:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="group relative pb-1 text-[0.9rem] text-[var(--text)] opacity-[0.65] transition-opacity duration-300 hover:opacity-100"
                >
                  {link.label}
                  <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-[var(--text)] transition-transform duration-300 ease-out group-hover:scale-x-100" />
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              {siteData.socials.map((social) => {
                const Icon = iconMap[social.label as keyof typeof iconMap];

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={social.href.startsWith("mailto:") ? undefined : "noreferrer"}
                    className="text-[var(--text)] opacity-[0.45] transition-opacity duration-300 hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-none"
                  >
                    <Icon className="h-[18px] w-[18px]" />
                  </a>
                );
              })}
            </div>

            <button
              type="button"
              onClick={toggleTheme}
              suppressHydrationWarning
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] text-[var(--text)] transition-[border-color,color,background-color] duration-300 hover:border-[var(--border-hover)]"
              aria-label={`Switch to ${nextTheme} mode`}
              title={`Switch to ${nextTheme} mode`}
            >
              <ThemeToggleIcon className="h-[18px] w-[18px]" />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
