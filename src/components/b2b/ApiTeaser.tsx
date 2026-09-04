
export function ApiTeaser() {
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
    <section id="developers" className="container mx-auto px-6">
      <div className="flex flex-col lg:flex-row gap-20 items-center">
        <div className="flex-1 order-2 lg:order-1 w-full">
            <div className="bg-white border border-[#DED9D0] p-8 md:p-12 relative">
                <div className="absolute top-0 right-0 p-4 text-[9px] font-bold uppercase tracking-widest text-[#6D6870]">Illustrative</div>
                <div className="font-data text-xs space-y-6">
                    <div className="text-[#6D6870]">
                        <span className="text-[#E94368]">GET</span> /v1/holidays?country=IN&year=2027
                    </div>
                    <pre className="text-[#17151A] leading-relaxed overflow-x-auto">
                        <code>{jsonCode}</code>
                    </pre>
                </div>
            </div>
        </div>

        <div className="flex-1 order-1 lg:order-2 space-y-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E94368]">Developers</p>
            <h2 className="text-4xl md:text-6xl font-bold">One API.<br/>Global intelligence.</h2>
            <p className="text-lg text-[#6D6870] leading-relaxed max-w-lg font-ui">
                Build calendars, scheduling tools, travel experiences and operational systems on structured holiday intelligence.
            </p>
            <button className="btn-ink h-12 px-8 text-xs font-bold uppercase tracking-[0.2em] rounded-none">
                Join API Preview
            </button>
        </div>
      </div>
    </section>
  );
}
