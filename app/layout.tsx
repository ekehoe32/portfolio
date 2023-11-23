import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Viewport } from "next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "contain",
};

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KehoeDev",
  description:
    "Portfolio of Eric Kehoe, PhD. Mathematician - Data Scientist - Full Stack Developer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
      <Analytics />
    </html>
  );
}
