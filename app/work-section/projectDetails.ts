export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const devProjects = [
  {
    id: 0,
    name: "SaasLanding",
    description:
      "Empower Yourself with Excellence – Track your progress, stay motivated, and celebrate your achievements with our innovative app.",
    technologies: ["Next.js", "Typescript", "TailwindCSS"],
    github: "https://github.com/mateusloubach",
    demo: "https://saas-landing-alpha.vercel.app/",
    image: require(".//../../public/projects/frame11.png"),
    available: true,
  },
  {
    id: 1,
    name: "CloudAI",
    description:
    "CloudAI is a decentralized nation where AI and humans work together. AI agents automate tasks, provide services, and interact across platforms.",
    technologies: ["ViteJs", "Typescript", "ReactJs"],
    github: "https://github.com/mateusloubach/",
    demo: "https://cloudaionbase.eth.limo",
    image: require("../../public/projects/CloudAI.png"),
    available: true,
  },
  {
    id: 2,
    name: "AnxietyX",
    description:
      "Empower Yourself with Excellence – Track your progress, stay motivated, and celebrate your achievements with our innovative app.",
    technologies: ["NextJs", "Typescript", "Appwrite"],
    github: "https://github.com/mateusloubach",
    demo: "https://anxiety-x.vercel.app/",
    image: require(".//../../public/projects/anxietyx.png"),
    available: true,
  },
  // {
  //   id: 3,
  //   name: "PkmUp",
  //   description:
  //     "PkmUp is an app that allows you to locate and connect to people that want to reach the same destination.",
  //   technologies: ["Next.js", "Next Auth", "Tailwind CSS"],
  //   github: "https://github.com/msp-nigeria/mlsc.ng-frontend",
  //   demo: "",
  //   image: require("../../public/projects/pkmup.png"),
  //   available: false,
  // },
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
