import Link from "next/link";

export default function TermsPage() {
  return <main className="legal-page"><Link className="brand" href="/"><span className="brand-mark">ML</span><span>Mateus Loubach</span></Link><p className="eyebrow">Terms</p><h1>Terms of use</h1><p>This website presents Mateus Loubach&apos;s work and consulting services. Content is provided for general information and may change as projects, services, and availability evolve.</p><p>Project scope, deliverables, timelines, intellectual property, and payment terms are agreed separately for each engagement.</p><Link className="text-link" href="/">Back home <span>↗</span></Link></main>;
}