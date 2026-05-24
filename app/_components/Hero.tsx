import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=1600&auto=format&fit=crop"
        alt="Scooter"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0f172a]/65" />

      {/* Gradient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.25),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(15,23,42,0.2),transparent_35%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col justify-between gap-16 px-6 py-32 lg:flex-row lg:items-center lg:px-12">
        {/* Left */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-5 py-2 text-sm text-white backdrop-blur-xl">
            ⚡ Fast Booking • Premium Electric Scooters
          </div>

          <h1 className="mt-8 text-6xl font-black leading-[0.95] tracking-tight text-white sm:text-7xl lg:text-8xl">
            Ride Beyond
            <span className="bg-gradient-to-r from-blue-500 via-sky-400 to-white bg-clip-text text-transparent">
              {" "}
              Limits
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-200">
            Experience premium electric scooter rentals with comfort,
            performance, and instant booking for modern urban travel.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link href="#scooter-showcase" className="inline-block">
                <button className="rounded-2xl bg-gradient-to-r from-blue-600 via-sky-500 to-slate-900 px-8 py-4 text-lg font-bold text-white shadow-[0_0_40px_rgba(37,99,235,0.35)] transition hover:scale-105">
                  Start Riding
                </button>
            </Link>
          </div>
        </div>

        {/* Right Cards */}
        <div className="flex flex-col gap-6">
          <div className=" w-[250px] md:w-[300px] rounded-[32px] border border-white/10 bg-white/10 p-8 backdrop-blur-2xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-300">Support</p>
                <h3 className="mt-2 text-5xl font-black text-white">24/7</h3>
              </div>

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0f172a] text-3xl">
                ☎️
              </div>
            </div>

            <p className="mt-6 leading-7 text-slate-200">
              Round-the-clock customer assistance for all your rides.
            </p>
          </div>

          <div className="w-[250px] md:w-[300px] rounded-[32px] border border-white/10 bg-white/10 p-8 backdrop-blur-2xl">
            <p className="text-sm text-slate-300">Available Scooters</p>

            <h3 className="mt-2 text-5xl font-black text-white">500+</h3>

            <p className="mt-6 leading-7 text-slate-200">
              Premium electric scooters ready for instant booking.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}