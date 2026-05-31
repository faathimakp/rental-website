import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-slate-200 bg-white/70 backdrop-blur-xl shadow-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-12">
        <h3 className="text-3xl font-black text-black font-sans">
           Roa
            <span className="bg-gradient-to-r from-blue-400 to-sky-300 bg-clip-text text-transparent">
            M
            </span>
          </h3>

       <Link href={"/showcase"}>
            <button className="rounded-full font-normal border border-blue-700 bg-blue-50 px-3.5 md:px-6 py-1.5 md:py-3 text-sm font-semibold text-blue-700 transition hover:bg-blue-700 hover:text-white">
              Book Ride
            </button>
       </Link>
      </div>
    </header>
  );
}