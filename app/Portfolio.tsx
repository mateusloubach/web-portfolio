"use client";
import Hero from "./hero-section/Hero";
import Blobity from "blobity";
import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import PreLoader from "./animations/PreLoader/PreLoader";
import { initialBlobityOptions } from "./utils/BlobityConfig";
import dynamic from "next/dynamic";
const Work = dynamic(() => import("./work-section/Work"));
const About = dynamic(() => import("./about-section/About"));
const Contact = dynamic(() => import("./contact-section/Contact"));
const Footer = dynamic(() => import("./footer/Footer"));

export default function Portfolio({ copyrightYear }: { copyrightYear: string }) {
  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1025px) and (prefers-reduced-motion: no-preference)");
    let smoothScroll: Lenis | undefined;
    const updateSmoothScroll = () => {
      smoothScroll?.destroy();
      smoothScroll = desktop.matches ? new Lenis({ autoRaf: true }) : undefined;
    };

    updateSmoothScroll();
    desktop.addEventListener("change", updateSmoothScroll);
    return () => {
      desktop.removeEventListener("change", updateSmoothScroll);
      smoothScroll?.destroy();
    };
  }, []);

  useEffect(() => {
    const cursor = new Blobity(initialBlobityOptions);
    return () => cursor.destroy();
  }, []);

  return (
    <>
      <PreLoader />
      <main className="flex flex-col items-center justify-center">
        <Hero />
        <Work />
        <About />
        <Contact />
        <Footer copyrightYear={copyrightYear} />
      </main>
    </>
  );
}
