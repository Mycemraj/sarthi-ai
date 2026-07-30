import PageHero from "../components/PageHero";
import { CheckIcon } from "../components/Icons";
import SectionLabel from "../components/graphics/SectionLabel";
import { sectors, visualCapabilities } from "../data/content";

export default function Sectors() {
  return (
    <div>
      <PageHero
        index="06"
        eyebrow="Industries Served"
        title="Trusted across critical industries"
        description="Our solutions support planning, compliance, and risk management across a wide range of sectors."
      />

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sectors.map((sector) => (
            <div
              key={sector.name}
              className="rounded-2xl border border-grey-dark/10 bg-white p-8 shadow-sm transition-shadow hover:shadow-lg"
            >
              <h3 className="font-heading text-lg font-semibold text-navy">{sector.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-grey-dark/70">{sector.blurb}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-grey-light py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <SectionLabel label="Visual & Imaging Capabilities" className="justify-center" />
          <p className="mx-auto mt-4 max-w-2xl text-center font-heading text-3xl font-bold text-navy">
            Insight you can see and act on
          </p>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {visualCapabilities.map((cap) => (
              <div
                key={cap}
                className="flex items-center gap-4 rounded-2xl bg-white p-6 shadow-sm"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy text-white">
                  <CheckIcon className="h-5 w-5" />
                </span>
                <span className="text-sm font-medium text-grey-dark">{cap}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
