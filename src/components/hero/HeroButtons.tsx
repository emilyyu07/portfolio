"use client";

import Link from "next/link";
import { socials } from "@/lib/siteConfig";

type Props = {
  onMessageClick: () => void;
};

export function HeroButtons({ onMessageClick }: Props) {
  return (
    <div className="hero-btns-fade mt-8 flex flex-wrap items-center justify-center gap-4">
      <Link
        href={socials.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="focus-ring rounded-[50px] border-[1.5px] border-[rgba(92,61,30,0.65)] bg-[rgba(253,250,243,0.65)] px-[26px] py-[9px] font-caveat text-[18px] transition-all duration-150 hover:-translate-y-0.5 hover:shadow-[0_4px_10px_rgba(80,48,16,0.14)]"
        style={{ color: "var(--chestnut)" }}
      >
        let&apos;s connect!
      </Link>
      <button
        type="button"
        onClick={onMessageClick}
        className="focus-ring rounded-[50px] px-[26px] py-[9px] font-caveat text-[18px] transition-all duration-150 hover:-translate-y-0.5 hover:shadow-[0_4px_10px_rgba(80,48,16,0.14)]"
        style={{
          background: "var(--chestnut)",
          color: "var(--cream)",
        }}
      >
        leave a message ✉
      </button>
    </div>
  );
}
