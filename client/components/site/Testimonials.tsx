import { motion } from "framer-motion";
import { Star } from "lucide-react";

const items = [
  {
    name: "Rahul S.",
    role: "Founder, FinTech",
    text:
      "Ayush rescued our release with clean Flutter code and fast communication. We shipped on time and the app performance improved significantly.",
    rating: 5,
  },
  {
    name: "Priya K.",
    role: "PM, E‑commerce",
    text:
      "Pixel‑perfect UI and great attention to detail. The checkout UX increased conversions and reduced drop‑offs.",
    rating: 5,
  },
  {
    name: "Aditya V.",
    role: "CTO, HealthTech",
    text:
      "Solid architecture and testing. Handover was smooth and the codebase is easy to maintain.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-32 pt-20">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-2xl font-bold">Testimonials</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {items.map((t, i) => (
            <motion.div
              key={t.name}
              className="glass p-6"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.25 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <div className="flex items-center gap-1 text-accent">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{t.text}</p>
              <p className="mt-4 font-semibold">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
