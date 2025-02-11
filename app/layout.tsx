import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TimeTrail | Home",
  description: "TimeTrail is a visually engaging timer application that enhances time tracking with interactive themes.",
  keywords: ["TimeTrail", "timer app", "time tracking", "countdown", "productivity"],
  authors: [{ name: "Alex Lamper", url: "https://timetrail.site" }],
  applicationName: "TimeTrail",
  openGraph: {
    title: "TimeTrail | Home",
    description: "Track your time in a visually immersive way with TimeTrail.",
    url: "https://timetrail.site",
    siteName: "TimeTrail",
    images: [{ url: "https://timetrail.site/og-image.jpg", width: 1200, height: 630, alt: "TimeTrail" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourtwitterhandle",
    creator: "@yourtwitterhandle",
    title: "TimeTrail | Home",
    description: "Track your time in a visually immersive way with TimeTrail.",
    images: ["https://timetrail.site/twitter-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}