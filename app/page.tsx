import Cards from "./_components/Cards";
import Cta from "./_components/Cta";
import Hero from "./_components/Hero";
import Testimonials from "./_components/Testimonials";
import WhatsAppFloat from "./_components/WhatsAppFloat";
import WhyChooseUs from "./_components/WhyChooseUs";

const Vehicles = [
  {
    id: 1,
    name: "Honda activa",
    status: "Available",
    price: "₹799/day",
    image:
      "https://safcobikerentalinkerala.in/wp-content/uploads/2025/07/Suzuki-Access-125.png",
  },
  {
    id: 2,
    name: "Honda dio",
    status: "Available",
    price: "₹799/day",
    image:
      "https://safcobikerentalinkerala.in/wp-content/uploads/2025/07/Suzuki-AccessJupiter-2024.png",
  },
  {
    id: 3,
    name: "Bajaj NS",
    status: "Available",
    price: "₹999/day",
    image:
      "https://safcobikerentalinkerala.in/wp-content/uploads/2025/07/01-4.png",
  },
  {
    id: 4,
    name: "Honda Unicorn",
    status: "Available",
    price: "₹999/day",
    image:
      "https://safcobikerentalinkerala.in/wp-content/uploads/2025/07/Honda-Unicorn-2025.png",
  },
  {
    id: 5,
    name: "Suzuki access 125",
    status: "Not Available",
    price: "₹799/day",
    image:
     "https://safcobikerentalinkerala.in/wp-content/uploads/2025/07/Honda-Unicorn-2025.png",
  },
  {
    id: 6,
    name: "Royal enfield Suzuki access 125",
    status: "Not Available",
    price: "₹1299/day",
    image:
      "https://safcobikerentalinkerala.in/wp-content/uploads/2025/07/Suzuki-Access-125.png",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f4f7fb] text-[#0f172a]">
      {/* Background Effects */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.18),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(15,23,42,0.12),transparent_35%)]" />

    
      <Hero Vehicles={Vehicles} />
     <Cards
  Vehicles={Vehicles}
  title="Choose Your Ride"
  showButton />
      <WhyChooseUs />
      <Cta />
      <Testimonials/>
      <WhatsAppFloat/>
    
    </main>
  );
}
