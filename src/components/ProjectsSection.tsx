import { useState } from "react";
import commercialImg from "@/assets/project-commercial.jpg";
import residentialImg from "@/assets/project-residential.jpg";
import customImg from "@/assets/project-custom.jpg";
import laserImg from "@/assets/services-laser.jpg";

const categories = ["All", "Commercial", "Residential", "Custom Fabrication"];

const projects = [
  { img: commercialImg, title: "Manhattan Office Tower — ACM Panels", cat: "Commercial" },
  { img: residentialImg, title: "Brooklyn Brownstone — Standing Seam Roof", cat: "Residential" },
  { img: customImg, title: "Custom Skylight — Williamsburg Loft", cat: "Custom Fabrication" },
  { img: laserImg, title: "Precision CNC Components — Contractor Supply", cat: "Commercial" },
  { img: residentialImg, title: "Queens Residence — Metal Flashing System", cat: "Residential" },
  { img: commercialImg, title: "Midtown Plaza — Architectural Panels", cat: "Commercial" },
];

const ProjectsSection = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.cat === active);

  return (
    <section id="projects" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <p className="text-accent font-heading text-sm uppercase tracking-[0.3em] mb-2">Portfolio</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase text-foreground">
            Recent Work
          </h2>
        </div>

        <div className="flex justify-center gap-3 flex-wrap mb-12">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`font-heading text-xs uppercase tracking-widest px-5 py-2 border transition-colors ${
                active === c
                  ? "bg-accent text-accent-foreground border-accent"
                  : "border-border text-muted-foreground hover:border-accent hover:text-accent"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, i) => (
            <div key={i} className="group relative overflow-hidden cursor-pointer">
              <img
                src={p.img}
                alt={p.title}
                width={800}
                height={600}
                loading="lazy"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <p className="text-accent font-heading text-xs uppercase tracking-widest">{p.cat}</p>
                  <h3 className="text-primary-foreground font-heading text-lg font-semibold mt-1">{p.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
