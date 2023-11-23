import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Viewport } from "next";
import Navbar from "./ui/navbar";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
};

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kehoe Tech Dev",
  description:
    "Portfolio of Eric Kehoe, PhD. Mathematician - Data Scientist - Full Stack Developer.",
  authors: [{ name: "Eric Kehoe", url: "https://kehoe-tech.dev" }],
  keywords: [
    "Data Science",
    "Full Stack Development",
    "Mathematics",
    "Portfolio",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Navbar>{children}</Navbar>
      </body>
      <Analytics />
    </html>
  );
}
