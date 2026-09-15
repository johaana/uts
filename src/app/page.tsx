'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { cn } from '@/lib/utils';
import { 
  COUNTRY_LABELS, 
  HOLIDAYS, 
  expandCountry, 
  isWeekendFor,
  REGIONAL_INTELLIGENCE,
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
  const [todayState, setTodayState] = useState<Date | null>(null);

  useEffect(() => {
    setIsMounted(true);
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    setTodayState(now);

    const pad2 = (n: number) => String(n).padStart(2, "0");
    const localDateStr = (d: Date) => `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`;
    
    setStartDate(localDateStr(now));
    const future = new Date(now);
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
  }, []);

  useEffect(() => {
    if (isMounted) {
      document.body.dataset.page = page;
    }
  }, [page, isMounted]);

  const todayKey = useMemo(() => {
    if (!todayState) return '';
    const pad2 = (n: number) => String(n).padStart(2, "0");
    return `${todayState.getFullYear()}-${pad2(todayState.getMonth() + 1)}-${pad2(todayState.getDate())}`;
  }, [todayState]);

  const forwardIndex = useMemo(() => {
    const idx = new Map();
    if (!todayKey) return idx;

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
    if (!dates.length || !todayState) return null;

    const WINDOW_DAYS = 45, BREADTH_MIN = 5;
    const windowEnd = new Date(todayState);
    windowEnd.setDate(windowEnd.getDate() + WINDOW_DAYS);
    const pad2 = (n: number) => String(n).padStart(2, "0");
    const windowEndKey = `${windowEnd.getFullYear()}-${pad2(windowEnd.getMonth() + 1)}-${pad2(windowEnd.getDate())}`;
    
    const inWindow = dates.filter(d => d <= windowEndKey);
    let candidate = inWindow.find(d => (forwardIndex.get(d) || []).length >= BREADTH_MIN);
    
    if (!candidate) {
      const pool = inWindow.length ? inWindow : dates;
      if (!pool.length) return null;
      candidate = pool.reduce((best, d) => (forwardIndex.get(d) || []).length > (forwardIndex.get(best) || []).length ? d : best, pool[0]);
    }

    if (!candidate) return null;

    const entries = forwardIndex.get(candidate) || [];
    const nameCounts: Record<string, number> = {};
    entries.forEach((e: any) => { nameCounts[e.name] = (nameCounts[e.name] || 0) + 1; });
    const topName = Object.keys(nameCounts).sort((a, b) => nameCounts[b] - nameCounts[a])[0];
    const diff = Math.round((new Date(candidate + 'T00:00:00').getTime() - todayState.getTime()) / 86400000);
    
    return { 
      date: candidate, 
      name: topName, 
      countryCount: new Set(entries.map((e: any) => e.code)).size, 
      daysAway: diff 
    };
  }, [forwardIndex, todayState]);

  const regionalNext = useMemo(() => {
    if (!todayKey || !todayState) return null;
    const holidays = expandCountry(country) || [];
    const match = holidays
      .filter(h => h.date >= todayKey)
      .sort((a, b) => a.date.localeCompare(b.date))[0];
    if (!match) return null;
    const diff = Math.round((new Date(match.date + 'T00:00:00').getTime() - todayState.getTime()) / 86400000);
    return { name: match.name, date: match.date, daysAway: diff };
  }, [todayState, todayKey, country]);

  const marqueeItems = useMemo(() => {
    if (!todayState) return [];
    const weekEnd = new Date(todayState);
    weekEnd.setDate(weekEnd.getDate() + 7);
    const pad2 = (n: number) => String(n).padStart(2, "0");
    const weekEndKey = `${weekEnd.getFullYear()}-${pad2(weekEnd.getMonth() + 1)}-${pad2(weekEnd.getDate())}`;
    const weekDates = Array.from(forwardIndex.keys()).filter(d => d <= weekEndKey).sort();
    const items: string[] = [];
    
    weekDates.forEach(date => {
      const byCountry = new Map();
      (forwardIndex.get(date) || []).forEach((e: any) => { 
        if (!byCountry.has(e.code)) byCountry.set(e.code, []); 
        byCountry.get(e.code).push(e.name); 
      });
      Array.from(byCountry.entries()).forEach(([code, names]) => {
        const dLabel = new Date(date + 'T00:00:00').toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
        items.push(`<span class="chip"><b>${COUNTRY_LABELS[code] || code}</b> — ${names.join(", ")} · ${dLabel}</span>`);
      });
    });
    
    const looped = items.slice(0, 14).concat(items.slice(0, 14));
    return looped.length > 0 ? looped : [];
  }, [forwardIndex, todayState]);

  const checkerData = useMemo(() => {
    if (!startDate || !endDate) return { records: [], count: 0, longest: 0, nextDays: '—', standing: 0, uniqueDates: [] };
    
    const purposeMap: Record<string, string[]> = {
      traveler: ['travel', 'business'],
      study: ['study'],
      corporate: ['business', 'workforce']
    };
    const activePurposes = purposeMap[mode] || ['travel'];

    const holidays = expandCountry(country).map(h => ({ 
      ...h, 
      d: new Date(h.date + "T00:00:00"), 
      source_label: 'Public', 
      purposes: ['travel', 'business', 'workforce'] 
    }));
    
    const regional = REGIONAL_INTELLIGENCE
      .filter(r => r.country === country)
      .map(r => ({
        date: r.date,
        name: r.name,
        source_label: r.source_name || 'Regional',
        d: r.date ? new Date(r.date + "T00:00:00") : null,
        purposes: ['travel', 'business', 'workforce']
      }));
      
    const extra = STUDENT_INTELLIGENCE_EXTRA
      .filter(x => x.country === country)
      .map(x => ({
        date: x.effective_date || x.date || '2026-01-01',
        name: x.topic || x.name,
        source_label: x.source_name || 'Official',
        d: (x.effective_date || x.date) ? new Date((x.effective_date || x.date) + "T00:00:00") : new Date("2026-01-01T00:00:00"),
        purposes: (x.topic || "").toLowerCase().includes('study') ? ['study'] : ['business', 'workforce', 'travel']
      }));

    const allSourceRecords = [...holidays, ...regional, ...extra]
      .filter(r => r.purposes && r.purposes.some((p: string) => activePurposes.includes(p)));

    const isStanding = (r: any) => r.date === '2026-01-01' && !r.name.toLowerCase().includes('new year');
    
    const standingItems = allSourceRecords.filter(isStanding);
    const datedItems = allSourceRecords.filter(r => !isStanding(r));

    const startRange = new Date(startDate + "T00:00:00");
    const endRange = new Date(endDate + "T00:00:00");
    
    const datedInRange = datedItems
      .filter(r => r.d && r.d >= startRange && r.d <= endRange)
      .sort((a, b) => a.date.localeCompare(b.date));

    const uniqueDates = [...new Set(datedInRange.map(h => h.date))].sort();
    
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

    const nextDate = datedInRange.find(d => d.date >= startDate);
    const nextDays = nextDate ? Math.round((new Date(nextDate.date + 'T00:00:00').getTime() - startRange.getTime()) / 86400000) : '—';

    return { 
      records: datedInRange, 
      count: uniqueDates.length, 
      longest, 
      nextDays, 
      standing: standingItems.length,
      uniqueDates 
    };
  }, [country, startDate, endDate, mode]);

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
            <a href="#home" className={cn(page === 'home' && "active")} onClick={(e) => { e.preventDefault(); window.location.hash = '#home'; }}>Date Intelligence</a>
            <a href="#built" className={cn(page === 'built' && "active")} onClick={(e) => { e.preventDefault(); window.location.hash = '#built'; }}>Built For</a>
            <a href="#api" className={cn(page === 'api' && "active")} onClick={(e) => { e.preventDefault(); window.location.hash = '#api'; }}>API</a>
            <a href="#insurance" className={cn(page === 'insurance' && "active")} onClick={(e) => { e.preventDefault(); window.location.hash = '#insurance'; }}>Travel Insurance</a>
            <a href="https://utsavs.com" target="_blank" rel="noopener">Stories ↗</a>
          </div>
          <a href="#api" className="navcta" onClick={(e) => { e.preventDefault(); window.location.hash = '#api'; }}>Get API Access</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="explore">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <h1 className="headline">Know before you fly. Know before you schedule.</h1>
              <p className="sub">Check a country and your actual dates — before you book, schedule, send a student, or send an employee across borders.</p>

              <aside className="hero-tracker">
                <div className="hero-tracker-head">
                  <div>
                    <span className="hero-tracker-kicker">NEXT HOLIDAY UP</span>
                    <strong>{todayState?.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }) || '...'}</strong>
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
                    <span className="next-card-name">{regionalNext?.name || "No upcoming holiday"}</span>
                    <span className="next-card-date">
                      {regionalNext ? `${new Intl.DateTimeFormat('en-GB', { day: '2-digit', month: 'short' }).format(new Date(regionalNext.date + 'T00:00:00'))} · ${regionalNext.daysAway === 0 ? 'today' : regionalNext.daysAway + ' day' + (regionalNext.daysAway === 1 ? '' : 's') + ' away'}` : ""}
                    </span>
                  </div>
                </div>
                <div className="hero-tracker-feed">
                  <div className="marquee">
                    <div className="marquee-track" dangerouslySetInnerHTML={{ __html: marqueeItems.join('') }} />
                  </div>
                </div>
              </aside>
            </div>

            <div className="checker">
              <div className="mode-toggle">
                <button className={cn(mode === 'traveler' && "active")} onClick={() => setMode('traveler')}>Travel</button>
                <button className={cn(mode === 'study' && "active")} onClick={() => setMode('study')}>Study abroad</button>
                <button className={cn(mode === 'corporate' && "active")} onClick={() => setMode('corporate')}>Business travel</button>
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
                {checkerData.records.length > 0 ? checkerData.records.map((r, i) => (
                  <div key={i} className="impact-row">
                    <span className="impact-date">{new Intl.DateTimeFormat('en-GB', { day: '2-digit', month: 'short' }).format(r.d)}</span>
                    <span className="impact-name">{r.name}</span>
                    <span className="status-pill">{r.source_label}</span>
                  </div>
                )) : (
                  <div className="checker-brief mt-4 border-none text-center">
                    {checkerData.standing === 0 ? "Your date looks operationally good." : ""}
                  </div>
                )}
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
        </section>

        <section id="built-for-intro" className="wrap">
           <div className="section-head">
              <span className="kicker">BUILT FOR</span>
              <h2 className="section-title">Choose the right day for what you are trying to do.</h2>
              <p>Travel, study, business, workforce and operations can all be affected by the same date in different ways.</p>
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
                   <span className="text-[9px] font-bold uppercase tracking-widest text-[#E8A33D]">{item.s}</span>
                   <h3 className="text-2xl font-headline font-medium mt-1 mb-4">{item.t}</h3>
                   <p className="text-sm text-[#9AA1C0] leading-relaxed">{item.d}</p>
                </div>
              ))}
           </div>
        </section>

        <section id="api-intro" className="wrap">
           <div className="section-head">
              <span className="kicker">API</span>
              <h2 className="section-title">One API. Global intelligence.</h2>
              <p className="text-[#9AA1C0]">Build calendars, scheduling tools, travel experiences and operational systems on structured holiday intelligence.</p>
           </div>
        </section>

        <section id="insurance-intro" className="wrap">
           <div className="section-head">
              <span className="kicker">TRAVEL INSURANCE</span>
              <h2 className="section-title">Plan for what you can predict. Protect against what you can't.</h2>
              <p className="text-[#9AA1C0]">Explore how travel timing and protection work together — whether planning your own journey or building workflows.</p>
           </div>
        </section>
        <section id="insurance-grid" className="wrap">
            <div className="grid md:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">
               <div className="bg-[#171D3A] p-10 space-y-6">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#E8A33D]">FOR USERS</span>
                  <h3 className="text-2xl font-headline font-medium">Personal Protection</h3>
                  <p className="text-sm text-[#9AA1C0] leading-relaxed">Whether you are a student, a business traveller or exploring for leisure, insurance provides a safety net for covered medical emergencies.</p>
               </div>
               <div className="bg-[#171D3A] p-10 space-y-6 border-l border-white/10">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#E8A33D]">PARTNERSHIPS</span>
                  <h3 className="text-2xl font-headline font-medium">Partner with Utsavs</h3>
                  <p className="text-sm text-[#9AA1C0] leading-relaxed">Interested in bringing travel protection into your own customer or employee journey? We work with providers on context-aware protection.</p>
               </div>
            </div>
        </section>

        <section id="closing-flow" className="wrap text-center">
           <h2 className="text-2xl font-headline font-medium italic mb-12">"We started out just helping people find out what's being celebrated today. Turns out a lot of systems needed to know that too."</h2>
           <div className="flex flex-wrap items-center justify-center gap-4">
              <span className="font-mono text-[13px] text-[#0F1428] bg-[#F0C888] px-5 py-2.5 rounded-full">Discovery</span>
              <span className="text-[#9AA1C0]">—</span>
              <span className="font-mono text-[13px] text-[#9AA1C0] border border-white/18 px-5 py-2.5 rounded-full">Global intelligence</span>
              <span className="text-[#9AA1C0]">—</span>
              <span className="font-mono text-[13px] text-[#9AA1C0] border border-white/18 px-5 py-2.5 rounded-full">Intelligence API</span>
           </div>
        </section>
      </main>

      <footer>
        <div className="wrap foot-row">
          <div>Utsavs · global calendar intelligence · 2026</div>
          <div className="flex gap-6">
            <a href="https://utsavs.com" target="_blank" rel="noopener">Explore Utsavs.com</a>
            <a href="#home" onClick={(e) => { e.preventDefault(); window.location.hash = '#home'; }}>Full calendar</a>
            <a href="#api" onClick={(e) => { e.preventDefault(); window.location.hash = '#api'; }}>Join API preview</a>
          </div>
        </div>
        <div className="wrap foot-disclaimer">
           Each record carries a date state and, where available, a named source. Institutional closures are sourced separately from calendar events. Lunar, Hijri and government-declared dates can change; Utsavs keeps the source and last-checked date visible so users can verify the underlying authority.
        </div>
      </footer>
    </div>
  );
}