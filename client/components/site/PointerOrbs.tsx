import { useEffect, useRef } from "react";

export default function PointerOrbs() {
  const orb1 = useRef<HTMLDivElement>(null);
  const orb2 = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const targ = useRef({ x: 0, y: 0 });
  const raf = useRef<number | null>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      targ.current.x = e.clientX;
      targ.current.y = e.clientY;
    };
    window.addEventListener("mousemove", onMove, { passive: true });

    const loop = () => {
      pos.current.x += (targ.current.x - pos.current.x) * 0.08;
      pos.current.y += (targ.current.y - pos.current.y) * 0.08;
      const t1 = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
      const t2 = `translate3d(${pos.current.x * 0.8}px, ${pos.current.y * 0.8}px, 0)`;
      if (orb1.current) orb1.current.style.transform = t1;
      if (orb2.current) orb2.current.style.transform = t2;
      raf.current = requestAnimationFrame(loop);
    };
    raf.current = requestAnimationFrame(loop);

    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        ref={orb1}
        className="absolute left-0 top-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(34,211,238,0.24), rgba(34,211,238,0.08), transparent)",
        }}
      />
      <div
        ref={orb2}
        className="absolute left-0 top-0 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(168,85,247,0.18), rgba(168,85,247,0.08), transparent)",
        }}
      />
    </div>
  );
}
