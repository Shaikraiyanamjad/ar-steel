const CTASection = () => (
  <section className="section-padding bg-accent relative overflow-hidden">
    <div className="absolute inset-0 opacity-10">
      <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,currentColor_10px,currentColor_11px)]" />
    </div>
    <div className="container mx-auto text-center relative z-10">
      <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase text-accent-foreground leading-tight">
        Let's Build Your<br />Next Project
      </h2>
      <p className="mt-4 text-accent-foreground/80 font-body text-lg max-w-xl mx-auto">
        From concept to installation — we deliver precision metalwork that lasts.
      </p>
      <a
        href="#contact"
        className="inline-block mt-8 bg-primary text-primary-foreground px-10 py-4 font-heading text-sm uppercase tracking-widest font-semibold hover:bg-secondary transition-colors"
      >
        Request a Free Quote
      </a>
    </div>
  </section>
);

export default CTASection;
