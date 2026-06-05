import Cards from "./_components/Cards";
import Cta from "./_components/Cta";
import Hero from "./_components/Hero";
import MonthlyCards from "./_components/MonthlyCards";
import Terms from "./_components/Terms";
import Testimonials from "./_components/Testimonials";
import TopBar from "./_components/TopBar";
import WhatsAppFloat from "./_components/WhatsAppFloat";
import WhyChooseUs from "./_components/WhyChooseUs";


const Vehicles = [
  {
    id: 1,
    name: "Honda activa",
    status: "Available",
    price: "₹799/day",
    image:
    "https://safcobikerentalinkerala.in/wp-content/uploads/2025/07/01-4.png",
     
  },
  {
    id: 2,
    name: "Honda dio",
    status: "Available",
    price: "₹799/day",
    image:
      "/hondadio.png",
  },
  
  {
    id: 3,
    name: "Suzuki access 125",
    status: "Available",
    price: "₹799/day",
    image:
      "https://safcobikerentalinkerala.in/wp-content/uploads/2025/07/Suzuki-AccessJupiter-2024.png",
  },
  {
    id: 4,
    name: "Royal enfield himalayan ",
    status: "Available",
    price: "₹1499/day",
    image:
      "/himalayan.png",
  },
  {
    id: 5,
    name: "Royal enfield classic",
    status: "Available",
    price: "₹1299/day",
    image:
      "/royalclassic.png",
  },
 
  {
    id: 6,
    name: "Bajaj NS",
    status: "Not Available",
    price: "₹999/day",
    image:
      "bajajns.png",
  },
   
  
];

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f4f7fb] text-[#0f172a]">
      {/* Background Effects */}
      <TopBar/>
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.18),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(15,23,42,0.12),transparent_35%)]" />
   
      <Hero Vehicles={Vehicles} />
      <Cards Vehicles={Vehicles} title="Choose Your Ride" showButton />
      <MonthlyCards />
      <WhyChooseUs />
      <Terms />
      <Cta />
      <Testimonials />
      <WhatsAppFloat />
    </main>
  );
}
