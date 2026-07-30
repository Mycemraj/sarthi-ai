import { useState } from "react";
import { ChevronDownIcon } from "./Icons";

export default function ServiceAccordion({ service, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div
      id={service.id}
      className="scroll-mt-24 overflow-hidden rounded-2xl border border-grey-dark/10 bg-white shadow-sm"
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full cursor-pointer items-center gap-5 px-6 py-6 text-left"
        aria-expanded={open}
      >
        <span className="font-mono text-3xl font-bold text-azure">{service.number}</span>
        <span className="flex-1">
          <span className="block font-heading text-lg font-semibold text-navy">
            {service.title}
          </span>
          <span className="mt-1 block text-sm leading-relaxed text-grey-dark/70">
            {service.summary}
          </span>
        </span>
        <ChevronDownIcon
          className={`ml-2 h-6 w-6 shrink-0 text-teal transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="grid grid-cols-1 gap-8 border-t border-grey-dark/10 bg-grey-light/60 px-6 py-8 md:grid-cols-2">
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-teal">
              Key Capabilities
            </h4>
            <ul className="mt-3 space-y-2">
              {service.capabilities.map((c) => (
                <li key={c} className="flex gap-2 text-sm leading-relaxed text-grey-dark/80">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            {service.applications && (
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-widest text-teal">
                  Applications
                </h4>
                <ul className="mt-3 space-y-2">
                  {service.applications.map((a) => (
                    <li key={a} className="flex gap-2 text-sm leading-relaxed text-grey-dark/80">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald" />
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-teal">
                Deliverables
              </h4>
              <ul className="mt-3 space-y-2">
                {service.deliverables.map((d) => (
                  <li key={d} className="flex gap-2 text-sm leading-relaxed text-grey-dark/80">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
