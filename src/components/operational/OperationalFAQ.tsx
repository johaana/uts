import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "Does Utsavs tell me whether I should travel?",
    a: "No. It shows the dates, evidence and practical implications that may matter to your purpose, so you can make the decision."
  },
  {
    q: "Why can the same date mean different things?",
    a: "A public holiday, regional observance, university calendar or institutional closure can affect places and activities differently. Utsavs keeps those scopes separate."
  },
  {
    q: "Are all dates confirmed?",
    a: "No. Some dates are officially published well in advance; others depend on later government announcements, lunar observation or institutional publication. The date state and source are shown where available."
  },
  {
    q: "Does Utsavs replace visa or immigration advice?",
    a: "No. Entry eligibility depends on the traveller's circumstances and the relevant authority. Utsavs provides timing and planning context."
  },
  {
    q: "Can I use Utsavs for business or study?",
    a: "Yes. The same date can be examined for travel, business, study, workforce and operational planning, with deeper institutional information where verified data is available."
  }
];

export function OperationalFAQ() {
  return (
    <section className="py-24 border-t">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="font-headline text-3xl font-bold mb-12 text-center">Questions & Context</h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left font-semibold">{faq.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
