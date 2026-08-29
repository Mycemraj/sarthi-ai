import PageHero from "../components/PageHero";
import SectionLabel from "../components/graphics/SectionLabel";
import TechStackGrid from "../components/graphics/TechStackGrid";
import CapabilityMatrix from "../components/graphics/CapabilityMatrix";
import Reveal from "../components/graphics/Reveal";
import { ArrowRightIcon } from "../components/Icons";
import { techStackLayers, capabilityMatrix } from "../data/content";

import aiDataStreams from "../assets/photos/ai-data-streams.jpg";

const aiArchitecture = [
  {
    stage: "Data Sources",
    items: ["Satellite Imagery", "Drone & Aerial Capture", "Field & Sensor Data"],
  },
  {
    stage: "AI / ML Models",
    items: ["LULC Classification", "Predictive Analytics", "Anomaly Detection"],
  },
  {
    stage: "Decision Outputs",
    items: ["Suitability Rankings", "Risk Forecasts", "Dashboards & Alerts"],
  },
];

export default function Technology() {
  return (
    <div>
      <PageHero
        id="technology"
        index="04"
        eyebrow="Technology & Innovation"
        title="An AI-native technology stack"
        description="Geospatial and environmental expertise is delivered through a connected stack — acquisition, processing, intelligence, and visualization work as one system."
      />

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <Reveal>
          <SectionLabel index="01" label="Technology Stack" />
          <p className="mt-4 max-w-2xl font-heading text-3xl font-bold text-navy">
            Four layers, one connected pipeline
          </p>
        </Reveal>
        <Reveal delay={0.1} className="mt-10">
          <TechStackGrid layers={techStackLayers} />
        </Reveal>
      </section>

      <section className="relative overflow-hidden py-20">
        <img
          src={aiDataStreams}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-navy/90" />
        <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
          <Reveal>
            <SectionLabel index="02" label="AI & Machine Learning Solutions" dark />
            <p className="mt-4 max-w-3xl font-heading text-3xl font-bold text-white">
              One pipeline, from raw capture to a decision on someone's desk
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 items-stretch gap-4 sm:grid-cols-3">
            {aiArchitecture.map((stage, i) => (
              <Reveal key={stage.stage} delay={i * 0.1} className="relative">
                <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                  <span className="font-mono text-xs text-azure">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 font-heading text-base font-semibold text-white">
                    {stage.stage}
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {stage.items.map((item) => (
                      <li key={item} className="text-sm text-white/70">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                {i < aiArchitecture.length - 1 && (
                  <ArrowRightIcon className="absolute -right-5 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-white/30 sm:block" />
                )}
              </Reveal>
            ))}
          </div>

          <a
            href="#ai-ml"
            className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-azure"
          >
            View full AI/ML capability list →
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <Reveal>
          <SectionLabel index="03" label="Capability Matrix" />
          <p className="mt-4 max-w-2xl font-heading text-3xl font-bold text-navy">
            Where each capability applies
          </p>
        </Reveal>
        <Reveal delay={0.1} className="mt-10">
          <CapabilityMatrix columns={capabilityMatrix.columns} rows={capabilityMatrix.rows} />
        </Reveal>
      </section>
    </div>
  );
}
