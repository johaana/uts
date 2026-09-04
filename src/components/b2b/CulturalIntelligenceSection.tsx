export function CulturalIntelligenceSection() {
  return (
    <section className="py-24 bg-muted/10 border-b">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-card rounded-xl border p-10 lg:p-16 text-center shadow-xl">
            <h2 className="font-headline text-3xl md:text-5xl font-bold mb-8">Data with cultural context.</h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
                A holiday is more than a date. Utsavs combines structured calendar data with concise cultural context — why it is celebrated, key traditions and regional variations.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                {['Why it matters', 'Traditions', 'Regional nuance', 'Cultural significance'].map(label => (
                    <div key={label} className="p-4 bg-primary/5 rounded border border-primary/10 text-xs font-bold uppercase tracking-widest text-primary">
                        {label}
                    </div>
                ))}
            </div>
            <p className="text-lg font-bold text-muted-foreground italic">
                Structured enough for machines. Meaningful enough for people.
            </p>
        </div>
      </div>
    </section>
  );
}
