function AICore() {
  return (
    <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 -z-10">

      {/* Glow exterior */}
      <div className="absolute inset-0 rounded-full bg-violet-600/10 blur-[80px]" />

      {/* Anillo exterior */}
      <div className="absolute inset-10 rounded-full border border-violet-400/10 animate-[spin_30s_linear_infinite]" />

      {/* Segundo anillo */}
      <div className="absolute inset-20 rounded-full border border-cyan-400/10 animate-[spin_20s_linear_infinite_reverse]" />

      {/* Núcleo */}
      <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2">

        <div className="absolute inset-0 rounded-full bg-violet-500/20 blur-2xl animate-pulse" />

        <div className="absolute inset-3 rounded-full border border-violet-300/40 bg-violet-500/10 backdrop-blur-md" />

        <div className="absolute inset-7 rounded-full bg-violet-400 shadow-[0_0_40px_10px_rgba(139,92,246,0.4)] animate-pulse" />

      </div>

      {/* Puntos orbitales */}

      <div className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-cyan-400 shadow-[0_0_20px_5px_rgba(34,211,238,0.5)]" />

      <div className="absolute bottom-0 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-violet-400 shadow-[0_0_20px_5px_rgba(167,139,250,0.5)]" />

      <div className="absolute left-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-fuchsia-400 shadow-[0_0_20px_5px_rgba(232,121,249,0.5)]" />

      <div className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-cyan-400 shadow-[0_0_20px_5px_rgba(34,211,238,0.5)]" />

    </div>
  )
}

export default AICore