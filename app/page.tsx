import Cards from "./_components/Cards";
import Cta from "./_components/Cta";
import Hero from "./_components/Hero";
import WhyChooseUs from "./_components/WhyChooseUs";

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f4f7fb] text-[#0f172a]">
      {/* Background Effects */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.18),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(15,23,42,0.12),transparent_35%)]" />

    
      <Hero />
      <Cards />
      <WhyChooseUs />
      <Cta />
    
    </main>
  );
}
