import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t mt-24">
      <div className="mx-auto max-w-7xl px-4 py-10 grid gap-6 md:grid-cols-3 items-center">
        <div className="space-y-1">
          <p className="font-semibold">Ayush Shende</p>
          <p className="text-sm text-muted-foreground">Flutter Developer</p>
        </div>
        <nav className="flex justify-center gap-6 text-sm">
          <a href="#about" className="hover:text-foreground/80 text-foreground/70">About</a>
          <a href="#projects" className="hover:text-foreground/80 text-foreground/70">Projects</a>
          <a href="#skills" className="hover:text-foreground/80 text-foreground/70">Skills</a>
          <a href="#contact" className="hover:text-foreground/80 text-foreground/70">Contact</a>
        </nav>
        <div className="flex justify-start md:justify-end gap-3">
          <a href="mailto:hello@example.com" aria-label="Email" className="inline-flex h-10 w-10 items-center justify-center rounded-md border hover:bg-accent">
            <Mail className="h-5 w-5" />
          </a>
          <a href="https://github.com/" aria-label="GitHub" className="inline-flex h-10 w-10 items-center justify-center rounded-md border hover:bg-accent">
            <Github className="h-5 w-5" />
          </a>
          <a href="https://linkedin.com/" aria-label="LinkedIn" className="inline-flex h-10 w-10 items-center justify-center rounded-md border hover:bg-accent">
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </div>
      <div className="py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Ayush Shende. All rights reserved.
      </div>
    </footer>
  );
}
