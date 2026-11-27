import { useCopy } from "../LocaleProvider";
import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedBody from "../animations/AnimatedBody";

const Footer = ({ copyrightYear }: { copyrightYear: string }) => {
  const copy = useCopy();
  return (
    <motion.section
      className="w-full border-t-2 border-[#e4ded7]/30 bg-site-background py-6 font-bold uppercase"
      initial="initial"
      animate="animate"
    >
      <motion.div className="mx-auto flex w-[90%] flex-row items-center justify-between gap-4 text-center text-[12px] text-[#e4ded7] sm:text-[12px] md:text-[14px] lg:max-w-[1440px] lg:text-[14px]">
        <AnimatedBody
          text={copy(`© Copyright ${copyrightYear}`, `© ${copyrightYear}`)}
          className="m-0 p-0 sm:shrink-0"
        />
        <div className="flex flex-col sm:flex-row  sm:gap-1 md:gap-2">
          <AnimatedBody
            text={copy("Development & Design by", "Desenvolvimento e design por")}
            className={"m-0 p-0"}
          />
          <Link
            href="https://github.com/mateusloubach"
            data-cursor-contrast
            target="_blank"
            aria-label={copy("Mateus' GitHub Profile", "Perfil do Mateus no GitHub")}
          >
            <span className="underline underline-offset-2 hover:no-underline">
              <AnimatedBody text={"Mateus Loubach"} className={"m-0 p-0"} />
            </span>{" "}
          </Link>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Footer;
