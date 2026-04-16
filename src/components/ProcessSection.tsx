import { MessageSquare, PenTool, Cog, ShieldCheck, Truck } from "lucide-react";

const steps = [
  { icon: MessageSquare, num: "01", title: "Consultation & Estimate", desc: "We discuss your project scope and provide a detailed free estimate." },
  { icon: PenTool, num: "02", title: "Design & Drafting", desc: "Our team creates precise shop drawings and engineering plans." },
  { icon: Cog, num: "03", title: "Fabrication", desc: "Your project is fabricated in-house using state-of-the-art machinery." },
  { icon: ShieldCheck, num: "04", title: "Quality Check", desc: "Every piece is inspected to meet our rigorous quality standards." },
  { icon: Truck, num: "05", title: "Delivery / Installation", desc: "Finished products are delivered on-time or installed on-site." },
];

const ProcessSection = () => (
  <section id="process" className="section-padding bg-background">
    <div className="container mx-auto">
      <div className="text-center mb-16">
        <p className="text-accent font-heading text-sm uppercase tracking-[0.3em] mb-2">How We Work</p>
        <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase text-foreground">
          Our Process
        </h2>
      </div>

      <div className="relative">
        {/* Connecting line */}
        <div className="hidden lg:block absolute top-10 left-0 right-0 h-px bg-border" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {steps.map((s) => (
            <div key={s.num} className="relative text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary text-primary-foreground relative z-10 mb-5">
                <s.icon size={28} />
              </div>
              <p className="text-accent font-heading text-xs tracking-widest mb-1">{s.num}</p>
              <h3 className="font-heading text-base font-semibold uppercase text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground font-body text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ProcessSection;
