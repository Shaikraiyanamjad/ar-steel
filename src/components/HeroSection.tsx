import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <img
      src={heroBg}
      alt="Steel fabrication workshop with CNC machines and welding sparks"
      width={1920}
      height={1080}
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-primary/70" />

    <div className="relative z-10 container mx-auto text-center px-4">
      <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl font-bold uppercase tracking-wider text-primary-foreground leading-tight animate-fade-up">
        Precision Sheet Metal
        <br />
        <span className="text-gradient-metallic">Fabrication in New York</span>
      </h1>
      <p className="mt-6 text-lg md:text-xl text-primary-foreground/70 font-body max-w-2xl mx-auto animate-fade-up [animation-delay:200ms] opacity-0">
        Built for performance. Engineered for perfection.
      </p>
      <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up [animation-delay:400ms] opacity-0">
        <a
          href="#contact"
          className="bg-accent text-accent-foreground px-8 py-4 font-heading text-sm uppercase tracking-widest font-semibold hover:bg-steel-blue/80 transition-colors"
        >
          Get Free Estimate
        </a>
        <a
          href="#projects"
          className="border border-primary-foreground/30 text-primary-foreground px-8 py-4 font-heading text-sm uppercase tracking-widest font-semibold hover:bg-primary-foreground/10 transition-colors"
        >
          View Our Work
        </a>
      </div>
    </div>

    {/* Scroll indicator */}
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
      <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center pt-2">
        <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full" />
      </div>
    </div>
  </section>
);

export default HeroSection;
