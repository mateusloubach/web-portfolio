"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const services = [
  {
    number: "01",
    title: "Positioning websites",
    text: "Clear, credible digital homes that help the right people understand why your work matters.",
  },
  {
    number: "02",
    title: "Business systems",
    text: "Management software that replaces scattered work with one dependable operating layer.",
  },
  {
    number: "03",
    title: "Custom software",
    text: "Focused products and internal tools built around the way your team actually works.",
  },
  {
    number: "04",
    title: "AI agents",
    text: "Practical agents that take repetitive work off your team and keep decisions moving.",
  },
  {
    number: "05",
    title: "Agentic platforms",
    text: "Connected systems where people, models, tools, and business rules work together.",
  },
];

const projects = [
  {
    title: "CloudAI",
    type: "Agentic platform",
    description: "A decentralized environment where people and AI agents collaborate across services.",
    image: "/projects/cloudAI.png",
    href: "https://cloudaionbase.eth.limo/",
    tag: "Vite · React · TypeScript",
  },
  {
    title: "SaaSLanding",
    type: "Product experience",
    description: "A focused product experience designed to turn a complex idea into a clear next step.",
    image: "/projects/frame11.png",
    href: "https://saas-landing-alpha.vercel.app/",
    tag: "Next.js · TypeScript · Tailwind",
  },
  {
    title: "AnxietyX",
    type: "Digital product",
    description: "A calm, accessible product direction for a sensitive problem and the people navigating it.",
    image: "/projects/anxietyx.png",
    href: "https://anxiety-x.vercel.app/",
    tag: "Next.js · Appwrite",
  },
];

const process = [
  ["01", "Discover", "We map the problem, the people affected by it, and the outcome that matters."],
  ["02", "Define", "We turn ambiguity into a clear direction, scope, and system that can be built."],
  ["03", "Develop", "We design and ship the smallest useful version, with quality built in from day one."],
  ["04", "Deliver", "We launch, learn from reality, and keep improving what the business depends on."],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>
      <header className="site-header">
        <Link className="brand" href="#top" aria-label="Mateus Loubach home">
          <span className="brand-mark">ML</span>
          <span>Mateus Loubach</span>
        </Link>
        <button
          className="menu-button"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="site-navigation"
          onClick={() => setMenuOpen((value) => !value)}
        >
          <span>{menuOpen ? "Close" : "Menu"}</span>
          <span className="menu-icon" aria-hidden="true"><i /><i /></span>
        </button>
        <nav id="site-navigation" className={`site-nav ${menuOpen ? "is-open" : ""}`} aria-label="Primary navigation">
          <Link href="#services" onClick={() => setMenuOpen(false)}>Services</Link>
          <Link href="#work" onClick={() => setMenuOpen(false)}>Work</Link>
          <Link href="#about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link className="nav-contact" href="#contact" onClick={() => setMenuOpen(false)}>Let&apos;s talk <span>↗</span></Link>
        </nav>
      </header>

      <section id="top" className="hero section-shell">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-dot" /> Independent software engineer · Belo Horizonte, Brazil</p>
          <h1>Make your work easier to <em>find, trust,</em> and run.</h1>
          <p className="hero-lede">I help professionals and companies turn unclear digital problems into websites, software, systems, and AI agents that move the business forward.</p>
          <div className="hero-actions">
            <Link className="button button-primary" href="#contact">Start a conversation <span>↗</span></Link>
            <Link className="text-link" href="#work">Explore selected work <span>↓</span></Link>
          </div>
        </div>
        <div className="hero-art" aria-label="Abstract systems architecture artwork" role="img">
          <Image src="/hero-kieai.jpg" alt="Abstract layered systems architecture with connected points of light" fill priority sizes="(max-width: 900px) 100vw, 56vw" />
          <div className="hero-art-caption"><span>Systems, interfaces, and intelligence</span><span>01 / 01</span></div>
        </div>
        <div className="hero-foot"><span>Scroll to explore</span><span className="scroll-line" /></div>
      </section>

      <section className="proof-band" aria-label="Areas of practice">
        <div className="section-shell proof-inner"><span>From first question to shipped system</span><div className="proof-list"><span>Strategy</span><i>·</i><span>Design</span><i>·</i><span>Engineering</span><i>·</i><span>AI</span></div></div>
      </section>

      <section id="services" className="section-shell section-block">
        <div className="section-heading"><p className="eyebrow">What I solve</p><h2>Technology should make your name <em>stronger.</em></h2><p className="section-intro">A good solution does more than look finished. It gives your audience confidence, gives your team leverage, and gives the business room to grow.</p></div>
        <div className="service-list">{services.map((service) => <article className="service-row" key={service.number}><span className="service-number">{service.number}</span><h3>{service.title}</h3><p>{service.text}</p><span className="service-arrow">↗</span></article>)}</div>
      </section>

      <section id="work" className="work-section section-block">
        <div className="section-shell"><div className="section-heading work-heading"><div><p className="eyebrow">Selected work</p><h2>Proof in the <em>work.</em></h2></div><p className="section-intro">A selection of products, platforms, and experiments built to make difficult ideas easier to use.</p></div><div className="project-grid">{projects.map((project, index) => <a className={`project-card project-${index + 1}`} href={project.href} target="_blank" rel="noreferrer" key={project.title}><div className="project-image"><Image src={project.image} alt={`${project.title} project preview`} fill sizes="(max-width: 760px) 100vw, 50vw" /></div><div className="project-meta"><div><p className="project-type">{project.type}</p><h3>{project.title}</h3><p>{project.description}</p></div><span className="project-link">↗</span></div><span className="project-tag">{project.tag}</span></a>)}</div></div>
      </section>

      <section className="statement-section section-block"><div className="section-shell statement-grid"><p className="eyebrow">The approach</p><h2>Good technology starts with a <em>clear problem.</em></h2><p>Not every business needs more software. Sometimes it needs a sharper story, a simpler workflow, or one reliable system where there used to be five disconnected ones.</p><Link className="text-link" href="#contact">Let&apos;s find the real problem <span>↗</span></Link></div></section>

      <section className="process-section section-block"><div className="section-shell"><div className="section-heading"><p className="eyebrow">How we work</p><h2>Discover. Define. Develop. <em>Deliver.</em></h2></div><div className="process-grid">{process.map(([number, title, text]) => <article className="process-card" key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

      <section id="about" className="about-section section-block"><div className="section-shell about-grid"><div><p className="eyebrow">Who I am</p><h2>A software engineer for problems that don&apos;t fit in a <em>template.</em></h2></div><div className="about-copy"><p>I&apos;m Mateus Loubach, a software engineer and product-minded consultant. I work with professionals and companies that know they need to evolve digitally, but need help finding the right place to start.</p><p>My work sits between strategy, design, engineering, and AI. The goal is simple: create technology that makes your expertise easier to understand and your operation easier to run.</p><div className="about-links"><a href="https://github.com/mateusloubach" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/mateuscloubach/" target="_blank" rel="noreferrer">LinkedIn ↗</a></div></div></div></section>

      <section id="contact" className="contact-section section-block"><div className="section-shell contact-card"><p className="eyebrow">Have a difficult problem?</p><h2>Let&apos;s make a useful <em>first move.</em></h2><p>Tell me what is not working, what you are trying to build, or what your audience is not understanding yet.</p><a className="button button-light" href="mailto:hello@mateusloubach.com">Start a conversation <span>↗</span></a></div></section>

      <footer className="site-footer section-shell"><div className="footer-top"><Link className="brand" href="#top"><span className="brand-mark">ML</span><span>Mateus Loubach</span></Link><p>Software engineering · digital systems · AI</p></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Mateus Loubach</span><div><Link href="/about">Who we are</Link><Link href="/terms">Terms</Link><Link href="/privacy">Privacy</Link></div><span>Built with intention in Brazil</span></div></footer>
    </main>
  );
}