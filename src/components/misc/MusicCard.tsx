"use client";

import { useState } from "react";
import type { Song } from "@/components/misc/SongDisplay";
import SongDisplay from "@/components/misc/SongDisplay";

type MusicCardProps = {
  songs: Song[];
};

function ChevronLeft() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      className="airpods-music-chevron"
    >
      <path
        d="M7.2 10 15.2 15.3V4.7L7.2 10ZM5.2 4.8h-1.1v10.4h1.1V4.8Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      className="airpods-music-chevron"
    >
      <path
        d="M12.8 10 4.8 15.3V4.7L12.8 10ZM14.8 4.8h1.1v10.4h-1.1V4.8Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function MusicCard({ songs }: MusicCardProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (songs.length === 0) {
    return null;
  }

  const song = songs[currentIndex];
  const progress =
    songs.length > 1 ? (currentIndex / (songs.length - 1)) * 100 : 100;

  const goPrev = () => {
    setCurrentIndex((index) => (index - 1 + songs.length) % songs.length);
  };

  const goNext = () => {
    setCurrentIndex((index) => (index + 1) % songs.length);
  };

  return (
    <article className="airpods-music-card">
      <a
        href="https://open.spotify.com"
        target="_blank"
        rel="noreferrer"
        className="airpods-music-spotify-logo"
        aria-label="Open Spotify"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/spotify-logo.svg"
          alt=""
          className="airpods-music-spotify-mark"
          draggable={false}
        />
      </a>

      <SongDisplay key={`${song.title}-${currentIndex}`} song={song} />

      <div className="airpods-music-controls">
        <button
          type="button"
          className="airpods-music-button is-subtle"
          onClick={goPrev}
          aria-label="Previous song"
        >
          <ChevronLeft />
        </button>

        <button
          type="button"
          className="airpods-music-button is-primary"
          onClick={goNext}
          aria-label="Next song"
        >
          <ChevronRight />
        </button>
      </div>

      <div className="airpods-music-progress" aria-hidden="true">
        <div
          className="airpods-music-progress-fill"
          style={{ width: `${progress}%` }}
        />
      </div>
    </article>
  );
}

export type { Song };
