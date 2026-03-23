const plop =
  "plopFlowerBL 0.72s cubic-bezier(0.22, 0.68, 0.36, 1.1) both";
const delay = "0.38s";

export function PressedFlowersBL() {
  return (
    <div
      className="pointer-events-none fixed bottom-0 left-0 z-[2] h-[240px] w-[240px]"
      aria-hidden="true"
    >
      <svg
        className="h-full w-full overflow-visible"
        viewBox="0 0 240 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          style={{ animation: plop, animationDelay: delay }}
          transform="translate(72, 168) rotate(-4)"
          opacity={0.72}
        >
          {/* Layered rose/peony bud */}
          <ellipse cx="0" cy="0" rx="14" ry="12" fill="#C49A9A" opacity={0.35} />
          <ellipse cx="-2" cy="-2" rx="10" ry="9" fill="#D8A8A8" opacity={0.45} />
          <ellipse cx="2" cy="1" rx="7" ry="6" fill="#E8C0C0" opacity={0.5} />
          <ellipse cx="0" cy="-1" rx="4" ry="3.5" fill="#EDD0D0" opacity={0.55} />
        </g>

        <g
          style={{ animation: plop, animationDelay: delay }}
          transform="translate(28, 124) rotate(10)"
          opacity={0.7}
        >
          {/* 7-petal daisy */}
          <circle cx="0" cy="0" r="3.5" fill="#D4A040" opacity={0.88} />
          {[0, 51, 102, 153, 204, 255, 306].map((a, i) => (
            <ellipse
              key={i}
              cx={Math.cos((a * Math.PI) / 180) * 5.2}
              cy={Math.sin((a * Math.PI) / 180) * 5.2}
              rx="3.4"
              ry="6.8"
              fill="#F0E8D8"
              opacity={0.72}
              transform={`rotate(${a} 0 0)`}
            />
          ))}
        </g>

        <g
          style={{ animation: plop, animationDelay: delay }}
          transform="translate(100, 200) rotate(-2)"
          opacity={0.62}
        >
          {/* Fern frond */}
          <path
            d="M0 0 Q4 -28 0 -56"
            stroke="#7A8B72"
            strokeWidth="1"
            fill="none"
            opacity={0.55}
          />
          {[-12, -22, -32, -42, -52].map((y, i) => (
            <g key={i}>
              <ellipse cx="-6" cy={y} rx="5" ry="2" fill="#9AAA90" opacity={0.45} transform={`rotate(-35 -6 ${y})`} />
              <ellipse cx="5" cy={y - 3} rx="4" ry="1.8" fill="#A8B89E" opacity={0.42} transform={`rotate(30 5 ${y - 3})`} />
            </g>
          ))}
        </g>

        <g
          style={{ animation: plop, animationDelay: delay }}
          transform="translate(52, 72) rotate(6)"
          opacity={0.68}
        >
          {/* 4-petal pansy */}
          <circle cx="0" cy="0" r="2.8" fill="#E8D878" opacity={0.85} />
          {[0, 90, 180, 270].map((a, i) => (
            <ellipse
              key={i}
              cx={Math.cos((a * Math.PI) / 180) * 4.5}
              cy={Math.sin((a * Math.PI) / 180) * 4.5}
              rx="4"
              ry="5.5"
              fill="#B8A8C8"
              opacity={0.65}
              transform={`rotate(${a} 0 0)`}
            />
          ))}
        </g>
      </svg>
    </div>
  );
}
