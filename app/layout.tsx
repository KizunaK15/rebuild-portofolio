import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { MotionConfig } from "framer-motion";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { SkipLink } from "@/components/layout/SkipLink";
import "./globals.css";

// ─── Fonts ────────────────────────────────────────────────────────
// Loaded via next/font/google — no external CDN request at runtime.
// CSS variable names match the @theme tokens in globals.css.

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

// ─── Metadata ─────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: {
    template: "%s | Prima Aji Setyawan",
    default: "Prima Aji Setyawan — Embedded Systems & IoT Engineer",
  },
  description:
    "Portfolio of Prima Aji Setyawan — Embedded Systems Engineer, IoT Engineer, and AI-Augmented Developer.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL ?? "https://primaaji.dev"
  ),
  openGraph: {
    title: "Prima Aji Setyawan — Embedded Systems & IoT Engineer",
    description:
      "Portfolio of Prima Aji Setyawan — Embedded Systems Engineer, IoT Engineer, and AI-Augmented Developer.",
    url: process.env.NEXT_PUBLIC_BASE_URL ?? "https://primaaji.dev",
    siteName: "Prima Aji Setyawan",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Prima Aji Setyawan — Embedded Systems & IoT Engineer",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prima Aji Setyawan — Embedded Systems & IoT Engineer",
    description:
      "Portfolio of Prima Aji Setyawan — Embedded Systems Engineer, IoT Engineer, and AI-Augmented Developer.",
    images: ["/og-image.png"],
  },
};

// ─── Root Layout ──────────────────────────────────────────────────

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    /*
     * data-theme="dark" sets the default color scheme.
     * ThemeProvider will update this attribute on the client
     * after reading localStorage, but we set it here to prevent
     * a flash of the wrong theme on first paint.
     */
    <html
      lang="en"
      data-theme="dark"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col antialiased">
        <ThemeProvider>
          {/* SkipLink must be the first focusable element in the document */}
          <SkipLink />

          {/*
           * MotionConfig reducedMotion="user" delegates all animation
           * decisions to the OS/browser prefers-reduced-motion setting.
           * When active, Framer Motion disables all animations globally.
           */}
          <MotionConfig reducedMotion="user">{children}</MotionConfig>
        </ThemeProvider>
      </body>
    </html>
  );
}
