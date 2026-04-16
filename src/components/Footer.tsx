import { Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground py-16 px-4">
    <div className="container mx-auto">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <a href="/" className="flex items-center">
            <img
              src="/logo-s.png"
              alt="AR Sheet Metal"
              className="h-14 sm:h-16 md:h-18 lg:h-20 w-auto object-contain mb-4"
            />
          </a>
          <p className="text-primary-foreground/60 font-body text-sm leading-relaxed">
            Brooklyn-based precision sheet metal fabrication serving New York
            and the tri-state area.
          </p>
          <div className="flex gap-3 mt-5">
            {[Facebook, Instagram, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 border border-primary-foreground/20 flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
                aria-label="Social media"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading text-sm uppercase tracking-widest font-semibold mb-4">
            Quick Links
          </h4>
          <ul className="space-y-2 font-body text-sm text-primary-foreground/60">
            {["About", "Services", "Projects", "Process", "Contact"].map(
              (l) => (
                <li key={l}>
                  <a
                    href={`#${l.toLowerCase()}`}
                    className="hover:text-accent transition-colors"
                  >
                    {l}
                  </a>
                </li>
              ),
            )}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-heading text-sm uppercase tracking-widest font-semibold mb-4">
            Services
          </h4>
          <ul className="space-y-2 font-body text-sm text-primary-foreground/60">
            {[
              "CNC Cutting",
              "Laser Cutting",
              "ACM Panels",
              "Architectural Metal",
              "Custom Skylights",
              "Roofing Panels",
            ].map((s) => (
              <li key={s}>
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading text-sm uppercase tracking-widest font-semibold mb-4">
            Contact
          </h4>
          <ul className="space-y-2 font-body text-sm text-primary-foreground/60">
            <li>98 Anthony St, Brooklyn, NY 11222</li>
            <li>
              <a
                href="tel:7183872473"
                className="hover:text-accent transition-colors"
              >
                (718) 387-2473
              </a>
            </li>
            <li>
              <a
                href="tel:3475728139"
                className="hover:text-accent transition-colors"
              >
                (347) 572-8139
              </a>
            </li>
            <li>
              <a
                href="mailto:ARSHEETMETALINC@gmail.com"
                className="hover:text-accent transition-colors text-xs"
              >
                ARSHEETMETALINC@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center">
        <p className="text-primary-foreground/40 font-body text-xs">
          © {new Date().getFullYear()} AR Sheet Metal Inc. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
