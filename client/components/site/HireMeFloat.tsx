import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export default function HireMeFloat() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 420);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!show) return null;
  return (
    <div className="fixed bottom-6 right-6 z-40">
      <Button
        asChild
        className="shadow-lg animate-in fade-in slide-in-from-bottom-2"
      >
        <a href="#contact" aria-label="Hire Me">
          Hire Me
        </a>
      </Button>
    </div>
  );
}
