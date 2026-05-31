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
        className="mx-auto max-w-7xl px-6 py-24 lg:px-12 font-serif"
        id="Vehicle-showcase"
      >
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <span className="rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
              Premium Fleet
            </span>

            <h2 className="mt-6 text-5xl font-black text-slate-900">
              {title}
            </h2>
          </div>

          {showButton && (
            <Link href="/showcase">
              <button className="rounded-full border border-blue-700 bg-blue-50 px-6 py-3 text-sm font-semibold text-blue-700 transition hover:bg-blue-700 hover:text-white">
                explore all Vehicles
              </button>
            </Link>
          )}
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {Vehicles.map((Vehicle) => (
            <div
              key={Vehicle.id}
              className="group overflow-hidden rounded-[30px] border border-slate-200 bg-white/80 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-blue-400 hover:shadow-[0_20px_50px_rgba(37,99,235,0.12)]"
            >
              <div className="relative overflow-hidden">
                <img
                  src={Vehicle.image}
                  alt={Vehicle.name}
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div
                  className={`absolute right-4 top-4 rounded-full px-2 py-2 text-xs font-bold text-white backdrop-blur-md ${
                    Vehicle.status === "Available"
                      ? "bg-emerald-500/90"
                      : "bg-red-500/90"
                  }`}
                >
                  {Vehicle.status}
                </div>
              </div>

              <div className="p-6 bg-sky-100">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-2xl font-black text-slate-900">
                    {Vehicle.name}
                  </h3>

                  <span className="rounded-full bg-gradient-to-r from-blue-600 to-slate-900 px-3 py-1.5 text-xs font-bold text-white shadow-lg">
                    {Vehicle.price}
                  </span>
                </div>

                <p className="mt-4 text-sm leading-7 text-slate-500">
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
                  className={`mt-6 w-full rounded-2xl px-5 py-3 text-base font-bold text-white transition duration-300 ${
                    Vehicle.status === "Available"
                      ? "bg-slate-900 hover:bg-blue-700"
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