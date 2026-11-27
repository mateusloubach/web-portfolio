import { notFound } from "next/navigation";
import Portfolio from "../Portfolio";
import { isLocale } from "../locale";

export default async function LocalizedPortfolio({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const copyrightYear = new Intl.DateTimeFormat("en", {
    year: "numeric",
    timeZone: "America/Sao_Paulo",
  }).format();
  return <Portfolio copyrightYear={copyrightYear} />;
}
