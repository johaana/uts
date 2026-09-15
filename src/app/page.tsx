'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { cn } from '@/lib/utils';
import { 
  COUNTRY_LABELS, 
  HOLIDAYS, 
  expandCountry, 
  isWeekendFor, 
  STUDENT_RISK_DATA,
  STUDENT_INTELLIGENCE_EXTRA,
  CORPORATE_INTELLIGENCE
} from '@/lib/calendar-intelligence';

export default function HomePage() {
  const [isMounted, setIsMounted] = useState(false);
  const [page, setPage] = useState('home');
  const [mode, setMode] = useState('traveler');
  const [country, setCountry] = useState('IN');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const TODAY = useMemo(() => {
    const d = new Date();
    d.setHours(0,0,0,0);
    return d;
  }, []);

  const todayKey = useMemo(() => {
    const pad2 = (n: number) => String(n).padStart(2, "0");
    return `${TODAY.getFullYear()}-${pad2(TODAY.getMonth()+1)}-${pad2(TODAY.getDate())}`;
  }, [TODAY]);

  useEffect(() => {
    setIsMounted(true);
    const pad2 = (n: number) => String(n).padStart(2, "0");
    const localDateStr = (d: Date) => `${d.getFullYear()}-${pad2(d.getMonth()+1)}-${pad2(d.getDate())}`;
    setStartDate(localDateStr(TODAY));
    const future = new Date(TODAY);
    future.setDate(future.getDate() + 30);
    setEndDate(localDateStr(future));

    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (['home', 'built', 'api', 'insurance'].includes(hash)) {
        setPage(hash);
      } else {
        setPage('home');
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [TODAY]);

  useEffect(() => {
    if (isMounted) {
      document.body.dataset.page = page;
    }
  }, [page, isMounted]);

  const forwardIndex = useMemo(() => {
    const idx = new Map();
    Object.keys(HOLIDAYS).forEach(code => {
      const holidays = expandCountry(code) || [];
      holidays.forEach(h => {
        if (h.date < todayKey) return;
        if (!idx.has(h.date)) idx.set(h.date, []);
        idx.get(h.date).push({ code, name: h.name, type: h.type });
      });
    });
    return idx;
  }, [todayKey]);

  const globalNext = useMemo(() => {
    const dates = Array.from(forwardIndex.keys()).sort();
    if (!dates.length) return null;
    const WINDOW_DAYS = 45, BREADTH_MIN = 5;
    const windowEnd = new Date(TODAY); windowEnd.setDate(windowEnd.getDate() + WINDOW_DAYS);
    const pad2 = (n: number) => String(n).padStart(2, "0");
    const windowEndKey = `${windowEnd.getFullYear()}-${pad2(windowEnd.getMonth()+1)}-${pad2(windowEnd.getDate())}`;
    
    const inWindow = dates.filter(d => d <= windowEndKey);
    let candidate = inWindow.find(d => (forwardIndex.get(d) || []).length >= BREADTH_MIN);
    if (!candidate) {
      const pool = inWindow.length ? inWindow : dates;
      candidate = pool.reduce((best, d) => (forwardIndex.get(d) || []).length > (forwardIndex.get(best) || []).length ? d : best, pool[0]);
    }
    const entries = forwardIndex.get(candidate) || [];
    const nameCounts: Record<string, number> = {};
    entries.forEach((e: any) => { nameCounts[e.name] = (nameCounts[e.name] || 0) + 1; });
    const topName = Object.keys(nameCounts).sort((a, b) => nameCounts[b] - nameCounts[a])[0];
    const diff = Math.round((new Date(candidate + 'T00:00:00').getTime() - TODAY.getTime()) / 86400000);
    return { date: candidate, name: topName, countryCount: new Set(entries.map((e: any) => e.code)).size, daysAway: diff };
  }, [forwardIndex, TODAY]);

  const regionalNext = useMemo(() => {
    const holidays = expandCountry(country) || [];
    const match = holidays
      .filter(h => h.date >= todayKey)
      .sort((a, b) => a.date.localeCompare(b.date))[0];
    if (!match) return null;
    const diff = Math.round((new Date(match.date + 'T00:00:00').getTime() - TODAY.getTime()) / 86400000);
    return { name: match.name, date: match.date, daysAway: diff };
  }, [TODAY, todayKey, country]);

  const marqueeItems = useMemo(() => {
    const weekEnd = new Date(TODAY); weekEnd.setDate(weekEnd.getDate() + 7);
    const pad2 = (n: number) => String(n).padStart(2, "0");
    const weekEndKey = `${weekEnd.getFullYear()}-${pad2(weekEnd.getMonth()+1)}-${pad2(weekEnd.getDate())}`;
    const weekDates = Array.from(forwardIndex.keys()).filter(d => d <= weekEndKey).sort();
    const items: string[] = [];
    weekDates.forEach(date => {
      const byCountry = new Map();
      (forwardIndex.get(date) || []).forEach((e: any) => { 
        if (!byCountry.has(e.code)) byCountry.set(e.code, []); 
        byCountry.get(e.code).push(e.name); 
      });
      Array.from(byCountry.entries()).forEach(([code, names]) => {
        const dLabel = new Date(date + 'T00:00:00').toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }).replace(',', '');
        items.push(`<span class="chip"><b>${COUNTRY_LABELS[code] || code}</b> — ${names.join(", ")} · ${dLabel}</span>`);
      });
    });
    // Doubled loop for seamless CSS animation
    const looped = items.slice(0, 14).concat(items.slice(0, 14));
    return looped.length > 0 ? looped : [];
  }, [forwardIndex, TODAY]);

  const checkerData = useMemo(() => {
    if (!startDate || !endDate) return { records: [], uniqueDates: [], count: 0, longest: 0, nextDays: '—', standing: 0 };
    const start = new Date(startDate + "T00:00:00");
    const end = new Date(endDate + "T00:00:00");
    
    const holidays = expandCountry(country) || [];
    const inRange = holidays
      .map(h => ({...h, d: new Date(h.date + "T00:00:00")}))
      .filter(h => h.d >= start && h.d <= end);
    
    const uniqueDates = [...new Set(inRange.map(h => h.date))].sort();
    
    let longest = 0, currentRun = 0, prev = null;
    uniqueDates.forEach(d => {
      const cur = new Date(d + 'T00:00:00');
      if (prev && (cur.getTime() - prev.getTime()) / 86400000 <= 2) {
        currentRun++;
      } else {
        currentRun = 1;
      }
      longest = Math.max(longest, currentRun);
      prev = cur;
    });

    const nextDate = uniqueDates.find(d => d >= todayKey);
    const nextDays = nextDate ? Math.round((new Date(nextDate + 'T00:00:00').getTime() - TODAY.getTime()) / 86400000) : '—';

    let standing = 0;
    if (mode === 'study') {
      standing = [
        ...STUDENT_RISK_DATA.filter(x => x.country === country),
        ...STUDENT_INTELLIGENCE_EXTRA.filter(x => x.country === country)
      ].length;
    } else if (mode === 'corporate') {
      standing = CORPORATE_INTELLIGENCE.filter(x => x.country === country).length;
    }

    return { records: inRange, uniqueDates, count: uniqueDates.length, longest, nextDays, standing };
  }, [country, startDate, endDate, todayKey, mode]);

  const briefText = useMemo(() => {
    const { uniqueDates, standing } = checkerData;
    if (uniqueDates.length === 0 && standing === 0) return "";
    
    let text = "";
    if (uniqueDates.length === 1) {
      const d = new Date(uniqueDates[0] + "T00:00:00").toLocaleDateString('en-GB', { day: '2-digit', month: 'short' });
      text = `${d} is the only recorded date to keep in mind in your selected period. The details below explain what is happening and any related local or institutional information.`;
    } else if (uniqueDates.length > 1) {
      text = `${uniqueDates.length} dates in your selected period are worth keeping in mind. The details below show what is happening on each date and any related local or institutional information.`;
    }
    
    if (standing > 0) {
      text += (text ? " " : "") + `We have also included ${standing === 1 ? "one piece" : `${standing} pieces`} of general guidance that is not tied to a particular day.`;
    }
    return text;
  }, [checkerData]);

  if (!isMounted) return null;

  return (
    <div className="bg-[#0F1428] text-[#F4F1E8] min-h-screen font-sans">
      <header>
        <nav className="wrap">
          <div className="logo">Utsavs <span>GLOBAL CALENDAR INTELLIGENCE</span></div>
          <div className="navlinks">
            <a href="#home" className={cn(page === 'home' && "active")}>Date Intelligence</a>
            <a href="#built" className={cn(page === 'built' && "active")}>Built For</a>
            <a href="#api" className={cn(page === 'api' && "active")}>API</a>
            <a href="#insurance" className={cn(page === 'insurance' && "active")}>Travel Insurance</a>
            <a href="https://utsavs.com" target="_blank" rel="noopener">Stories ↗</a>
          </div>
          <a href="#api" className="navcta">Get API Access</a>
        </nav>
      </header>

      <main>
        {/* Date Intelligence Page */}
        <section className="hero" id="explore">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <h1 className="headline">Know before you fly. Know before you schedule.</h1>
              <p className="sub">Check a country and your actual dates — before you book, schedule, send a student, or send an employee across borders.</p>

              <aside className="hero-tracker" aria-label="Next holiday tracker">
                <div className="hero-tracker-head">
                  <div>
                    <span className="hero-tracker-kicker">NEXT HOLIDAY UP</span>
                    <strong>{TODAY.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }).replace(',', '')}</strong>
                  </div>
                  <span className="hero-tracker-live"><i></i> Live calendar view</span>
                </div>
                <div className="hero-tracker-next-grid">
                  <div className="hero-tracker-next-card">
                    <span className="next-card-kicker">Global</span>
                    <span className="next-card-name">{globalNext?.name || "—"}</span>
                    <span className="next-card-date">
                      {globalNext ? `${new Intl.DateTimeFormat('en-GB', { day: '2-digit', month: 'short' }).format(new Date(globalNext.date + 'T00:00:00'))} · ${globalNext.countryCount} countries · ${globalNext.daysAway === 0 ? 'today' : globalNext.daysAway + ' day' + (globalNext.daysAway === 1 ? '' : 's') + ' away'}` : "—"}
                    </span>
                  </div>
                  <div className="hero-tracker-next-card">
                    <span className="next-card-kicker">Regional · {COUNTRY_LABELS[country] || country}</span>
                    <span className="next-card-name">{regionalNext?.name || "No upcoming holiday listed"}</span>
                    <span className="next-card-date">
                      {regionalNext ? `${new Intl.DateTimeFormat('en-GB', { day: '2-digit', month: 'short' }).format(new Date(regionalNext.date + 'T00:00:00'))} · ${regionalNext.daysAway === 0 ? 'today' : regionalNext.daysAway + ' day' + (regionalNext.daysAway === 1 ? '' : 's') + ' away'}` : `for ${COUNTRY_LABELS[country] || country}`}
                    </span>
                  </div>
                </div>
                <div className="hero-tracker-feed">
                  <div className="marquee">
                    <div className="marquee-track" dangerouslySetInnerHTML={{ __html: marqueeItems.join('') }} />
                  </div>
                </div>
                <a className="hero-tracker-link" href="#specialized-intelligence">See what this date means <span>→</span></a>
              </aside>

              <div className="hero-trust">
                <span><b>101</b> countries tracked</span>
                <span className="sep">·</span>
                <span>live feeds where available</span>
                <span className="sep">·</span>
                <span>evidence shown where available</span>
              </div>
            </div>

            <div className="checker" id="date-intelligence">
              <div className="checker-top">
                <h3>Trip impact checker</h3>
              </div>
              <div className="mode-toggle" role="tablist">
                <button type="button" className={cn(mode === 'traveler' && "active")} onClick={() => setMode('traveler')}>Travel</button>
                <button type="button" className={cn(mode === 'study' && "active")} onClick={() => setMode('study')}>Study abroad</button>
                <button type="button" className={cn(mode === 'corporate' && "active")} onClick={() => setMode('corporate')}>Business travel</button>
              </div>
              
              <div className="checker-row">
                <div className="checker-field">
                  <label>Destination / jurisdiction</label>
                  <select value={country} onChange={e => setCountry(e.target.value)}>
                    {Object.entries(COUNTRY_LABELS).map(([code, name]) => (
                      <option key={code} value={code}>{name}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="checker-row">
                <div className="checker-field">
                  <label>From</label>
                  <input type="date" value={startDate} onChange={e => setStartDate(e.target.value)} />
                </div>
                <div className="checker-field">
                  <label>To</label>
                  <input type="date" value={endDate} onChange={e => setEndDate(e.target.value)} />
                </div>
              </div>

              <div className="checker-summary">
                <div><b className="font-headline">{checkerData.count}</b><span>{checkerData.count === 1 ? 'date to keep in mind' : 'dates to keep in mind'}</span></div>
                <div><b className="font-headline">{checkerData.longest}</b><span>{checkerData.longest === 1 ? 'day in longest run' : 'days in longest run'}</span></div>
                <div><b className="font-headline">{checkerData.nextDays}</b><span>{checkerData.nextDays === 1 ? 'day to next one' : 'days to next one'}</span></div>
              </div>
              
              <div className={cn("checker-brief", briefText === "" && "hidden")}>
                <span className="brief-label">IN SHORT</span>{briefText}
              </div>

              <div className="checker-list">
                {checkerData.records.map((r, i) => (
                  <div key={i} className="impact-row">
                    <span className="impact-date">{new Intl.DateTimeFormat('en-GB', { day: '2-digit', month: 'short' }).format(new Date(r.date + "T00:00:00"))}</span>
                    <span className="impact-name">{r.name}</span>
                    <span className="status-pill high">High</span>
                  </div>
                ))}
              </div>

              <div className="checker-note">
                <b>For your plans.</b> {checkerData.count} dates in this period are worth keeping in mind. Check the named source if you need a particular office or institution to be open.
              </div>
            </div>
          </div>
        </section>

        <section id="world-today" className="wrap">
           <div className="section-head">
              <span className="kicker">WORLD TODAY</span>
              <h2 className="section-title">Dates are not just dates.</h2>
              <p>Around the world, a date can mean a public holiday, a regional observance, an institutional closure, a working-day difference or something entirely specific to your trip.</p>
           </div>
           <div className="grid md:grid-cols-2 gap-8">
              <div className="checker p-8 bg-[#1E2650]">
                 <h3 className="text-xl font-bold mb-4">Understanding today's calendar</h3>
                 <p className="text-sm text-muted mb-6">See the dates and places that may matter today across our global index.</p>
                 <a href="#specialized-intelligence" className="navcta inline-block">Explore today</a>
              </div>
              <div className="checker p-8 border-line">
                 <h3 className="text-xl font-bold mb-4">Coming up next</h3>
                 <p className="text-sm text-muted mb-6">{globalNext?.name} · {globalNext ? new Date(globalNext.date + 'T00:00:00').toLocaleDateString('en-GB', { day: 'numeric', month: 'long' }).replace(',', '') : '—'} · {globalNext?.countryCount} countries</p>
                 <a href="#specialized-intelligence" className="text-sm font-bold text-gold-soft hover:underline">Check the date →</a>
              </div>
           </div>
        </section>

        <section id="how-it-works" className="wrap">
           <div className="section-head">
              <span className="kicker">HOW IT WORKS</span>
              <h2 className="section-title">See what your dates may mean.</h2>
              <p>Utsavs brings relevant calendars and institutional information together around the date you actually care about.</p>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {[
                { n: "01", t: "Travel", d: "Understand what may be happening when you arrive, from public dates to travel info.", a: "Choosing when to go" },
                { n: "02", t: "Business", d: "See dates that may affect meetings, operations, working days and activity.", a: "Choosing when to schedule" },
                { n: "03", t: "Study", d: "Put institutional calendars and arrival timing around your target dates.", a: "Choosing when to arrive" },
                { n: "04", t: "Operations", d: "Go deeper when the job requires it — markets, banking, and logistics.", a: "Choosing when to operate" }
              ].map(item => (
                <div key={item.n} className="space-y-4">
                   <span className="text-3xl font-headline font-bold text-line-strong">{item.n}</span>
                   <h3 className="text-xl font-bold">{item.t}</h3>
                   <p className="text-sm text-muted leading-relaxed">{item.d}</p>
                   <p className="text-[10px] font-bold uppercase tracking-widest text-gold-soft">{item.a} →</p>
                </div>
              ))}
           </div>
        </section>

        <section id="specialized-intelligence" className="wrap">
           <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 items-center">
              <div className="space-y-6">
                 <span className="kicker">SPECIALIZED INTELLIGENCE</span>
                 <h2 className="section-title">One calendar underneath. <br/>Deeper calendars when required.</h2>
                 <p className="text-muted">The same date can affect a traveller, market, bank or operation differently. Utsavs keeps those layers distinct.</p>
                 <a href="#api" className="text-sm font-bold text-gold-soft hover:underline">Get API access →</a>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-line-strong border border-line-strong rounded-xl overflow-hidden">
                 {[
                   { n: "01", t: "Regional calendars", s: "Country, state, province and jurisdiction" },
                   { n: "02", t: "Institutions", s: "Universities, missions and other institutions" },
                   { n: "03", t: "Markets & banking", s: "Trading, settlement, payments and working days" },
                   { n: "04", t: "Trade & logistics", s: "Customs, ports and documented operational timing" }
                 ].map(item => (
                   <div key={item.n} className="bg-[#171D3A] p-8 space-y-2">
                     <span className="text-[10px] font-bold text-muted-dim">{item.n}</span>
                     <h4 className="font-bold text-lg">{item.t}</h4>
                     <p className="text-xs text-muted">{item.s}</p>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* Hidden Section: Built For */}
        <section id="built-for-intro" className="wrap">
           <div className="section-head">
              <span className="kicker">BUILT FOR</span>
              <h1 className="headline">Choose the right day for what you are trying to do.</h1>
              <p>Travel, study, business, workforce and operations can all be affected by the same date in different ways. Utsavs helps you see the practical consequence.</p>
           </div>
        </section>
        <section id="built-for" className="wrap">
           <div className="grid md:grid-cols-2 gap-8">
              {[
                { t: "Travel", s: "Choosing when to go", d: "Understand what may be happening when you arrive, from public and regional dates to relevant travel information and local observances." },
                { t: "Corporate / HR", s: "Choosing when to operate", d: "Check destination holidays before approving international travel or onboarding. Know exactly which state or city holidays apply to your team." },
                { t: "Business & Finance", s: "Choosing when to schedule", d: "Don't get caught out by market closures or banking holidays. Compare origin and destination calendars before scheduling market-sensitive deadlines." },
                { t: "Study Abroad", s: "Choosing when to arrive", d: "Put institutional calendars and arrival timing around your dates. Align visa interviews and orientation sessions with verified host-country info." }
              ].map((item, i) => (
                <div key={i} className="checker p-8 bg-[#1E2650]">
                   <span className="text-[9px] font-bold uppercase tracking-widest text-gold-soft">{item.s}</span>
                   <h3 className="text-2xl font-headline font-medium mt-1 mb-4">{item.t}</h3>
                   <p className="text-sm text-muted leading-relaxed">{item.d}</p>
                </div>
              ))}
           </div>
        </section>

        {/* Hidden Section: API */}
        <section id="api-intro" className="wrap">
           <div className="section-head">
              <span className="kicker">API</span>
              <h1 className="headline">Put date intelligence into the tools you already use.</h1>
              <p>Use Utsavs programmatically when your product, workflow or operation needs calendar intelligence at scale.</p>
           </div>
        </section>
        <section id="intelligence-api" className="wrap">
           <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                 <h2 className="text-3xl font-headline font-bold">One API. Global intelligence.</h2>
                 <p className="text-muted">Build calendars, scheduling tools, travel experiences and operational systems on structured holiday intelligence.</p>
                 <div className="flex gap-4">
                    <a href="#api" className="navcta">Join API Preview</a>
                    <a href="mailto:api@utsavs.com" className="text-sm font-bold text-[#F4F1E8] border border-line-strong px-5 py-2.5 rounded-full">Contact Support</a>
                 </div>
              </div>
              <div className="bg-[#0F1428] p-8 rounded-2xl border border-line-strong font-mono text-xs">
                 <p className="text-[#4FD1C5] mb-2">GET /v1/holidays?country=IN&year=2026</p>
                 <pre className="text-[#6E7495] leading-relaxed">
{`{
  "name": "Diwali",
  "date": "2026-11-08",
  "country": "IN",
  "scope": "trading",
  "status": "CLOSED",
  "confidence": "HIGH",
  "source": "Nasdaq Trader"
}`}
                 </pre>
              </div>
           </div>
        </section>

        {/* Hidden Section: Insurance */}
        <section id="insurance-intro" className="wrap">
           <div className="section-head">
              <span className="kicker">TRAVEL INSURANCE</span>
              <h1 className="headline">Plan for what you can predict. Protect against what you can't.</h1>
              <p>Utsavs helps you plan around dates, calendars and other things you can anticipate. Protection can help with the unexpected.</p>
           </div>
        </section>
        <section id="insurance-grid" className="wrap">
            <div className="grid md:grid-cols-2 gap-px bg-line-strong border border-line-strong rounded-2xl overflow-hidden">
               <div className="bg-[#171D3A] p-10 space-y-6">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gold-soft">FOR USERS</span>
                  <h3 className="text-2xl font-headline font-medium">Personal Protection</h3>
                  <p className="text-sm text-muted leading-relaxed">Whether you are a student, a business traveller or exploring for leisure, insurance provides a safety net for covered medical emergencies and travel disruptions.</p>
               </div>
               <div className="bg-[#171D3A] p-10 space-y-6 border-l border-line-strong">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gold-soft">PARTNERSHIPS</span>
                  <h3 className="text-2xl font-headline font-medium">Partner with Utsavs</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">Interested in bringing travel protection into your own customer or employee journey? We work with providers and institutions on context-aware protection.</p>
               </div>
            </div>
        </section>
        <section id="insurance-disclosure" className="wrap">
           <div className="p-10 rounded-3xl border-2 border-dashed border-line-strong bg-[#1E2650]/30">
              <h2 className="font-headline text-2xl font-medium mb-6">Important Disclosure</h2>
              <p className="text-sm text-muted leading-relaxed">Insurance is the subject matter of solicitation. Coverage, eligibility, benefits, exclusions and terms are determined by the applicable policy and insurer. Please review the policy wording and applicable requirements before purchase.</p>
           </div>
        </section>

        <section id="closing-flow" className="wrap">
           <h2 className="text-2xl font-headline font-medium italic text-center mb-12">"We started out just helping people find out what's being celebrated today. Turns out a lot of systems needed to know that too."</h2>
           <div className="flex flex-wrap items-center justify-center gap-4">
              <span className="font-mono text-[13px] text-[#0F1428] bg-[#F0C888] px-5 py-2.5 rounded-full">Discovery</span>
              <span className="text-muted">—</span>
              <span className="font-mono text-[13px] text-[#9AA1C0] border border-white/18 px-5 py-2.5 rounded-full">Global intelligence</span>
              <span className="text-muted">—</span>
              <span className="font-mono text-[13px] text-[#9AA1C0] border border-white/18 px-5 py-2.5 rounded-full">Intelligence API</span>
           </div>
        </section>
      </main>

      <footer>
        <div className="wrap foot-row">
          <div>Utsavs · global calendar intelligence · 2026</div>
          <div className="flex gap-6">
            <a href="https://utsavs.com" target="_blank" rel="noopener">Explore Utsavs.com</a>
            <a href="#home">Full calendar</a>
            <a href="#api">Join API preview</a>
          </div>
        </div>
        <div className="wrap foot-disclaimer">
           Each record carries a date state and, where available, a named source. Institutional closures are sourced separately from calendar events. Lunar, Hijri and government-declared dates can change; Utsavs keeps the source and last-checked date visible so users can verify the underlying authority.
        </div>
      </footer>
    </div>
  );
}
