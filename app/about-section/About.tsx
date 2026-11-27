import { useCopy } from "../LocaleProvider";
import SongCarousel from "./SongCarousel";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";

const toolGroups = [
  {
    title: "AI & Automation",
    titlePt: "IA e automação",
    toolsPt:
      "n8n, ferramentas para o Model Context Protocol (MCP), design de agentes de IA, testes automatizados de cenários, Chatwoot, API do WhatsApp Business via Twilio",
    tools:
      "n8n, Model Context Protocol (MCP) tooling, AI agent design, automated scenario testing, Chatwoot, Twilio WhatsApp Business API",
  },
  {
    title: "Systems & Integrations",
    titlePt: "Sistemas e integrações",
    toolsPt:
      "APIs REST, webhooks, microsserviços, arquitetura orientada a eventos, integração de sistemas",
    tools:
      "REST APIs, webhooks, microservices, event-driven architecture, systems integration",
  },
  {
    title: "Cloud & Data",
    titlePt: "Nuvem e dados",
    toolsPt:
      "Docker, implantação em VPS Linux, AWS, Azure, PostgreSQL, Supabase, Redis, SQL Server",
    tools:
      "Docker, Linux VPS deployments, AWS, Azure, PostgreSQL, Supabase, Redis, SQL Server",
  },
  {
    title: "Web Engineering",
    titlePt: "Engenharia web",
    tools:
      "TypeScript, JavaScript, Python, C#, React, Next.js, Vite, Astro, Node.js, .NET Core, Tailwind CSS",
  },
];

const About = () => {
  const copy = useCopy();
  return (
    <section
      className="relative z-10 w-full items-center justify-center overflow-hidden bg-site-background bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
      id="about"
    >
      <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1235.8px]">
        <AnimatedTitle
          text={copy(
            "I MAKE BEAUTIFUL BRANDS, CAPTIVATING CONTENT, AND POWERFUL WEBSITES.",
            "CRIO MARCAS BONITAS, CONTEÚDO ENVOLVENTE E SITES DE IMPACTO.",
          )}
          className={
            "mb-10 text-left text-[clamp(1.75rem,7vw,2.5rem)] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
          }
          wordSpace={"mr-[14px]"}
          charSpace={"mr-[0.001em]"}
        />

        <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
          <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium  leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16  lg:max-w-[90%] lg:text-[24px] ">
            <AnimatedBody
              text={copy(
                "I’m a software engineer and solutions architect. I build web applications, connect systems, and use AI to automate work that teams would otherwise do by hand.",
                "Sou engenheiro de software e arquiteto de soluções. Desenvolvo aplicações web, integro sistemas e uso IA para automatizar tarefas manuais.",
              )}
            />
            <AnimatedBody
              text={copy(
                "For a private clinic, I built an AI-powered appointment follow-up system that reduced missed appointments by 79.3% over six months.",
                "Para uma clínica particular, desenvolvi um sistema de acompanhamento de consultas com IA que reduziu as faltas em 79,3% ao longo de seis meses.",
              )}
            />
            <AnimatedBody
              text={copy(
                "I start by understanding how a team works day to day, then build around the steps that cost them the most time.",
                "Começo entendendo como a equipe trabalha no dia a dia. Depois, crio soluções para as etapas que mais tomam tempo.",
              )}
            />
            <AnimatedBody
              text={copy(
                "I’m especially interested in projects where teams are juggling disconnected tools or spending too much time on manual work.",
                "Tenho interesse especial em projetos de equipes que lidam com ferramentas desconectadas ou gastam muito tempo com tarefas manuais.",
              )}
            />
            <AnimatedBody
              text={copy(
                "Outside work, I’m usually watching anime, cheering for Flamengo, or listening to rock and classical music.",
                "Fora do trabalho, costumo assistir a animes, torcer pelo Flamengo ou ouvir rock e música clássica.",
              )}
            />
          </div>

          <div className="mb-24 flex w-[100%] flex-col gap-4 text-[18px] font-normal leading-relaxed tracking-wide text-[#e4ded7]/80 sm:mb-32 md:mb-40 md:gap-6 md:text-[16px] md:leading-normal lg:mt-0 lg:mb-16 lg:max-w-[30%] lg:text-[18px]">
            <h2 className="text-2xl font-bold text-[#e4ded7] md:text-3xl">
              {copy("Tools & Architecture", "Ferramentas e arquitetura")}
            </h2>
            {toolGroups.map(({ title, titlePt, tools, toolsPt }) => (
              <div key={title} className="flex flex-col gap-3">
                <AnimatedTitle
                  text={copy(title, titlePt)}
                  className="text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                  wordSpace="mr-[0.25em]"
                  charSpace="mr-[0.01em]"
                />
                <AnimatedBody text={copy(tools, toolsPt ?? tools)} />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 flex flex-col md:-mt-0 lg:mt-28">
          <SongCarousel />
          <AnimatedBody
            text={copy(
              "Some other projects I built trying new tech and practicing new ideas.",
              "Outros projetos que desenvolvi para experimentar tecnologias e testar ideias.",
            )}
            className="absolute bottom-10 right-0 left-0 mx-auto w-[90%] text-center text-[14px] font-semibold uppercase text-[#e4ded7] sm:w-[500px] md:bottom-12 md:w-[550px] md:text-[16px] "
          />
        </div>
      </div>
    </section>
  );
};

export default About;
