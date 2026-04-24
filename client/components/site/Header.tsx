import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Smartphone, Github, Linkedin } from "lucide-react";
import ThemeToggle from "@/components/site/ThemeToggle";

const nav = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  const NavLinks = ({ onClick }: { onClick?: () => void }) => (
    <ul className="flex flex-col md:flex-row items-start md:items-center gap-6">
      {nav.map((n) => (
        <li key={n.href}>
          <a
            href={n.href}
            onClick={() => onClick?.()}
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            {n.label}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="portfolio-topbar mt-4 rounded-[1.4rem] border border-white/10 bg-slate-950/70 shadow-[0_10px_40px_rgba(5,10,24,0.35)] backdrop-blur-xl supports-[backdrop-filter]:bg-slate-950/55">
          <div className="h-16 px-4 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[linear-gradient(135deg,#22d3ee,#0ea5e9_60%,#14b8a6)] text-primary-foreground shadow-[0_10px_30px_rgba(34,211,238,0.25)]">
                <Smartphone className="h-5 w-5" />
              </span>
              <div className="leading-tight">
                <p className="font-semibold tracking-[-0.02em] text-white">
                  Ayush Shende
                </p>
                <p className="text-xs text-slate-400">Flutter Developer</p>
              </div>
            </Link>

            <nav className="hidden md:block">
              <NavLinks />
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <ThemeToggle />
              <a
                href="https://github.com/cybersleuth0"
                aria-label="GitHub"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/ayushshende/"
                aria-label="LinkedIn"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <Button asChild className="rounded-full px-5">
                <a href="#contact">Let’s talk</a>
              </Button>
            </div>

            <div className="md:hidden">
              <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    aria-label="Open Menu"
                    className="rounded-xl border-border bg-background/80 text-foreground shadow-sm hover:bg-accent hover:text-foreground"
                  >
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="w-72 border-border bg-background/95 text-foreground backdrop-blur-xl"
                >
                  <div className="mt-8 space-y-8">
                    <NavLinks onClick={() => setOpen(false)} />
                    <div className="flex items-center gap-3">
                      <ThemeToggle />
                      <a
                        href="https://github.com/cybersleuth0"
                        aria-label="GitHub"
                        className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background/80 text-foreground transition hover:bg-accent hover:text-foreground"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/ayushshende/"
                        aria-label="LinkedIn"
                        className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background/80 text-foreground transition hover:bg-accent hover:text-foreground"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </div>
                    <Button asChild className="w-full rounded-full">
                      <a href="#contact" onClick={() => setOpen(false)}>
                        Let’s talk
                      </a>
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
