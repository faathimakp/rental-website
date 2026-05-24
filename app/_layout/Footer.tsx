export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#0f172a] py-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.18),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.12),transparent_30%)]" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 text-center lg:flex-row lg:px-12 lg:text-left">
        <div>
          <h3 className="text-3xl font-black text-white">
           Roa
            <span className="bg-gradient-to-r from-blue-400 to-sky-300 bg-clip-text text-transparent">
            M
            </span>
          </h3>
        </div>

        <div className="text-sm text-slate-500">
          © 2026{" "}
          <span className="font-semibold text-white">RoaM</span>. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}