"use client";

import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { siteData } from "@/lib/siteData";

function TypewriterLine({
  text,
  start,
  active,
  persistCursor,
  onComplete,
}: {
  text: string;
  start: boolean;
  active: boolean;
  persistCursor: boolean;
  onComplete?: () => void;
}) {
  const [visibleText, setVisibleText] = useState("");
  const hasStartedRef = useRef(false);
  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    if (!start || hasStartedRef.current) {
      return;
    }

    hasStartedRef.current = true;

    let index = 0;
    const timer = window.setInterval(() => {
      index += 1;
      setVisibleText(text.slice(0, index));

      if (index >= text.length) {
        window.clearInterval(timer);
        onCompleteRef.current?.();
      }
    }, 40);

    return () => window.clearInterval(timer);
  }, [start, text]);

  return (
    <div className="flex items-center gap-2 courier-text text-[clamp(0.96rem,1.8vw,1.15rem)] tracking-[0.08em] text-black">
      <span className="opacity-90">{">_"}</span>
      <span className="min-h-[1.4em]">
        {visibleText}
        {(active || persistCursor) && <span className="type-cursor">|</span>}
      </span>
    </div>
  );
}

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, (value) => value * 0.25);
  const [showHint, setShowHint] = useState(false);
  const [firstDone, setFirstDone] = useState(false);
  const [secondDone, setSecondDone] = useState(false);
  const [bgOffset, setBgOffset] = useState(0);

  useMotionValueEvent(scrollY, "change", (value) => {
    setBgOffset(value * 0.25);
  });

  useEffect(() => {
    const timer = window.setTimeout(() => setShowHint(true), 2500);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <section
      id="top"
      className="relative min-h-screen overflow-hidden"
      style={{ ["--hero-offset" as string]: `${bgOffset}px` }}
    >
      <motion.div
        className="absolute inset-0 scale-[1.04] bg-cover bg-center bg-no-repeat"
        style={{
          y,
          backgroundImage: "var(--sunset-image)",
        }}
      />
      <div className="absolute inset-0 bg-[var(--bg)]" />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1120px] flex-col justify-center px-5 pb-24 pt-24 md:px-12">
        <div className="max-w-[56rem]">
          <h1 className="font-sans text-[clamp(4.9rem,13vw,10.5rem)] font-[400] leading-[0.9] tracking-[0.01em] text-black">
            <span className="block">emily</span>
            <span className="block">yu :)</span>
          </h1>

          <div className="mt-[4.5rem] space-y-3.5">
            <TypewriterLine
              text={siteData.heroLines[0]}
              start
              active={!firstDone}
              persistCursor={false}
              onComplete={() => setFirstDone(true)}
            />
            <TypewriterLine
              text={siteData.heroLines[1]}
              start={firstDone}
              active={firstDone && !secondDone}
              persistCursor={secondDone}
              onComplete={() => setSecondDone(true)}
            />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={showHint ? { opacity: 0.48, y: 0 } : { opacity: 0, y: 8 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="absolute bottom-10 left-5 courier-text text-[0.8rem] tracking-[0.22em] text-[var(--text)] md:left-12"
        >
          scroll to continue
        </motion.div>
      </div>
    </section>
  );
}
