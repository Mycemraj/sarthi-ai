import PageHero from "../components/PageHero";
import { CheckIcon } from "../components/Icons";
import SectionLabel from "../components/graphics/SectionLabel";
import { sectors, visualCapabilities } from "../data/content";

import solarFarm from "../assets/photos/solar-farm.jpg";
import industrialFacility from "../assets/photos/industrial-facility.jpg";
import cityNight from "../assets/photos/city-night.jpg";
import miningQuarry from "../assets/photos/mining-quarry.jpg";
import powerLines from "../assets/photos/power-lines.jpg";
import earthSatellite from "../assets/photos/earth-satellite.jpg";

const SECTOR_IMAGES = {
  "Renewable Energy (Solar, Wind)": solarFarm,
  "Industrial & Manufacturing": industrialFacility,
  "Infrastructure & Urban Development": cityNight,
  "Mining & Natural Resources": miningQuarry,
  Power: powerLines,
  "Government & Public Sector": earthSatellite,
};

export default function Sectors() {
  return (
    <div>
      <PageHero
        id="sectors"
        index="05"
        eyebrow="Industries Served"
        title="Trusted across critical industries"
        description="Our solutions support planning, compliance, and risk management across a wide range of sectors."
      />

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sectors.map((sector) => (
            <div
              key={sector.name}
              className="group relative h-72 overflow-hidden rounded-2xl shadow-sm transition-shadow hover:shadow-xl"
            >
              <img
                src={SECTOR_IMAGES[sector.name]}
                alt=""
                aria-hidden="true"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-navy/10" />
              <div className="relative flex h-full flex-col justify-end p-6">
                <h3 className="font-heading text-lg font-semibold text-white">{sector.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/80">{sector.blurb}</p>
              </div>
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
