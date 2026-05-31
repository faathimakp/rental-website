import Link from "next/link";

export default function Cta() {
  return (
    <section className="relative overflow-hidden py-28 font-serif">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.18),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(15,23,42,0.4),transparent_35%)]" />

      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[40px] border border-white/10 bg-[#0f172a] px-8 py-20 text-center shadow-2xl lg:px-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-slate-900/40" />

        <div className="relative z-10">
          <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2 text-sm font-medium text-blue-300">
            Premium Urban Mobility
          </span>

          <h2 className="mt-8 text-5xl font-black leading-tight text-white lg:text-6xl">
            Ready to Hit the Road?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Start your journey today with premium electric Vehicles designed
            for modern city travel and seamless urban commuting.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
            href="#Vehicle-showcase"
              className="inline-block rounded-2xl bg-white px-10 py-5 text-lg font-black text-[#0f172a] shadow-[0_0_40px_rgba(37,99,235,0.35)] transition hover:scale-105"
            >
              Book Your Vehicle
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}