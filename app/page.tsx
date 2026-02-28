import Link from 'next/link';
import {
  Bot,
  BrainCircuit,
  ChartNoAxesCombined,
  Database,
  ShieldCheck,
  Workflow
} from 'lucide-react';
import Header from '@/components/Header';

const services = [
  {
    title: 'AI Strategy & Roadmaps',
    text: 'Van visie naar prioriteiten met duidelijke business cases.',
    icon: BrainCircuit
  },
  {
    title: 'GenAI & Agents',
    text: 'Slimme assistants en agents die teams direct versterken.',
    icon: Bot
  },
  {
    title: 'Data & ML Engineering',
    text: 'Robuuste data foundations en modellen in productie.',
    icon: Database
  },
  {
    title: 'MLOps & Monitoring',
    text: 'Continuïteit, observability en betrouwbare AI-operaties.',
    icon: Workflow
  },
  {
    title: 'Responsible AI & Governance',
    text: 'Compliance, risicobeheersing en transparante AI-principes.',
    icon: ShieldCheck
  },
  {
    title: 'Change & Enablement',
    text: 'Adoptieprogramma’s die teams eigenaarschap geven.',
    icon: ChartNoAxesCombined
  }
];

const cases = [
  { title: 'Customer Support Copilot', sector: 'Retail', kpi: '-22% handling time' },
  { title: 'Predictive Maintenance AI', sector: 'Manufacturing', kpi: '-18% downtime' },
  { title: 'Claims Automation', sector: 'Finance', kpi: '2.7x snellere doorlooptijd' },
  { title: 'Citizen Service Assistant', sector: 'Public Sector', kpi: '+31 NPS punten' }
];

export default function Home() {
  return (
    <main>
      <Header />

      <section className="hero-gradient starfield relative isolate overflow-hidden">
        <div className="mx-auto flex min-h-[78vh] max-w-7xl items-end px-6 pb-20 pt-24 text-white md:pb-24">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm uppercase tracking-[0.25em] text-sky-200">AI Consultancy</p>
            <h1 className="mt-4 text-5xl font-semibold tracking-tight md:text-7xl lg:text-8xl">NORTHSTAR AI</h1>
            <p className="mx-auto mt-6 max-w-2xl text-base text-slate-200 md:text-xl">
              Van strategie tot werkende AI-agents. Snel, veilig en meetbaar.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
                href="#contact"
              >
                Plan een call
              </Link>
              <Link
                className="rounded-full border border-white/50 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                href="#uitgelichte-cases"
              >
                Bekijk cases
              </Link>
            </div>
            <ul className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-slate-200">
              <li>EU AI Act-ready</li>
              <li>Security-first</li>
              <li>ROI in 6–12 weken</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="wat-we-doen" className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">Wat we doen</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article key={service.title} className="rounded-2xl border border-slate-200 p-6">
                <Icon className="h-5 w-5 text-sky-600" />
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{service.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{service.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section id="uitgelichte-cases" className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">Uitgelichte cases</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {cases.map((item) => (
              <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6">
                <p className="text-xs uppercase tracking-[0.15em] text-slate-500">{item.sector}</p>
                <h3 className="mt-3 text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">Resultaat: {item.kpi}</p>
                <Link className="mt-4 inline-flex text-sm font-medium text-slate-900 hover:text-sky-700" href="#">
                  Lees case
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="onze-aanpak" className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">Onze aanpak</h2>
        <ol className="mt-10 grid gap-5 md:grid-cols-4">
          {['Discover', 'Design', 'Build', 'Scale'].map((step, index) => (
            <li key={step} className="rounded-2xl border border-slate-200 p-6">
              <p className="text-sm font-medium text-slate-500">0{index + 1}</p>
              <p className="mt-2 text-xl font-semibold text-slate-900">{step}</p>
            </li>
          ))}
        </ol>
      </section>

      <section id="northstar-labs" className="bg-slate-900 py-16 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.15em] text-sky-300">Northstar Labs</p>
            <h2 className="mt-2 text-3xl font-semibold">Experimenten die productie versnellen.</h2>
          </div>
          <Link className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100" href="#">
            Bekijk prototypes
          </Link>
        </div>
      </section>

      <footer id="contact" className="border-t border-slate-200 bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div id="footer-services">
              <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-900">Services</h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                <li>AI Strategy</li>
                <li>GenAI Enablement</li>
                <li>ML Engineering</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-900">Solutions</h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                <li>AI Agents</li>
                <li>RAG Search</li>
                <li>Document Automation</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-900">Company</h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                <li>Over ons</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-900">Legal</h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                <li>Privacy</li>
                <li>Cookies</li>
                <li>Terms</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 pt-6 text-sm text-slate-500">
            <p>© {new Date().getFullYear()} Northstar AI. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="#">LinkedIn</Link>
              <Link href="#">GitHub</Link>
              <Link href="#">X</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
