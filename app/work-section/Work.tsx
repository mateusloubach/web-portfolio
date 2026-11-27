import ProjectGrid from "./ProjectGrid";
import { useCopy } from "../LocaleProvider";

const Work = () => {
  const copy = useCopy();
  return (
    <section
      className="relative z-10 flex w-full flex-col items-center justify-center bg-site-background bg-cover bg-center py-16 md:py-20 lg:py-20"
      id="work"
    >
      <h2 className="mb-10 hidden text-[36px] text-[#e4ded7] md:mb-16 md:text-[42px] lg:mb-16 lg:text-[72px]">
        {copy("Featured Work", "Projetos em destaque")}
      </h2>

      <ProjectGrid />
    </section>
  );
};

export default Work;
