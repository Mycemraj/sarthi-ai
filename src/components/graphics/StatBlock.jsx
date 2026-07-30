import NumberTicker from "./NumberTicker";

export default function StatBlock({ value, suffix = "", padTo = 0, label, dark = false }) {
  return (
    <div className="text-center sm:text-left">
      <div
        className={`font-mono text-4xl font-semibold tracking-tight sm:text-5xl ${
          dark ? "text-white" : "text-navy"
        }`}
      >
        <NumberTicker value={value} padTo={padTo} />
        {suffix}
      </div>
      <p className={`mt-2 text-sm leading-snug ${dark ? "text-white/60" : "text-grey-dark/60"}`}>
        {label}
      </p>
    </div>
  );
}
