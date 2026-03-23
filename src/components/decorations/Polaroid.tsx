import Image from "next/image";
import { type ReactNode } from "react";

function SunsetScene() {
  return (
    <svg
      viewBox="0 0 196 176"
      className="h-full w-full"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="sunsetSky" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFD4A8" />
          <stop offset="45%" stopColor="#F0A868" />
          <stop offset="100%" stopColor="#C87848" />
        </linearGradient>
      </defs>
      <rect width="196" height="176" fill="url(#sunsetSky)" />
      <circle cx="140" cy="48" r="22" fill="#FFE8C0" opacity={0.85} />
      <ellipse cx="98" cy="200" rx="120" ry="80" fill="#E8B890" opacity={0.35} />
    </svg>
  );
}

function BanffScene() {
  return (
    <svg
      viewBox="0 0 196 176"
      className="h-full w-full"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="lake" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#6FA8C8" />
          <stop offset="100%" stopColor="#4A7898" />
        </linearGradient>
      </defs>
      <rect width="196" height="140" fill="#B8D4E8" />
      <path
        d="M0 95 L40 55 L70 75 L110 40 L150 70 L196 50 L196 140 L0 140 Z"
        fill="#7A9098"
      />
      <path
        d="M0 95 L40 60 L70 78 L110 48 L150 74 L196 58 L196 140 L0 140 Z"
        fill="#5C6B72"
      />
      <rect y="118" width="196" height="58" fill="url(#lake)" />
      <path
        d="M0 118 L196 118"
        stroke="#8AB8C8"
        strokeWidth="2"
        opacity={0.5}
      />
    </svg>
  );
}

function PolaroidInner({
  children,
  className,
  caption,
}: {
  children: ReactNode;
  className: string;
  caption: string;
}) {
  return (
    <div
      className={`polaroid polaroid-inner w-[220px] rounded-sm border border-[#DDD5C0] bg-[#FDFAF3] p-3 pb-10 shadow-[2px_3px_0_#C8BFA8,0_1px_8px_rgba(80,50,20,0.08)] ${className}`}
    >
      <div className="polaroid-img relative h-[176px] w-[196px] overflow-hidden border border-[#E8E0D4] bg-[#F5EFE3]">
        {children}
      </div>
      <p
        className="mt-3 text-center font-caveat text-[15px]"
        style={{ color: "var(--chestnut-mid)" }}
      >
        {caption}
      </p>
    </div>
  );
}

export function PolaroidSunset({ usePhoto }: { usePhoto: boolean }) {
  return (
    <div
      className="polaroid-wrap-left polaroid-rise-left pointer-events-auto fixed left-[36px] top-[10vh] z-[4]"
      aria-hidden="true"
    >
      <div className="pointer-events-auto relative inline-block -rotate-[3.5deg]">
        <div
          className="tack pointer-events-none absolute left-1/2 top-0 z-10 h-[5px] w-[1.5px] -translate-x-1/2 translate-y-[11px]"
          style={{ background: "#806010" }}
        />
        <div
          className="tack pointer-events-none absolute left-1/2 top-0 z-10 h-[13px] w-[13px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(circle at 38% 38%, #E0C060, #906A18)",
          }}
        />
        <PolaroidInner className="" caption="cotton sunset">
          {usePhoto ? (
            <Image
              src="/images/polaroids/polaroid-sunset.jpg"
              alt=""
              width={196}
              height={176}
              className="h-full w-full object-cover"
            />
          ) : (
            <SunsetScene />
          )}
        </PolaroidInner>
      </div>
    </div>
  );
}

export function PolaroidBanff({ usePhoto }: { usePhoto: boolean }) {
  return (
    <div
      className="polaroid-wrap-right polaroid-rise-right pointer-events-auto fixed bottom-[9vh] right-[36px] z-[4]"
      aria-hidden="true"
    >
      <div className="pointer-events-auto relative inline-block rotate-[3deg]">
        <div
          className="washi-corner pointer-events-none absolute right-[12px] top-[-7px] z-10 h-[22px] w-[22px] rotate-[14deg]"
          style={{ background: "rgba(185,210,175,0.52)" }}
        />
        <PolaroidInner className="" caption="banff">
          {usePhoto ? (
            <Image
              src="/images/polaroids/polaroid-banff.jpg"
              alt=""
              width={196}
              height={176}
              className="h-full w-full object-cover"
            />
          ) : (
            <BanffScene />
          )}
        </PolaroidInner>
      </div>
    </div>
  );
}
