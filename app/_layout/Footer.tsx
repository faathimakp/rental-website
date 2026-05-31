import {
  FaInstagram,
  FaWhatsapp,
  FaPhoneAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#0f172a] py-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.18),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.12),transparent_30%)]" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 text-center lg:flex-row lg:px-12 lg:text-left">
        {/* Logo */}
        <div>
          <h3 className="text-3xl font-black text-white font-sans">
            Roa
            <span className="bg-gradient-to-r from-blue-400 to-sky-300 bg-clip-text text-transparent">
              M
            </span>
          </h3>
        </div>

        {/* Connect Us */}
        <div className="flex flex-col items-center gap-4 ">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] font-normal text-slate-400">
            Connect With Us
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xl text-white backdrop-blur-xl transition hover:scale-110 hover:bg-pink-500"
            >
              <FaInstagram />
            </a>

            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xl text-white backdrop-blur-xl transition hover:scale-110 hover:bg-green-500"
            >
              <FaWhatsapp />
            </a>

            <a
              href="tel:+919999999999"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xl text-white backdrop-blur-xl transition hover:scale-110 hover:bg-blue-500"
            >
              <FaPhoneAlt />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-sm text-slate-500">
          © 2026{" "}
          <span className="font-semibold text-white">RoaM</span>. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}