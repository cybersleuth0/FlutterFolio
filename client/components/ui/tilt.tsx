import React, { PropsWithChildren, useRef } from "react";

type Props = PropsWithChildren<{
  maxTiltDeg?: number;
  className?: string;
}>;

export default function Tilt({ children, maxTiltDeg = 10, className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current!;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5; // -0.5..0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    const rx = (-py * maxTiltDeg).toFixed(2);
    const ry = (px * maxTiltDeg * 1.4).toFixed(2);
    el.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg)`;
  };

  const onLeave = () => {
    const el = ref.current!;
    el.style.transform = `perspective(800px) rotateX(0deg) rotateY(0deg)`;
  };

  return (
    <div
      ref={ref}
      className={`transition-transform duration-300 will-change-transform ${className}`}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </div>
  );
}
