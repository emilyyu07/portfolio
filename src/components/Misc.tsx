"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import AirpodsHoverTrigger from "@/components/misc/AirpodsHoverTrigger";
import HokaHoverTrigger from "@/components/misc/HokaHoverTrigger";
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
  stravaProfileUrl: "https://www.strava.com/athletes/173030401",
  stravaUsername: "@emilyyu",
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
  return (
    <motion.section
      id="misc"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.32 }}
      variants={sectionReveal}
      className="misc-section mx-auto w-full max-w-[1280px] scroll-mt-24 px-5 pt-24 pb-44 md:px-12"
    >
      <div className="misc-inner">
        <motion.div className="misc-intro">
          <p className="misc-header">$ open ./misc</p>
          <p className="misc-blurb">
            a few things that aren&apos;t on my resume.
          </p>
        </motion.div>

        <div className="misc-stage">
          <div className="misc-slot misc-slot-succulent">
            <MiscAsset {...assetConfig.succulent} />
            <div className="misc-curved-text misc-curved-text-succulent">
              <svg viewBox="0 0 160 160" aria-hidden="true">
                <path
                  id="succulent-curve"
                  d="M0 108 A132 132 0 0 0 118 150"
                  fill="none"
                />
                <text textLength="108" lengthAdjust="spacingAndGlyphs">
                  <textPath
                    href="#succulent-curve"
                    startOffset="48%"
                    textAnchor="middle"
                  >
                    let it be. - the beatles
                  </textPath>
                </text>
              </svg>
            </div>
          </div>

          <div className="misc-slot misc-slot-hokas">
            <HokaHoverTrigger
              shoesSrc={assetConfig.hokas.src}
              shoesAlt={assetConfig.hokas.alt}
              stravaProfileUrl={miscConfig.stravaProfileUrl}
              stravaUsername={miscConfig.stravaUsername}
            />
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
            <div className="misc-curved-text misc-curved-text-raspberries">
              <svg viewBox="0 0 160 160" aria-hidden="true">
                <path
                  id="raspberries-curve"
                  d="M42 150 A132 132 0 0 0 160 108"
                  fill="none"
                />
                <text textLength="122" lengthAdjust="spacingAndGlyphs">
                  <textPath
                    href="#raspberries-curve"
                    startOffset="52%"
                    textAnchor="middle"
                  >
                    hope you have a good day :)
                  </textPath>
                </text>
              </svg>
            </div>
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
          top: 40px;
          left: -70px;
          width: 250px;
        }

        .misc-slot-hokas {
          bottom: 280px;
          left: 36px;
          width: 350px;
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
          width: 140px;
        }

        .misc-slot-raspberries {
          right: 12px;
          bottom: 18px;
          width: 230px;
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
          transform: rotate(98deg);
        }

        .misc-hokas:hover {
          transform: rotate(98deg) translateY(-8px);
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

        .misc-curved-text {
          position: absolute;
          inset: 0;
          overflow: visible;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.25s ease;
          z-index: 11;
        }

        .misc-curved-text svg {
          width: 100%;
          height: 100%;
          overflow: visible;
        }

        .misc-curved-text text {
          font-family: var(--font-body);
          font-size: 10px;
          font-weight: 400;
          letter-spacing: 0.035em;
          text-transform: lowercase;
          fill: currentColor;
        }

        .misc-curved-text-succulent {
          inset: -10px -12px -20px -24px;
          color: color-mix(in srgb, #4a7c59 78%, transparent);
        }

        .misc-curved-text-raspberries {
          inset: -10px -24px -20px -12px;
          color: color-mix(in srgb, #c8464a 76%, transparent);
        }

        .misc-slot-succulent:hover .misc-curved-text-succulent,
        .misc-slot-raspberries:hover .misc-curved-text-raspberries {
          opacity: 1;
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

          .misc-slot-hokas .misc-object {
            width: 212px;
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

          .misc-slot-succulent {
            width: 200px;
            top: 50px;
          }
        }
      `}</style>
    </motion.section>
  );
}
