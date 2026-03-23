import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dancing: ["var(--font-dancing)", "cursive"],
        caveat: ["var(--font-caveat)", "cursive"],
        lora: ["var(--font-lora)", "serif"],
        mono: ["var(--font-dm-mono)", "monospace"],
      },
      colors: {
        chestnut: "var(--chestnut)",
        "chestnut-mid": "var(--chestnut-mid)",
        "text-main": "var(--text-main)",
        "text-muted": "var(--text-muted)",
        "birch-base": "var(--birch-base)",
        "birch-light": "var(--birch-light)",
        cream: "var(--cream)",
        "gold-warm": "var(--gold-warm)",
      },
      animation: {
        "golden-breathe": "goldenBreathe 9s ease-in-out infinite",
        "shadow-drift": "shadowDrift 38s ease-in-out infinite",
        "shadow-breathe": "shadowBreathe 9s ease-in-out infinite",
        "rise-in": "riseIn 0.8s ease both",
        "type-reveal": "typeReveal 1.6s steps(18, end) 0.3s forwards",
        "fade-up": "fadeUp 0.7s ease forwards",
      },
    },
  },
  plugins: [],
};

export default config;
