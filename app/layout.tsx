import "./globals.css";
import { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import { Syne } from "@next/font/google";
import { Analytics } from "@vercel/analytics/react";

export const viewport: Viewport = { colorScheme: "dark" };

const syne = Syne({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mateusloubach.vercel.app"),
  title: "Mateus Loubach — Software Engineering, Systems & AI",
  description:
    "Mateus Loubach helps professionals and companies turn unclear digital problems into websites, software, systems, and AI agents that move the business forward.",
  applicationName: "Mateus Loubach",
  keywords: [
    "software engineer", "technology consultant", "AI agents", "agentic platforms",
    "custom software", "business systems", "digital strategy", "React developer",
    "TypeScript developer", "Belo Horizonte",
  ],
  openGraph: {
    title: "Mateus Loubach — Software Engineering, Systems & AI",
    description:
      "Software engineering and technology consulting for professionals and companies with difficult digital problems.",
    url: "https://mateusloubach.vercel.app",
    siteName: "Mateus Loubach",
    images: [
      {
        url: "/hero-kieai.jpg",
        width: 1520,
        height: 656,
        alt: "Abstract connected systems architecture",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mateus Loubach — Software Engineering, Systems & AI",
    description: "Turning unclear digital problems into websites, software, systems, and AI agents.",
    creator: "mateusloubach",
    creatorId: "1243720976552144897",
    images: [
      "/hero-kieai.jpg",
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  category: "technology",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${syne.className} ${syne.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}