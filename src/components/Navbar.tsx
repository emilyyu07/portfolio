"use client";

import Link from "next/link";
import { motion, useScroll } from "framer-motion";
import { useSyncExternalStore } from "react";
import { MoonIcon, SunIcon } from "@/components/Icons";

const navLinks = [
  { label: "about", href: "#about" },
  { label: "projects", href: "#projects" },
  { label: "misc", href: "#misc" },
];

export function Navbar() {
  const { scrollYProgress } = useScroll();
  const theme = useSyncExternalStore(
    (notify) => {
      if (typeof document === "undefined") {
        return () => {};
      }

      const root = document.documentElement;
      const storedTheme = localStorage.getItem("theme");
      const initialTheme = storedTheme === "dark" ? "dark" : "light";

      if (root.dataset.theme !== initialTheme) {
        root.dataset.theme = initialTheme;
        notify();
      }

      const onThemeChange = () => notify();
      window.addEventListener("themechange", onThemeChange);
      return () => window.removeEventListener("themechange", onThemeChange);
    },
    () => (document.documentElement.dataset.theme === "dark" ? "dark" : "light"),
    () => "light",
  );

  function toggleTheme() {
    const nextTheme = theme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem("theme", nextTheme);
    window.dispatchEvent(new Event("themechange"));
  }

  const nextTheme = theme === "light" ? "dark" : "light";
  const ThemeToggleIcon = theme === "light" ? MoonIcon : SunIcon;

  return (
    <>
      <motion.div
        className="fixed inset-x-0 top-0 z-[70] h-[2.5px] origin-left bg-[var(--progress)]"
        style={{ scaleX: scrollYProgress }}
      />
      <header className="sticky top-0 z-[60] border-b border-[var(--border)] bg-[var(--nav-bg)] backdrop-blur-xl transition-[background-color,border-color] duration-300">
        <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between px-5 py-4 md:px-12">
          <Link
            href="#top"
            className="nav-link courier-text text-[0.92rem] tracking-[0.18em] text-[var(--text)] transition-opacity duration-300 hover:opacity-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--bg)]"
          >
            ~/emily
          </Link>

          <div className="flex items-center gap-6 md:gap-10">
            <nav className="hidden items-center gap-7 md:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="nav-link group relative pb-1 text-[0.9rem] tracking-[0.04em] text-[var(--text)] transition-opacity duration-300"
                >
                  {link.label}
                  <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-[var(--text)] transition-transform duration-300 ease-out group-hover:scale-x-100" />
                </Link>
              ))}
            </nav>
            <span
              aria-hidden="true"
              className="hidden h-5 w-px bg-[var(--text)] opacity-35 md:block"
            />

            <button
              type="button"
              onClick={toggleTheme}
              className="theme-toggle flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] text-[var(--text)] transition-[border-color,color,background-color] duration-300 hover:border-[var(--border-hover)]"
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
