"use client";

import { useEffect, useRef } from "react";

const interactiveSelector = [
  "a",
  "button",
  '[role="button"]',
  "label",
  "input",
  "textarea",
  "select",
  ".misc-object",
  ".project-row",
  ".social-wrap",
  ".nav-link",
  ".theme-toggle",
].join(", ");

export function TerminalCursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    if (!cursor) {
      return;
    }

    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)");

    if (!canHover.matches) {
      cursor.style.display = "none";
      return;
    }

    document.documentElement.dataset.terminalCursor = "enabled";

    let mouseX = -100;
    let mouseY = -100;
    let rafId = 0;

    const setIdleState = () => {
      cursor.textContent = "_";
      cursor.style.animationPlayState = "running";
      cursor.style.opacity = "1";
    };

    const setActiveState = () => {
      cursor.textContent = "▌";
      cursor.style.animationPlayState = "paused";
      cursor.style.opacity = "1";
    };

    const updatePosition = () => {
      cursor.style.transform = `translate(${mouseX}px, ${mouseY - 13}px)`;
      rafId = window.requestAnimationFrame(updatePosition);
    };

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
    };

    const handleMouseOver = (event: MouseEvent) => {
      const target = event.target;

      if (target instanceof Element && target.closest(interactiveSelector)) {
        setActiveState();
      }
    };

    const handleMouseOut = (event: MouseEvent) => {
      const target = event.target;
      const relatedTarget = event.relatedTarget;

      if (!(target instanceof Element)) {
        return;
      }

      const currentInteractive = target.closest(interactiveSelector);
      const nextInteractive = relatedTarget instanceof Element ? relatedTarget.closest(interactiveSelector) : null;

      if (currentInteractive && currentInteractive !== nextInteractive) {
        setIdleState();
      }
    };

    const handleWindowLeave = () => {
      cursor.style.opacity = "0";
    };

    const handleWindowEnter = () => {
      cursor.style.opacity = "1";
    };

    setIdleState();
    rafId = window.requestAnimationFrame(updatePosition);

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);
    document.addEventListener("mouseleave", handleWindowLeave);
    document.addEventListener("mouseenter", handleWindowEnter);

    return () => {
      window.cancelAnimationFrame(rafId);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      document.removeEventListener("mouseleave", handleWindowLeave);
      document.removeEventListener("mouseenter", handleWindowEnter);
      delete document.documentElement.dataset.terminalCursor;
    };
  }, []);

  return (
    <div ref={cursorRef} className="cursor-terminal" aria-hidden="true">
      _
    </div>
  );
}
