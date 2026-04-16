import { Wrench, Zap, Layers, Building2, Droplets, Scissors, Shield, Sun, Wind, PenTool, Cog } from "lucide-react";

const services = [
  { icon: Scissors, title: "CNC Cutting & Press Brake Bending", desc: "High-precision CNC cutting and press brake bending for complex sheet metal components." },
  { icon: Zap, title: "Laser Cutting", desc: "State-of-the-art laser technology for clean, accurate cuts on various metals." },
  { icon: Layers, title: "ACM Panel Fabrication", desc: "Custom aluminum composite panel fabrication for modern building facades." },
  { icon: Building2, title: "Architectural Sheet Metal", desc: "Ornamental and structural metalwork for commercial and residential architecture." },
  { icon: Shield, title: "Fiber Cement Systems", desc: "Professional installation and fabrication of fiber cement panel systems." },
  { icon: Sun, title: "Custom Skylights & Roof Hatches", desc: "Bespoke skylight frames and roof hatch assemblies built to specification." },
  { icon: Wind, title: "Specialty Roofing Panels", desc: "Standing seam, corrugated, and flat-lock roofing panel fabrication." },
  { icon: Wrench, title: "Laser Welding & Soldering", desc: "Precision laser welding and soldering for seamless, high-strength joints." },
  { icon: Droplets, title: "Roofing Drainage Systems", desc: "Custom gutters, downspouts, and drainage solutions for all roof types." },
  { icon: PenTool, title: "Metal Flashings & Cornices", desc: "Decorative and functional flashings, cornices, and edge details." },
  { icon: Cog, title: "Custom Metal Designs", desc: "From concept to completion — fully custom metal fabrication solutions." },
];

const ServicesSection = () => (
  <section id="services" className="section-padding bg-gradient-dark">
    <div className="container mx-auto">
      <div className="text-center mb-16">
        <p className="text-accent font-heading text-sm uppercase tracking-[0.3em] mb-2">What We Do</p>
        <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase text-primary-foreground">
          Our Services
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <div
            key={s.title}
            className="group border border-primary-foreground/10 p-6 hover:border-accent/50 transition-all duration-300 hover:-translate-y-1 bg-primary-foreground/[0.03]"
          >
            <s.icon className="text-accent mb-4" size={32} />
            <h3 className="font-heading text-lg font-semibold uppercase text-primary-foreground mb-2">
              {s.title}
            </h3>
            <p className="text-primary-foreground/60 font-body text-sm leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
