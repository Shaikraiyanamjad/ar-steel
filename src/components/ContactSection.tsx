import { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("Quote Request from Website");
    const body = encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:ARSHEETMETALINC@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="py-16 sm:py-20 md:py-24 bg-gradient-dark px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-accent font-heading text-xs sm:text-sm uppercase tracking-[0.3em] mb-2">
            Get In Touch
          </p>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-5xl font-bold uppercase text-primary-foreground leading-tight">
            Contact Us
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          
          {/* LEFT SIDE */}
          <div className="space-y-8">
            
            {/* Contact Info */}
            <div className="space-y-6">
              
              <div className="flex items-start gap-3 sm:gap-4">
                <MapPin className="text-accent mt-1 shrink-0" size={20} />
                <p className="text-primary-foreground text-sm sm:text-base">
                  98 Anthony St, Brooklyn, NY 11222
                </p>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <Phone className="text-accent mt-1 shrink-0" size={20} />
                <div className="text-sm sm:text-base space-y-1">
                  <p className="text-primary-foreground">
                    Office:{" "}
                    <a
                      href="tel:7183872473"
                      className="hover:text-accent transition-colors"
                    >
                      (718) 387-2473
                    </a>
                  </p>
                  <p className="text-primary-foreground">
                    Sales:{" "}
                    <a
                      href="tel:3475728139"
                      className="hover:text-accent transition-colors"
                    >
                      (347) 572-8139
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <Mail className="text-accent mt-1 shrink-0" size={20} />
                <a
                  href="mailto:ARSHEETMETALINC@gmail.com"
                  className="text-primary-foreground text-sm sm:text-base hover:text-accent transition-colors break-all"
                >
                  ARSHEETMETALINC@gmail.com
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="w-full h-56 sm:h-64 md:h-72 lg:h-80 rounded-lg overflow-hidden border border-primary-foreground/10">
              <iframe
                title="AR Sheet Metal Inc. Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.5!2d-73.9534!3d40.7259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2593e1ba000e7%3A0x9b0f5b55d93cd0e4!2s98%20Anthony%20St%2C%20Brooklyn%2C%20NY%2011222!5e0!3m2!1sen!2sus!4v1700000000000"
                className="w-full h-full"
                loading="lazy"
              />
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <form
            onSubmit={handleSubmit}
            className="space-y-4 sm:space-y-5"
          >
            {[
              { name: "name", label: "Full Name", type: "text" },
              { name: "phone", label: "Phone Number", type: "tel" },
              { name: "email", label: "Email Address", type: "email" },
            ].map((f) => (
              <div key={f.name}>
                <label className="text-primary-foreground/60 text-xs uppercase tracking-widest mb-1 block">
                  {f.label}
                </label>
                <input
                  type={f.type}
                  required
                  value={form[f.name as keyof typeof form]}
                  onChange={(e) =>
                    setForm({ ...form, [f.name]: e.target.value })
                  }
                  className="w-full bg-transparent border border-primary-foreground/20 text-primary-foreground px-3 sm:px-4 py-2.5 sm:py-3 text-sm focus:outline-none focus:border-accent transition-colors rounded-md"
                />
              </div>
            ))}

            <div>
              <label className="text-primary-foreground/60 text-xs uppercase tracking-widest mb-1 block">
                Message
              </label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
                className="w-full bg-transparent border border-primary-foreground/20 text-primary-foreground px-3 sm:px-4 py-2.5 sm:py-3 text-sm focus:outline-none focus:border-accent transition-colors resize-none rounded-md"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 sm:py-4 text-sm sm:text-base font-semibold uppercase tracking-widest bg-accent text-accent-foreground hover:bg-steel-blue/80 transition-colors rounded-md"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;