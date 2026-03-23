"use client";

import { useEffect, useState } from "react";
import { fetchWeather } from "@/lib/weather";
import { socials } from "@/lib/siteConfig";

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6 9H4v12h2V9zm1-6a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm3 6H8v12h2v-6.5c0-1.5 1-2.5 2.5-2.5s2 1 2 2.5V21h2v-7c0-2.5-1.5-4-3.5-4-1.5 0-2.5.8-3 1.5V9z"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1" />
      <path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.866-.013-1.7-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect
        x="2"
        y="2"
        width="20"
        height="20"
        rx="5"
        stroke="currentColor"
        strokeWidth="1"
      />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}

const items = [
  { href: socials.linkedin, label: "LinkedIn", icon: LinkedInIcon },
  { href: `mailto:${socials.email}`, label: "Email", icon: MailIcon },
  { href: socials.github, label: "GitHub", icon: GitHubIcon },
  { href: socials.instagram, label: "Instagram", icon: InstagramIcon },
] as const;

export function Footer() {
  const [weather, setWeather] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const w = await fetchWeather();
        if (!cancelled) {
          setWeather(`${w.temp}°C  ·  ${w.description}`);
        }
      } catch {
        if (!cancelled) setWeather(null);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const line =
    weather ?? "—°C  ·  —";

  return (
    <footer className="footer-rise flex flex-col items-center gap-[14px] px-[60px] pb-[30px] pt-4">
      <div className="flex flex-row gap-[22px]">
        {items.map(({ href, label, icon: Icon }) => (
          <a
            key={label}
            href={href}
            className="social-wrap focus-ring flex flex-col items-center gap-1 rounded-lg"
            aria-label={label}
          >
            <span
              className="social-icon flex h-9 w-9 items-center justify-center rounded-full border border-[rgba(92,61,30,0.3)] bg-[rgba(253,250,243,0.55)]"
              style={{ color: "var(--chestnut)" }}
            >
              <Icon />
            </span>
            <span
              className="font-caveat text-[12px] opacity-55"
              style={{ color: "var(--chestnut)" }}
            >
              {label}
            </span>
          </a>
        ))}
      </div>
      <p
        className="font-mono text-[10px] font-light tracking-[1.4px]"
        style={{ color: "rgba(62,42,20,0.4)" }}
      >
        43.47° N, 80.54° W &nbsp;·&nbsp; {line}
      </p>
    </footer>
  );
}
