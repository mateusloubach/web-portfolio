import Link from "next/link";

export default function AboutPage() {
  return <main className="legal-page"><Link className="brand" href="/"><span className="brand-mark">ML</span><span>Mateus Loubach</span></Link><p className="eyebrow">Who we are</p><h1>Technology for problems that do not fit a template.</h1><p>Mateus Loubach is an independent software engineer and technology consultant helping professionals and companies clarify their digital presence, improve how work gets done, and build useful software and AI systems.</p><Link className="text-link" href="/">Back home <span>↗</span></Link></main>;
}