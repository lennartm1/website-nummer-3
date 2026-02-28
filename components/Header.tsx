'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { Bookmark, Menu, Search, Send, X } from 'lucide-react';

type MegaItem = {
  title: string;
  links: string[];
  cards?: { title: string; kpi: string }[];
};

const navItems: MegaItem[] = [
  { title: 'Insights', links: ['Articles', 'Playbooks', 'Webinars', 'Newsletter'] },
  {
    title: 'Services',
    links: [
      'AI Strategy',
      'GenAI Enablement',
      'ML Engineering',
      'MLOps',
      'Data Platform',
      'AI Governance'
    ]
  },
  {
    title: 'Industries',
    links: ['Public Sector', 'Retail', 'Hospitality', 'Manufacturing', 'Finance']
  },
  {
    title: 'Case Studies',
    links: [],
    cards: [
      { title: 'Smart Service Desk', kpi: '-22% handling time' },
      { title: 'Demand Signal AI', kpi: '+14% forecast accuracy' },
      { title: 'Document Copilot', kpi: '3.2x sneller verwerken' },
      { title: 'Ops Monitoring', kpi: '-31% incident volume' }
    ]
  },
  {
    title: 'Solutions',
    links: ['AI Agents', 'RAG Search', 'Document Automation', 'Forecasting', 'Computer Vision']
  },
  { title: 'Northstar Labs', links: ['Prototypes', 'Research Notes', 'Open-source', 'Events'] }
];

const utilityLinks = ['Plan een call', 'Help', 'Join Us', 'Log in'];
const searchSuggestions = [
  { label: 'Wat we doen', href: '#wat-we-doen' },
  { label: 'Uitgelichte cases', href: '#uitgelichte-cases' },
  { label: 'Onze aanpak', href: '#onze-aanpak' },
  { label: 'Northstar Labs', href: '#northstar-labs' },
  { label: 'Footer Services', href: '#footer-services' },
  { label: 'Contact', href: '#contact' }
];

function MegaMenu({ item }: { item: MegaItem }) {
  return (
    <div className="absolute inset-x-0 top-full hidden border-y border-slate-200 bg-white shadow-menu group-hover:block group-focus-within:block">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 py-8 md:grid-cols-3">
        {item.cards ? (
          item.cards.map((card) => (
            <div key={card.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-sky-700">Case Study</p>
              <h3 className="mt-2 text-base font-semibold text-slate-900">{card.title}</h3>
              <p className="mt-1 text-sm text-slate-600">Resultaat: {card.kpi}</p>
              <Link className="mt-3 inline-flex text-sm font-medium text-slate-900 hover:text-sky-700" href="#uitgelichte-cases">
                Bekijk case
              </Link>
            </div>
          ))
        ) : (
          <>
            {Array.from({ length: 3 }).map((_, columnIndex) => {
              const chunkSize = Math.ceil(item.links.length / 3) || item.links.length;
              const chunk = item.links.slice(columnIndex * chunkSize, (columnIndex + 1) * chunkSize);
              if (!chunk.length) {
                return <div key={`${item.title}-${columnIndex}`} />;
              }
              return (
                <div key={`${item.title}-${columnIndex}`}>
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">{item.title}</p>
                  <ul className="mt-4 space-y-2">
                    {chunk.map((link) => (
                      <li key={link}>
                        <Link className="text-sm text-slate-700 hover:text-sky-700" href="#">
                          {link}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
}

export default function Header() {
  const [searchValue, setSearchValue] = useState('');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const filteredSuggestions = useMemo(
    () =>
      searchSuggestions.filter((item) =>
        item.label.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
      ),
    [searchValue]
  );

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsDrawerOpen(false);
      }
    };

    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="border-b border-slate-200 bg-slate-100">
        <div className="mx-auto flex max-w-7xl justify-end gap-4 px-6 py-2 text-xs text-slate-600">
          {utilityLinks.map((link) => (
            <Link key={link} href="#contact" className="hover:text-slate-900">
              {link}
            </Link>
          ))}
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl items-center gap-4 px-6 py-4">
        <Link href="#" className="text-xl font-semibold tracking-tight text-slate-900">
          NORTHSTAR AI
        </Link>

        <nav aria-label="Hoofdnavigatie" className="relative hidden flex-1 justify-center lg:flex">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.title} className="group static">
                <button
                  aria-haspopup="true"
                  className={`rounded-full px-4 py-2 text-sm font-medium transition hover:bg-slate-100 ${
                    item.title === 'Insights' ? 'text-slate-900' : 'text-slate-600'
                  }`}
                >
                  {item.title}
                </button>
                <MegaMenu item={item} />
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto hidden items-center gap-2 lg:flex">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              aria-label="Zoek"
              className="w-56 rounded-full border border-slate-300 bg-white py-2 pl-9 pr-4 text-sm"
              onChange={(event) => setSearchValue(event.target.value)}
              placeholder="Zoek"
              value={searchValue}
            />
            {searchValue && (
              <ul className="absolute left-0 right-0 mt-2 rounded-2xl border border-slate-200 bg-white p-2 shadow-menu">
                {filteredSuggestions.slice(0, 6).map((suggestion) => (
                  <li key={suggestion.label}>
                    <Link
                      className="block rounded-xl px-3 py-2 text-sm text-slate-700 hover:bg-slate-100"
                      href={suggestion.href}
                    >
                      {suggestion.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <button aria-label="Bookmark/Save" className="rounded-full border border-slate-300 p-2 hover:bg-slate-100">
            <Bookmark className="h-4 w-4" />
          </button>
          <button aria-label="Contact" className="rounded-full border border-slate-300 p-2 hover:bg-slate-100">
            <Send className="h-4 w-4" />
          </button>
        </div>

        <button
          aria-label="Open menu"
          className="ml-auto rounded-full border border-slate-300 p-2 lg:hidden"
          onClick={() => setIsDrawerOpen(true)}
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      <div className={`fixed inset-0 z-50 lg:hidden ${isDrawerOpen ? 'block' : 'hidden'}`}>
        <div className="absolute inset-0 bg-black/30" onClick={() => setIsDrawerOpen(false)} />
        <aside className="absolute right-0 top-0 h-full w-[86%] max-w-sm bg-white p-6 shadow-2xl">
          <div className="mb-6 flex items-center justify-between">
            <p className="text-lg font-semibold">Menu</p>
            <button aria-label="Sluit menu" className="rounded-full border p-2" onClick={() => setIsDrawerOpen(false)}>
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="mb-5">
            <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="mobile-search">
              Zoek
            </label>
            <input
              id="mobile-search"
              className="w-full rounded-full border border-slate-300 px-4 py-2 text-sm"
              onChange={(event) => setSearchValue(event.target.value)}
              placeholder="Zoek"
              value={searchValue}
            />
          </div>
          <ul className="space-y-3">
            {navItems.map((item) => (
              <li key={item.title}>
                <Link className="text-base font-medium text-slate-800" href="#" onClick={() => setIsDrawerOpen(false)}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8 border-t pt-4">
            <Link className="inline-flex rounded-full bg-slate-900 px-5 py-2 text-sm font-medium text-white" href="#contact">
              Plan een call
            </Link>
          </div>
        </aside>
      </div>
    </header>
  );
}
