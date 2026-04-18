"use client";

import Image from "next/image";

type PolaroidFrameProps = {
  src?: string;
  alt: string;
  className?: string;
  rotation?: "left" | "right" | "none";
  caption?: string;
};

export function PolaroidFrame({
  src = "/sunset.jpg",
  alt,
  className = "",
  rotation = "left",
  caption = "",
}: PolaroidFrameProps) {
  return (
    <figure className={`polaroid ${className}`.trim()} data-rotation={rotation}>
      <div className="polaroid-surface">
        <div className="polaroid-image-window">
          <Image
            src={src}
            alt={alt}
            fill
            priority
            sizes="(max-width: 1023px) 88vw, 44vw"
            className="polaroid-image"
          />
        </div>
        <figcaption className="polaroid-caption">{caption}</figcaption>
      </div>
    </figure>
  );
}
