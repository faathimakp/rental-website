import Cards from "./_components/Cards";
import Cta from "./_components/Cta";
import Hero from "./_components/Hero";
import Testimonials from "./_components/Testimonials";
import WhatsAppFloat from "./_components/WhatsAppFloat";
import WhyChooseUs from "./_components/WhyChooseUs";

const Vehicles = [
  {
    id: 1,
    name: "Neo Rider",
    status: "Available",
    price: "₹499/day",
    image:
      "https://safcobikerentalinkerala.in/wp-content/uploads/2025/07/Suzuki-Access-125.png",
  },
  {
    id: 2,
    name: "Volt X",
    status: "Available",
    price: "₹699/day",
    image:
      "https://safcobikerentalinkerala.in/wp-content/uploads/2025/07/Suzuki-AccessJupiter-2024.png",
  },
  {
    id: 3,
    name: "Urban Jet",
    status: "Available",
    price: "₹599/day",
    image:
      "https://safcobikerentalinkerala.in/wp-content/uploads/2025/07/01-4.png",
  },
  {
    id: 4,
    name: "Honda Unicorn",
    status: "Available",
    price: "₹599/day",
    image:
      "https://safcobikerentalinkerala.in/wp-content/uploads/2025/07/Honda-Unicorn-2025.png",
  },
  {
    id: 5,
    name: "TVS Jupiter",
    status: "Not Available",
    price: "₹599/day",
    image:
      "https://safcobikerentalinkerala.in/wp-content/uploads/2025/07/TVS-Jupiter-2023.png",
  },
  {
    id: 6,
    name: "Suzuki Access",
    status: "Available",
    price: "₹599/day",
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
