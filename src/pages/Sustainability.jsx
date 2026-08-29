import PageHero from "../components/PageHero";
import SectionLabel from "../components/graphics/SectionLabel";
import ContourLines from "../components/graphics/ContourLines";
import Reveal from "../components/graphics/Reveal";
import { company, esgPillars, services } from "../data/content";

import forestCanopy from "../assets/photos/forest-canopy.jpg";

const eia = services.find((s) => s.id === "eia");
const dmp = services.find((s) => s.id === "dmp");

export default function Sustainability() {
  return (
    <div>
      <PageHero
        id="sustainability"
        index="05"
        eyebrow="Sustainability & ESG"
        title="Resilience and responsibility, by design"
        description="Environmental stewardship and disaster resilience aren't an add-on service — they're built into the methodology behind every engagement."
      />

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <Reveal>
          <SectionLabel index="01" label="Environmental & Sustainability Solutions" />
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-grey-dark/80">
            {company.sustainability}
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl border border-grey-dark/10 p-6">
              <h3 className="font-heading text-lg font-semibold text-navy">
                Environmental Compliance
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-grey-dark/70">
                Baseline studies, impact assessment, and mitigation planning aligned to national
                and international guidelines — the full {eia.title} breakdown lives in Core
                Services.
              </p>
              <a href="#eia" className="mt-4 inline-block text-sm font-semibold text-teal">
                View EIA capabilities →
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-full rounded-2xl border border-grey-dark/10 p-6">
              <h3 className="font-heading text-lg font-semibold text-navy">
                Disaster Resilience
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-grey-dark/70">
                Hazard mapping, emergency response planning, and recovery frameworks — the full{" "}
                {dmp.title} breakdown lives in Core Services.
              </p>
              <a href="#dmp" className="mt-4 inline-block text-sm font-semibold text-teal">
                View disaster planning capabilities →
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="relative h-72 overflow-hidden sm:h-96">
        <img
          src={forestCanopy}
          alt="Aerial view of forest canopy"
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <p className="mx-auto max-w-3xl px-6 pb-10 text-center font-heading text-2xl font-semibold text-white sm:text-3xl">
            Every engagement is measured against its ecological footprint —
            not just its outcome.
          </p>
        </div>
      </div>

      <section className="relative overflow-hidden bg-navy py-20 text-white">
        <ContourLines opacity={0.12} color="#2E8B57" />
        <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
          <Reveal>
            <SectionLabel index="02" label="ESG Commitment" dark />
            <p className="mt-4 max-w-2xl font-heading text-3xl font-bold">
              Environmental, Social & Governance
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {esgPillars.map((pillar, i) => (
              <Reveal key={pillar.pillar} delay={i * 0.1}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6">
                  <h3 className="font-heading text-base font-semibold text-emerald">
                    {pillar.pillar}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">
                    {pillar.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Reveal className="mx-auto max-w-4xl px-6 py-16 text-center lg:px-8">
        <p className="text-grey-dark/70">
          Have an environmental or disaster-risk requirement you need to plan around?
        </p>
        <a
          href="#contact"
          className="mt-6 inline-block rounded-full bg-navy px-8 py-3 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-teal"
        >
          Talk to Our Team
        </a>
      </Reveal>
    </div>
  );
}
