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
    name: "CarPool",
    description:
      "CarPool is an aplication that allows you to locate and connect to people that want to reach the same destination. It allows you to reach via map and locate possible drivers that have the same goal.",
    technologies: ["Next.js", "Typescript", "Prisma"],
    github: "https://github.com/mateusloubach",
    demo: "https://github.com/mateusloubach",
    image: require(".//../../public/projects/pkmup.png"),
    available: false,
  },

  {
    id: 1,
    name: "barberShop",
    description:
      "Barbershop is a we application that allows you to book appointments, view the studio's services , and get in touch with the studio.",
    technologies: ["NextJs", "Typescript", "Prisma"],
    github: "https://github.com/mateusloubach",
    demo: "https://web-barbershops.vercel.app",
    image: require(".//../../public/projects/barbershop.png"),
    available: true,
  },

  {
    id: 2,
    name: "Tattoo Studio",
    description:
      "A Tattoo Studio website that allows users to book appointments, view the studio's portfolio, and get in touch with the studio.",
    technologies: ["Typescript", "CSS", "Framer"],
    github: "https://github.com/mateusloubach/",
    demo: "https://wazowskitattoo.framer.ai/",
    image: require(".//../../public/projects/tattooshop.png"),
    available: true,
  },
  // {
  //   id: 3,
  //   name: "Carpooling Service",
  //   description:
  //     "TMTM helps Covenant University students find fellow students who are headed to the same location, so they can share a ride and split the cost.",
  //   technologies: ["Material UI", "React", "Formik"],
  //   github: "https://github.com/victorcodess/carpooling-service",
  //   demo: "",
  //   image: require(".//../../public/projects/carpool-new.webp"),
  //   available: false,
  // },
  {
    id: 5,
    name: "././glossary",
    description:
      "Glossary is a public developer dictionary contaning a large library of content that helps and provides information regarding .",
    technologies: ["Next.js", "Next Auth", "Tailwind CSS"],
    github: "https://github.com/msp-nigeria/mlsc.ng-frontend",
    demo: "",
    image: require(".//../../public/projects/glossary.png"),
    available: false,
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
