"use client";

import Image from "next/image";

type HokaHoverTriggerProps = {
  shoesSrc: string;
  shoesAlt: string;
  stravaProfileUrl: string;
  stravaUsername: string;
};

export default function HokaHoverTrigger({
  shoesSrc,
  shoesAlt,
  stravaProfileUrl,
  stravaUsername,
}: HokaHoverTriggerProps) {
  return (
    <div className="hokas-hover-trigger">
      <div className="misc-object misc-hokas">
        <Image
          src={shoesSrc}
          alt={shoesAlt}
          width={400}
          height={400}
          unoptimized
          draggable={false}
          className="misc-asset-image"
        />
      </div>

      <div className="hokas-strava-card">
        <a
          href={stravaProfileUrl}
          target="_blank"
          rel="noreferrer"
          className="hokas-strava-icon-link"
          aria-label="Open Strava profile"
        >
          <Image
            src="/strava-logo.png"
            alt="Strava"
            width={16}
            height={16}
            className="hokas-strava-icon"
          />
        </a>
        <a
          href={stravaProfileUrl}
          target="_blank"
          rel="noreferrer"
          className="hokas-strava-link"
        >
          <Image
            src="/strava-wordmark.svg"
            alt="Strava"
            width={82}
            height={16}
            className="hokas-strava-wordmark"
          />
          <span className="hokas-strava-username">{stravaUsername}</span>
          <span className="hokas-strava-cta">view profile ↗</span>
        </a>
      </div>
    </div>
  );
}
