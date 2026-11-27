import { useCopy } from "../LocaleProvider";
import Link from "next/link";
import Image from "next/image";
import { monaSans } from "../fonts/monaSans/monaSans";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";
import AnimatedWords2 from "../animations/AnimatedWords2";
import { motion } from "framer-motion";
import heartIcon from "../../public/heart icon.png";
import { Mattone } from "../fonts/Mattone/Mattone";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiKofi, SiPatreon } from "react-icons/si";
import { bodyAnimation } from "../animations/animations";

const Contact = () => {
  const copy = useCopy();
  return (
    <motion.section
      className="relative z-10 flex w-full items-center justify-center overflow-hidden bg-site-background pt-16 pb-10 md:pt-20 md:pb-12"
      id="contact"
      initial="initial"
      animate="animate"
    >
      <div className="mx-auto flex w-[90%] flex-col items-center justify-center pt-10 md:pt-0">
        <div
          className={`flex flex-col items-start justify-center ${Mattone.className} relative w-full sm:items-center lg:max-w-[1440px] `}
        >
          <AnimatedWords2
            title={copy("Let's Talk", "Vamos conversar")}
            style={
              "flex flex-wrap justify-center gap-x-[0.22em] text-center text-[clamp(2.25rem,9vw,9rem)] font-extrabold uppercase leading-none text-[#e4ded7]"
            }
          />
          {/* <Image
            src={heartIcon}
            alt="Heart Icon"
            className="heartbeat md:-bottom-18 absolute -bottom-5 left-64 w-[120px] sm:-bottom-14 sm:left-[40%] md:left-[40%] md:w-[150px] lg:-bottom-16 lg:left-[42%] lg:w-[230px]"
          /> */}
        </div>

        <div className="mt-10 flex w-full flex-wrap items-end justify-between gap-7 md:mt-12 md:items-start lg:max-w-[1440px]">
          <div className=" flex w-[350px] max-w-[90%] flex-col items-end text-right text-[14px] font-semibold uppercase text-[#e4ded7] sm:w-[350px] sm:text-[14px] md:w-[310px] md:items-start md:text-left md:text-[16px] lg:w-[420px] lg:text-[16px]">
            <AnimatedBody
              text={copy(
                "Got a question, proposal, project, or want to work together on something?",
                "Tem uma dúvida, uma proposta ou um projeto? Vamos trabalhar juntos?",
              )}
              className={
                "-mb-1 inline-block overflow-hidden pt-1 sm:-mb-2 md:-mb-3 lg:-mb-4"
              }
            />
            {/* <Link
              href="mailto:mateus@mateusloubach.tech?subject=Lets%20work%20together!&amp;body=Hello%2C%20I%20think%20we%20need%20you%20to%20work%20on%2Fcollaborate%20this%20particular%20product...%20Reach%20out%20as%20soon%20as%20you%20can."
              target="_blank"
              aria-label="Send me an email"
              className="mt-1 w-[147px] flex-1 underline underline-offset-2 hover:no-underline sm:mt-2 sm:w-[147px] md:mt-3 md:w-[170px] lg:mt-4"
            > */}
            <Link
              href="https://w.app/mateusloubach"
              data-cursor-contrast
              target="_blank"
              aria-label={copy("Send me a message", "Envie uma mensagem")}
              className="mt-3 text-xl underline underline-offset-2 hover:no-underline sm:text-2xl"
            >
              <AnimatedBody
                text={copy("Let's Talk", "Vamos conversar")}
                className={""}
              />
            </Link>
          </div>

          <div className="flex gap-3 text-[16px] font-bold text-[#e4ded7] sm:gap-8 sm:text-[24px] md:gap-6 md:text-[16px] xl:gap-14 lg:text-[28px]">
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
                <Image src="/integr.svg" width={46} height={46} alt="" />
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
                <SiKofi size={46} />
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
                <SiPatreon size={46} />
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
                <FaLinkedin size={46} />
              </motion.p>
            </Link>
            <Link
              data-cursor-contrast
              href="https://www.instagram.com/mateuscloubach/"
              target="_blank"
              aria-label={copy(
                "View Instagram Profile",
                "Ver perfil no Instagram",
              )}
            >
              <motion.p
                className="text-[16px] font-bold text-[#e4ded7] md:text-[16px]"
                variants={bodyAnimation}
              >
                <FaInstagram size={46} />
              </motion.p>
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
