import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "FindWhoIAm — Discover Your True Path",
  description:
    "A human guidance service to help you discover who you really are, what you're meant to do, and the path that is truly yours. Book a free conversation today.",
  keywords: [
    "life purpose",
    "self discovery",
    "career guidance",
    "find your path",
    "life coaching",
    "inner voice",
    "true calling",
  ],
  openGraph: {
    title: "FindWhoIAm — Discover Your True Path",
    description:
      "A human guidance service to help you discover who you really are and the path that is truly yours.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
