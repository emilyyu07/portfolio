type Props = {
  subtitle: string;
};

export function ComingSoon({ subtitle }: Props) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-6 py-16">
      <div
        className="relative inline-block -rotate-[1.5deg]"
        style={{
          animation: "riseIn 0.85s ease both",
          animationDelay: "0.3s",
          animationFillMode: "both",
        }}
      >
        <div
          className="pointer-events-none absolute left-1/2 top-0 z-10 h-[5px] w-[1.5px] -translate-x-1/2 translate-y-[11px]"
          style={{ background: "#806010" }}
        />
        <div
          className="pointer-events-none absolute left-1/2 top-0 z-10 h-[13px] w-[13px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(circle at 38% 38%, #E0C060, #906A18)",
          }}
        />
        <div className="w-[240px] rounded-sm border border-[#DDD5C0] bg-[#FDFAF3] p-3 pb-8 shadow-[2px_3px_0_#C8BFA8,0_1px_8px_rgba(80,50,20,0.08)]">
          <div
            className="polaroid-img flex h-[160px] items-center justify-center border border-[#E8E0D4] bg-[#F5EFE3]"
            aria-hidden="true"
          >
            <svg
              width="100"
              height="100"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M50 18 C38 28 22 42 22 58 C22 74 36 82 50 82 C64 82 78 74 78 58 C78 42 62 28 50 18Z"
                stroke="var(--chestnut-mid)"
                strokeWidth="1.2"
                opacity={0.35}
              />
              <path
                d="M50 35 L50 65 M38 50 L62 50"
                stroke="var(--gold-warm)"
                strokeWidth="0.8"
                opacity={0.4}
                strokeLinecap="round"
              />
            </svg>
          </div>
          <p
            className="mt-4 text-center font-dancing text-[48px] sm:text-[56px]"
            style={{ color: "var(--chestnut)", opacity: 0.7 }}
          >
            coming soon :)
          </p>
        </div>
      </div>
      <p
        className="mt-6 text-center font-caveat text-lg"
        style={{ color: "var(--text-muted)" }}
      >
        {subtitle}
      </p>
    </div>
  );
}
