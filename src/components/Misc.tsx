"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { StravaIcon } from "@/components/Icons";
import { siteData } from "@/lib/siteData";

export function Misc() {
  const [plantHovered, setPlantHovered] = useState(false);
  const [shoesHovered, setShoesHovered] = useState(false);
  const [recordHovered, setRecordHovered] = useState(false);

  return (
    <section id="misc" className="mx-auto w-full max-w-[1120px] scroll-mt-24 px-5 py-24 md:px-12">
      <div className="mb-10">
        <p className="terminal-label">e:\ misc</p>
      </div>

      <div className="grid gap-[1.8rem] lg:grid-cols-[1fr_1.04fr_1fr]">
        <div
          className="group relative overflow-hidden border border-[var(--border)] bg-[var(--panel)]"
          onMouseEnter={() => setPlantHovered(true)}
          onMouseLeave={() => setPlantHovered(false)}
          onFocus={() => setPlantHovered(true)}
          onBlur={() => setPlantHovered(false)}
        >
          <div className="relative aspect-[4/5]">
            <Image
              src={siteData.misc.plantImage}
              alt="plant"
              fill
              sizes="(max-width: 1024px) 100vw, 32vw"
              className="object-cover saturate-[0.78] transition-[transform,filter] duration-300 ease-out group-hover:saturate-100"
            />
          </div>
          <div className="absolute inset-x-5 bottom-5 courier-text text-[0.82rem] tracking-[0.18em] text-[var(--bg)] transition-colors duration-300 group-hover:text-[#4D8A59]">
            {siteData.misc.plantText}
          </div>
        </div>

        <div className="grid gap-[1.8rem]">
          <div className="flex min-h-[14rem] items-center border border-[var(--border)] bg-[var(--panel)] p-8">
            <motion.p
              animate={{
                opacity: plantHovered ? 1 : 0,
                y: plantHovered ? 0 : 8,
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="text-[clamp(2rem,4vw,3.2rem)] font-[300] leading-[1.02] tracking-[-0.06em] text-[var(--text)]"
            >
              hope you have
              <br />
              a good day :)
            </motion.p>
          </div>

          <div
            className="relative overflow-hidden border border-[var(--border)] bg-[var(--panel)]"
            onMouseEnter={() => setShoesHovered(true)}
            onMouseLeave={() => setShoesHovered(false)}
          >
            <AnimatePresence>
              {shoesHovered && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  className="absolute left-1/2 top-5 z-10 flex -translate-x-1/2 items-center gap-2 border border-[var(--border-hover)] bg-[var(--bg)] px-3 py-2 text-[0.78rem] text-[var(--text)] backdrop-blur-sm"
                >
                  <StravaIcon className="h-4 w-4" />
                  <span className="courier-text tracking-[0.14em]">{siteData.misc.stravaUsername}</span>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="relative aspect-[16/10]">
              <Image
                src={siteData.misc.shoesImage}
                alt="running shoes"
                fill
                sizes="(max-width: 1024px) 100vw, 32vw"
                className="object-cover transition-transform duration-300 ease-out hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>

        <div className="grid gap-[1.8rem]">
          <div
            className="relative overflow-hidden border border-[var(--border)] bg-[var(--panel)]"
            onMouseEnter={() => setRecordHovered(true)}
            onMouseLeave={() => setRecordHovered(false)}
          >
            <AnimatePresence>
              {recordHovered && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.24, ease: "easeOut" }}
                  className="absolute left-5 top-5 z-10 w-[13rem] border border-[#1DB954]/30 bg-[#121212]/92 p-4 text-[#F6F6F6] shadow-[0_18px_45px_rgba(0,0,0,0.28)] backdrop-blur"
                >
                  <p className="courier-text text-[0.72rem] tracking-[0.2em] text-[#94D3A2]">
                    currently spinning
                  </p>
                  <p className="mt-3 text-[0.82rem] text-[#A6A6A6]">35 songs</p>
                  <p className="mt-5 text-[1rem] font-medium">{siteData.misc.songTitle}</p>
                  <p className="mt-1 text-[0.9rem] text-[#C6C6C6]">{siteData.misc.songArtist}</p>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="relative aspect-[16/10]">
              <Image
                src={siteData.misc.recordImage}
                alt="record player"
                fill
                sizes="(max-width: 1024px) 100vw, 32vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="overflow-hidden border border-[var(--border)] bg-[var(--panel)]">
            <div className="relative aspect-[16/10]">
              <Image
                src={siteData.misc.berriesImage}
                alt="bowl of raspberries"
                fill
                sizes="(max-width: 1024px) 100vw, 32vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

