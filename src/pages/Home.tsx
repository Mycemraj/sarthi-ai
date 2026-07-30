import { lazy, Suspense } from "react";
import logo from "../assets/sarthi-logo.svg";
import { SatelliteIcon, DroneIcon, AIIcon } from "../components/graphics/ThemeIcons";

const FlyingDrone = lazy(() => import("../components/graphics/FlyingDrone3D"));

const CAPABILITY_CHIPS = [
  { icon: SatelliteIcon, label: "Satellite Intelligence" },
  { icon: DroneIcon, label: "Drone & Aerial Survey" },
  { icon: AIIcon, label: "AI & ML Analytics" },
];

const VIDEO_URL =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260602_150901_c45b90ec-18d7-42ff-90e2-b95d7109e330.mp4";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#technology", label: "Technology" },
  { href: "#sustainability", label: "Sustainability" },
];

export default function Home() {
  return (
    <div id="home" className="min-h-screen bg-white p-3 sm:p-4 md:p-6">
      <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden min-h-[calc(100vh-24px)] sm:min-h-[calc(100vh-32px)] md:min-h-[calc(100vh-48px)] lg:h-[calc(100vh-48px)]">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={VIDEO_URL}
          autoPlay
          muted
          loop
          playsInline
        />

        <Suspense fallback={null}>
          <FlyingDrone />
        </Suspense>

        <div className="relative z-10 flex flex-col min-h-[calc(100vh-24px)] sm:min-h-[calc(100vh-32px)] md:min-h-[calc(100vh-48px)] lg:h-full p-4 sm:p-6 md:p-8 gap-6">
          {/* Navbar */}
          <nav className="bg-white/95 backdrop-blur-md rounded-2xl shadow-md pl-3 sm:pl-4 pr-2 py-2 w-full sm:w-auto flex items-center gap-3 sm:gap-6">
            <a href="#home" className="flex items-center shrink-0">
              <img src={logo} alt="Sarthi AI Solutions" className="h-10 w-auto" />
            </a>
            <div className="hidden sm:flex items-center gap-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-800 text-sm font-medium hover:opacity-60 transition-opacity whitespace-nowrap"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <a
              href="#contact"
              className="ml-auto bg-black text-white text-sm font-medium px-4 sm:px-5 py-2 rounded-xl hover:bg-gray-800 transition-colors whitespace-nowrap"
            >
              Get in Touch
            </a>
          </nav>

          <div className="flex-1 min-h-[2rem]" />

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
