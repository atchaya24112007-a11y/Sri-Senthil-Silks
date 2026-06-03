import { useEffect, useState } from "react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#collections", label: "Collections" },
  { href: "#about", label: "About" },
  { href: "#visit", label: "Visit" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/85 backdrop-blur-lg border-b border-gold/15 py-3" : "py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="flex flex-col leading-none">
          <span className="font-display text-2xl md:text-3xl font-medium text-gold-gradient italic">
            Sri Senthil
          </span>
          <span className="text-[0.6rem] md:text-xs tracking-[0.35em] uppercase text-cream/80 mt-1">
            Silks · Kanchipuram
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs tracking-[0.25em] uppercase text-cream/80 hover:text-gold transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="tel:+919944358299"
          className="hidden md:inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-gold border border-gold/40 px-4 py-2 hover:bg-gold hover:text-primary-foreground transition-all"
        >
          Call Us
        </a>

        <button
          className="md:hidden text-gold"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <div className="space-y-1.5">
            <span className={`block h-px w-6 bg-current transition-all ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-px w-6 bg-current transition-all ${open ? "opacity-0" : ""}`} />
            <span className={`block h-px w-6 bg-current transition-all ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </div>

      {open && (
        <nav className="md:hidden mt-4 px-6 pb-4 space-y-4 border-t border-gold/15 pt-4 bg-background/95">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-sm tracking-[0.2em] uppercase text-cream/80 hover:text-gold"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
