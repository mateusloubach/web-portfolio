"use client";
import { useEffect } from "react";
import { preLoaderAnim } from "./loader";
import "./preloader.css";
import { useCopy } from "../../LocaleProvider";

const PreLoader = () => {
  const copy = useCopy();
  useEffect(() => {
    return preLoaderAnim();
  }, []);

  return (
    <div className="preloader gap-[5px] overflow-hidden text-[14px] sm:gap-[10px] sm:text-[16px] md:text-[18px] lg:text-[20px]">
      <div className="texts-container flex h-60 items-center justify-center gap-[5px] overflow-hidden text-[14px] font-extrabold text-[#e4ded7] opacity-0 sm:gap-[10px] sm:text-[16px] md:text-[18px] lg:text-[20px]">
        <span>{copy("Discover,", "Descobrir,")}</span>
        <span>{copy("Define,", "Definir,")}</span>
        <span>{copy("Develop,", "Desenvolver,")}</span>
        <span>{copy("Deliver", "Entregar")}</span>
        <span className="sub hidden"></span>
      </div>
    </div>
  );
};

export default PreLoader;
