"use client";

import Image from "next/image";
import MusicCard from "@/components/misc/MusicCard";
import type { Song } from "@/components/misc/SongDisplay";
import { spotifySongs } from "@/lib/config";

const songs: Song[] = spotifySongs.map((song) => ({
  title: song.title,
  artist: song.artist,
  cover: song.imageUrl,
}));

type AirpodsHoverTriggerProps = {
  airpodsSrc: string;
  airpodsAlt: string;
};

export default function AirpodsHoverTrigger({
  airpodsSrc,
  airpodsAlt,
}: AirpodsHoverTriggerProps) {
  return (
    <div className="airpods-hover-trigger">
      <div className="misc-object misc-airpods">
        <Image
          src={airpodsSrc}
          alt={airpodsAlt}
          width={400}
          height={400}
          unoptimized
          draggable={false}
          className="misc-asset-image"
        />
      </div>
      <MusicCard songs={songs} />
    </div>
  );
}
