export default function SectionLabel({ index, label, dark = false, className = "" }) {
  const numberColor = dark ? "text-azure" : "text-teal";
  const labelColor = dark ? "text-white/70" : "text-grey-dark/70";
  const ruleColor = dark ? "bg-white/30" : "bg-grey-dark/30";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {index && (
        <span className={`font-mono text-xs tracking-widest ${numberColor}`}>{index}</span>
      )}
      <span className={`h-px w-8 ${ruleColor}`} />
      <span className={`text-xs font-semibold uppercase tracking-[0.22em] ${labelColor}`}>
        {label}
      </span>
    </div>
  );
}
