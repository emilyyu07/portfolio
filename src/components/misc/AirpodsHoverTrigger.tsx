"use client";

import Image from "next/image";
import MusicCard from "@/components/misc/MusicCard";
import type { Song } from "@/components/misc/SongDisplay";

const songs: Song[] = [
  { title: "I've Seen It", artist: "Olivia Dean", cover: "/songs/1.jpg" },
  { title: "Call Your Mom", artist: "Noah Kahan", cover: "/songs/2.jpg" },
  { title: "Come Back to Earth", artist: "Mac Miller", cover: "/songs/3.jpg" },
  { title: "Free Now", artist: "Gracie Abrams", cover: "/songs/4.jpg" },
  { title: "Peter", artist: "Taylor Swift", cover: "/songs/5.jpg" },
  { title: "Loose", artist: "Daniel Caesar", cover: "/songs/6.jpg" },
  {
    title: "exile (feat. Bon Iver)",
    artist: "Taylor Swift, Bon Iver",
    cover: "/songs/7.jpg",
  },
  {
    title: "Do I Wanna Know?",
    artist: "Hozier",
    cover: "/songs/8.jpg",
  },
  {
    title: "All Too Well (Taylor's Version)",
    artist: "Taylor Swift",
    cover: "/songs/9.jpg",
  },
  {
    title: "Everywhere, Everything",
    artist: "Noah Kahan, Gracie Abrams",
    cover: "/songs/10.jpg",
  },
  {
    title: "No. 1 Party Anthem",
    artist: "Arctic Monkeys",
    cover: "/songs/11.jpg",
  },
];

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
