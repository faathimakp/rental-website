import Cards from "../_components/Cards";


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
   {
    id: 7,
    name: "Neo Rider",
    status: "Available",
    price: "₹499/day",
    image:
      "https://safcobikerentalinkerala.in/wp-content/uploads/2025/07/Suzuki-Access-125.png",
  },
  {
    id: 8,
    name: "Volt X",
    status: "Available",
    price: "₹699/day",
    image:
      "https://safcobikerentalinkerala.in/wp-content/uploads/2025/07/Suzuki-AccessJupiter-2024.png",
  },
  {
    id: 9,
    name: "Urban Jet",
    status: "Available",
    price: "₹599/day",
    image:
      "https://safcobikerentalinkerala.in/wp-content/uploads/2025/07/01-4.png",
  },
];
export default function ShowcasePage() {
  return <Cards
  Vehicles={Vehicles}
  title="Premium Vehicle Fleet"
/>;
}