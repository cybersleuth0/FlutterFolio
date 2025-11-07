import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const items = [
  {
    name: "Sarah Johnson",
    role: "Founder, FitLife App",
    text: "Ayush transformed our fitness app idea into reality. The attention to detail and smooth animations made our app stand out.",
    rating: 5,
    avatar: "/testimonials/sarah.jpg",
    tag: "Fitness",
  },
  {
    name: "Michael Chen",
    role: "CTO, ShopEasy",
    text: "Professional, responsive, and delivers quality code. Our e-commerce app handles thousands of transactions daily.",
    rating: 5,
    avatar: "/testimonials/michael.jpg",
    tag: "E-commerce",
  },
  {
    name: "Priya Patel",
    role: "PM, EduTech Solutions",
    text: "Working with Ayush was seamless. He understood our requirements perfectly and delivered ahead of schedule.",
    rating: 5,
    avatar: "/testimonials/priya.jpg",
    tag: "Education",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % items.length), 5000);
    return () => clearInterval(id);
  }, []);
  const visible = [
    items[index],
    items[(index + 1) % items.length],
    items[(index + 2) % items.length],
  ];
  return (
    <section id="testimonials" className="scroll-mt-32 pt-20">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-2xl font-bold">Testimonials</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {visible.map((t, i) => (
            <motion.div
              key={`${t.name}-${i}`}
              className="group relative glass p-6 overflow-hidden"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.25 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <Quote className="absolute -top-4 -left-4 h-12 w-12 text-primary/20" />
              <div className="flex items-center gap-4 mb-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={(t as any).avatar} alt={t.name} />
                  <AvatarFallback>
                    {t.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .slice(0, 2)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </div>
              <div className="flex gap-1 mb-3 text-yellow-400">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-yellow-400" />
                ))}
              </div>
              <p className="text-muted-foreground italic">“{t.text}”</p>
              {"tag" in t && (
                <Badge className="mt-3" variant="secondary">
                  {(t as any).tag}
                </Badge>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
