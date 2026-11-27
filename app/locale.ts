export const locales = ["pt-br", "en"] as const;
export type Locale = (typeof locales)[number];
export const localeCookie = "portfolio-language";

export function isLocale(value: string | undefined): value is Locale {
  return value === "en" || value === "pt-br";
}

export function preferredLocale(header: string): Locale {
  const preferences = header.split(",").map((entry) => {
    const [language, ...parameters] = entry.trim().toLowerCase().split(";");
    const quality = parameters.find((parameter) =>
      parameter.trim().startsWith("q="),
    );
    return { language, weight: quality ? Number(quality.trim().slice(2)) : 1 };
  });
  preferences.sort((a, b) => b.weight - a.weight);

  for (const { language, weight } of preferences) {
    if (!(weight > 0)) continue;
    const primary = language.split("-")[0];
    if (primary === "pt") return "pt-br";
    if (primary === "en") return "en";
  }
  return "en";
}
