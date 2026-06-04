// FloatingContact.tsx

"use client";

import { useEffect, useRef, useState } from "react";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaComments,
} from "react-icons/fa";

export default function FloatingContact() {
  const [open, setOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside,
      );
    };
  }, []);

  return (
    <div
      ref={menuRef}
      className="fixed bottom-6 right-6 z-[999] flex flex-col items-end gap-3"
    >
      {/* Options */}
      {open && (
        <div className="flex flex-col items-end gap-3">
          {/* WhatsApp */}
          <a
            href="https://wa.me/+919526452995"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-600 to-sky-500 px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(37,99,235,0.35)] transition duration-300 hover:scale-105"
          >
            <FaWhatsapp className="text-xl" />
            WhatsApp
          </a>

          {/* Call */}
          <a
            href="tel:+919526452995"
            className="flex items-center gap-3 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(15,23,42,0.35)] transition duration-300 hover:scale-105"
          >
            <FaPhoneAlt className="text-lg" />
            Call Us
          </a>
        </div>
      )}

      {/* Main Button */}
      <button
        onClick={() => setOpen(!open)}
        className={`flex h-16 w-16 items-center justify-center rounded-full text-3xl text-white shadow-lg transition duration-300 hover:scale-110 ${
          open
            ? "bg-slate-900"
            : "bg-gradient-to-r from-blue-600 to-sky-500"
        }`}
      >
        <FaComments />
      </button>
    </div>
  );
}