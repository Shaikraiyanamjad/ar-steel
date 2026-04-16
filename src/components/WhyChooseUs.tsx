import { Target, Clock, Users, Lightbulb, Gem, Truck } from "lucide-react";

const points = [
  { icon: Target, title: "Precision Engineering", desc: "Tight tolerances, exact specifications — every time." },
  { icon: Clock, title: "Fast Turnaround", desc: "Streamlined workflows to meet your deadlines." },
  { icon: Users, title: "Experienced Team", desc: "Decades of combined sheet metal expertise." },
  { icon: Lightbulb, title: "Custom Solutions", desc: "We engineer solutions unique to your project." },
  { icon: Gem, title: "High-Quality Materials", desc: "Premium metals sourced from trusted suppliers." },
  { icon: Truck, title: "Reliable Delivery", desc: "On-site delivery across the tri-state area." },
];

const WhyChooseUs = () => (
  <section className="section-padding bg-gradient-steel">
    <div className="container mx-auto">
      <div className="text-center mb-16">
        <p className="text-accent font-heading text-sm uppercase tracking-[0.3em] mb-2">Our Edge</p>
        <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase text-primary-foreground">
          Why Choose Us
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {points.map((p) => (
          <div key={p.title} className="text-center group">
            <div className="inline-flex items-center justify-center w-16 h-16 border border-accent/30 mb-5 group-hover:bg-accent/10 transition-colors">
              <p.icon className="text-accent" size={28} />
            </div>
            <h3 className="font-heading text-lg font-semibold uppercase text-primary-foreground mb-2">{p.title}</h3>
            <p className="text-primary-foreground/60 font-body text-sm">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
