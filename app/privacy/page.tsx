import Link from "next/link";

export default function PrivacyPage() {
  return <main className="legal-page"><Link className="brand" href="/"><span className="brand-mark">ML</span><span>Mateus Loubach</span></Link><p className="eyebrow">Privacy</p><h1>Privacy notice</h1><p>This website is intended as a portfolio and contact surface. If you contact Mateus, the information you provide is used to respond to your request and discuss a potential engagement.</p><p>Analytics may be used to understand general website usage. No personal information is sold.</p><Link className="text-link" href="/">Back home <span>↗</span></Link></main>;
}