import type { Metadata } from "next";
import { Inter, Epilogue, Poppins } from "next/font/google";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
});

const epilogue = Epilogue({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-epilogue",
  weight: ["500", "700", "800", "900"],
});

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-epilogue",
  weight: ["500", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Blott Web App", // Can be a string or an object for more control
  description:
    "The Blott Web App is a modern, responsive application built with Next.js and TypeScript, showcasing the latest news from around the world.",
  keywords: ["Next.js", "React", "TypeScript", "Web Development"],
  authors: [{ name: "Oloruntobi Alademehin" }],
  openGraph: {
    title: "My Awesome Next.js App",
    description: "The official Next.js App Router tutorial.",
    url: "https://",
    siteName: "Blott News",
    images: [
      {
        url: "https://res.cloudinary.com/dwtjcpszy/image/upload/v1752491527/BlottCoverPage_urvp6j.png",
        width: 800,
        height: 600,
        alt: "Blott News Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "My Awesome Next.js App",
    description:
      "Blott Web App is a modern, responsive application built with Next.js and TypeScript.",
    images: [
      "https://res.cloudinary.com/dwtjcpszy/image/upload/v1752491527/BlottCoverPage_urvp6j.png",
    ],
  },

  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${inter.variable} ${epilogue.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
