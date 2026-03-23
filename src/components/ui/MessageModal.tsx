"use client";

import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";

type Props = {
  open: boolean;
  onClose: () => void;
};

function isValidEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
}

export function MessageModal({ open, onClose }: Props) {
  const titleId = useId();
  const panelRef = useRef<HTMLDivElement>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);
  const lastFocusRef = useRef<HTMLElement | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle",
  );

  useEffect(() => {
    if (!open) return;
    lastFocusRef.current = document.activeElement as HTMLElement | null;
    setStatus("idle");
    const t = window.setTimeout(() => firstFieldRef.current?.focus(), 10);
    return () => window.clearTimeout(t);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!open) return;
    const root = panelRef.current;
    if (!root) return;
    const focusables = root.querySelectorAll<HTMLElement>(
      'button, [href], input, textarea, select, [tabindex]:not([tabindex="-1"])',
    );
    const list = Array.from(focusables).filter(
      (el) => !el.hasAttribute("disabled") && el.tabIndex !== -1,
    );
    const onTrap = (e: KeyboardEvent) => {
      if (e.key !== "Tab" || list.length === 0) return;
      const first = list[0];
      const last = list[list.length - 1];
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else if (document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onTrap);
    return () => document.removeEventListener("keydown", onTrap);
  }, [open]);

  useEffect(() => {
    if (!open && lastFocusRef.current) {
      lastFocusRef.current.focus();
      lastFocusRef.current = null;
    }
  }, [open]);

  const submit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      if (!name.trim() || !email.trim() || !message.trim()) return;
      if (!isValidEmail(email)) return;
      setStatus("sending");
      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: name.trim(),
            email: email.trim(),
            message: message.trim(),
          }),
        });
        if (!res.ok) throw new Error("bad");
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
      } catch {
        setStatus("error");
      }
    },
    [name, email, message],
  );

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="presentation"
    >
      <button
        type="button"
        className="absolute inset-0 bg-[rgba(62,42,20,0.25)] backdrop-blur-[2px]"
        aria-label="Close dialog"
        onClick={onClose}
      />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative z-[101] w-full max-w-md rounded-2xl border border-[rgba(92,61,30,0.15)] bg-[rgba(250,246,238,0.96)] p-6 shadow-lg"
      >
        <div className="mb-4 flex items-start justify-between gap-4">
          <h2
            id={titleId}
            className="font-caveat text-2xl"
            style={{ color: "var(--chestnut)" }}
          >
            leave a message ✉
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="focus-ring rounded-lg px-2 py-1 font-caveat text-lg"
            style={{ color: "var(--text-muted)" }}
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {status === "success" ? (
          <p className="font-caveat text-xl" style={{ color: "var(--chestnut-mid)" }}>
            sent! i&apos;ll be in touch ✦
          </p>
        ) : status === "error" ? (
          <p className="font-caveat text-lg" style={{ color: "var(--text-muted)" }}>
            something went wrong — try emailing directly
          </p>
        ) : (
          <form onSubmit={submit} className="flex flex-col gap-4">
            <div>
              <label htmlFor="contact-name" className="sr-only">
                Name
              </label>
              <input
                ref={firstFieldRef}
                id="contact-name"
                name="name"
                required
                autoComplete="name"
                placeholder="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="focus-ring w-full rounded-lg border border-[rgba(92,61,30,0.2)] bg-birch-base px-3 py-2 font-lora text-[16px] outline-none focus:border-chestnut"
                style={{ color: "var(--text-main)" }}
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="sr-only">
                Email
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="focus-ring w-full rounded-lg border border-[rgba(92,61,30,0.2)] bg-birch-base px-3 py-2 font-lora text-[16px] outline-none focus:border-chestnut"
                style={{ color: "var(--text-main)" }}
              />
            </div>
            <div>
              <label htmlFor="contact-message" className="sr-only">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={4}
                placeholder="your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="focus-ring w-full resize-y rounded-lg border border-[rgba(92,61,30,0.2)] bg-birch-base px-3 py-2 font-lora text-[16px] outline-none focus:border-chestnut"
                style={{ color: "var(--text-main)" }}
              />
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="focus-ring self-start rounded-[50px] px-[26px] py-[9px] font-caveat text-[18px] transition-all duration-150 hover:-translate-y-0.5 hover:shadow-[0_4px_10px_rgba(80,48,16,0.14)] disabled:opacity-60"
              style={{
                background: "var(--chestnut)",
                color: "var(--cream)",
              }}
            >
              {status === "sending" ? "sending…" : "send"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
