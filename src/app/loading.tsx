export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-bg text-emerald-500 font-mono overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]"></div>

      <div className="relative w-48 h-48 flex items-center justify-center mb-12">
        {/* Outer Ring */}
        <div className="absolute inset-0 border-2 border-emerald-900/50 rounded-full"></div>
        <div className="absolute inset-0 border-t-2 border-emerald-500 rounded-full animate-[spin_3s_linear_infinite] shadow-[0_0_15px_rgba(16,185,129,0.5)]"></div>

        {/* Middle Ring */}
        <div className="absolute inset-4 border-2 border-emerald-900/30 rounded-full"></div>
        <div className="absolute inset-4 border-r-2 border-lime-500 rounded-full animate-[spin_2s_linear_infinite_reverse] shadow-[0_0_10px_rgba(132,204,22,0.5)]"></div>

        {/* Inner Ring */}
        <div className="absolute inset-12 border-2 border-emerald-900/20 rounded-full"></div>
        <div className="absolute inset-12 border-b-2 border-emerald-400 rounded-full animate-[spin_1.5s_linear_infinite]"></div>

        {/* Core */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-4 h-4 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_20px_rgba(16,185,129,0.8)]"></div>
        </div>
      </div>

      {/* Text Content */}
      <div className="relative z-10 text-center space-y-4">
        <h2 className="text-2xl font-bold tracking-[0.3em] text-white animate-pulse">
          SYSTEM<span className="text-emerald-500">.LOAD</span>
        </h2>
        <div className="flex flex-col gap-1 text-xs text-emerald-500/70 tracking-widest">
          <p className="animate-[pulse_2s_infinite]">INITIALIZING CORE MODULES...</p>
          <p className="animate-[pulse_3s_infinite_0.5s]">ESTABLISHING SECURE UPLINK...</p>
        </div>
      </div>

      {/* Decorative corners */}
      <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-emerald-500/30 rounded-tl-lg"></div>
      <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-emerald-500/30 rounded-tr-lg"></div>
      <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-emerald-500/30 rounded-bl-lg"></div>
      <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-emerald-500/30 rounded-br-lg"></div>
    </div>
  );
}
