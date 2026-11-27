export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  descriptionPt?: string;
  technologies: string[];
  github: string;
  demo: string;
  image: string;
  mobileImage?: string;
  available: boolean;
};

export const devProjects = [
  {
    id: 0,
    name: "Integr",
    description:
      "A website for a systems engineering and AI studio that helps businesses simplify complex operations.",
    descriptionPt:
      "Site de um estúdio de engenharia de sistemas e IA que ajuda empresas a simplificar operações complexas.",
    technologies: [],
    github: "",
    demo: "https://www.integr.com.br/",
    image: require("../../public/projects/integr-desktop.webp"),
    mobileImage: require("../../public/projects/integr-mobile.webp"),
    available: true,
  },
  {
    id: 1,
    name: "Casa Mia",
    description:
      "A rental platform for finding a home and managing properties, applications, leases, and payments.",
    descriptionPt:
      "Plataforma para encontrar um imóvel e gerenciar propriedades, propostas, contratos e pagamentos.",
    technologies: [],
    github: "https://github.com/systemconductor/casa-mia-landing",
    demo: "https://casa-mia-pied.vercel.app/",
    image: require("../../public/projects/casa-mia.webp"),
    mobileImage: require("../../public/projects/casa-mia-mobile.webp"),
    available: true,
  },
  {
    id: 2,
    name: "Alternativa",
    description:
      "A digital consulting studio website showcasing its design, development, and e-commerce services.",
    descriptionPt:
      "Site de um estúdio de consultoria digital que apresenta seus serviços de design, desenvolvimento e e-commerce.",
    technologies: [],
    github: "",
    demo: "https://aalternativa.vercel.app/",
    image: require("../../public/projects/alternativa-desktop.webp"),
    mobileImage: require("../../public/projects/alternativa-mobile.webp"),
    available: true,
  },
];

export const designProjects = [
  {
    id: 1,
    name: "Hebron Statup Lab Website",
    description:
      "SkyWatch is a convenient and user-friendly tool that allows you to quickly and easily check the current.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Fhsl.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 2,
    name: "RAGS Scrubs Website",
    description:
      "An image generator website that allows users to generate, combine, and download images.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Frags.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 3,
    name: "Crown Branding Agency Website",
    description:
      "A website that reduces the length of your URL using Bit.ly's API",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image:
      "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Fcrown.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 4,
    name: "Titi Mobile App",
    description:
      "TMTM helps you find people who are headed to the same location as you, so you can share a ride and split the cost with them.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Ftiti.webp&w=1920&q=75",
    available: false,
  },
];
