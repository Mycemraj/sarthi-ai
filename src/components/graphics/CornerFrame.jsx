export default function CornerFrame({ className = "", color = "rgba(255,255,255,0.35)", inset = 24 }) {
  const size = 22;
  const style = { "--i": `${inset}px` };

  return (
    <div
      className={`pointer-events-none absolute inset-0 ${className}`}
      style={style}
      aria-hidden="true"
    >
      <span
        className="absolute border-l border-t"
        style={{ top: inset, left: inset, width: size, height: size, borderColor: color }}
      />
      <span
        className="absolute border-r border-t"
        style={{ top: inset, right: inset, width: size, height: size, borderColor: color }}
      />
      <span
        className="absolute border-l border-b"
        style={{ bottom: inset, left: inset, width: size, height: size, borderColor: color }}
      />
      <span
        className="absolute border-r border-b"
        style={{ bottom: inset, right: inset, width: size, height: size, borderColor: color }}
      />
    </div>
  );
}
