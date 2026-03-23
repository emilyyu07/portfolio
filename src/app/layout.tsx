import type { Metadata } from "next";
import {
  Caveat,
  Dancing_Script,
  DM_Mono,
  Lora,
} from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { BirchBackground } from "@/components/decorations/BirchBackground";
import { GoldenHourLight } from "@/components/decorations/GoldenHourLight";
import { PressedFlowersTR } from "@/components/decorations/PressedFlowersTR";
import { PressedFlowersBL } from "@/components/decorations/PressedFlowersBL";
import { ScrapCorner } from "@/components/decorations/ScrapCorner";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { siteUrl } from "@/lib/siteConfig";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dancing",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-caveat",
});

const lora = Lora({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-lora",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300"],
  variable: "--font-dm-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Emily Yu",
    template: "%s · Emily Yu",
  },
  description:
    "Computer engineering student at the University of Waterloo — portfolio.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Emily Yu",
    description: "Computer engineering @ UWaterloo",
    url: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const fontVars = `${dancingScript.variable} ${caveat.variable} ${lora.variable} ${dmMono.variable}`;

  return (
    <html lang="en" className={fontVars}>
      <body className="min-h-screen overflow-x-hidden font-lora text-text-main antialiased">
        <BirchBackground />
        <GoldenHourLight />
        <PressedFlowersTR />
        <PressedFlowersBL />
        <ScrapCorner corner="tr" />
        <ScrapCorner corner="bl" />

        <div className="relative z-[4] flex min-h-screen flex-col">
          <Nav />
          <main className="flex flex-1 flex-col">{children}</main>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
