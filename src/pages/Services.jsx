import PageHero from "../components/PageHero";
import ServiceAccordion from "../components/ServiceAccordion";
import SectionLabel from "../components/graphics/SectionLabel";
import ProcessWorkflow from "../components/graphics/ProcessWorkflow";
import Reveal from "../components/graphics/Reveal";
import { services, methodology, sectors } from "../data/content";

export default function Services() {
  return (
    <div>
      <PageHero
        id="services"
        index="02"
        eyebrow="Core Services"
        title="Six disciplines, one integrated approach"
        description="From site suitability to AI-enabled analytics, our services are designed to work together across the project lifecycle."
      />

      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <div className="space-y-6">
          {services.map((service, i) => (
            <Reveal key={service.id} delay={(i % 3) * 0.06}>
              <ServiceAccordion service={service} defaultOpen={i === 0} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-grey-light py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <Reveal>
            <SectionLabel index="01" label="Methodology & Workflow" />
            <p className="mt-4 max-w-2xl font-heading text-3xl font-bold text-navy">
              How an engagement runs, start to finish
            </p>
          </Reveal>
          <Reveal delay={0.1} className="mt-12">
            <ProcessWorkflow steps={methodology} />
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <Reveal>
          <SectionLabel index="02" label="Industries We Serve" />
          <p className="mt-4 max-w-2xl font-heading text-3xl font-bold text-navy">
            Applied across critical sectors
          </p>
        </Reveal>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sectors.map((sector, i) => (
            <Reveal key={sector.name} delay={(i % 3) * 0.08}>
              <div className="h-full rounded-2xl border border-grey-dark/10 p-6">
                <h3 className="font-heading text-base font-semibold text-navy">{sector.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-grey-dark/70">{sector.blurb}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <a
          href="#sectors"
          className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-teal"
        >
          View full industry coverage →
        </a>
      </section>
    </div>
  );
}
