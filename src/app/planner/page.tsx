import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function PlannerPage() {
  return (
    <div className="bg-[#0F1428] text-[#F4F1E8] min-h-screen font-sans">
      <Header />
      <main className="py-24 text-center">
        <div className="max-w-2xl mx-auto px-6 space-y-6">
          <h1 className="text-4xl font-headline font-bold">Holiday Planning</h1>
          <p className="text-xl text-[#9AA1C0]">
            AI-assisted chat planning is currently restricted to internal risk-assessment users. 
            Please use the <a href="/" className="text-[#E8A33D] underline">Trip Impact Checker</a> for verified deterministic holiday intelligence.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
