import "./globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { Syne } from "@next/font/google";
import { Analytics } from "@vercel/analytics/react";

const syne = Syne({
  subsets: ["latin"],
  display: "block",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Mateus Loubach — Software Engineer",
  description:
    "Frontend Engineer and Product Designer, currently at Alternativa Agency. Focused on interfaces and experiences, working remotely from Belo Horizonte, Brazil.",
  generator: "Next.js",
  applicationName: "Mateus Loubach",
  keywords: [
    "freelance",
    "developer",
    "freelance developer",
    "frontend",
    "react",
    "frontend developer",
    "frontend engineer",
    "creative",
    "creative developer",
    "creative engineer",
    "tech",
    "software",
    "software developer",
    "portfolio",
    "frontend developer portfolio",
    "creative developer portfolio",
  ],
  colorScheme: "dark",
  openGraph: {
    title: "Mateus Loubach | Software Engineer",
    description:
      "Frontend Engineer and Product Designer, currently at Alternativa Agency. Focused on interfaces and experiences, working remotely from Belo Horizonte, Brazil.",
    url: "https://www.mateusloubach.github.io",
    siteName: "mateusloubach.github.io",
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/53960269?s=400&u=4c0382b009d1fa906186b7ced2915a11f104d395&v=4",
        width: 1200,
        height: 630,
        alt: "Mateus Loubach — Software Engineer",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mateus Loubach — Software Engineer",
    description:
      "Frontend Engineer and Product Designer, currently at Crown Branding Agency. Focused on interfaces and experiences, working remotely from BH, Brazil.",
    creator: "mateusloubach",
    creatorId: "1243720976552144897",
    images: [
      "https://avatars.githubusercontent.com/u/53960269?s=400&u=4c0382b009d1fa906186b7ced2915a11f104d395&v=4",
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${syne.className} scroll-smooth scrollbar-thin scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
