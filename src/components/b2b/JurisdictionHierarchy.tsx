'use client';

import { motion } from 'framer-motion';

const levels = [
  { label: "COUNTRY", value: "India", type: "National" },
  { label: "REGION", value: "Maharashtra", type: "State/Province" },
  { label: "JURISDICTION", value: "Mumbai", type: "City/Local" },
  { label: "HOLIDAY", value: "Ganesh Chaturthi", type: "Observance" }
];

export function JurisdictionHierarchy() {
  return (
    <section className="container mx-auto px-6 py-24">
      <div className="flex flex-col lg:flex-row gap-20 items-center">
        <div className="flex-1 space-y-8 text-left">
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#E94368] font-ui">Infrastructure</p>
          <h2 className="text-4xl md:text-6xl font-bold font-display tracking-tight text-[#17151A]">One world.<br/>Many jurisdictions.</h2>
          <p className="text-lg text-[#6D6870] leading-relaxed max-w-lg font-ui font-medium">
            Holiday rules aren't just national. Utsavs models the complex overlap between country, state, and city laws to provide precise operational certainty.
          </p>
        </div>

        <div className="flex-1 w-full max-w-2xl">
          <div className="bg-white border border-[#DED9D0] p-8 md:p-12 shadow-sm rounded-sm font-ui relative overflow-hidden">
            {/* Logic Lines */}
            <div className="absolute left-[39px] top-[60px] bottom-[60px] w-px bg-[#DED9D0]"></div>
            
            <div className="space-y-12 relative z-10">
              {levels.map((level, i) => (
                <motion.div 
                  key={level.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-8 group"
                >
                  <div className="w-6 h-6 rounded-full border-2 border-[#DED9D0] bg-white flex items-center justify-center group-hover:border-[#E94368] transition-colors">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#DED9D0] group-hover:bg-[#E94368] transition-colors" />
                  </div>
                  
                  <div className="flex-1 flex items-center justify-between border-b border-[#F7F4EE] pb-4 group-hover:border-[#DED9D0] transition-colors">
                    <div>
                      <p className="text-[9px] font-extrabold uppercase tracking-[0.3em] text-[#6D6870]">{level.label}</p>
                      <p className="text-xl font-bold font-display text-[#17151A]">{level.value}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[9px] font-bold uppercase tracking-widest text-[#E94368]">{level.type}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-12 p-6 bg-[#F7F4EE]/50 border border-[#DED9D0]/60 rounded-sm">
               <p className="text-[10px] font-bold uppercase tracking-widest text-[#6D6870] mb-2">Operational Result</p>
               <p className="text-sm font-medium text-[#17151A]">"Working day status differs from National schedule based on local municipal ordinance."</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
