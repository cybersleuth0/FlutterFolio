import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="portfolio-footer mt-24 border-t border-white/10">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-10 md:grid-cols-3 md:items-center md:px-6">
        <div className="space-y-1 text-center md:text-left">
          <p className="font-semibold text-white">Ayush Shende</p>
          <p className="text-sm text-slate-400">Flutter Developer</p>
        </div>
        <nav className="flex justify-center gap-6 text-sm">
          <a href="#about" className="text-slate-400 transition hover:text-white">About</a>
          <a href="#projects" className="text-slate-400 transition hover:text-white">Projects</a>
          <a href="#skills" className="text-slate-400 transition hover:text-white">Skills</a>
          <a href="#contact" className="text-slate-400 transition hover:text-white">Contact</a>
        </nav>
        <div className="flex justify-center md:justify-end gap-3">
          <a href="mailto:ayushshende83@gmail.com" aria-label="Email" className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:bg-white/10">
            <Mail className="h-5 w-5" />
          </a>
          <a href="https://github.com/cybersleuth0" aria-label="GitHub" className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:bg-white/10">
            <Github className="h-5 w-5" />
          </a>
          <a href="https://www.linkedin.com/in/ayushshende/" aria-label="LinkedIn" target="_blank" rel="noreferrer noopener" className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:bg-white/10">
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </div>
      <div className="py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Ayush Shende. All rights reserved.
      </div>
    </footer>
  );
}
