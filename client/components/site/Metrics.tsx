import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

function Counter({ to, label }: { to: number; label: string }) {
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
    <div ref={ref} className="text-center">
      <div className="text-4xl font-extrabold tracking-tight">{val}+</div>
      <div className="mt-1 text-sm text-muted-foreground">{label}</div>
    </div>
  );
}

export default function Metrics() {
  return (
    <section id="metrics" className="scroll-mt-32 pt-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-6 rounded-2xl border p-6 md:grid-cols-3 glass">
          <Counter to={20} label="Projects Delivered" />
          <Counter to={5000} label="Hours Coded" />
          <Counter to={98} label="Client Satisfaction (%)" />
        </div>
      </div>
    </section>
  );
}
