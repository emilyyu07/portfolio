"use client";

import Image from "next/image";
import MovieCard from "@/components/misc/MovieCard";
import type { Movie } from "@/components/misc/MovieDisplay";
import { favoriteMovies, letterboxdProfileUrl } from "@/lib/config";

const movies: Movie[] = favoriteMovies.map((movie) => ({
  title: movie.title,
  cover: movie.cover,
}));

type MovieHoverTriggerProps = {
  movieSrc: string;
  movieAlt: string;
};

export default function MovieHoverTrigger({
  movieSrc,
  movieAlt,
}: MovieHoverTriggerProps) {
  return (
    <div className="movie-hover-trigger">
      <div className="misc-object misc-movie">
        <Image
          src={movieSrc}
          alt={movieAlt}
          width={400}
          height={400}
          unoptimized
          draggable={false}
          className="misc-asset-image"
        />
      </div>
      <MovieCard movies={movies} profileUrl={letterboxdProfileUrl} />
    </div>
  );
}
