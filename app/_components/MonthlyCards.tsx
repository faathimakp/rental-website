"use client";

import { useState } from "react";
import BookingModal from "./BookingModal";

const monthlyVehicles = [
  {
    id: 1,
    name: "Suzuki access  ",
    status: "Available",
    price: "₹12,999/month",
    deposit: "₹2500",

    image: "/suzukigreen.png",
  },
  {
    id: 2,
    name: "Royal enfield himalayan ",
    status: "Available",
    price: "15999/month",
    deposit: "₹2500",
    image: "/himalayan.png",
  },
  {
    id: 3,
    name: "Bajaj NS",
    status: "Not Available",
    price: "₹9999/day",
    deposit: "₹2500",
    image: "bajajns.png",
  },
  {
    id: 4,
    name: "Honda activa",
    status: "Available",
    price: "₹8999/month",
    deposit: "₹2500",
    image: "/hondaactiva.png",
  },
  {
    id: 5,
    name: "Honda dio",
    status: "Available",
    price: "₹8999/month",
    deposit: "₹2500",
    image: "/hondadio.png",
  },
  {
    id: 6,
    name: "Royal enfield classic",
    status: "Available",
    price: " 12,499/month",
    deposit: "₹2500",
    image: "/royalclassic.png",
  },
  {
    id: 7,
    name: "Honda Unicorn",
    status: "Not Available",
    price: "₹9999/day",
    deposit: "₹2500",
    image: "/hondaunicorn.png",
  },
];

interface MonthlyCardsProps {
  enableMobileScroll?: boolean;
}

export default function MonthlyCards({
  enableMobileScroll = true,
}: MonthlyCardsProps) {
  const [open, setOpen] = useState(false);
  const [selectedVehicleId, setSelectedVehicleId] = useState<number | null>(
    null,
  );

  return (
    <>
      <section className="mx-auto max-w-7xl  pb-16 md:pb-20 lg:px-12">
        <div className="mb-7 md:mb-12 px-6">
          <span className="rounded-full border border-[#002c50] bg-blue-50 px-4 py-2 text-sm font-medium text-[#002c50]">
            Monthly Rentals
          </span>

          <h2 className="mt-6 text-3xl md:text-5xl font-black text-slate-900 ">
            Monthly Rental Plans
          </h2>

          {/* <p className="mt-2 md:mt-4 max-w-2xl text-slate-600 ">
            Affordable monthly bike and scooter rentals for work, study, and
            long-term travel.
          </p> */}
        </div>

<div
  className={`mt-6 gap-4 pb-4 md:gap-8
    ${
      enableMobileScroll
        ? "flex overflow-x-auto no-scrollbar pl-6 md:pl-0 md:grid lg:grid-cols-3 md:overflow-visible"
        : "grid px-6 md:px-0 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
    }
  `}
>          {monthlyVehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              className="group w-[280px] flex-shrink-0 overflow-hidden rounded-[30px] border border-slate-200 bg-white/80 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-blue-400 hover:shadow-[0_20px_50px_rgba(37,99,235,0.12)] md:w-auto"
            >
              <div className="relative overflow-hidden bg-sky-100">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="h-48 w-full object-cover transition duration-500 group-hover:scale-105 md:h-64"
                />

                <div
                  className={`absolute right-4 top-4 rounded-full px-2 py-1 text-xs font-bold text-white backdrop-blur-md md:py-2 ${
                    vehicle.status === "Available"
                      ? "bg-emerald-500/90"
                      : "bg-red-500/90"
                  }`}
                >
                  {vehicle.status}
                </div>
              </div>

              <div className="p-4 md:p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-black text-slate-900 md:text-2xl">
                    {vehicle.name}
                  </h3>

                  <div className="flex flex-col items-end gap-2">
                    <span className="rounded-full bg-gradient-to-r from-[#0056a3] via-[#004b8a] to-[#003d71] px-2 py-1 text-xs font-bold text-white shadow-lg md:px-3 md:py-1.5">
                      {vehicle.price}
                    </span>

                    <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold text-slate-600 whitespace-nowrap">
                      Deposit: {vehicle.deposit}
                    </span>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-5 text-slate-500 md:leading-7">
                  Perfect for long-term rentals with affordable monthly pricing.
                </p>

                <button
                  onClick={() => {
                    if (vehicle.status === "Available") {
                      setSelectedVehicleId(vehicle.id);
                      setOpen(true);
                    }
                  }}
                  disabled={vehicle.status !== "Available"}
                  className={`mt-6 w-full rounded-xl px-2 py-1.5 text-base font-bold text-white transition duration-300 md:rounded-2xl md:px-5 md:py-3 ${
                    vehicle.status === "Available"
                      ? "bg-slate-900 hover:bg-[#05a3fb]"
                      : "cursor-not-allowed bg-slate-300"
                  }`}
                >
                  {vehicle.status === "Available"
                    ? "Book Monthly Plan"
                    : "Currently Unavailable"}
                </button>
              </div>
            </div>
          ))}
        </div>
       {enableMobileScroll && (
  <div className="mt-4 flex items-center justify-center gap-3 text-slate-400 md:hidden">
    <span className="text-lg">←</span>

    <span className="text-[11px] font-medium uppercase tracking-[0.35em]">
      Swipe to Explore
    </span>

    <span className="text-lg">→</span>
  </div>
)}
      </section>

      <BookingModal
        isOpen={open}
        onClose={() => setOpen(false)}
        Vehicles={monthlyVehicles}
        selectedVehicleId={selectedVehicleId}
      />
    </>
  );
}
