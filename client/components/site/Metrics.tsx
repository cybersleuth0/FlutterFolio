import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Code2, Clock, Smile } from "lucide-react";

function Counter({
  to,
  label,
  icon: Icon,
}: {
  to: number;
  label: string;
  icon: any;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-80px" });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start: number | null = null;
    const duration = 1200;
    const step = (ts: number) => {
      if (start === null) start = ts;
      const p = Math.min(1, (ts - start) / duration);
      setVal(Math.floor(p * to));
      if (p < 1) requestAnimationFrame(step);
    };
    const id = requestAnimationFrame(step);
    return () => cancelAnimationFrame(id);
  }, [inView, to]);
  return (
    <motion.div ref={ref} className="text-center" whileHover={{ scale: 1.05 }}>
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-3">
        <Icon className="h-8 w-8 text-primary" />
      </div>
      <div className="text-4xl font-extrabold tracking-tight">{val}+</div>
      <div className="mt-1 text-sm text-muted-foreground">{label}</div>
    </motion.div>
  );
}

export default function Metrics() {
  return (
    <section id="metrics" className="scroll-mt-32 pt-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-6 rounded-2xl border p-6 md:grid-cols-3 glass">
          <Counter to={20} label="Projects Delivered" icon={Code2} />
          <Counter to={5000} label="Hours Coded" icon={Clock} />
          <Counter to={98} label="Client Satisfaction (%)" icon={Smile} />
        </div>
      </div>
    </section>
  );
}
