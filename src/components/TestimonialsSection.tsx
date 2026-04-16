import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    text: "AR Sheet Metal delivered impeccable ACM panels for our commercial project in Manhattan. Their precision and attention to detail is unmatched in the industry.",
    name: "Michael Torres",
    role: "General Contractor, Torres Construction",
  },
  {
    text: "We've relied on AR Sheet Metal for custom roofing solutions on multiple residential projects. On-time, on-budget, and always top quality.",
    name: "Sarah Kim",
    role: "Project Manager, Skyline Architects",
  },
  {
    text: "From the initial estimate to final delivery, their professionalism set the standard. The custom skylight frames were fabricated to perfection.",
    name: "David Petrov",
    role: "Building Owner, Brooklyn",
  },
];

const TestimonialsSection = () => {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () => setIdx((i) => (i === testimonials.length - 1 ? 0 : i + 1));
  const t = testimonials[idx];

  return (
    <section className="section-padding bg-gradient-dark">
      <div className="container mx-auto max-w-3xl text-center">
        <p className="text-accent font-heading text-sm uppercase tracking-[0.3em] mb-2">Testimonials</p>
        <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase text-primary-foreground mb-12">
          What Our Clients Say
        </h2>

        <div className="relative">
          <Quote className="text-accent/20 mx-auto mb-6" size={48} />
          <p className="text-primary-foreground/80 font-body text-lg md:text-xl leading-relaxed italic mb-8">
            "{t.text}"
          </p>
          <p className="font-heading text-accent font-semibold uppercase tracking-wider">{t.name}</p>
          <p className="text-primary-foreground/50 font-body text-sm mt-1">{t.role}</p>

          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={prev}
              className="w-10 h-10 border border-primary-foreground/20 flex items-center justify-center text-primary-foreground hover:border-accent hover:text-accent transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full transition-colors ${i === idx ? "bg-accent" : "bg-primary-foreground/20"}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 border border-primary-foreground/20 flex items-center justify-center text-primary-foreground hover:border-accent hover:text-accent transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
