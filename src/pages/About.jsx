import PageHero from "../components/PageHero";
import SectionLabel from "../components/graphics/SectionLabel";
import Reveal from "../components/graphics/Reveal";
import StatBlock from "../components/graphics/StatBlock";
import earthIndia from "../assets/photos/earth-india.jpg";
import {
  PrecisionIcon,
  ShieldCheckIcon,
  InnovationIcon,
  LeafIcon,
  LayersIcon,
  CpuIcon,
  DashboardIcon,
  BoltIcon,
  TrendingUpIcon,
  GlobeIcon,
} from "../components/graphics/PointIcons";
import {
  company,
  executiveOverview,
  stats,
  coreValues,
  competitiveAdvantages,
  futureVision,
} from "../data/content";

const CORE_VALUE_ICONS = {
  Precision: PrecisionIcon,
  "Compliance & Integrity": ShieldCheckIcon,
  Innovation: InnovationIcon,
  Sustainability: LeafIcon,
};

const ADVANTAGE_ICONS = {
  "Integrated, Not Siloed": LayersIcon,
  "Technology-Led Delivery": CpuIcon,
  "Compliance-First Approach": ShieldCheckIcon,
  "Decision-Ready Deliverables": DashboardIcon,
};

const HORIZON_ICONS = {
  "Near-Term": BoltIcon,
  "Mid-Term": TrendingUpIcon,
  "Long-Term": GlobeIcon,
};

export default function About() {
  return (
    <div>
      <PageHero
        id="about"
        index="02"
        eyebrow="About Us"
        title="Engineering resilient, sustainable futures"
        description="Geospatial, environmental, and AI expertise applied to infrastructure, industrial, and renewable energy programs that can't afford to get the site wrong."
      />

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <Reveal>
          <SectionLabel index="01" label={executiveOverview.kicker} />
          <h2 className="mt-4 max-w-3xl font-heading text-3xl font-bold text-navy sm:text-4xl">
            {executiveOverview.headline}
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-grey-dark/70">
            {executiveOverview.body}
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-8 border-t border-grey-dark/10 pt-10 sm:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08}>
              <StatBlock
                value={stat.value}
                suffix={stat.suffix}
                padTo={stat.padTo}
                label={stat.label}
              />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20 lg:px-8">
        <Reveal>
          <SectionLabel index="02" label="About the Company" />
          <p className="mt-6 text-lg leading-relaxed text-grey-dark/80">{company.about}</p>
        </Reveal>
      </section>

      <section className="bg-grey-light py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <Reveal>
            <SectionLabel index="03" label="Vision, Mission & Core Values" />
          </Reveal>

          <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-2xl bg-white p-8 shadow-sm">
                <h2 className="font-heading text-xl font-bold text-navy">Vision</h2>
                <p className="mt-4 leading-relaxed text-grey-dark/70">{company.vision}</p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="h-full rounded-2xl bg-white p-8 shadow-sm">
                <h2 className="font-heading text-xl font-bold text-navy">Mission</h2>
                <ul className="mt-4 space-y-3">
                  {company.mission.map((item) => (
                    <li key={item} className="flex gap-3 text-grey-dark/70">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((value, i) => {
              const Icon = CORE_VALUE_ICONS[value.title];
              return (
                <Reveal key={value.title} delay={(i % 4) * 0.08}>
                  <div className="h-full rounded-2xl bg-white p-6 shadow-sm">
                    {Icon && (
                      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-teal/10 text-teal">
                        <Icon className="h-5 w-5" />
                      </div>
                    )}
                    <h3 className="font-heading text-base font-semibold text-navy">
                      {value.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-grey-dark/70">
                      {value.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <Reveal>
          <SectionLabel index="04" label="Competitive Advantages" />
          <p className="mt-4 max-w-2xl font-heading text-3xl font-bold text-navy">
            What sets our practice apart
          </p>
        </Reveal>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {competitiveAdvantages.map((item, i) => {
            const Icon = ADVANTAGE_ICONS[item.title];
            return (
              <Reveal key={item.title} delay={(i % 2) * 0.1}>
                <div className="h-full rounded-2xl border border-grey-dark/10 p-6">
                  {Icon && (
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-navy/5 text-navy">
                      <Icon className="h-5 w-5" />
                    </div>
                  )}
                  <h3 className="font-heading text-lg font-semibold text-navy">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-grey-dark/70">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden py-20 text-white">
        <img
          src={earthIndia}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-navy/85" />
        <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
          <Reveal>
            <SectionLabel index="05" label="Future Vision" dark />
            <p className="mt-4 max-w-2xl font-heading text-3xl font-bold">
              {futureVision.statement}
            </p>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {futureVision.horizons.map((horizon, i) => {
              const Icon = HORIZON_ICONS[horizon.title];
              return (
                <Reveal key={horizon.title} delay={(i % 3) * 0.1}>
                  <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6">
                    {Icon && (
                      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-azure/10 text-azure">
                        <Icon className="h-5 w-5" />
                      </div>
                    )}
                    <h3 className="font-heading text-base font-semibold text-azure">
                      {horizon.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/70">
                      {horizon.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 text-center lg:px-8">
        <p className="text-grey-dark/70">
          Explore the technology stack behind our services, or our environmental and ESG
          commitments.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <a
            href="#technology"
            className="rounded-full bg-navy px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-teal"
          >
            View Technology
          </a>
          <a
            href="#sustainability"
            className="rounded-full border border-navy/20 px-6 py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-grey-light"
          >
            View Sustainability &amp; ESG
          </a>
        </div>
      </section>
    </div>
  );
}
