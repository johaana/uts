
export function Comparison() {
  return (
    <section className="container mx-auto px-6">
      <div className="max-w-5xl mx-auto border-y border-[#DED9D0] py-24 flex flex-col md:flex-row gap-20">
        <div className="flex-1 space-y-10">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">From dates to intelligence.</h2>
            <div className="space-y-8">
                <div className="space-y-2">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#6D6870]">Traditional holiday data</p>
                    <ul className="space-y-1 font-data text-xs text-[#6D6870]/60">
                        <li>Date</li>
                        <li>Name</li>
                        <li>Country</li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="flex-[1.5] bg-[#17151A] text-[#F7F4EE] p-12 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#E94368]/20 blur-[60px]"></div>
            <div className="grid grid-cols-2 gap-12 relative z-10">
                <div className="space-y-2">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E94368]">Utsavs Intelligence</p>
                    <ul className="space-y-2 font-data text-xs">
                        <li>Date</li>
                        <li>Country</li>
                        <li>Region</li>
                        <li>Classification</li>
                        <li>Verification</li>
                        <li>Source</li>
                        <li>Cultural context</li>
                        <li>Date intelligence</li>
                        <li>Operational context</li>
                    </ul>
                </div>
                <div className="flex items-end">
                    <p className="text-lg md:text-2xl font-display font-bold leading-tight">
                        Basic APIs tell you when.<br/>
                        <span className="text-[#E94368]">Utsavs tells you why, and how certain.</span>
                    </p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
