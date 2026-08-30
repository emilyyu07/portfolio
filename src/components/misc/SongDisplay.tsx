"use client";

import { useState } from "react";

type Song = {
  title: string;
  artist: string;
  cover: string;
  spotify?: string;
};

type SongDisplayProps = {
  song: Song;
};

export default function SongDisplay({ song }: SongDisplayProps) {
  const [coverMissing, setCoverMissing] = useState(false);

  const content = (
    <div className="airpods-song-display">
      {coverMissing ? (
        <div className="airpods-song-cover airpods-song-cover-fallback" aria-hidden="true" />
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={song.cover}
          alt={`${song.title} album art`}
          className="airpods-song-cover"
          draggable={false}
          onError={() => setCoverMissing(true)}
        />
      )}
      <p className="airpods-song-title" title={song.title}>
        {song.title}
      </p>
      <p className="airpods-song-artist" title={song.artist}>
        {song.artist}
      </p>
    </div>
  );

  if (song.spotify) {
    return (
      <a
        href={song.spotify}
        target="_blank"
        rel="noreferrer"
        className="airpods-song-link"
      >
        {content}
      </a>
    );
  }

  return content;
}

export type { Song };
