"use client";

import { useState } from "react";

type Movie = {
  title: string;
  cover: string;
};

type MovieDisplayProps = {
  movie: Movie;
};

export default function MovieDisplay({ movie }: MovieDisplayProps) {
  const [coverMissing, setCoverMissing] = useState(!movie.cover);

  return (
    <div className="movie-display">
      {coverMissing ? (
        <div className="movie-cover movie-cover-fallback" aria-hidden="true" />
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={movie.cover}
          alt={`${movie.title} poster`}
          className="movie-cover"
          draggable={false}
          onError={() => setCoverMissing(true)}
        />
      )}
      <p className="movie-title" title={movie.title}>
        {movie.title}
      </p>
    </div>
  );
}

export type { Movie };
