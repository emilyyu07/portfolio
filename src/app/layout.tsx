import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { TerminalCursor } from "@/components/TerminalCursor";
import { ThemeScript } from "@/components/ThemeScript";
import { siteData } from "@/lib/siteData";
import "./globals.css";

export const metadata: Metadata = {
  title: "emily yu",
  description: "emily yu's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://rsms.me" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <link
          rel="stylesheet"
          href="https://fonts.cdnfonts.com/css/intel-one-mono"
        />
        <ThemeScript />
      </head>
      <body
        style={{
          ["--sunset-image" as string]: `url("${siteData.sunsetImage}")`,
        }}
        className="bg-[var(--bg)] font-sans text-[var(--text)] antialiased transition-[background-color,color] duration-300"
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
        <TerminalCursor />
      </body>
    </html>
  );
}
