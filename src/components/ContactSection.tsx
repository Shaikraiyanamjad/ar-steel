import { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("Quote Request from Website");
    const body = encodeURIComponent(`Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:ARSHEETMETALINC@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section-padding bg-gradient-dark">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-accent font-heading text-sm uppercase tracking-[0.3em] mb-2">Get In Touch</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase text-primary-foreground">
            Contact Us
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Info + Map */}
          <div>
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <MapPin className="text-accent shrink-0 mt-1" size={20} />
                <div>
                  <p className="text-primary-foreground font-body font-medium">98 Anthony St, Brooklyn, NY 11222</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="text-accent shrink-0 mt-1" size={20} />
                <div>
                  <p className="text-primary-foreground font-body">Office: <a href="tel:7183872473" className="hover:text-accent transition-colors">(718) 387-2473</a></p>
                  <p className="text-primary-foreground font-body">Sales: <a href="tel:3475728139" className="hover:text-accent transition-colors">(347) 572-8139</a></p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="text-accent shrink-0 mt-1" size={20} />
                <a href="mailto:ARSHEETMETALINC@gmail.com" className="text-primary-foreground font-body hover:text-accent transition-colors">
                  ARSHEETMETALINC@gmail.com
                </a>
              </div>
            </div>

            <div className="w-full h-64 md:h-80 border border-primary-foreground/10">
              <iframe
                title="AR Sheet Metal Inc. Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.5!2d-73.9534!3d40.7259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2593e1ba000e7%3A0x9b0f5b55d93cd0e4!2s98%20Anthony%20St%2C%20Brooklyn%2C%20NY%2011222!5e0!3m2!1sen!2sus!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {[
              { name: "name", label: "Full Name", type: "text" },
              { name: "phone", label: "Phone Number", type: "tel" },
              { name: "email", label: "Email Address", type: "email" },
            ].map((f) => (
              <div key={f.name}>
                <label className="text-primary-foreground/60 font-body text-xs uppercase tracking-widest mb-1 block">
                  {f.label}
                </label>
                <input
                  type={f.type}
                  required
                  value={form[f.name as keyof typeof form]}
                  onChange={(e) => setForm({ ...form, [f.name]: e.target.value })}
                  className="w-full bg-transparent border border-primary-foreground/20 text-primary-foreground px-4 py-3 font-body text-sm focus:outline-none focus:border-accent transition-colors"
                />
              </div>
            ))}
            <div>
              <label className="text-primary-foreground/60 font-body text-xs uppercase tracking-widest mb-1 block">
                Message
              </label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-transparent border border-primary-foreground/20 text-primary-foreground px-4 py-3 font-body text-sm focus:outline-none focus:border-accent transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-accent text-accent-foreground py-4 font-heading text-sm uppercase tracking-widest font-semibold hover:bg-steel-blue/80 transition-colors"
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
