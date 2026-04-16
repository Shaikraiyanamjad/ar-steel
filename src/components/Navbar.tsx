import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-primary/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 md:h-20">
        <a href="/" className="flex items-center">
            <img
              src="/logo-s.png"
              alt="AR Sheet Metal"
              className="h-12 sm:h-14 md:h-16 lg:h-18 w-auto object-contain mb-4 mt-4"
            />
          </a>
        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-primary-foreground/80 hover:text-accent font-body text-sm uppercase tracking-widest transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:7183872473"
            className="flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 text-sm font-semibold uppercase tracking-wider hover:bg-steel-blue/80 transition-colors"
          >
            <Phone size={14} />
            (718) 387-2473
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-primary-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-primary/95 backdrop-blur-md border-t border-primary-foreground/10">
          <div className="container mx-auto py-4 flex flex-col gap-4">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-primary-foreground/80 hover:text-accent font-body text-sm uppercase tracking-widest transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="tel:7183872473"
              className="flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 text-sm font-semibold uppercase tracking-wider w-fit"
            >
              <Phone size={14} />
              (718) 387-2473
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
