export default function WhyChooseUs() {
  const features = [
    {
      icon: "⚡",
      title: "Instant Booking",
      desc: "Book your Vehicle within seconds with a smooth and hassle-free process.",
    },
    {
      icon: "🛵",
      title: "Premium Fleet",
      desc: "Ride stylish, comfortable, and well-maintained electric Vehicles.",
    },
    {
      icon: "☎️",
      title: "24/7 Support",
      desc: "Our support team is always available whenever you need assistance.",
    },
  ];

  return (
    <section className="relative overflow-hidden py-32 font-serif">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=1600&auto=format&fit=crop"
        alt="Vehicle"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-slate-900/70" />

      {/* Blue Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.22),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(15,23,42,0.55),transparent_35%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        {/* Heading */}
        <div className="text-center">
          <span className="rounded-full border border-white/10 bg-white/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-blue-200 backdrop-blur-xl">
            Why Choose Us
          </span>

          <h2 className="mt-8 text-5xl  font-normal text-white lg:text-6xl">
            Premium Vehicle Rental Experience
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Fast, affordable, and reliable Vehicle rentals designed for modern
            city travel.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="mt-24 grid gap-8 lg:grid-cols-3">
          {features.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[34px] border border-white/10 bg-white p-8 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-3 hover:border-blue-400/40 hover:shadow-[0_25px_80px_rgba(37,99,235,0.18)]"
            >
              {/* Card Glow */}
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-500/10 blur-3xl transition duration-500 group-hover:bg-blue-500/20" />

              {/* Top Border */}
              <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-blue-500 via-sky-400 to-slate-900" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-600 to-slate-900 text-3xl text-white shadow-2xl">
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="mt-8 text-3xl font-black text-slate-900">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-4 leading-8 text-slate-600">
                  {item.desc}
                </p>

                {/* Bottom Line */}
                <div className="mt-6 h-[2px] w-16 rounded-full bg-gradient-to-r from-blue-500 to-slate-900 transition-all duration-500 group-hover:w-28" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}