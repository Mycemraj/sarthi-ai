import droneClip from "../../assets/drone-showcase.webm";

export default function DroneShowcaseCard({ className = "" }) {
  return (
    <div
      className={`pointer-events-none absolute z-[5] w-36 overflow-hidden rounded-2xl border border-white/20 bg-black/60 shadow-2xl backdrop-blur-sm sm:w-48 ${className}`}
    >
      <video
        className="aspect-square w-full object-cover opacity-90"
        src={droneClip}
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="flex items-center gap-1.5 border-t border-white/10 px-2.5 py-1.5">
        <span className="h-1.5 w-1.5 shrink-0 animate-pulse rounded-full bg-emerald" />
        <span className="font-mono text-[10px] tracking-wide text-white/80">AERIAL UNIT · LIVE</span>
      </div>
    </div>
  );
}
