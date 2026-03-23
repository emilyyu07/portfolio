const plop =
  "plopFlowerTR 0.72s cubic-bezier(0.22, 0.68, 0.36, 1.1) both";
const delay = "0.18s";

export function PressedFlowersTR() {
  return (
    <div
      className="pointer-events-none fixed right-0 top-0 z-[2] h-[220px] w-[220px]"
      aria-hidden="true"
    >
      <svg
        className="h-full w-full overflow-visible"
        viewBox="0 0 220 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          style={{ animation: plop, animationDelay: delay }}
          transform="translate(118, 8) rotate(8)"
          opacity={0.72}
        >
          {/* 8-petal daisy */}
          <circle cx="0" cy="0" r="3.2" fill="#C9A050" opacity={0.85} />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((a, i) => (
            <ellipse
              key={i}
              cx={Math.cos((a * Math.PI) / 180) * 5.5}
              cy={Math.sin((a * Math.PI) / 180) * 5.5}
              rx="3.8"
              ry="7"
              fill="#F2EBD8"
              opacity={0.75}
              transform={`rotate(${a} 0 0)`}
            />
          ))}
          <path
            d="M0 8 Q2 18 0 28"
            stroke="#7A8B6E"
            strokeWidth="1.2"
            fill="none"
            opacity={0.55}
          />
          <ellipse cx="-4" cy="22" rx="4" ry="2.2" fill="#8B9B7A" opacity={0.45} />
          <ellipse cx="4" cy="24" rx="3.5" ry="2" fill="#8B9B7A" opacity={0.42} />
        </g>

        <g
          style={{ animation: plop, animationDelay: delay }}
          transform="translate(168, 42) rotate(-12)"
          opacity={0.68}
        >
          {/* Lavender sprig */}
          <path
            d="M0 40 L0 4"
            stroke="#9A8BA8"
            strokeWidth="1"
            opacity={0.6}
          />
          {[6, 14, 22, 30].map((y, i) => (
            <g key={i}>
              <circle cx="-3" cy={y} r="2" fill="#B8A8C8" opacity={0.55} />
              <circle cx="3" cy={y - 2} r="1.8" fill="#C4B4D0" opacity={0.5} />
            </g>
          ))}
          <ellipse cx="-6" cy="38" rx="5" ry="2.5" fill="#8B9B7A" opacity={0.4} />
          <ellipse cx="5" cy="40" rx="4" ry="2" fill="#8B9B7A" opacity={0.38} />
        </g>

        <g
          style={{ animation: plop, animationDelay: delay }}
          transform="translate(92, 52) rotate(4)"
          opacity={0.7}
        >
          {/* 6-petal wildflower */}
          <circle cx="0" cy="0" r="3.5" fill="#C49A50" opacity={0.9} />
          {[0, 60, 120, 180, 240, 300].map((a, i) => (
            <ellipse
              key={i}
              cx={Math.cos((a * Math.PI) / 180) * 5}
              cy={Math.sin((a * Math.PI) / 180) * 5}
              rx="3.2"
              ry="6.5"
              fill="#EDE5D0"
              opacity={0.7}
              transform={`rotate(${a} 0 0)`}
            />
          ))}
        </g>

        <g
          style={{ animation: plop, animationDelay: delay }}
          transform="translate(140, 96) rotate(-6)"
          opacity={0.55}
        >
          {/* Dried leaf cluster */}
          <path
            d="M0 0 Q-8 18 -4 36"
            stroke="#9A8A6E"
            strokeWidth="1.1"
            fill="none"
            opacity={0.65}
          />
          <ellipse cx="-10" cy="12" rx="9" ry="4" fill="#B5A88C" opacity={0.5} transform="rotate(-35 -10 12)" />
          <ellipse cx="6" cy="18" rx="8" ry="3.5" fill="#A89878" opacity={0.48} transform="rotate(25 6 18)" />
          <ellipse cx="-4" cy="26" rx="7" ry="3" fill="#C4B89A" opacity={0.45} transform="rotate(-15 -4 26)" />
        </g>
      </svg>
    </div>
  );
}
