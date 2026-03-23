"use client";

import { useCallback, useRef } from "react";

export function HeroText() {
  const nameRef = useRef<HTMLHeadingElement>(null);

  const onAnimEnd = useCallback((e: React.AnimationEvent<HTMLHeadingElement>) => {
    if (e.animationName === "typeReveal" && nameRef.current) {
      nameRef.current.classList.add("cursor-done");
    }
  }, []);

  return (
    <div className="relative flex flex-col items-center">
      <div
        className="name-swatch-wrap pointer-events-none absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-[42%]"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 380 100"
          className="h-auto w-full min-w-[280px] max-w-[420px]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse cx="190" cy="46" rx="178" ry="38" fill="#F2E8C0" opacity="0.18" />
          <ellipse cx="188" cy="44" rx="155" ry="30" fill="#EDE0B0" opacity="0.16" />
          <ellipse cx="192" cy="48" rx="128" ry="22" fill="#FAF2D5" opacity="0.15" />
          <path
            d="M30 48 C85 28 160 22 248 26 C318 28 358 36 372 48 C358 60 318 66 248 68 C160 72 85 66 30 48Z"
            fill="#F5ECC8"
            opacity="0.18"
          />
          <path
            d="M42 48 C95 30 168 25 248 29 C316 31 354 39 366 48 C354 58 316 63 248 65 C168 69 95 63 42 48Z"
            fill="#FAF5DC"
            opacity="0.14"
          />
          <path
            d="M28 72 C95 60 185 56 272 60 C320 62 358 66 376 74"
            stroke="#C8B870"
            strokeWidth="2.8"
            strokeLinecap="round"
            fill="none"
            opacity="0.28"
          />
          <path
            d="M32 75 C98 63 188 59 274 63 C322 65 359 69 374 77"
            stroke="#D4C880"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
            opacity="0.18"
          />
          <path
            d="M8 48 L22 48"
            stroke="#C8A030"
            strokeWidth="1.8"
            strokeLinecap="round"
            opacity="0.55"
          />
          <path
            d="M358 46 L372 46"
            stroke="#C8A030"
            strokeWidth="1.8"
            strokeLinecap="round"
            opacity="0.55"
          />
          <path
            d="M342 22 C340 20 337 21 337 24 C337 27 342 30 342 30 C342 30 347 27 347 24 C347 21 344 20 342 22Z"
            fill="#D07868"
            opacity="0.75"
          />
        </svg>
      </div>
      <h1
        ref={nameRef}
        className="hero-name-type font-dancing text-[62px] font-bold leading-tight"
        style={{ color: "var(--chestnut)" }}
        onAnimationEnd={onAnimEnd}
      >
        hi, i&apos;m emily :)
      </h1>
    </div>
  );
}
