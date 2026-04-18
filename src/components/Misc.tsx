"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const sectionReveal = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const miscConfig = {
  currentTerm: "1B",
  todoItems: [{ text: "keep building!", done: false }],
  lastRun: {
    distance: "5.3 km",
    time: "23:14",
  },
  strava: "https://www.strava.com/athletes/yourhandle",
  spotify: "https://open.spotify.com/user/yourhandle",
} as const;

const assetConfig = {
  succulent: {
    src: "public/succulent.png",
    alt: "Succulent",
    label: "succulent",
    className: "misc-succulent",
  },
  hokas: {
    src: "public/hokas.png",
    alt: "White Hoka running shoes",
    label: "hokas",
    className: "misc-hokas",
  },
  airpods: {
    src: "public/airpods.png",
    alt: "AirPods case",
    label: "airpods",
    className: "misc-airpods",
  },
  raspberries: {
    src: "public/raspberries.png",
    alt: "Bowl of raspberries",
    label: "raspberries",
    className: "misc-raspberries",
  },
} as const;

function MiscAsset({
  src,
  alt,
  label,
  className,
}: {
  src: string;
  alt: string;
  label: string;
  className: string;
}) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  return (
    <div className={`misc-object ${className}`}>
      {!loaded && (
        <div className="misc-placeholder" aria-hidden="true">
          {label}
        </div>
      )}
      {!failed && (
        <Image
          src={src}
          alt={alt}
          width={400}
          height={400}
          unoptimized
          draggable={false}
          className="misc-asset-image"
          style={{ display: loaded ? "block" : "none" }}
          onLoad={() => setLoaded(true)}
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
            <div className="sticky-note">
              <p className="sticky-note-header">{`> to-do: ${miscConfig.currentTerm}`}</p>
              <ul
                className="sticky-note-list"
                aria-label="Current term to-do list"
              >
                {miscConfig.todoItems.map((item) => (
                  <li
                    key={item.text}
                    className={
                      item.done
                        ? "sticky-note-item is-done"
                        : "sticky-note-item"
                    }
                  >
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="misc-slot misc-slot-airpods">
            <MiscAsset {...assetConfig.airpods} />
            <a
              href={miscConfig.spotify}
              target="_blank"
              rel="noreferrer"
              className="airpods-tooltip"
            >
              <span className="spotify-dot" aria-hidden="true" />
              <span>currently listening</span>
            </a>
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
          font-family: Inter, sans-serif;
          font-weight: 400;
        }

        .misc-intro {
          max-width: 43rem;
          margin: 0 0 80px;
        }

        .misc-header {
          margin: 0;
          font-family: "Courier New", Courier, monospace;
          font-size: var(--section-command-size);
          font-weight: 400;
          letter-spacing: 0.24em;
          color: var(--text);
        }

        .misc-blurb {
          margin: 20px 0 0;
          max-width: 34rem;
          font-family:
            "InterVariable", Inter, "Helvetica Neue", Arial, sans-serif;
          font-size: 1.03rem;
          font-weight: 400;
          line-height: 2rem;
          color: var(--text);
          opacity: 0.82;
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
          width: 276px;
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
          width: 105px;
        }

        .misc-slot-raspberries {
          right: 12px;
          bottom: 18px;
          width: 168px;
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
          font-family: Inter, sans-serif;
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

        .sticky-note {
          width: 140px;
          padding: 14px 16px 18px;
          background: #fafad2;
          font-family: Inter, sans-serif;
          font-size: 12px;
          line-height: 1.8;
          color: #333333;
          box-shadow:
            1px 2px 8px rgba(0, 0, 0, 0.1),
            3px 3px 0 rgba(0, 0, 0, 0.04);
          transform: rotate(-3deg);
          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease;
          pointer-events: all;
          cursor: none;
          user-select: none;
        }

        .sticky-note:hover {
          transform: rotate(-3deg) translateY(-6px);
          box-shadow:
            2px 6px 16px rgba(0, 0, 0, 0.13),
            3px 3px 0 rgba(0, 0, 0, 0.04);
        }

        .sticky-note-header {
          margin: 0;
          font-weight: 400;
        }

        .sticky-note-list {
          margin: 14px 0 0;
          padding: 0;
          list-style: none;
        }

        .sticky-note-item {
          opacity: 1;
          text-decoration: none;
        }

        .sticky-note-item.is-done {
          opacity: 0.45;
          text-decoration: line-through;
        }

        .misc-airpods {
          transform: rotate(8deg);
        }

        .misc-airpods:hover {
          transform: rotate(8deg) translateY(-8px);
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
          font-family: Inter, sans-serif;
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
          font-family: Inter, sans-serif;
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

        .airpods-tooltip {
          position: absolute;
          top: -30px;
          right: -20px;
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: Inter, sans-serif;
          font-size: 11px;
          font-weight: 400;
          color: var(--text-muted);
          letter-spacing: 0.03em;
          opacity: 0;
          transition: opacity 0.25s ease;
          pointer-events: none;
          white-space: nowrap;
          text-decoration: none;
        }

        .spotify-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #1db954;
          flex-shrink: 0;
        }

        .misc-slot-airpods:hover .airpods-tooltip {
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
            width: 84px;
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
          .sticky-note {
            transform: none;
          }

          .misc-succulent:hover,
          .misc-hokas:hover,
          .misc-airpods:hover,
          .misc-raspberries:hover,
          .sticky-note:hover {
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
            width: 84px;
          }

          .airpods-tooltip {
            position: static;
            opacity: 0;
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
