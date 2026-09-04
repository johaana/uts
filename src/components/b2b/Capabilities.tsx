
const items = [
  {
    num: "01",
    title: "Holiday Data",
    desc: "Global public, regional, bank, religious & cultural calendars."
  },
  {
    num: "02",
    title: "Holiday Intelligence",
    desc: "Dates, classifications, regions, verification & sources."
  },
  {
    num: "03",
    title: "Working Days",
    desc: "Calculate business days around local calendars."
  },
  {
    num: "04",
    title: "Long Weekends",
    desc: "Identify consecutive holidays and leave opportunities."
  },
  {
    num: "05",
    title: "Change Intelligence",
    desc: "Track official date changes and announcements."
  }
];

export function Capabilities() {
  return (
    <section id="product" className="container mx-auto px-6">
      <div className="mb-20">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E94368] mb-4">The Platform</p>
        <h2 className="text-4xl md:text-6xl font-bold max-w-3xl">One intelligence layer.<br/>Five capabilities.</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12">
        {items.map((item) => (
          <div key={item.num} className="space-y-8 group">
            <div className="space-y-2">
                <p className="font-data text-[13px] text-[#E94368] font-bold">{item.num}</p>
                <h3 className="text-sm font-bold uppercase tracking-widest leading-tight">{item.title}</h3>
            </div>
            <p className="text-sm leading-relaxed text-[#6D6870] min-h-[60px]">
              {item.desc}
            </p>
            <div className="w-8 h-[1px] bg-[#E94368] transition-all duration-500 group-hover:w-full"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
