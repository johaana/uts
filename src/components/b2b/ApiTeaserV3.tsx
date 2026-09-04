'use client';

export function ApiTeaserV3() {
  const jsonCode = `{
  "name": "Diwali",
  "date": "2027-10-29",
  "country": "IN",
  "scope": "national",
  "categories": ["religious", "cultural"],
  "dateStatus": "CONFIRMED",
  "verificationStatus": "VERIFIED"
}`;

  return (
    <section id="api" className="container mx-auto px-6 py-24 border-t border-[#DED9D0]">
      <div className="flex flex-col lg:flex-row gap-20 items-center">
        <div className="flex-1 space-y-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#E94368] font-ui text-left">API Preview</p>
            <h2 className="text-4xl md:text-6xl font-bold font-display tracking-tight text-[#17151A] text-left">One API.<br/>Global intelligence.</h2>
            <p className="text-lg text-[#6D6870] leading-relaxed max-w-lg font-ui font-medium text-left">
                Build calendars, scheduling tools, travel experiences and operational systems on structured holiday intelligence.
            </p>
            <div className="flex gap-6">
               <button className="btn-ink h-12 px-10 text-[10px] font-bold uppercase tracking-[0.2em] rounded-sm shadow-sm transition-all active:scale-95">
                  Join Preview
               </button>
            </div>
        </div>

        <div className="flex-1 w-full max-w-xl">
            <div className="bg-white border border-[#DED9D0] p-8 md:p-12 relative rounded-sm shadow-sm overflow-hidden font-data">
                <div className="absolute top-0 right-0 p-6 text-[9px] font-bold uppercase tracking-widest text-[#6D6870] font-ui">Illustrative Response</div>
                <div className="text-xs space-y-6">
                    <div className="text-[#6D6870] flex items-center gap-2">
                        <span className="text-[#17151A] font-bold">GET</span> /v1/holidays?country=IN&year=2027
                    </div>
                    <pre className="text-[#17151A] leading-relaxed overflow-x-auto p-4 bg-[#F7F4EE]/50 rounded-sm">
                        <code>{jsonCode}</code>
                    </pre>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
