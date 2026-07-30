import { useState } from "react";
import logo from "../assets/sarthi-logo.svg";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#technology", label: "Technology" },
  { href: "#sustainability", label: "Sustainability" },
  { href: "#sectors", label: "Industries" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-grey-dark/10 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-8">
        <a href="#home" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <img src={logo} alt="Sarthi AI Solutions" className="h-11 w-auto" />
        </a>

        <nav className="hidden items-center gap-6 xl:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-grey-dark/60 transition-colors hover:text-teal"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-navy px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-teal"
          >
            Get in Touch
          </a>
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-md border border-grey-dark/15 xl:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className="sr-only">Menu</span>
          <div className="space-y-1.5">
            <span className="block h-0.5 w-5 bg-navy" />
            <span className="block h-0.5 w-5 bg-navy" />
            <span className="block h-0.5 w-5 bg-navy" />
          </div>
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-grey-dark/10 bg-white px-6 py-4 xl:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-grey-dark/60 hover:bg-grey-light hover:text-navy"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
