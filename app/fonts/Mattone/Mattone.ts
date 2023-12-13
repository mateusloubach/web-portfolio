import localFont from "@next/font/local";

export const Mattone = localFont({
  src: [
    {
      path: "./Mattone-Black.woff2",
      weight: "900",
      style: "black",
    },
    {
      path: "./Mattone-Bold.woff2",
      weight: "700",
      style: "bold",
    },
    {
      path: "./Mattone-Regular.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});
