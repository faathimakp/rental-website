import Cards from "../_components/Cards";
import MonthlyCards from "../_components/MonthlyCards";


const Vehicles = [
  {
    id: 1,
    name: "Suzuki access 125",
    status: "Available",
    price: "₹799/day",
     deposit: "₹2500",
    image:
      "/suzukigreen.png",
  },
  {
    id: 2,
    name: "Honda dio",
    status: "Available",
    price: "₹799/day",
     deposit: "₹2500",
    image:
      "/hondadio.png",
  },
  
 
   {
    id: 3,
    name: "Honda activa",
    status: "Available",
    price: "₹799/day",
     deposit: "₹2500",
    image:
   "/hondaactiva.png",
     
  },
  {
    id: 4,
    name: "Royal enfield himalayan ",
    status: "Available",
    price: "₹1499/day",
     deposit: "₹2500",
    image:
      "/himalayan.png",
  },
    {
    id: 5,
    name: "Royal enfield classic",
    status: "Available",
    price: "₹1299/day",
     deposit: "₹2500",
    image:
      "/royalclassic.png",
  },
  {
    id: 6,
    name: "Suzuki access 125 White",
    status: "Available",
    price: "₹799/day",
     deposit: "₹2500",
    image:
      "/suzukiwhite.png",
  },
  {
    id: 7,
    name: "Honda Unicorn",
    status: "Not Available",
    price: "₹999/day",
     deposit: "₹2500",
    image:
       "/hondaunicorn.png",
  },
 
  {
    id: 8,
    name: "Bajaj NS",
    status: "Not Available",
    price: "₹999/day",
     deposit: "₹2500",
    image:
      "bajajns.png",
  },
   {
    id: 9,
    name: "Suzuki access 125",
    status: "Available",
    price: "₹799/day",
     deposit: "₹2500",
    image:
       "/suzukiblack.png",
  },
  
  {
    id: 10,
    name: "Suzuki access 125 Green",
    status: "Available",
    price: "₹799/day",
     deposit: "₹2500",
    image:
       "/suzukiblack.png",
  },
  {
    id: 11,
    name: "Suzuki access 125 Green",
    status: "Available",
    price: "₹799/day",
     deposit: "₹2500",
    image:
       "/suzukigreen.png",
  },
  
];
export default function ShowcasePage() {
  return <div className="md:pt-[120px] pt-[100px]">
    <Cards
    Vehicles={Vehicles}
    title="Premium Vehicle Fleet"
    
  />;
  <div >
        <MonthlyCards />
      </div>
  </div>
}