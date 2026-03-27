"use client";

import { useEffect, useState } from "react";
import { siteData } from "@/lib/siteData";

function getClockString() {
  const formatter = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone: "America/New_York",
  });

  return formatter.format(new Date()).toLowerCase();
}

export function Footer() {
  const [clock, setClock] = useState(getClockString);

  useEffect(() => {
    const timer = window.setInterval(() => setClock(getClockString()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <footer className="relative mt-10 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "var(--sunset-image)" }}
      />
      <div className="absolute inset-0 bg-[rgba(10,10,10,0.66)]" />

      <div className="relative z-10 mx-auto grid w-full max-w-[1120px] gap-12 px-5 py-24 text-[#F0F0F0] md:grid-cols-[1.4fr_0.8fr] md:px-12">
        <div>
          <a
            href={`mailto:${siteData.email}`}
            className="text-[clamp(2.8rem,7vw,5.8rem)] font-[300] leading-[0.94] tracking-[-0.06em] transition-opacity duration-300 hover:opacity-80"
          >
            {siteData.email}
          </a>
          <p className="mt-8 courier-text text-[0.95rem] tracking-[0.18em] text-[#D6D6D6]">
            {">_"} {clock} est
          </p>
        </div>

        <div className="flex flex-col items-start justify-between gap-12 md:items-end">
          <div className="space-y-4 text-left md:text-right">
            {siteData.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={social.href.startsWith("mailto:") ? undefined : "noreferrer"}
                className="block courier-text text-[0.82rem] tracking-[0.2em] text-[#D6D6D6] transition-colors duration-300 hover:text-white"
              >
                {social.shortLabel}
              </a>
            ))}
          </div>

          <div className="space-y-3 text-left md:text-right">
            <p className="courier-text text-[0.82rem] tracking-[0.2em] text-[#D6D6D6]">
              reach out -
            </p>
            <p className="courier-text text-[0.78rem] tracking-[0.18em] text-[#BDBDBD]">
              © 2026 emily yu
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}


