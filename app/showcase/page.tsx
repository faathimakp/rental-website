"use client";
import { useState } from "react";
import BookingModal from "../_components/BookingModal";
const scooters = [
  {
    name: "Neo Rider",
    status: "Available",
    price: "₹499/day",
    image:
      "https://safcobikerentalinkerala.in/wp-content/uploads/2025/07/Suzuki-Access-125.png",
  },
  {
    name: "Volt X",
    status: "Available",
    price: "₹699/day",
    image:
      "https://safcobikerentalinkerala.in/wp-content/uploads/2025/07/Suzuki-AccessJupiter-2024.png",
  },
  {
    name: "Urban Jet",
    status: "Available",
    price: "₹599/day",
    image:
      "https://safcobikerentalinkerala.in/wp-content/uploads/2025/07/01-4.png",
  },
  {
    name: "Urban Jet",
    status: "Available",
    price: "₹599/day",
    image:
      "https://safcobikerentalinkerala.in/wp-content/uploads/2025/07/Honda-Unicorn-2025.png",
  },
  {
    name: "Urban Jet",
    status: "Not Available",
    price: "₹599/day",
    image:
      "https://safcobikerentalinkerala.in/wp-content/uploads/2025/07/TVS-Jupiter-2023.png",
  },
  {
    name: "Urban Jet",
    status: "Available",
    price: "₹599/day",
    image:
      "https://safcobikerentalinkerala.in/wp-content/uploads/2025/07/Suzuki-Access-125.png",
  },
  {
    name: "Neo Rider",
    status: "Available",
    price: "₹499/day",
    image:
      "https://safcobikerentalinkerala.in/wp-content/uploads/2025/07/Suzuki-Access-125.png",
  },
  {
    name: "Volt X",
    status: "Available",
    price: "₹699/day",
    image:
      "https://safcobikerentalinkerala.in/wp-content/uploads/2025/07/Suzuki-AccessJupiter-2024.png",
  },
  {
    name: "Urban Jet",
    status: "Not Available",
    price: "₹599/day",
    image:
      "https://safcobikerentalinkerala.in/wp-content/uploads/2025/07/01-4.png",
  },
];

export default function Cards() {
  const [open, setOpen] = useState(false);
  const [selectedScooter, setSelectedScooter] = useState("");

  return (
    <>
      <section
        className="mx-auto max-w-7xl px-6 py-24 lg:px-12"
        id="scooter-showcase"
      >
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <h2 className="mt-6 text-5xl font-black text-slate-900">
              Premium Scooter Fleet
            </h2>
          </div>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {scooters.map((scooter, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-[30px] border border-slate-200 bg-white/80 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-blue-400 hover:shadow-[0_20px_50px_rgba(37,99,235,0.12)]"
            >
              <div className="relative overflow-hidden">
                <img
                  src={scooter.image}
                  alt={scooter.name}
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div
                  className={`absolute right-4 top-4 rounded-full px-2 py-2 text-xs font-bold text-white backdrop-blur-md ${
                    scooter.status === "Available"
                      ? "bg-emerald-500/90"
                      : "bg-red-500/90"
                  }`}
                >
                  {scooter.status}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-2xl font-black text-slate-900">
                    {scooter.name}
                  </h3>

                  <span className="rounded-full bg-gradient-to-r from-blue-600 to-slate-900 px-3 py-1.5 text-xs font-bold text-white shadow-lg">
                    {scooter.price}
                  </span>
                </div>

                <p className="mt-4 text-sm leading-7 text-slate-500">
                  Designed for comfort, performance, and smooth urban commuting.
                </p>

                <button
                  onClick={() => {
                    if (scooter.status === "Available") {
                      setSelectedScooter(scooter.name);
                      setOpen(true);
                    }
                  }}
                  disabled={scooter.status !== "Available"}
                  className={`mt-6 w-full rounded-2xl px-5 py-3 text-base font-bold text-white transition duration-300 ${
                    scooter.status === "Available"
                      ? "bg-slate-900 hover:bg-blue-700"
                      : "cursor-not-allowed bg-slate-300"
                  }`}
                >
                  {scooter.status === "Available"
                    ? "Rent Now"
                    : "Currently Unavailable"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      <BookingModal
        isOpen={open}
        onClose={() => setOpen(false)}
        scooterName={selectedScooter}
      />
    </>
  );
}
