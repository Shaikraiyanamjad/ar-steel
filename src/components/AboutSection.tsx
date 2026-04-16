import { CheckCircle } from "lucide-react";
import aboutImg from "@/assets/about-team.jpg";

const highlights = [
  "Experienced, skilled fabrication team",
  "Customer-first approach on every project",
  "On-time delivery, every time",
  "Serving New York & surrounding areas",
];

const AboutSection = () => (
  <section id="about" className="section-padding bg-background">
    <div className="container mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative overflow-hidden">
          <img
            src={aboutImg}
            alt="AR Sheet Metal team working in the fabrication workshop"
            width={1024}
            height={768}
            loading="lazy"
            className="w-full h-auto object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent" />
        </div>
        <div>
          <p className="text-accent font-heading text-sm uppercase tracking-[0.3em] mb-2">About Us</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase text-foreground leading-tight">
            Brooklyn's Trusted<br />Metal Fabricators
          </h2>
          <p className="mt-6 text-muted-foreground font-body leading-relaxed">
            AR Sheet Metal Inc. is a Brooklyn-based fabrication shop delivering precision metalwork across New York and the tri-state area. With decades of combined experience, our team transforms raw materials into architectural masterpieces — from commercial facades to custom residential installations.
          </p>
          <ul className="mt-8 space-y-4">
            {highlights.map((h) => (
              <li key={h} className="flex items-center gap-3">
                <CheckCircle className="text-accent shrink-0" size={20} />
                <span className="text-foreground font-body font-medium">{h}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
