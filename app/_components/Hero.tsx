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
        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col justify-between gap-8 md:gap-16 px-6 py-32 ">
          {/* Left */}
          <div className="max-w-2xl lg:flex-row  lg:items-center lg:px-12">
            <div className="inline-flex items-center gap-2 md:gap-3 rounded-full border border-white/10 bg-white/10 px-3 md:px-5 py-1  text-sm text-white backdrop-blur-xl">
              ⚡ PREMIUM TWO - WHEELER RENTALS
            </div>

            <h1 className="mt-8 text-[44px] md:text-[68px] lg:text-[78px] font-black leading-[1.02] text-balance  tracking-tight text-white sm:text-7xl lg:text-8xl font-display">
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
                className="
    inline-flex items-center gap-2
    rounded-full
    px-4 md:px-8 h-13
    text-white font-bold text-xl
    bg-gradient-to-r
    from-[#041c5a]
    via-[#0a3dba]
    to-[#3b82f6]
    
    hover:-translate-y-0.5
    transition-all duration-300
  "
              >
                Rent Now
                <span className="text-2xl">→</span>
              </button>
            </div>
            <section className="mt-8 border-t border-white/10 pt-4">
              <div className="flex flex-wrap items-center gap-x-10 gap-y-4">
                <div>
                  <p className="text-2xl font-semibold text-white">12k+</p>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-white/60">
                    Happy Riders
                  </p>
                </div>

                <div>
                  <p className="text-2xl font-semibold text-white">4.9★</p>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-white/60">
                    Avg. Rating
                  </p>
                </div>

                <div>
                  <p className="text-2xl font-semibold text-white">120+</p>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-white/60">
                    Bikes In Fleet
                  </p>
                </div>

                <div>
                  <p className="text-2xl font-semibold text-white">24/7</p>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-white/60">
                    Support
                  </p>
                </div>
              </div>
            </section>
          </div>
          {/* Brands */}
          <section className=" mt-6 md:mt-10  border-white/10 pt-4 overflow-hidden">
            <p className="mb-6 text-center text-xs uppercase tracking-[0.35em] text-white/50">
              Trusted Partners & Fleet Brands
            </p>

            <div className="mx-auto max-w-5xl overflow-hidden">
              <div className="flex w-max animate-marquee items-center gap-12 tracking-tight whitespace-nowrap text-[18px] font-display  text-white/55">
                {[
                  "Vespa",
                  "KTM",
                  "Royal Enfield",
                  "Honda",
                  "Suzuki",
                  "TVS",
                  "Bajaj",
                  "Yamaha",
                  "Vespa",
                  "KTM",
                  "Royal Enfield",
                  "Honda",
                  "Suzuki",
                  "TVS",
                  "Bajaj",
                  "Yamaha",
                ].map((brand, index) => (
                  <span key={index} className="transition hover:text-white">
                    {brand}
                  </span>
                ))}
              </div>
            </div>
          </section>
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
