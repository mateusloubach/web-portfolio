export type SongProps = {
  title: string;
  artist: string;
  image: string;
  link: string;
};

export const songs = [
  {
    title: "Cactolândia",
    artist: "Mateus Loubach",
    image: require(".//../../public/songs/cacto-main.png"),
    link: "https://cactolandia.vercel.app/",
  },
  {
    title: "digitalXp",
    artist: "Mateus Loubach",
    image: require(".//../../public/songs/digitalXp-main.png"),
    link: "https://digitalxp.vercel.app/",
  },
  {
    title: "Portfolio v1",
    artist: "Mateus Loubach",
    image: require(".//../../public/songs/portfoliov1.png"),
    link: "https://mateusloubach.github.io/",
  },
  {
    title: "clockUi",
    artist: "Mateus Loubach",
    image: require(".//../../public/songs/clockUi.png"),
    link: "https://clockui.vercel.app/",
  },
  {
    title: "Tesla Clone",
    artist: "Mateus Loubach",
    image: require(".//../../public/songs/teslaClone.png"),
    link: "https://mateusloubach-tesla.vercel.app/",
  },
  {
    title: "Loubach Imóveis",
    artist: "Mateus Loubach",
    image: require(".//../../public/songs/loubach-imoveis-main.png"),
    link: "https://loubachimoveis.vercel.app/",
  },
  {
    title: "tool-shortUrl",
    artist: "Mateus Loubach",
    image: require(".//../../public/songs/shortUrl.png"),
    link: "https://tool-shorturl.netlify.app/",
  },
  {
    title: "Pick My Starter",
    artist: "Mateus Loubach",
    image: require(".//../../public/songs/pickMyStarter.png"),
    link: "https://pickmystarter.netlify.app/",
  },
];
