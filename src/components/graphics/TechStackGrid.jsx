export default function TechStackGrid({ layers }) {
  return (
    <div className="space-y-3">
      {layers.map((layer, i) => (
        <div
          key={layer.name}
          className="flex flex-col gap-4 rounded-xl border border-grey-dark/10 bg-white p-5 sm:flex-row sm:items-center"
        >
          <div className="flex shrink-0 items-center gap-3 sm:w-56">
            <span className="font-mono text-xs text-azure">{String(i + 1).padStart(2, "0")}</span>
            <span className="text-sm font-semibold text-navy">{layer.name}</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {layer.items.map((item) => (
              <span
                key={item}
                className="rounded-full bg-grey-light px-3 py-1.5 text-xs font-medium text-grey-dark"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
