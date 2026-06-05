
// import Link from "next/link";
// import Image from "next/image";
// import { FiChevronRight } from "react-icons/fi";

// export default function Header() {
//   return (
//     <header className="fixed top-0 z-50 w-full border-b border-slate-200 bg-white shadow-lg">
//       <div className="mx-auto flex max-w-7xl items-center justify-between px-6  py-2 lg:px-12">
//         {/* Logo */}
//         <Link href="/">
//           <Image
//             src="/headerlogoo.png"
//             alt="Roam Kannur"
//             width={240}
//             height={80}
//             className="h-15 md:h-18 w-auto object-contain"
//             priority
//           />
//         </Link>

//         {/* Button */}
//         <Link href="/showcase">
//          <button
                
//                 className="
//     inline-flex items-center gap-1
//     rounded-full
//     px-4 md:px-6 h-11
//     text-white font-bold text-lg
//     bg-gradient-to-r
//     from-[#041c5a]
//     via-[#0a3dba]
//     to-[#3b82f6]
    
//     hover:-translate-y-0.5
//     transition-all duration-300
//   "
//               >
//   <span>Book a ride</span>
//   <FiChevronRight size={24} />
// </button>
//         </Link>
//       </div>
//     </header>
//   );
// }



"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FiChevronRight,
  FiMapPin,
  FiPhone,
} from "react-icons/fi";

export default function Header() {
  const [showTopBar, setShowTopBar] = useState(true);

  useEffect(() => {
    let lastScroll = 0;

    const handleScroll = () => {
      const currentScroll = window.scrollY;

      // Hide top bar while scrolling down
      if (currentScroll > lastScroll && currentScroll > 50) {
        setShowTopBar(false);
      } else {
        // Show again when scrolling up
        setShowTopBar(true);
      }

      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  return (
    <>
      {/* Top blue bar */}
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          showTopBar
            ? "translate-y-0"
            : "-translate-y-full"
        }`}
      >
       <div className="h-12 bg-gradient-to-r from-[#002c50] via-[#0f4c81] to-[#001d36] text-white">
  <div className="mx-auto flex h-full max-w-7xl items-center justify-center px-6 text-sm">

    <div className="flex items-center gap-4 md:gap-8">

      {/* Location */}
      <div className="flex items-center gap-2">
        <FiMapPin size={13} />
        <span>Kannur · Kerala · India</span>
      </div>

     

      {/* Phone - hidden on mobile */}
      <div className="hidden md:flex items-center gap-2">
        <FiPhone size={15} />
        <span>+91 92490 56412</span>
      </div>

    </div>

  </div>
</div>
      </div>

      {/* Main Header */}
      <header
        className={`fixed left-0 z-40 w-full border-b border-slate-200 bg-white shadow-lg transition-all duration-300 ${
          showTopBar ? "top-12" : "top-0"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 lg:px-12">

          {/* Logo */}
          <Link href="/">
            <Image
              src="/headerlogoo.png"
              alt="Roam Kannur"
              width={240}
              height={80}
              className="h-15 md:h-18 w-auto object-contain"
              priority
            />
          </Link>

          {/* Button */}
          <Link href="/showcase">
            <button
              className="
                inline-flex  items-center gap-1
                rounded-full
                px-3 md:px-6 h-10 md:h-11
                text-white font-bold text-[15px] md:text-lg
                bg-[#032d95]
                from-[#041c5a]
                via-[#0a3dba]
                to-[#3b82f6]
                hover:-translate-y-0.5
                transition-all duration-300
              "
            >
              <span>Book a ride</span>
               {/* <FiChevronRight size={24} /> */}
            </button>
          </Link>

        </div>
      </header>
    </>
  );
}