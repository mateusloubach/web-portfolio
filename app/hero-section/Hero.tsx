import Link from "next/link";
import Image from "next/image";
import { Mattone } from "../fonts/Mattone/Mattone";
import { motion } from "framer-motion";
import { imageAnimation, bodyAnimation } from "../animations/animations";
import AnimatedWords from "../animations/AnimatedWords";
import portrait from "../../public/hero-portrait.png";
import { useCopy, useLocale } from "../LocaleProvider";
import { localeCookie, locales } from "../locale";

import { FaLinkedin } from "react-icons/fa";
import { SiKofi, SiPatreon } from "react-icons/si";

const Hero = () => {
  const copy = useCopy();
  const locale = useLocale();
  return (
    <motion.section
      className="relative z-10 w-full bg-site-background"
      id="home"
      initial="initial"
      animate="animate"
    >
      <div className="relative mx-auto grid min-h-svh w-[90%] max-w-[1440px] grid-rows-[auto_1fr_auto] gap-8 py-6 md:py-9">
        <header className="flex items-center justify-between gap-3">
          <nav
            aria-label={copy("Language", "Idioma")}
            className="shrink-0"
          >
            <div className="inline-flex items-center gap-1 rounded-full border border-[#e4ded7]/25 bg-site-background/40 p-1 text-xs font-semibold text-[#e4ded7]">
              {locales.map((language) => (
                <a
                  key={language}
                  data-cursor-contrast
                  href={"/" + language}
                  hrefLang={language}
                  lang={language}
                  aria-label={
                    language === "en" ? "English" : "Português do Brasil"
                  }
                  aria-current={locale === language ? "page" : undefined}
                  className={
                    locale === language
                      ? "rounded-full bg-[#e4ded7] px-2.5 py-1.5 text-site-background"
                      : "rounded-full px-2.5 py-1.5 hover:bg-white/10"
                  }
                  onClick={() => {
                    const secure =
                      location.protocol === "https:" ? "; Secure" : "";
                    document.cookie =
                      localeCookie +
                      "=" +
                      language +
                      "; Path=/; Max-Age=31536000; SameSite=Lax" +
                      secure;
                  }}
                >
                  {language === "en" ? "EN" : "PT"}
                </a>
              ))}
            </div>
          </nav>
          <div className="flex shrink-0 items-center gap-3 text-[#e4ded7] sm:gap-8 lg:gap-12">
            <Link
              data-cursor-contrast
              href="https://www.integr.com.br/"
              target="_blank"
              aria-label={copy("Visit Integr", "Visitar a Integr")}
            >
              <motion.p
                className="text-[16px] font-bold text-[#e4ded7] md:text-[16px]"
                variants={bodyAnimation}
              >
                <Image src="/integr.svg" width={32} height={32} alt="" />
              </motion.p>
            </Link>
            <Link
              data-cursor-contrast
              href="https://ko-fi.com/mateusloubach"
              target="_blank"
              aria-label={copy(
                "Support me on Ko-fi",
                "Apoie meu trabalho no Ko-fi",
              )}
            >
              <motion.p
                className="text-[16px] font-bold text-[#e4ded7] md:text-[16px]"
                variants={bodyAnimation}
              >
                <SiKofi size={32} />
              </motion.p>
            </Link>
            <Link
              data-cursor-contrast
              href="https://www.patreon.com/cw/mateusloubach"
              target="_blank"
              aria-label={copy(
                "Support me on Patreon",
                "Apoie meu trabalho no Patreon",
              )}
            >
              <motion.p
                className="text-[16px] font-bold text-[#e4ded7] md:text-[16px]"
                variants={bodyAnimation}
              >
                <SiPatreon size={32} />
              </motion.p>
            </Link>
            <Link
              data-cursor-contrast
              href="https://www.linkedin.com/in/mateusloubach/"
              target="_blank"
              aria-label={copy(
                "View LinkedIn Profile",
                "Ver perfil no LinkedIn",
              )}
            >
              <motion.p
                className="text-[16px] font-bold text-[#e4ded7] md:text-[16px]"
                variants={bodyAnimation}
              >
                <FaLinkedin size={32} />
              </motion.p>
            </Link>
          </div>
        </header>

        <div
          className={`flex flex-col items-center justify-center gap-5 ${Mattone.className}`}
        >
          <AnimatedWords
            title="MATEUS LOUBACH"
            style="inline-block overflow-hidden pt-1 -mr-4 sm:-mr-5 md:-mr-7 lg:-mr-9 -mb-1 sm:-mb-2 md:-mb-3 lg:-mb-4"
          />
          <motion.div
            className="relative overflow-hidden rounded-t-[36%] rounded-b-3xl [mask-image:linear-gradient(to_bottom,black_82%,transparent_100%)]"
            variants={imageAnimation}
          >
            <Image
              src={portrait}
              priority
              alt={copy(
                "Portrait of Mateus Loubach",
                "Retrato de Mateus Loubach",
              )}
              sizes="(min-width: 1024px) 175px, 150px"
              className="aspect-[4/5] w-[150px] object-cover object-top brightness-110 saturate-75 lg:w-[175px]"
            />
          </motion.div>
        </div>

        <div className="grid text-center text-base leading-normal text-[#e4ded7] md:text-xl lg:grid-cols-2 lg:gap-x-6 lg:gap-y-2 lg:text-[clamp(1rem,1.4vw,1.25rem)]">
          <motion.div
            className="mx-auto max-w-[420px] font-medium lg:row-span-2 lg:mx-0 lg:grid lg:max-w-none lg:grid-rows-subgrid lg:text-left"
            variants={bodyAnimation}
          >
            <p>
              {copy(
                "Software Engineer & Solutions Architect",
                "Engenheiro de Software e Arquiteto de Soluções",
              )}
            </p>
            <p className="mt-2 lg:mt-0">
              <span className="inline-block border-b border-[#e4ded7]/50 pb-1">
                {copy("Available", "Disponível")}
              </span>{" "}
              {copy("for work", "para trabalhar")}
            </p>
          </motion.div>

          <motion.div
            className="hidden text-right font-semibold lg:row-span-2 lg:grid lg:grid-rows-subgrid"
            variants={bodyAnimation}
          >
            <p>
              {copy(
                "I build software teams can ship and maintain.",
                "Crio software que equipes podem entregar e manter.",
              )}
            </p>
            <p>
              {copy(
                "Working remotely from Belo Horizonte - Brasil",
                "Trabalho remoto a partir de Belo Horizonte - Brasil",
              )}
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
