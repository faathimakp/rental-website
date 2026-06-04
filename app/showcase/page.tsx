import Cards from "../_components/Cards";


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
    name: "Suzuki access 125 White",
    status: "Available",
    price: "₹799/day",
    image:
      "/suzukiwhite.png",
  },
  {
    id: 7,
    name: "Honda Unicorn",
    status: "Not Available",
    price: "₹999/day",
    image:
      "https://safcobikerentalinkerala.in/wp-content/uploads/2025/07/Honda-Unicorn-2025.png",
  },
 
  {
    id: 8,
    name: "Bajaj NS",
    status: "Not Available",
    price: "₹999/day",
    image:
      "bajajns.png",
  },
   {
    id: 9,
    name: "Suzuki access 125",
    status: "Available",
    price: "₹799/day",
    image:
      "https://safcobikerentalinkerala.in/wp-content/uploads/2025/07/Suzuki-AccessJupiter-2024.png",
  },
  
  {
    id: 10,
    name: "Suzuki access 125 Green",
    status: "Available",
    price: "₹799/day",
    image:
      "https://safcobikerentalinkerala.in/wp-content/uploads/2025/07/Suzuki-Access-125.png",
  },
  {
    id: 11,
    name: "Suzuki access 125 Green",
    status: "Available",
    price: "₹799/day",
    image:
      "https://safcobikerentalinkerala.in/wp-content/uploads/2025/07/Suzuki-Access-125.png",
  },
  
];
export default function ShowcasePage() {
  return <div className="py-14 md:py-18">
    <Cards
    Vehicles={Vehicles}
    title="Premium Vehicle Fleet"
    
  />;
  return </div>
}