"use client";

import { useState } from "react";
import MovieDisplay from "@/components/misc/MovieDisplay";
import type { Movie } from "@/components/misc/MovieDisplay";

type MovieCardProps = {
  movies: Movie[];
  profileUrl?: string;
};

function ChevronLeft() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="movie-chevron">
      <path
        d="M7.2 10 15.2 15.3V4.7L7.2 10ZM5.2 4.8h-1.1v10.4h1.1V4.8Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="movie-chevron">
      <path
        d="M12.8 10 4.8 15.3V4.7L12.8 10ZM14.8 4.8h1.1v10.4h-1.1V4.8Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function MovieCard({ movies, profileUrl }: MovieCardProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (movies.length === 0) {
    return null;
  }

  const movie = movies[currentIndex];
  const progress =
    movies.length > 1 ? (currentIndex / (movies.length - 1)) * 100 : 100;

  return (
    <article className="movie-card">
      <a
        href={profileUrl ?? "https://letterboxd.com"}
        target="_blank"
        rel="noreferrer"
        className="movie-letterboxd-logo"
        aria-label="Open Letterboxd"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/letterboxd-logo.svg"
          alt=""
          className="movie-letterboxd-mark"
          draggable={false}
        />
      </a>

      <MovieDisplay key={`${movie.title}-${currentIndex}`} movie={movie} />

      <div className="movie-controls">
        <button
          type="button"
          className="movie-button is-subtle"
          onClick={() => setCurrentIndex((idx) => (idx - 1 + movies.length) % movies.length)}
          aria-label="Previous movie"
        >
          <ChevronLeft />
        </button>
        <button
          type="button"
          className="movie-button is-primary"
          onClick={() => setCurrentIndex((idx) => (idx + 1) % movies.length)}
          aria-label="Next movie"
        >
          <ChevronRight />
        </button>
      </div>

      <div className="movie-progress" aria-hidden="true">
        <div className="movie-progress-fill" style={{ width: `${progress}%` }} />
      </div>
    </article>
  );
}
