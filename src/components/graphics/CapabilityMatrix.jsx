export default function CapabilityMatrix({ columns, rows }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-grey-dark/10">
      <table className="w-full min-w-[640px] border-collapse text-sm">
        <thead>
          <tr className="bg-navy">
            <th className="w-64 px-5 py-4 text-left text-xs font-semibold uppercase tracking-wider text-white/70">
              Capability
            </th>
            {columns.map((col) => (
              <th
                key={col}
                className="px-3 py-4 text-center text-xs font-semibold uppercase tracking-wider text-white/70"
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={row.name} className={i % 2 === 0 ? "bg-white" : "bg-grey-light"}>
              <td className="px-5 py-4 text-left font-medium text-navy">{row.name}</td>
              {row.values.map((active, j) => (
                <td key={j} className="px-3 py-4 text-center">
                  <span
                    className={`mx-auto block h-2.5 w-2.5 rounded-full ${
                      active ? "bg-emerald" : "bg-grey-dark/10"
                    }`}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
