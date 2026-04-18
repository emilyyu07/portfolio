"use client";

import { useState } from "react";
import type { CSSProperties } from "react";

import type { SpotifySong } from "@/lib/config";

type SpotifyCardProps = {
  songs: SpotifySong[];
};

function ChevronLeft() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      className="spotify-card-chevron"
    >
      <path
        d="M9.5 3.5 5 8l4.5 4.5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      className="spotify-card-chevron"
    >
      <path
        d="M6.5 3.5 11 8l-4.5 4.5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function PlusCircle() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 18 18"
      className="spotify-card-plus-icon"
    >
      <circle
        cx="9"
        cy="9"
        r="7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M9 5.5v7M5.5 9h7"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.4"
      />
    </svg>
  );
}

function SpotifyMark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="spotify-card-mark">
      <path
        fill="currentColor"
        d="M12 1.5A10.5 10.5 0 1 0 22.5 12 10.5 10.5 0 0 0 12 1.5Zm4.81 15.14a.93.93 0 0 1-1.28.31 8.92 8.92 0 0 0-8.99-.44.94.94 0 1 1-.89-1.65 10.79 10.79 0 0 1 10.88.52.94.94 0 0 1 .28 1.26Zm1.82-3a1.16 1.16 0 0 1-1.59.39 11.22 11.22 0 0 0-11.25-.54 1.16 1.16 0 0 1-1.03-2.09 13.55 13.55 0 0 1 13.58.67 1.16 1.16 0 0 1 .29 1.57Zm.16-3.12a1.4 1.4 0 0 1-1.91.46 13.57 13.57 0 0 0-13.5-.63A1.4 1.4 0 0 1 2.12 7.9a16.36 16.36 0 0 1 16.3.76 1.39 1.39 0 0 1 .37 1.86Z"
      />
    </svg>
  );
}

export default function SpotifyCard({ songs }: SpotifyCardProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (songs.length === 0) {
    return null;
  }

  const song = songs[currentIndex];

  const goPrev = () => {
    setCurrentIndex((index) => (index - 1 + songs.length) % songs.length);
  };

  const goNext = () => {
    setCurrentIndex((index) => (index + 1) % songs.length);
  };

  return (
    <div
      className="spotify-card"
      style={
        {
          "--spotify-card-bg": `linear-gradient(135deg, ${song.accent}33 0%, ${song.color} 60%)`,
          "--spotify-card-accent": song.accent,
          "--spotify-card-progress": `${song.progress}%`,
        } as CSSProperties
      }
      onClick={(event) => event.stopPropagation()}
    >
      <div className="spotify-card-top">
        <div className="spotify-card-media">
          {song.imageUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={song.imageUrl}
              alt={`${song.title} album art`}
              width={72}
              height={72}
              className="spotify-card-art"
              draggable={false}
            />
          ) : (
            <div
              className="spotify-card-art spotify-card-art-placeholder"
              aria-hidden="true"
            />
          )}

          <div className="spotify-card-copy">
            <p className="spotify-card-title" title={song.title}>
              {song.title}
            </p>
            <p className="spotify-card-artist" title={song.artist}>
              {song.artist}
            </p>
            <a
              href={song.spotify}
              target="_blank"
              rel="noreferrer"
              className="spotify-card-save"
            >
              <PlusCircle />
              <span>Save on Spotify</span>
            </a>
          </div>
        </div>

        <a
          href="https://open.spotify.com"
          target="_blank"
          rel="noreferrer"
          className="spotify-card-logo"
          aria-label="Open Spotify"
        >
          <SpotifyMark />
        </a>
      </div>

      <div className="spotify-card-progress-track" aria-hidden="true">
        <div className="spotify-card-progress-fill" />
      </div>

      <div className="spotify-card-nav">
        <button
          type="button"
          className="spotify-card-nav-button"
          onClick={goPrev}
          aria-label="Previous song"
        >
          <ChevronLeft />
          <span>prev</span>
        </button>

        <div className="spotify-card-dots" aria-label="Song navigation">
          {songs.map((item, index) => (
            <button
              key={`${item.title}-${item.artist}`}
              type="button"
              className={
                index === currentIndex
                  ? "spotify-card-dot is-active"
                  : "spotify-card-dot"
              }
              onClick={() => setCurrentIndex(index)}
              aria-label={`Show ${item.title} by ${item.artist}`}
              aria-pressed={index === currentIndex}
            />
          ))}
        </div>

        <button
          type="button"
          className="spotify-card-nav-button"
          onClick={goNext}
          aria-label="Next song"
        >
          <span>next</span>
          <ChevronRight />
        </button>
      </div>

    </div>
  );
}
