
export function DataHierarchy() {
  const rows = [
    { country: "India", region: "Maharashtra", type: "Public Holiday" },
    { country: "United States", region: "California", type: "State Holiday" },
    { country: "Canada", region: "Ontario", type: "Statutory Holiday" },
    { country: "Japan", region: "Kyoto", type: "Cultural Observance" },
  ];

  return (
    <section id="data" className="container mx-auto px-6">
      <div className="flex flex-col lg:flex-row gap-20 items-center">
        <div className="flex-1 space-y-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E94368]">Global Infrastructure</p>
            <h2 className="text-4xl md:text-6xl font-bold">One world.<br/>Many calendars.</h2>
            <p className="text-lg text-[#6D6870] leading-relaxed max-w-lg font-ui">
                Designed for country and regional holiday intelligence worldwide. Utsavs captures the nuances of states, provinces, and local jurisdictions.
            </p>
        </div>

        <div className="flex-1 w-full space-y-4">
            {rows.map((row, i) => (
                <div key={i} className="flex items-center gap-6 p-6 border border-[#DED9D0] bg-white group hover:border-[#E94368] transition-colors">
                    <span className="font-bold text-xs uppercase tracking-widest w-24">{row.country}</span>
                    <div className="flex-1 h-[1px] bg-[#DED9D0] relative group-hover:bg-[#E94368]/30">
                        <div className="absolute right-0 top-[-2.5px] w-1.5 h-1.5 rounded-full bg-[#DED9D0] group-hover:bg-[#E94368]"></div>
                    </div>
                    <span className="text-xs text-[#6D6870] font-semibold w-24">{row.region}</span>
                    <div className="flex-1 h-[1px] bg-[#DED9D0] relative group-hover:bg-[#E94368]/30">
                        <div className="absolute right-0 top-[-2.5px] w-1.5 h-1.5 rounded-full bg-[#DED9D0] group-hover:bg-[#E94368]"></div>
                    </div>
                    <span className="font-data text-[10px] text-[#E94368] font-bold uppercase">{row.type}</span>
                </div>
            ))}
            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#6D6870] pt-4 text-center">Conceptual Data Hierarchy</p>
        </div>
      </div>
    </section>
  );
}
