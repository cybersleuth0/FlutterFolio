import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Github, Linkedin, Sparkles, Smartphone, Code2 } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const projects = [
  {
    title: "Expenso",
    description:
      "Cross-platform personal expense tracker with CRUD, transaction filtering by date and category, and dynamic data visualizations for spending analysis. Built with Flutter and Bloc architecture.",
    tags: ["Flutter", "Dart", "Bloc", "SQLite"],
    links: { github: "https://github.com/cybersleuth0" },
  },
  {
    title: "Todo App",
    description:
      "Offline-first To‑Do application with fast local storage using sqflite and Cubit for state management, designed for reliability without network connectivity.",
    tags: ["Flutter", "Dart", "Cubit", "Sqflite"],
    links: { github: "https://github.com/cybersleuth0" },
  },
  {
    title: "NewsApp",
    description:
      "News aggregator delivering real-time headlines via HTTP API integration, with shimmer loading, carousel slider, and modular theming using flutter_bloc.",
    tags: ["Flutter", "Dart", "http", "flutter_bloc"],
    links: { github: "https://github.com/cybersleuth0" },
  },
  {
    title: "Cloud Notes",
    description:
      "Firebase-synced note-taking app with real-time Firestore storage, authentication, and Bloc-based state management for scalable interactions.",
    tags: ["Flutter", "Dart", "Firebase", "Firestore"],
    links: { github: "https://github.com/cybersleuth0" },
  },
];

const skills = [
  { group: "Languages", items: ["Dart"] },
  { group: "Frameworks", items: ["Flutter", "BLoC", "Cubit", "Provider"] },
  { group: "Tools", items: ["Android Studio", "VS Code", "Git", "GitHub", "Postman"] },
  { group: "Databases", items: ["Firebase", "SQLite"] },
  { group: "Other", items: ["State Management", "API Integration", "UI/UX Design", "Authentication"] },
];

const miniSlides = [
  ({ className = "" }: { className?: string }) => (
    <div className={`h-full w-full p-4 ${"bg-gradient-to-b from-primary/6 via-accent/6 to-secondary/6"}`}>
      <div className="h-full w-full rounded-lg overflow-hidden bg-gradient-to-b from-black/0 to-black/5 p-4">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-lg bg-primary/80" />
          <div>
            <div className="h-3 w-36 rounded bg-muted mb-2" />
            <div className="h-2 w-24 rounded bg-muted" />
          </div>
        </div>
        <div className="mt-6">
          <div className="h-8 w-3/4 rounded bg-muted mb-3" />
          <div className="h-3 w-1/2 rounded bg-muted" />
        </div>
        <div className="mt-6 grid grid-cols-3 gap-2">
          <div className="h-20 rounded-lg bg-muted" />
          <div className="h-20 rounded-lg bg-muted" />
          <div className="h-20 rounded-lg bg-muted" />
        </div>
      </div>
    </div>
  ),
  ({ className = "" }: { className?: string }) => (
    <div className={`h-full w-full p-4 ${"bg-gradient-to-b from-secondary/6 to-accent/6"}`}>
      <div className="h-full w-full rounded-lg overflow-hidden bg-gradient-to-b from-black/0 to-black/5 p-4">
        <div className="h-3 w-2/3 rounded bg-muted mb-4" />
        <div className="grid grid-cols-2 gap-2">
          <div className="h-20 rounded-lg bg-muted" />
          <div className="h-20 rounded-lg bg-muted" />
          <div className="h-20 rounded-lg bg-muted col-span-2" />
        </div>
      </div>
    </div>
  ),
  ({ className = "" }: { className?: string }) => (
    <div className={`h-full w-full p-4 ${"bg-gradient-to-b from-primary/6 to-accent/6"}`}>
      <div className="h-full w-full rounded-lg overflow-hidden bg-gradient-to-b from-black/0 to-black/5 p-4 flex flex-col justify-between">
        <div>
          <div className="h-6 w-3/4 rounded bg-muted mb-3" />
          <div className="h-3 w-1/2 rounded bg-muted" />
        </div>
        <div className="h-12 rounded bg-muted" />
      </div>
    </div>
  ),
];

function MiniPreview() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % miniSlides.length), 3500);
    return () => clearInterval(t);
  }, []);

  const Slide = miniSlides[index];

  return (
    <div className="relative h-full w-full bg-black/5">
      {miniSlides.map((S, i) => (
        <motion.div
          key={i}
          className="absolute inset-0 h-full w-full"
          initial={{ opacity: 0, y: 8, scale: 0.995 }}
          animate={{ opacity: i === index ? 1 : 0, y: i === index ? 0 : 8, scale: i === index ? 1 : 0.995 }}
          transition={{ duration: 0.6 }}
        >
          <S />
        </motion.div>
      ))}

      <div className="absolute left-3 bottom-3 flex items-center gap-2">
        {miniSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 w-8 rounded-full transition-colors ${i === index ? "bg-primary" : "bg-muted"}`}
            aria-label={`Go to preview ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Index() {
  return (
    <main className="relative">
      {/* decorative background */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 -top-48 -z-10 overflow-hidden">
        <div className="mx-auto h-[420px] w-[1200px] max-w-none bg-[radial-gradient(800px_300px_at_50%_20%,theme(colors.cyan.400/.25),transparent),radial-gradient(600px_250px_at_20%_10%,theme(colors.primary.DEFAULT/.18),transparent),radial-gradient(600px_250px_at_80%_10%,theme(colors.blue.400/.18),transparent)] blur-2xl" />
      </div>

      {/* hero */}
      <section className="relative pt-36 md:pt-40">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 md:grid-cols-2 md:gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-muted-foreground">
                <Sparkles className="h-3.5 w-3.5" /> Available for freelance work
              </div>
              <h1 className="mt-6 text-4xl/tight font-extrabold sm:text-5xl/tight">
                <p>
                  Hi, I’m Ayush Shende — I build delightful mobile apps with
                  Flutter
                </p>
              </h1>
              <p className="mt-4 text-muted-foreground max-w-prose">
                Flutter developer focused on craft, performance and smooth animations. I turn ideas into polished, production‑ready apps.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Button asChild>
                  <a href="#projects">View Projects</a>
                </Button>

                <Button variant="outline" asChild>
                  <a href="#contact">Contact Me</a>
                </Button>

                <a
                  href="https://github.com/cybersleuth0"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md border hover:bg-accent"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com/in/ayushshende0"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md border hover:bg-accent"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>

                <a
                  href="https://cdn.builder.io/o/assets%2Fd27b201b66fa4008b030539dc4f9452d%2F411fe3bc2e6644638bfee07ae9d8f931?alt=media&token=20e1f54e-d606-4bbf-bfb7-d0f8768f98c0&apiKey=d27b201b66fa4008b030539dc4f9452d"
                  target="_blank"
                  rel="noreferrer"
                  className="ml-2 inline-flex items-center rounded-md px-3 py-2 text-sm border"
                >
                  Resume
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {[
                  "Flutter",
                  "Dart",
                  "Firebase",
                  "Riverpod",
                  "BLoC",
                  "Animations",
                ].map((t) => (
                  <Badge key={t} variant="secondary" className="px-3 py-1">
                    {t}
                  </Badge>
                ))}
              </div>

              <div className="mt-6 text-sm text-muted-foreground">
                <p>Nagpur, India</p>
                <p>
                  Email: <a href="mailto:ayushshende83@gmail.com" className="underline">ayushshende83@gmail.com</a> — Phone: <a href="tel:+919518598045" className="underline">+91 9518598045</a>
                </p>
              </div>
            </div>

            {/* mock device */}
            <motion.div
              className="relative mx-auto w-full max-w-sm"
              initial={{ y: 0, rotate: 0 }}
              animate={{ y: [0, -10, 0], rotate: [0, 1.5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.03, rotate: -2 }}
            >
              <div className="absolute -inset-1 rounded-[2.2rem] bg-gradient-to-br from-primary/30 via-cyan-400/30 to-blue-500/30 blur-2xl" />
              <div className="relative aspect-[9/19] rounded-[2rem] border bg-gradient-to-b from-background to-muted shadow-xl transform-gpu">
                <div className="absolute inset-3 rounded-[1.6rem] bg-background border overflow-hidden flex items-center justify-center">
                  {/* Carousel */}
                  <Carousel />
                </div>
                <div className="absolute left-1/2 top-1.5 -translate-x-1/2 rounded-full bg-muted h-6 w-24" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* projects */}
      <section id="projects" className="scroll-mt-32 pt-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold">Selected Projects</h2>
              <p className="text-muted-foreground mt-1">A few apps I loved building</p>
            </div>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <Card key={p.title} className="group">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {p.title}
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground">
                      <Smartphone className="h-4 w-4" /> Flutter
                    </span>
                  </CardTitle>
                  <CardDescription>{p.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <Badge key={t} variant="outline" className="px-2.5 py-0.5">
                        {t}
                      </Badge>
                    ))}
                  </div>
                  <div className="mt-4 flex gap-2">
                    <Button asChild size="sm">
                      <a href={p.links.github}>
                        <Code2 className="mr-1 h-4 w-4" /> Source
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* about */}
      <section id="about" className="scroll-mt-32 pt-20">
        <div className="mx-auto max-w-7xl px-4 grid gap-8 md:grid-cols-3">
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold">About</h2>
            <p className="text-muted-foreground mt-1">Who I am and how I work</p>
          </div>
          <div className="md:col-span-2 space-y-4 text-muted-foreground">
            <p>
              I design and build fast, reliable apps with a strong focus on user experience. I care about
              clean architecture, maintainable code, and pixel‑perfect UI.
            </p>
            <p>
              My toolkit includes Flutter, Dart, Firebase, REST, Riverpod/BLoC, and CI/CD. I’ve shipped apps end‑to‑end: from idea, to store, to users.
            </p>
          </div>
        </div>
      </section>

      {/* education */}
      <section id="education" className="scroll-mt-32 pt-12">
        <div className="mx-auto max-w-7xl px-4 grid gap-6 md:grid-cols-3 items-start">
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold">Education</h2>
            <p className="text-muted-foreground mt-1">Academic background</p>
          </div>
          <div className="md:col-span-2 space-y-4 text-muted-foreground">
            <div>
              <p className="font-semibold">Manipal University Jaipur — Bachelor of Computer Applications (BCA)</p>
              <p className="text-sm">2024 – Present</p>
              <p className="text-sm">SGPA (Semester 1): 9.18 / 10.00</p>
            </div>
          </div>
        </div>
      </section>

      {/* skills */}
      <section id="skills" className="scroll-mt-32 pt-20">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-2xl font-bold">Skills</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {skills.map((s) => (
              <Card key={s.group}>
                <CardHeader>
                  <CardTitle className="text-xl">{s.group}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {s.items.map((i) => (
                      <Badge key={i} variant="secondary" className="px-3 py-1">
                        {i}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* contact */}
      <section id="contact" className="scroll-mt-32 pt-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="rounded-2xl border p-8 md:p-12 bg-gradient-to-br from-primary/10 via-accent/6 to-secondary/6">
            <h2 className="text-2xl md:text-3xl font-bold">Let’s build your next app</h2>
            <p className="mt-2 text-muted-foreground max-w-prose">
              Have an idea or need help scaling your product? I’m open to freelance and full‑time opportunities.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Button asChild>
                <a href="mailto:ayushshende83@gmail.com?subject=Project%20inquiry%20(Flutter)">Email Me</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://linkedin.com/in/ayushshende0">Connect on LinkedIn</a>
              </Button>
              <Button variant="ghost" asChild>
                <a href="tel:+919518598045">Call: +91 9518598045</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="h-24" />
    </main>
  );
}
