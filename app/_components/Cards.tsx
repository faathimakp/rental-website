"use client";

import { useState } from "react";
import BookingModal from "./BookingModal";
import Link from "next/link";

interface Vehicle {
  id: number;
  name: string;
  status: string;
  price: string;
  image: string;
}

interface CardsProps {
  Vehicles: Vehicle[];
  title: string;
  showButton?: boolean;
}

export default function Cards({
  Vehicles,
  title,
  showButton = false,
}: CardsProps) {
  const [open, setOpen] = useState(false);

  const [selectedVehicleId, setSelectedVehicleId] = useState<number | null>(
    null,
  );

  return (
    <>
      <section
        className="mx-auto max-w-7xl px-6  py-14 md:py-20 lg:px-12 font-normal"
        id="Vehicle-showcase"
      >
        <div className="flex flex-col items-start justify-between gap-4 md:gap-8 lg:flex-row lg:items-end">
          <div>
            <span className="rounded-full  border border-[#002c50] bg-blue-50 px-4 py-2 text-sm font-medium text-[#002c50]">
              Premium Fleet
            </span>

            <h2 className="mt-4 md:mt-6 text-3xl md:text-5xl font-black text-slate-900">
              {title}
            </h2>
          </div>

          {/* {showButton && (
            <Link href="/showcase">
              <button className="rounded-full border border-[#002c50] bg-blue-50 px-4 md:px-6 py-1.5 md:py-3 text-sm font-semibold text-[#002c50] transition hover:bg-[#002c50] hover:text-white">
                explore all Vehicles
              </button>
            </Link>
          )} */}
        </div>

        <div className="mt-6 md:mt-12 grid gap-6 md:gap-8 lg:grid-cols-3">
          {Vehicles.map((Vehicle) => (
            <div
              key={Vehicle.id}
              className="group overflow-hidden rounded-[30px] border border-slate-200 bg-white/80 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-blue-400 hover:shadow-[0_20px_50px_rgba(37,99,235,0.12)]"
            >
              <div className="relative overflow-hidden bg-sky-100">
                <img
                  src={Vehicle.image}
                  alt={Vehicle.name}
                  className="h-48 md:h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div
                  className={`absolute right-4 top-4 rounded-full px-2 py-1 md:py-2 text-xs font-bold text-white backdrop-blur-md ${
                    Vehicle.status === "Available"
                      ? "bg-emerald-500/90"
                      : "bg-red-500/90"
                  }`}
                >
                  {Vehicle.status}
                </div>
              </div>

              <div className=" p-4 md:p-6 ">
                <div className="flex items-center justify-between gap-4">
                  <h3 className=" text-xl md:text-2xl font-black text-slate-900">
                    {Vehicle.name}
                  </h3>

                  <span className="rounded-full bg-gradient-to-r from-[#0056a3] via-[#004b8a] to-[#003d71] px-2 md:px-3 py-1 md:py-1.5 text-xs font-bold text-white shadow-lg">
                    {Vehicle.price}
                  </span>
                </div>

                <p className="mt-4 text-sm leading-5 md:leading-7 text-slate-500">
                  Designed for comfort, performance, and smooth urban commuting.
                </p>

                <button
                  onClick={() => {
                    if (Vehicle.status === "Available") {
                      setSelectedVehicleId(Vehicle.id);
                      setOpen(true);
                    }
                  }}
                  disabled={Vehicle.status !== "Available"}
                  className={`mt-6 w-full rounded-xl md:rounded-2xl px-2 md:px-5 py-1.5 md:py-3 text-base font-bold text-white transition duration-300 ${
                    Vehicle.status === "Available"
                      ? "bg-slate-900 hover:bg-[#05a3fb]"
                      : "cursor-not-allowed bg-slate-300"
                  }`}
                >
                  {Vehicle.status === "Available"
                    ? "Rent Now"
                    : "Currently Unavailable"}
                </button>
              </div>
            </div>
          ))}
        </div>
        {showButton && (
        <div className="mt-8 md:mt-14 flex justify-center">
          <Link
            href="/showcase"
            className="inline-flex items-center gap-2 rounded-full border border-[#002c50] bg-white px-6 py-3 font-semibold text-[#002c50] shadow-sm transition-all duration-300 hover:bg-[#002c50] hover:text-white hover:shadow-lg"
          >
            explore all Vehicles
            <span>→</span>
          </Link>
        </div>
         )}
      </section>

      <BookingModal
        isOpen={open}
        onClose={() => setOpen(false)}
        Vehicles={Vehicles}
        selectedVehicleId={selectedVehicleId}
      />
    </>
  );
}
