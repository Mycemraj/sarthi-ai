export default function StatBlock({ value, label, dark = false }) {
  return (
    <div className="text-center sm:text-left">
      <div
        className={`font-mono text-4xl font-semibold tracking-tight sm:text-5xl ${
          dark ? "text-white" : "text-navy"
        }`}
      >
        {value}
      </div>
      <p className={`mt-2 text-sm leading-snug ${dark ? "text-white/60" : "text-grey-dark/60"}`}>
        {label}
      </p>
    </div>
  );
}
