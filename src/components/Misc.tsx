"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import AirpodsHoverTrigger from "@/components/misc/AirpodsHoverTrigger";
import MovieHoverTrigger from "@/components/misc/MovieHoverTrigger";

const sectionReveal = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const miscConfig = {
  lastRun: {
    distance: "5.3 km",
    time: "23:14",
  },
  strava: "https://www.strava.com/athletes/yourhandle",
} as const;

const assetConfig = {
  succulent: {
    src: "/succulent.png",
    alt: "Succulent",
    className: "misc-succulent",
  },
  hokas: {
    src: "/hokas.png",
    alt: "White Hoka running shoes",
    className: "misc-hokas",
  },
  airpods: {
    src: "/airpods.png",
    alt: "AirPods case",
    className: "misc-airpods",
  },
  movie: {
    src: "/movie.png",
    alt: "Movie ticket stub",
    className: "misc-movie",
  },
  raspberries: {
    src: "/raspberries.png",
    alt: "Bowl of raspberries",
    className: "misc-raspberries",
  },
} as const;

function MiscAsset({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className: string;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={`misc-object ${className}`}>
      {!failed && (
        <Image
          src={src}
          alt={alt}
          width={400}
          height={400}
          unoptimized
          draggable={false}
          className="misc-asset-image"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}

export function Misc() {
  const stageRef = useRef<HTMLDivElement | null>(null);
  const revealTextRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const stage = stageRef.current;
    const revealText = revealTextRef.current;

    if (!stage || !revealText) {
      return;
    }

    const reveals = {
      ".misc-succulent": { text: "still alive :)", color: "#4A7C59" },
      ".misc-raspberries": { text: "have a good day :)", color: "#C8464A" },
    } as const;

    const handleMouseOver = (event: MouseEvent) => {
      const target = event.target;

      if (!(target instanceof Element)) {
        return;
      }

      for (const [selector, data] of Object.entries(reveals)) {
        if (target.closest(selector)) {
          revealText.textContent = data.text;
          revealText.style.color = data.color;
          revealText.classList.add("visible");
          return;
        }
      }
    };

    const handleMouseOut = (event: MouseEvent) => {
      const target = event.target;
      const relatedTarget = event.relatedTarget;

      if (!(target instanceof Element)) {
        return;
      }

      for (const selector of Object.keys(reveals)) {
        const currentMatch = target.closest(selector);
        const nextMatch =
          relatedTarget instanceof Element
            ? relatedTarget.closest(selector)
            : null;

        if (currentMatch && currentMatch !== nextMatch) {
          revealText.classList.remove("visible");
          return;
        }
      }
    };

    stage.addEventListener("mouseover", handleMouseOver);
    stage.addEventListener("mouseout", handleMouseOut);

    return () => {
      stage.removeEventListener("mouseover", handleMouseOver);
      stage.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <motion.section
      id="misc"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.32 }}
      variants={sectionReveal}
      className="misc-section mx-auto w-full max-w-[1280px] scroll-mt-24 px-5 py-24 md:px-12"
    >
      <div className="misc-inner">
        <motion.div className="misc-intro">
          <p className="misc-header">$ open ./misc</p>
          <p className="misc-blurb">
            a few things that aren&apos;t on my resume.
          </p>
        </motion.div>

        <div ref={stageRef} className="misc-stage">
          <div
            ref={revealTextRef}
            className="misc-reveal-text"
            aria-hidden="true"
          />

          <div className="misc-slot misc-slot-succulent">
            <MiscAsset {...assetConfig.succulent} />
          </div>

          <div className="misc-slot misc-slot-hokas">
            <MiscAsset {...assetConfig.hokas} />
            <a
              href={miscConfig.strava}
              target="_blank"
              rel="noreferrer"
              className="hokas-stat"
            >
              last run&nbsp;&nbsp;{miscConfig.lastRun.distance}&nbsp;&nbsp;
              {miscConfig.lastRun.time}
            </a>
          </div>

          <div className="misc-slot misc-slot-sticky">
            <MovieHoverTrigger
              movieSrc={assetConfig.movie.src}
              movieAlt={assetConfig.movie.alt}
            />
          </div>

          <div className="misc-slot misc-slot-airpods">
            <AirpodsHoverTrigger
              airpodsSrc={assetConfig.airpods.src}
              airpodsAlt={assetConfig.airpods.alt}
            />
          </div>

          <div className="misc-slot misc-slot-raspberries">
            <MiscAsset {...assetConfig.raspberries} />
          </div>
        </div>
      </div>

      <style jsx>{`
        .misc-section {
          --text-muted: var(--muted);
          min-height: 700px;
          background: var(--bg);
        }

        .misc-inner {
          width: 100%;
          font-family: var(--font-body);
          font-weight: 400;
        }

        .misc-intro {
          max-width: 43rem;
          margin: 0 0 80px;
        }

        .misc-header {
          margin: 0;
          font-family: var(--font-terminal);
          font-size: var(--section-command-size);
          font-weight: 400;
          letter-spacing: 0.24em;
          color: var(--text);
        }

        .misc-blurb {
          margin: 20px 0 0;
          max-width: 34rem;
          font-family: var(--font-body);
          font-size: 1.03rem;
          font-weight: 400;
          line-height: 2rem;
          color: var(--text);
          opacity: 1;
        }

        .misc-stage {
          position: relative;
          width: 100%;
          max-width: 900px;
          height: 520px;
          margin: 0 auto;
        }

        .misc-slot {
          position: absolute;
        }

        .misc-slot-succulent {
          top: 18px;
          left: -6px;
          width: 205px;
        }

        .misc-slot-hokas {
          bottom: 32px;
          left: 76px;
          width: 300px;
        }

        .misc-slot-sticky {
          top: 50px;
          left: 50%;
          width: 140px;
          margin-left: -70px;
          z-index: 2;
        }

        .misc-slot-airpods {
          top: 70px;
          right: 60px;
          width: 125px;
        }

        .misc-slot-raspberries {
          right: 12px;
          bottom: 18px;
          width: 175px;
        }

        .misc-object {
          position: relative;
          width: 100%;
          pointer-events: all;
          cursor: none;
          user-select: none;
          transition: transform 0.25s ease;
        }

        .misc-asset-image {
          display: block;
          width: 100%;
          height: auto;
          filter: none;
          user-select: none;
          -webkit-user-drag: none;
        }

        .misc-placeholder {
          display: grid;
          width: 100%;
          aspect-ratio: 1 / 1;
          place-items: center;
          border: 1px solid rgba(0, 0, 0, 0.12);
          font-family: var(--font-body);
          font-size: 11px;
          font-weight: 400;
          color: var(--text-muted);
          text-transform: lowercase;
        }

        .misc-succulent {
          transform: rotate(-4deg);
        }

        .misc-succulent:hover {
          transform: rotate(-4deg) translateY(-8px);
        }

        .misc-hokas {
          transform: rotate(5deg);
        }

        .misc-hokas:hover {
          transform: rotate(5deg) translateY(-8px);
        }

        .misc-movie {
          transform: rotate(-20deg);
        }

        .movie-hover-trigger:hover .misc-movie {
          transform: rotate(-3deg) translateY(-8px);
        }

        .misc-airpods {
          transform: rotate(40deg);
        }

        .airpods-hover-trigger:hover .misc-airpods {
          transform: rotate(11deg) translateY(-6px);
        }

        .misc-raspberries {
          transform: rotate(-5deg);
        }

        .misc-raspberries:hover {
          transform: rotate(-5deg) translateY(-8px);
        }

        .misc-reveal-text {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-family: var(--font-body);
          font-size: 13px;
          font-weight: 400;
          letter-spacing: 0.05em;
          opacity: 0;
          transition:
            opacity 0.3s ease,
            color 0.3s ease;
          pointer-events: none;
          white-space: nowrap;
          z-index: 10;
        }

        .misc-reveal-text.visible {
          opacity: 1;
        }

        .hokas-stat {
          position: absolute;
          left: 0;
          bottom: -32px;
          font-family: var(--font-body);
          font-size: 11px;
          font-weight: 400;
          color: var(--text-muted);
          letter-spacing: 0.04em;
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
          white-space: nowrap;
          text-decoration: none;
        }

        .misc-slot-hokas:hover .hokas-stat {
          opacity: 1;
          pointer-events: auto;
        }

        @media (max-width: 767px) {
          .misc-stage {
            height: auto;
            min-height: 600px;
          }

          .misc-slot-succulent {
            top: 16px;
            left: -2px;
            width: 156px;
          }

          .misc-slot-hokas {
            bottom: 18px;
            left: 12px;
            width: 212px;
          }

          .misc-slot-sticky {
            top: 20px;
            left: 50%;
            width: 140px;
            margin-left: -70px;
          }

          .misc-slot-airpods {
            top: 20px;
            right: 10px;
            width: 92px;
          }

          .misc-slot-raspberries {
            right: 4px;
            bottom: 18px;
            width: 124px;
          }

          .misc-reveal-text {
            font-size: 12px;
          }
        }

        @media (max-width: 479px) {
          .misc-intro {
            max-width: none;
          }

          .misc-stage {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 24px;
            min-height: 600px;
            padding: 56px 0 80px;
          }

          .misc-slot {
            position: static;
            width: 100%;
            margin: 0;
            display: flex;
            justify-content: center;
          }

          .misc-slot-succulent,
          .misc-slot-hokas,
          .misc-slot-sticky,
          .misc-slot-airpods,
          .misc-slot-raspberries {
            width: auto;
          }

          .misc-succulent,
          .misc-hokas,
          .misc-airpods,
          .misc-raspberries,
          .misc-movie {
            transform: none;
          }

          .misc-succulent:hover,
          .misc-hokas:hover,
          .misc-airpods:hover,
          .misc-raspberries:hover,
          .misc-movie:hover {
            transform: translateY(-8px);
          }

          .airpods-hover-trigger:hover .misc-airpods {
            transform: translateY(-8px);
          }

          .misc-slot-succulent .misc-object {
            width: 156px;
          }

          .misc-slot-hokas {
            flex-direction: column;
            align-items: center;
            gap: 10px;
          }

          .misc-slot-hokas .misc-object {
            width: 212px;
          }

          .hokas-stat {
            position: static;
            opacity: 0;
          }

          .misc-slot-airpods {
            flex-direction: column;
            align-items: center;
            gap: 10px;
          }

          .misc-slot-airpods .misc-object {
            width: 92px;
          }

          .misc-slot-raspberries .misc-object {
            width: 124px;
          }

          .misc-reveal-text {
            top: 32px;
            transform: translateX(-50%);
          }
        }
      `}</style>
    </motion.section>
  );
}
