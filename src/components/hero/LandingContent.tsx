"use client";

import { useCallback, useState } from "react";
import { HeroText } from "./HeroText";
import { HeroButtons } from "./HeroButtons";
import { MessageModal } from "@/components/ui/MessageModal";

export function LandingContent() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = useCallback(() => setModalOpen(true), []);
  const closeModal = useCallback(() => setModalOpen(false), []);

  return (
    <>
      <div className="flex flex-1 flex-col items-center justify-center px-6 py-12">
        <HeroText />
        <p
          className="hero-sub-fade hero-subtitle-text font-caveat mt-4 text-center"
        >
          computer engineering @ uwaterloo
        </p>
        <HeroButtons onMessageClick={openModal} />
      </div>
      <MessageModal open={modalOpen} onClose={closeModal} />
    </>
  );
}
