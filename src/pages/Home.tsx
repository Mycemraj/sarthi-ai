import { useState } from "react";
import logo from "../assets/sarthi-logo.svg";
import { SatelliteIcon, DroneIcon, AIIcon } from "../components/graphics/ThemeIcons";
import heroSurvey from "../assets/video/hero-aerial.mp4";
import heroPowerPlant from "../assets/video/hero-powerplant.mp4";
import heroSolar from "../assets/video/hero-solar.mp4";
import heroKumbhMela from "../assets/video/hero-kumbhmela.mp4";

const CAPABILITY_CHIPS = [
  { icon: SatelliteIcon, label: "Satellite Intelligence" },
  { icon: DroneIcon, label: "Drone & Aerial Survey" },
  { icon: AIIcon, label: "AI & ML Analytics" },
];

const HERO_VIDEOS = [
  { src: heroSurvey, label: "Land Survey & Site Development" },
  { src: heroPowerPlant, label: "Power Plant Drone Scanning" },
  { src: heroSolar, label: "Solar Farm Aerial Mapping" },
  { src: heroKumbhMela, label: "Kumbh Mela Crowd & Infrastructure Monitoring" },
];

export default function Home() {
  const [videoIndex, setVideoIndex] = useState(0);

  const advanceVideo = () => {
    setVideoIndex((i) => (i + 1) % HERO_VIDEOS.length);
  };

  return (
    <div id="home" className="min-h-screen bg-white p-3 sm:p-4 md:p-6">
      <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden min-h-[calc(100vh-24px)] sm:min-h-[calc(100vh-32px)] md:min-h-[calc(100vh-48px)] lg:h-[calc(100vh-48px)]">
        <video
          key={HERO_VIDEOS[videoIndex].src}
          className="absolute inset-0 w-full h-full object-cover animate-[hero-fade-in_0.9s_ease-out]"
          src={HERO_VIDEOS[videoIndex].src}
          autoPlay
          muted
          playsInline
          onEnded={advanceVideo}
          onError={advanceVideo}
        />
        <div className="absolute inset-0 bg-navy/25" />

        <div className="absolute top-4 left-4 z-10 sm:top-6 sm:left-6 md:top-8 md:left-8">
          <div className="relative inline-block">
            <div className="absolute -inset-4 rounded-2xl bg-white/60 blur-xl" />
            <img
              src={logo}
              alt="Sarthi AI Solutions"
              className="relative h-32 w-auto drop-shadow-lg"
            />
          </div>
        </div>

        <div className="absolute bottom-5 right-5 z-10 flex items-center gap-1.5 sm:bottom-8 sm:right-8">
          {HERO_VIDEOS.map((video, i) => (
            <span
              key={video.label}
              title={video.label}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === videoIndex ? "w-6 bg-white" : "w-1.5 bg-white/40"
              }`}
            />
          ))}
        </div>

        <div className="relative z-10 flex flex-col justify-end min-h-[calc(100vh-24px)] sm:min-h-[calc(100vh-32px)] md:min-h-[calc(100vh-48px)] lg:h-full p-4 sm:p-6 md:p-8 gap-6">
          {/* Bottom row */}
          <div className="lg:max-w-lg xl:max-w-2xl">
            <div className="flex flex-wrap gap-2.5 mb-5">
              {CAPABILITY_CHIPS.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 backdrop-blur-sm"
                >
                  <Icon className="h-4 w-4 text-azure" />
                  <span className="text-xs font-medium text-white">{label}</span>
                </div>
              ))}
            </div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
              Sarthi AI Solutions
            </p>
            <p className="text-white text-3xl sm:text-4xl xl:text-5xl font-medium leading-tight drop-shadow-lg">
              We turn geospatial data
              <br />
              into resilient{" "}
              <span
                style={{
                  fontFamily: "'Instrument Serif', serif",
                  fontStyle: "italic",
                  fontWeight: 400,
                }}
              >
                decisions
              </span>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
