import logo from "../assets/sarthi-logo.svg";
import { sectors } from "../data/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-navy text-white/70">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-14 lg:grid-cols-4 lg:px-8">
        <div>
          <img src={logo} alt="Sarthi AI Solutions" className="h-14 w-auto brightness-0 invert" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
            Geospatial intelligence, environmental assessments, disaster risk solutions, drone
            surveys, and AI/ML analytics for infrastructure and renewable energy projects.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-azure">Navigate</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#sectors" className="hover:text-white">Industries</a></li>
            <li><a href="#about" className="hover:text-white">About Us</a></li>
            <li><a href="#services" className="hover:text-white">Services</a></li>
            <li><a href="#technology" className="hover:text-white">Technology</a></li>
            <li><a href="#sustainability" className="hover:text-white">Sustainability</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-azure">
            Industries We Serve
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-white/60">
            {sectors.slice(0, 4).map((s) => (
              <li key={s.name}>{s.name}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-azure">Contact</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/60">
            <li>Email: [your email address]</li>
            <li>Phone: [your phone number]</li>
            <li>Address: [your office address]</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-6 text-center text-xs text-white/40 lg:px-8">
        © {year} Sarthi AI Solutions. All rights reserved.
      </div>
    </footer>
  );
}
