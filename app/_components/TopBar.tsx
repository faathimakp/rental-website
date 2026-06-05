"use client"
import { FiMapPin, FiPhone, FiChevronRight } from "react-icons/fi";

export default function TopBar() {
  return (
    <div className="h-12 bg-gradient-to-r from-[#002c50] via-[#0f4c81] to-[#001d36] text-white">
      <div className="mx-auto flex h-full items-center justify-between px-6 lg:px-12 text-sm">
        
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <FiMapPin />
            <span>Kannur · Kerala · India</span>
          </div>

          <div className="flex items-center gap-2">
            <FiPhone />
            <span>+91 95264 52995</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-2 uppercase tracking-[2px]">
          <span className="h-2 w-2 rounded-full bg-cyan-300"></span>
          <span>Special Offer — Up to 20% Off</span>
          <FiChevronRight />
        </div>

      </div>
    </div>
  );
}