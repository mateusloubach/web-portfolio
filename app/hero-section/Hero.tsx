import Link from "next/link";
import Image from "next/image";
import { Mattone } from "../fonts/Mattone/Mattone";
import { motion } from "framer-motion";
import { imageAnimation, bodyAnimation } from "../animations/animations";
import AnimatedWords from "../animations/AnimatedWords";
import profile from "../../public/profile.png";
import mateusloubach from "../../public/mateusloubach.png";
import alternativa from "../../public/alternativalogo.png";

import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

const Hero = () => {
  return (
    <motion.section
      className="relative z-10 py-0 flex h-screen w-full items-stretch justify-center bg-[url('.//../public/hero2.jpg')] bg-cover bg-center"
      id="home"
      initial="initial"
      animate="animate"
    >
      <motion.div className="absolute left-0 top-0 right-0 bottom-0 h-full w-full bg-[#0E1016] mix-blend-color"></motion.div>

      <div className="absolute top-10 flex justify-center sm:w-[90%] lg:max-w-[1440px]">
        {/* <div>
            <Link className="pointer-events-none"
            href="https://api.whatsapp.com/send/?phone=5511942393021"
            target="_blank"
            aria-label="View Resume"
            >
            <motion.button
              className="hidden rounded-md border-2 border-[#e4ded7] py-2 px-4 text-[14px] font-semibold text-[#e4ded7] sm:block md:text-[16px] lg:block"
              variants={bodyAnimation}
            >
              MESSAGE
            </motion.button>
            </Link>
        </div> */}

        <div className="flex gap-10 text-[#e4ded7] sm:gap-12 md:gap-14 lg:gap-14">
          <Link
            href="https://github.com/mateusloubach"
            target="_blank"
            aria-label="View GitHub Profile"
          >
            <motion.p
              className="text-[16px] font-bold text-[#e4ded7] md:text-[16px]"
              variants={bodyAnimation}
            >
              <FaGithub size={32} />
            </motion.p>
          </Link>
          <Link
            href="https://www.linkedin.com/in/mateusloubach/"
            target="_blank"
            aria-label="View LinkedIn Profile"
          >
            <motion.p
              className="text-[16px] font-bold text-[#e4ded7] md:text-[16px]"
              variants={bodyAnimation}
            >
              <FaLinkedin size={32} />
            </motion.p>
          </Link>
          <Link
            href="https://twitter.com/mcesarloubach"
            target="_blank"
            aria-label="View Twitter Profile"
          >
            <motion.p
              className="text-[16px] font-bold text-[#e4ded7] md:text-[16px]"
              variants={bodyAnimation}
            >
              <FaXTwitter size={32} />
            </motion.p>
          </Link>
        </div>
      </div>

      <div className="-mt-36 flex flex-col items-center justify-center sm:-mt-20 lg:my-40 lg:-mt-2 lg:py-40 ">
        <div
          className={`relative flex flex-col items-center justify-center ${Mattone.className}   `}
        >
          <AnimatedWords
            title="MATEUS LOUBACH"
            style="inline-block overflow-hidden pt-1 -mr-4 sm:-mr-5 md:-mr-7 lg:-mr-9 -mb-1 sm:-mb-2 md:-mb-3 lg:-mb-4"
          />
          <motion.div
            className="absolute bottom-[-110px] mx-auto sm:bottom-[-100px] md:bottom-[-130px] lg:bottom-[-150px]"
            variants={imageAnimation}
          >
            <Image
              src={mateusloubach}
              priority
              alt="My profile Picture"
              data-blobity-tooltip=" "
              data-blobity-invert="false"
              className="mt-[165px] w-[150px] rounded-[32px] grayscale hover:grayscale-0 md:w-[200px] md:rounded-[72px] lg:w-[155px]"
            />
          </motion.div>
        </div>
      </div>

      <div
        className="absolute bottom-10 flex items-center 
      justify-center
      md:bottom-10 lg:w-[90%] lg:max-w-[1440px] lg:justify-between"
      >
        <motion.div
          className="  max-w-[350px] md:max-w-[400px] lg:max-w-[400px]"
          variants={bodyAnimation}
        >
          <p className="z-50 text-center text-[16px] font-medium text-[#e4ded7] md:text-[20px] lg:text-left">
            Software Engineer and Product Designer, Currently available for work.
          </p>
        </motion.div>

        <motion.div
          className="  hidden max-w-[500px] lg:block lg:max-w-[420px]"
          variants={bodyAnimation}
        >
          <p className="text-right text-[16px] font-semibold text-[#e4ded7] md:text-[20px]">
            Focused on Scalable Systems, UI/UX, remotely from Belo Horizonte - Brasil.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
