import "./globals.css";
import { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";
import { headers } from "next/headers";
import { LocaleProvider } from "./LocaleProvider";
import { isLocale } from "./locale";

const syne = localFont({
  src: "./fonts/Syne.ttf",
  display: "block",
  weight: "400 800",
});

export const viewport: Viewport = {
  colorScheme: "dark",
};

const siteMetadata: Metadata = {
  icons: {
    icon: [
      { url: "/favicon-dark.svg", type: "image/svg+xml", sizes: "any" },
      {
        url: "/favicon-light.svg",
        type: "image/svg+xml",
        sizes: "any",
        media: "(prefers-color-scheme: dark)",
      },
    ],
  },
  title: "Mateus Loubach — Software Engineer",
  description:
    "Software Engineer and Product Designer, currently at Alternativa Agency. Focused on interfaces and experiences, working remotely from Belo Horizonte, Brazil.",
  generator: "Next.js",
  applicationName: "Mateus Loubach",
  keywords: [
    "freelance",
    "developer",
    "freelance developer",
    "frontend",
    "frontend developer",
    "frontend engineer",
    "react", "react developer", "next developer", "next.js developer", "next.js", 
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
  openGraph: {
    title: "Mateus Loubach | Software Engineer",
    description:
      "Software Engineer and Product Designer, currently at Alternativa Agency. Focused on interfaces and experiences, working remotely from Belo Horizonte, Brazil.",
    url: "https://www.mateusloubach.tech",
    siteName: "mateusloubach.tech",
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
      "Software Engineer and Product Designer, currently at Crown Branding Agency. Focused on interfaces and experiences, working remotely from BH, Brazil.",
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

async function getLocale() {
  const locale = (await headers()).get("x-portfolio-locale") ?? undefined;
  return isLocale(locale) ? locale : "en";
}

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const portuguese = locale === "pt-br";
  const title = portuguese
    ? "Mateus Loubach — Engenheiro de Software e Arquiteto de Soluções"
    : "Mateus Loubach — Software Engineer & Solutions Architect";
  const description = portuguese
    ? "Engenharia de software, arquitetura de soluções e automação com IA, a partir de Belo Horizonte, Brasil."
    : "Software engineering, solutions architecture, and AI automation from Belo Horizonte, Brazil.";
  const url = `https://www.mateusloubach.tech/${locale}`;

  return {
    ...siteMetadata,
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        en: "https://www.mateusloubach.tech/en",
        "pt-BR": "https://www.mateusloubach.tech/pt-br",
        "x-default": "https://www.mateusloubach.tech/",
      },
    },
    openGraph: {
      ...siteMetadata.openGraph,
      title,
      description,
      url,
      locale: portuguese ? "pt_BR" : "en_US",
    },
    twitter: { ...siteMetadata.twitter, title, description },
  };
}

type RootLayoutProps = {
  children: ReactNode;
};

export default async function RootLayout({ children }: RootLayoutProps) {
  const locale = await getLocale();
  return (
    <html lang={locale === "pt-br" ? "pt-BR" : "en"}>
      <body
        className={`${syne.className} scroll-smooth scrollbar-thin scrollbar-track-site-background scrollbar-thumb-[#212531]`}
      >
        <LocaleProvider locale={locale}>{children}</LocaleProvider>
        <Analytics />
      </body>
    </html>
  );
}
