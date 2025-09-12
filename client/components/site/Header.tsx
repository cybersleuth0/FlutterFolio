import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Smartphone, Github, Linkedin } from "lucide-react";

const nav = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const location = useLocation();
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
      <div className="mx-auto max-w-7xl px-4">
        <div className="mt-3 rounded-xl border border-border/60 bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
          <div className="h-16 px-4 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-cyan-500 text-primary-foreground shadow-sm">
                <Smartphone className="h-5 w-5" />
              </span>
              <div className="leading-tight">
                <p className="font-bold">Ayush Shende</p>
                <p className="text-xs text-muted-foreground">
                  Flutter Developer
                </p>
              </div>
            </Link>

            <nav className="hidden md:block">
              <NavLinks />
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a
                href="https://github.com/cybersleuth0"
                aria-label="GitHub"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border hover:bg-accent"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/ayushshende0"
                aria-label="LinkedIn"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border hover:bg-accent"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <Button asChild>
                <a href="#contact">Let’s talk</a>
              </Button>
            </div>

            <div className="md:hidden">
              <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon" aria-label="Open Menu">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-80">
                  <div className="mt-8 space-y-8">
                    <NavLinks onClick={() => setOpen(false)} />
                    <div className="flex items-center gap-3">
                      <a
                        href="https://github.com/cybersleuth0"
                        aria-label="GitHub"
                        className="inline-flex h-10 w-10 items-center justify-center rounded-md border hover:bg-accent"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                      <a
                        href="https://linkedin.com/in/ayushshende0"
                        aria-label="LinkedIn"
                        className="inline-flex h-10 w-10 items-center justify-center rounded-md border hover:bg-accent"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </div>
                    <Button asChild className="w-full">
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
