import Image from "next/image";

const PLOP_TR = "plopTR 0.75s cubic-bezier(0.22, 0.68, 0.36, 1.1) both";
const PLOP_BL = "plopBL 0.75s cubic-bezier(0.22, 0.68, 0.36, 1.1) both";

const TR_LAYERS = [
  { src: "/images/scraps/tr-scrap-1.png", rotate: "-4deg", x: "10px", y: "5px", zIndex: 0 },
  { src: "/images/scraps/tr-scrap-2.png", rotate: "2deg", x: "-8px", y: "12px", zIndex: 1 },
  { src: "/images/scraps/tr-scrap-3.png", rotate: "-1deg", x: "4px", y: "-4px", zIndex: 2 },
  { src: "/images/scraps/tr-scrap-4.png", rotate: "5deg", x: "-12px", y: "8px", zIndex: 3 },
];

const BL_LAYERS = [
  { src: "/images/scraps/bl-scrap-1.png", rotate: "3deg", x: "-5px", y: "-8px", zIndex: 0 },
  { src: "/images/scraps/bl-scrap-2.png", rotate: "-5deg", x: "10px", y: "4px", zIndex: 1 },
  { src: "/images/scraps/bl-scrap-3.png", rotate: "1deg", x: "-6px", y: "-3px", zIndex: 2 },
  { src: "/images/scraps/bl-scrap-4.png", rotate: "-2deg", x: "8px", y: "6px", zIndex: 3 },
];

type Corner = "tr" | "bl";

export function ScrapCorner({ corner }: { corner: Corner }) {
  const layers = corner === "tr" ? TR_LAYERS : BL_LAYERS;
  const baseDelay = corner === "tr" ? 0.3 : 0.5;
  const wrapperClass = corner === "tr" ? "scrap-tr" : "scrap-bl";
  const positionClass =
    corner === "tr" ? "right-0 top-0" : "bottom-0 left-0";
  const plop = corner === "tr" ? PLOP_TR : PLOP_BL;

  return (
    <div
      className={`fixed ${positionClass} z-[3] ${wrapperClass}`}
      aria-hidden="true"
    >
      <div className="relative h-[200px] w-[200px] sm:h-[220px] sm:w-[220px]">
        {layers.map((layer, i) => (
          <div
            key={layer.src}
            className="absolute"
            style={{
              left: layer.x,
              top: layer.y,
              zIndex: layer.zIndex,
              transform: `rotate(${layer.rotate})`,
              animation: plop,
              animationDelay: `${baseDelay + i * 0.055}s`,
              animationFillMode: "both",
            }}
          >
            <Image
              src={layer.src}
              alt=""
              width={190}
              height={200}
              className="h-auto max-w-[180px] select-none sm:max-w-[200px]"
              priority={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
