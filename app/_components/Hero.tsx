// Hero.tsx

"use client";

import { useState } from "react";
import BookingModal from "./BookingModal";

interface Vehicle {
  id: number;
  name: string;
  status: string;
  price: string;
  image: string;
}

interface HeroProps {
  Vehicles: Vehicle[];
}

export default function Hero({ Vehicles }: HeroProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="relative flex min-h-screen items-center overflow-hidden font-normal">
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=1600&auto=format&fit=crop"
          alt="Vehicle"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#0f172a]/65" />

        {/* Gradient Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.25),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(15,23,42,0.2),transparent_35%)]" />

        {/* Content */}
        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col justify-between gap-12 md:gap-16 px-6 py-32 lg:flex-row lg:items-center lg:px-12">
          {/* Left */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 md:gap-3 rounded-full border border-white/10 bg-white/10 px-3 md:px-5 py-1 md:py-2 text-sm text-white backdrop-blur-xl">
              ⚡ Fast Booking • Premium Electric Vehicles
            </div>

            <h1 className="mt-8 text-6xl font-black leading-[0.95] tracking-tight text-white sm:text-7xl lg:text-8xl font-normal">
              Ride Beyond
              <span className="bg-gradient-to-r from-blue-500 via-sky-400 to-white bg-clip-text text-transparent">
                {" "}
                Limits
              </span>
            </h1>

            <p className=" mt-6 md:mt-8 max-w-xl text-lg leading-7 md:leading-8 text-slate-200 font-normal">
              Experience premium electric Vehicle rentals with comfort,
              performance, and instant booking for modern urban travel.
            </p>

            <div className="mt-8 ">
               {/* <button
               
                className="rounded-2xl bg-gradient-to-r text-white px-8 py-4 text-lg font-bold bg-sky-600 shadow-[0_0_40px_rgba(37,99,235,0.35)] transition hover:scale-105"
              >
                Start Riding
              </button> */}
              <button
                onClick={() => setOpen(true)}
                className=" rounded-xl md:rounded-2xl bg-gradient-to-r bg-sky-600 text-white px-6 md:px-8 py-2 md:py-4 text-lg font-bold text-white shadow-[0_0_40px_rgba(37,99,235,0.35)] transition hover:scale-105"
              >
               Rent Now
              </button>
            </div>
          </div>

          {/* Right Cards */}
          <div className="flex flex-col gap-6">
            <div className=" w-[250px] md:w-[300px] rounded-[32px] border border-white/10 bg-white/10 p-4 md:p-8 backdrop-blur-2xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-300">Support</p>
                  <h3 className="mt-2 text-5xl font-black text-white">
                    24/7
                  </h3>
                </div>

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0f172a] text-3xl">
                  ☎️
                </div>
              </div>

              <p className="mt-6 leading-7 text-slate-200">
                Round-the-clock customer assistance for all your rides.
              </p>
            </div>

            <div className="w-[250px] md:w-[300px] rounded-[32px] border border-white/10 bg-white/10 p-4 md:p-8 backdrop-blur-2xl">
              <p className="text-sm text-slate-300">Available Vehicles</p>

              <h3 className="mt-2 text-5xl font-black text-white">20+</h3>

              <p className="mt-6 leading-7 text-slate-200">
                Premium electric Vehicles ready for instant booking.
              </p>
            </div>
          </div>
        </div>
      </section>

      <BookingModal
        isOpen={open}
        onClose={() => setOpen(false)}
        Vehicles={Vehicles}
        selectedVehicleId={null}
      />
    </>
  );
}