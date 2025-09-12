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
import { useEffect, useState, useRef } from "react";
import ChatPanel from "@/components/site/ChatPanel";

const projects = [
  {
    title: "ShopSphere",
    description:
      "Modern cross‑platform e‑commerce app with auth, product listings, cart, profiles and theme switching, built with a scalable BLoC + Repository architecture.",
    tags: [
      "Flutter",
      "Dart",
      "BLoC",
      "shared_preferences",
      "lottie",
      "carousel_slider",
      "provider",
    ],
    links: { github: "https://github.com/cybersleuth0/ShopSphere" },
  },
  {
    title: "Expenso",
    description:
      "Cross-platform personal expense tracker with CRUD, transaction filtering by date and category, and dynamic data visualizations for spending analysis. Built with Flutter and Bloc architecture.",
    tags: ["Flutter", "Dart", "Bloc", "SQLite"],
    links: { github: "https://github.com/cybersleuth0/Expenso" },
  },
  {
    title: "Todo App",
    description:
      "Offline-first To‑Do application with fast local storage using sqflite and Cubit for state management, designed for reliability without network connectivity.",
    tags: ["Flutter", "Dart", "Cubit", "Sqflite"],
    links: {
      github: "https://github.com/cybersleuth0/ToDo_offline_Database_Cubit",
    },
  },
  {
    title: "NewsApp",
    description:
      "News aggregator delivering real-time headlines via HTTP API integration, with shimmer loading, carousel slider, and modular theming using flutter_bloc.",
    tags: ["Flutter", "Dart", "http", "flutter_bloc"],
    links: { github: "https://github.com/cybersleuth0/NewsApp" },
  },
  {
    title: "Cloud Notes",
    description:
      "Firebase-synced note-taking app with real-time Firestore storage, authentication, and Bloc-based state management for scalable interactions.",
    tags: ["Flutter", "Dart", "Firebase", "Firestore"],
    links: { github: "https://github.com/cybersleuth0/cloud-notes" },
  },
];

const skills = [
  { group: "Languages", items: ["Dart"] },
  { group: "Frameworks", items: ["Flutter", "BLoC", "Cubit", "Provider"] },
  {
    group: "Tools",
    items: ["Android Studio", "VS Code", "Git", "GitHub", "Postman"],
  },
  { group: "Databases", items: ["Firebase", "SQLite"] },
  {
    group: "Other",
    items: [
      "State Management",
      "API Integration",
      "UI/UX Design",
      "Authentication",
    ],
  },
];

const miniSlides = [
  ({ className = "" }: { className?: string }) => (
    <div
      className={`h-full w-full p-4 ${"bg-gradient-to-b from-primary/6 via-accent/6 to-secondary/6"}`}
    >
      <div className="h-full w-full rounded-lg overflow-hidden bg-gradient-to-b from-black/0 to-black/5 p-4 flex flex-col">
        <div className="flex items-center justify-between mb-3">
          <div className="h-3 w-36 rounded bg-muted" />
          <div className="h-3 w-20 rounded bg-muted" />
        </div>
        <div className="flex-1 grid grid-cols-2 gap-3">
          <div className="rounded-lg bg-muted p-3 flex flex-col gap-2">
            <div className="h-6 w-3/4 rounded bg-black/10" />
            <div className="h-3 w-2/3 rounded bg-black/8" />
            <div className="mt-auto h-8 rounded bg-black/10" />
          </div>
          <div className="rounded-lg bg-muted p-3 flex flex-col gap-2">
            <div className="h-6 w-3/4 rounded bg-black/10" />
            <div className="h-3 w-2/3 rounded bg-black/8" />
            <div className="mt-auto h-8 rounded bg-black/10" />
          </div>
          <div className="col-span-2 rounded-lg bg-muted p-3">
            <div className="h-3 w-1/2 rounded bg-black/8 mb-3" />
            <div className="grid grid-cols-3 gap-2">
              <div className="h-20 rounded bg-black/10" />
              <div className="h-20 rounded bg-black/10" />
              <div className="h-20 rounded bg-black/10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
  ({ className = "" }: { className?: string }) => (
    <div
      className={`h-full w-full p-4 ${"bg-gradient-to-b from-secondary/6 to-accent/6"}`}
    >
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
    <div
      className={`h-full w-full p-4 ${"bg-gradient-to-b from-primary/6 to-accent/6"}`}
    >
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

function ChatPreview() {
  const steps = [
    { from: "client", text: "I'm stuck — my app crashes on launch 😩" },
    { from: "client", text: "I have a tight deadline and no time to debug..." },
    {
      from: "you",
      text: "Share the crash logs and I’ll take a look — I can fix it today.",
    },
    { from: "client", text: "That would be amazing, thank you!" },
    {
      from: "you",
      text: "Done. I pushed a patch and added tests. Can you try the build?",
    },
    { from: "client", text: "It works now — you're a lifesaver! 🙌" },
  ];

  // Reveal all messages but animate them bottom-to-top sequentially; no scrolling and keep visible
  const [revealedCount, setRevealedCount] = useState(0);

  useEffect(() => {
    const timers: number[] = [];
    const n = steps.length;

    // reveal bottom message first, then the one above it, etc.
    const revealStep = (i: number) => {
      if (i >= n) return;
      // reveal i-th from bottom -> index = n - 1 - i
      setRevealedCount(i + 1);
      timers.push(
        window.setTimeout(() => {
          revealStep(i + 1);
        }, 700),
      );
    };

    timers.push(window.setTimeout(() => revealStep(0), 600));

    return () => timers.forEach((t) => clearTimeout(t));
  }, []);

  const n = steps.length;

  return (
    <div className="h-full w-full p-2 flex flex-col justify-end overflow-hidden">
      <div className="space-y-2 h-full pr-2 box-border">
        {steps.map((s, i) => {
          const orderFromBottom = n - 1 - i; // 0 = bottom
          const visible = orderFromBottom < revealedCount; // show when revealedCount > orderFromBottom
          const delay = orderFromBottom * 0.12;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 8 }}
              transition={{ duration: 0.35, delay }}
              className={`max-w-[78%] ${s.from === "you" ? "ml-auto text-right" : "mr-auto text-left"}`}
            >
              <div
                className={`inline-block rounded-md px-2 py-1 text-[11px] leading-tight ${s.from === "you" ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"}`}
              >
                {s.text}
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-3 flex items-center gap-3 text-xs text-muted-foreground">
        <div className="h-2 w-2 rounded-full bg-destructive/60" />
        Client chat preview
      </div>
    </div>
  );
}

function MiniPreview() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setIndex((i) => (i + 1) % miniSlides.length),
      3500,
    );
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
          animate={{
            opacity: i === index ? 1 : 0,
            y: i === index ? 0 : 8,
            scale: i === index ? 1 : 0.995,
          }}
          transition={{ duration: 0.6 }}
        >
          <S />
        </motion.div>
      ))}
    </div>
  );
}

export default function Index() {
  return (
    <main className="relative">
      {/* decorative background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-48 -z-10 overflow-hidden"
      >
        <div className="mx-auto h-[420px] w-[1200px] max-w-none bg-[radial-gradient(800px_300px_at_50%_20%,theme(colors.cyan.400/.25),transparent),radial-gradient(600px_250px_at_20%_10%,theme(colors.primary.DEFAULT/.18),transparent),radial-gradient(600px_250px_at_80%_10%,theme(colors.blue.400/.18),transparent)] blur-2xl" />
      </div>

      {/* hero */}
      <section className="relative pt-36 md:pt-40">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 md:grid-cols-2 md:gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-muted-foreground">
                <Sparkles className="h-3.5 w-3.5" /> Available for freelance
                work
              </div>
              <h1 className="mt-6 text-4xl/tight font-extrabold sm:text-5xl/tight">
                <p>
                  Hi, I’m Ayush Shende — I build delightful mobile apps with
                  Flutter
                </p>
              </h1>
              <p className="mt-4 text-muted-foreground max-w-prose">
                Flutter developer focused on craft, performance and smooth
                animations. I turn ideas into polished, production‑ready apps.
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
                  Email:{" "}
                  <a
                    href="mailto:ayushshende83@gmail.com"
                    className="underline"
                  >
                    ayushshende83@gmail.com
                  </a>{" "}
                  — Phone:{" "}
                  <a href="tel:+919518598045" className="underline">
                    +91 9518598045
                  </a>
                </p>
              </div>
            </motion.div>

            {/* Persistent chat panel beside device */}
            <div className="mt-6 md:mt-0 md:ml-6">
              <ChatPanel />
            </div>
          </div>
        </div>
      </section>

      {/* projects */}
      <section id="projects" className="scroll-mt-32 pt-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold">Project i build till now</h2>
            </div>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, idx) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.25 }}
                transition={{ duration: 0.55, delay: idx * 0.06 }}
              >
                <Card className="group">
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
                        <Badge
                          key={t}
                          variant="outline"
                          className="px-2.5 py-0.5"
                        >
                          {t}
                        </Badge>
                      ))}
                    </div>
                    <div className="mt-4 flex gap-2">
                      <Button asChild size="sm">
                        <a
                          href={p.links.github}
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          <Code2 className="mr-1 h-4 w-4" /> Source
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* about */}
      <section id="about" className="scroll-mt-32 pt-20">
        <div className="mx-auto max-w-7xl px-4 grid gap-8 md:grid-cols-3">
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold">About</h2>
            <p className="text-muted-foreground mt-1">
              Who I am and how I work
            </p>
          </div>
          <motion.div
            className="md:col-span-2 space-y-4 text-muted-foreground"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.6 }}
          >
            <p>
              I design and build fast, reliable apps with a strong focus on user
              experience. I care about clean architecture, maintainable code,
              and pixel‑perfect UI.
            </p>
            <p>
              My toolkit includes Flutter, Dart, Firebase, REST, Riverpod/BLoC,
              and CI/CD. I’ve shipped apps end‑to‑end: from idea, to store, to
              users.
            </p>
          </motion.div>
        </div>
      </section>

      {/* education */}
      <section id="education" className="scroll-mt-32 pt-12">
        <div className="mx-auto max-w-7xl px-4 grid gap-6 md:grid-cols-3 items-start">
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold">Education</h2>
            <p className="text-muted-foreground mt-1">Academic background</p>
          </div>
          <motion.div
            className="md:col-span-2 space-y-4 text-muted-foreground"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <p className="font-semibold">
                Manipal University Jaipur — Bachelor of Computer Applications
                (BCA)
              </p>
              <p className="text-sm">2024 – Present</p>
              <p className="text-sm">SGPA (Semester 1): 9.18 / 10.00</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* skills */}
      <section id="skills" className="scroll-mt-32 pt-20">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-2xl font-bold">Skills</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {skills.map((s, idx) => (
              <motion.div
                key={s.group}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.25 }}
                transition={{ duration: 0.55, delay: idx * 0.05 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">{s.group}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {s.items.map((i) => (
                        <Badge
                          key={i}
                          variant="secondary"
                          className="px-3 py-1"
                        >
                          {i}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* contact */}
      <section id="contact" className="scroll-mt-32 pt-20">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            className="rounded-2xl border p-8 md:p-12 bg-gradient-to-br from-primary/10 via-accent/6 to-secondary/6"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold">
              Let’s build your next app
            </h2>
            <p className="mt-2 text-muted-foreground max-w-prose">
              Have an idea or need help scaling your product? I’m open to
              freelance and full‑time opportunities.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Button asChild>
                <a href="mailto:ayushshende83@gmail.com?subject=Project%20inquiry%20(Flutter)">
                  Email Me
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a
                  href="https://linkedin.com/in/ayushshende0"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Connect on LinkedIn
                </a>
              </Button>
              <Button variant="ghost" asChild>
                <a href="tel:+919518598045">Call: +91 9518598045</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="h-24" />
    </main>
  );
}
