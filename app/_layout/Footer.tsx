import { FaInstagram, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#002c50] py-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.18),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.12),transparent_30%)]" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 text-center lg:flex-row lg:px-12 lg:text-left">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logoofooter.png"
            alt="Roam Kannur"
             width={240}
            height={80}
            className="h-15 md:h-18 w-auto object-contain"
            priority
          />
        </Link>

        {/* Connect Us */}
        <div className="flex flex-col items-center gap-4 ">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] font-normal text-slate-400">
            Connect With Us
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/roamkannur_bikerental?igsh=azRsM2hkaGp2ZHph"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xl text-white backdrop-blur-xl transition hover:scale-110 hover:bg-pink-500"
            >
              <FaInstagram />
            </a>

            <a
              href="https://wa.me/+919526452995"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xl text-white backdrop-blur-xl transition hover:scale-110 hover:bg-green-500"
            >
              <FaWhatsapp />
            </a>

            <a
              href="tel:+91 95264 52995"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xl text-white backdrop-blur-xl transition hover:scale-110 hover:bg-blue-500"
            >
              <FaPhoneAlt />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-sm text-slate-500">
          © 2026 <span className="font-semibold text-white">RoaM</span>. All
          rights reserved.
        </div>
      </div>
    </footer>
  );
}
