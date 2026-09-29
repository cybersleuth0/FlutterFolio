import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  Copy,
  Download,
  Github,
  Linkedin,
  Mail,
  PenLine,
} from "lucide-react";

const EMAIL = "ayushshende83@gmail.com";
const RESUME = "/Ayush-Shende-Resume.pdf";

const stats = [
  { value: "1.2", unit: "yrs", label: "production Flutter experience" },
  { value: "40", unit: "+", label: "hospitals running BonoRx" },
  { value: "50", unit: "+", label: "REST APIs integrated" },
  { value: "28", unit: "%", label: "faster startup (1981 → 1430ms)" },
  { value: "95", unit: "%+", label: "crash-free rate" },
];

const projects = [
  {
    title: "BonoRx",
    kind: "Healthcare · Production",
    year: "2025 — now",
    description:
      "Healthcare platform live on Google Play and used across 40+ hospitals. I architected the Flutter frontend and shipped AI voice-to-text, AI discharge summaries, PDF e-prescriptions and real-time patient queues.",
    tags: ["Clean Architecture", "14 BLoCs", "Dio", "Socket.IO", "WebSockets", "Flavors"],
    metrics: ["40+ hospitals", "80% less documentation time", "5x faster discharges"],
    link: "https://play.google.com/store/apps/details?id=ai.bonorx.app",
    cta: "Play Store",
  },
  {
    title: "flutter_profile_mcp",
    kind: "Open source · pub.dev package",
    year: "",
    description:
      "A published Flutter package that lets AI assistants read Flutter developer profiles over the Model Context Protocol (MCP), with reusable, fully documented APIs.",
    tags: ["Dart", "MCP", "AI tooling"],
    metrics: ["Published on pub.dev"],
    link: "https://pub.dev/packages/flutter_profile_mcp",
    cta: "pub.dev",
  },
  {
    title: "ShopSphere",
    kind: "E-commerce · Open source",
    year: "",
    description:
      "A complete shopping app with authentication, product browsing, cart, checkout and REST API integration.",
    tags: ["Clean Architecture", "BLoC", "REST APIs"],
    metrics: ["Auth to checkout"],
    link: "https://github.com/cybersleuth0/ShopSphere",
    cta: "GitHub",
  },
  {
    title: "Expenso",
    kind: "Finance · Open source",
    year: "",
    description:
      "An offline-first expense tracker with full CRUD, category filters and monthly/yearly analytics dashboards.",
    tags: ["SQLite", "BLoC", "Offline-first"],
    metrics: ["Works offline", "Analytics dashboards"],
    link: "https://github.com/cybersleuth0/Expenso",
    cta: "GitHub",
  },
  {
    title: "NewsApp",
    kind: "News · Open source",
    year: "",
    description:
      "A modular news aggregator on the real-time News API with shimmer loading and carousel banners.",
    tags: ["flutter_bloc", "News API", "Shimmer"],
    metrics: ["Real-time feed"],
    link: "https://github.com/cybersleuth0/NewsApp",
    cta: "GitHub",
  },
];

const experience = [
  {
    when: "Aug 2025 — Present",
    role: "Flutter Engineer",
    org: "ClientDriven Solutions · BonoRx · Remote",
    points: [
      "Architected the Flutter frontend across 120+ files: Clean Architecture, 14 BLoCs, 7 repositories, Dev/QA/Prod flavors",
      "Integrated 50+ production REST APIs with Dio, automatic token refresh and centralized networking",
      "Built real-time patient queues on Socket.IO and live audio streaming over raw WebSockets",
      "Shipped AI voice-to-text, AI discharge summaries and PDF e-prescriptions: 80% less documentation time, 5x faster discharges",
      "Cut startup time 28% (1981ms → 1430ms) with DevTools profiling while holding a 95%+ crash-free rate",
    ],
  },
  {
    when: "Aug 2024 — Present",
    role: "BCA, Cybersecurity",
    org: "Manipal University Jaipur · CGPA 8.87",
    points: [
      "Flutter App Development, WsCube Tech (A+)",
      "KodeKloud Engineer Program, Linux Level 1",
      "Deloitte Cyber Job Simulation, Forage",
    ],
  },
];

const pubspec: [string, string[]][] = [
  ["core", ["dart", "flutter"]],
  ["architecture", ["clean_architecture", "mvvm", "repository_pattern"]],
  ["state", ["bloc", "cubit", "riverpod", "provider"]],
  ["backend", ["firebase_auth", "firestore", "firebase_storage", "dio", "sqlite"]],
  ["realtime", ["websockets", "socket_io", "firebase_realtime_sync"]],
  ["tooling", ["devtools", "maestro_e2e", "flavors", "postman", "git"]],
];

const marquee = [
  "Flutter",
  "Dart",
  "BLoC",
  "Riverpod",
  "Firebase",
  "Socket.IO",
  "Clean Architecture",
  "SQLite",
  "Maestro",
  "Animations",
];

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
} as const;

function SectionLabel({ n, children }: { n: string; children: string }) {
  return (
    <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
      <span className="text-primary">{n}</span> / {children}
    </p>
  );
}

const t = {
  k: "text-[#c678dd]", // keyword
  c: "text-[hsl(var(--highlight))]", // class
  s: "text-emerald-400", // string
  n: "text-primary", // named arg
  m: "text-muted-foreground/60", // comment
};

/* Code card: "me" written as a Flutter widget. */
function CodeCard() {
  const line = (indent: number, children: React.ReactNode) => (
    <div style={{ paddingLeft: `${indent * 1}rem` }}>{children}</div>
  );
  return (
    <div className="relative mx-auto w-full max-w-[480px]">
      <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-primary/10 blur-3xl" />
      <div className="overflow-hidden rounded-2xl border bg-card shadow-2xl shadow-primary/10">
        <div className="flex items-center gap-2 border-b px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-rose-400/80" />
          <span className="h-3 w-3 rounded-full bg-amber-400/80" />
          <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
          <span className="ml-3 font-mono text-xs text-muted-foreground">lib/me.dart</span>
        </div>
        <div className="overflow-x-auto p-5 font-mono text-[12.5px] leading-7 sm:p-6 sm:text-[13px]">
          {line(0, <><span className={t.k}>class</span> <span className={t.c}>AyushShende</span> <span className={t.k}>extends</span> <span className={t.c}>StatelessWidget</span> {"{"}</>)}
          {line(1, <span className={t.m}>@override</span>)}
          {line(1, <><span className={t.c}>Widget</span> build(<span className={t.c}>BuildContext</span> context) {"{"}</>)}
          {line(2, <><span className={t.k}>return</span> <span className={t.c}>FlutterEngineer</span>(</>)}
          {line(3, <><span className={t.n}>experience</span>: <span className={t.s}>'1.2 years'</span>,</>)}
          {line(3, <><span className={t.n}>shipped</span>: [</>)}
          {line(4, <><span className={t.s}>'BonoRx'</span>,</>)}
          {line(4, <><span className={t.s}>'flutter_profile_mcp'</span>,</>)}
          {line(4, <><span className={t.m}>// + ShopSphere, Expenso, NewsApp</span></>)}
          {line(3, <>],</>)}
          {line(3, <><span className={t.n}>stack</span>: [<span className={t.c}>Bloc</span>, <span className={t.c}>Riverpod</span>, <span className={t.c}>Firebase</span>],</>)}
          {line(3, <><span className={t.n}>cares</span>: <span className={t.s}>'motion + clean code'</span>,</>)}
          {line(3, <><span className={t.n}>status</span>: <span className={t.c}>Status</span>.openToWork,</>)}
          {line(2, <>);</>)}
          {line(1, "}")}
          {line(0, <>{"}"}<span className="ml-1 inline-block h-4 w-2 translate-y-0.5 animate-pulse bg-primary" /></>)}
        </div>
      </div>
    </div>
  );
}

function CopyEmail() {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => {
        navigator.clipboard?.writeText(EMAIL).then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 1800);
        });
      }}
      className="group inline-flex items-center gap-3 rounded-full border px-5 py-3 font-mono text-sm transition hover:border-primary hover:text-primary"
    >
      {EMAIL}
      {copied ? <Check className="h-4 w-4 text-primary" /> : <Copy className="h-4 w-4 opacity-60 group-hover:opacity-100" />}
    </button>
  );
}

export default function Index() {
  return (
    <main className="relative overflow-hidden">
      {/* Hero */}
      <section className="relative">
        <div className="bg-grid pointer-events-none absolute inset-0" />
        <div className="glow pointer-events-none absolute inset-0" />
        <div className="relative mx-auto grid max-w-7xl gap-16 px-4 pb-20 pt-32 md:px-6 md:pt-40 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border bg-card/60 px-3 py-1.5 font-mono text-xs text-muted-foreground backdrop-blur"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Immediate joiner · Remote & on-site · Nagpur
            </motion.div>

            <h1 className="mt-8 font-display text-[clamp(3rem,9vw,7.5rem)] font-extrabold leading-[0.88] tracking-[-0.045em]">
              {["Flutter apps", "that feel"].map((line, i) => (
                <motion.span
                  key={line}
                  initial={{ opacity: 0, y: "0.4em" }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="block"
                >
                  {line}
                </motion.span>
              ))}
              <motion.span
                initial={{ opacity: 0, y: "0.4em" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="block text-primary"
              >
                alive<span className="text-[hsl(var(--highlight))]">.</span>
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground"
            >
              I'm <span className="text-foreground">Ayush Shende</span>, a Flutter engineer with{" "}
              <span className="text-foreground">1.2 years</span> of production experience on a
              healthcare app used across <span className="text-foreground">40+ hospitals</span>: AI
              voice-to-text, real-time WebSockets, 50+ APIs, and the polish that makes products feel
              deliberate.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <a
                href="#work"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-semibold text-background transition hover:bg-primary hover:text-primary-foreground"
              >
                See my work
                <ArrowDownRight className="h-4 w-4 transition group-hover:rotate-[-45deg]" />
              </a>
              <a
                href={RESUME}
                className="inline-flex items-center gap-2 rounded-full border px-6 py-3.5 text-sm font-semibold transition hover:border-foreground"
              >
                <Download className="h-4 w-4" />
                Résumé
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40, rotate: 4 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <CodeCard />
          </motion.div>
        </div>

        {/* Stats */}
        <div className="relative border-y bg-card/40 backdrop-blur">
          <dl className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-5">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + i * 0.06 }}
                className={`px-4 py-8 md:px-6 ${i % 2 ? "border-l" : ""} md:border-l md:first:border-l-0 ${i === 4 ? "col-span-2 border-t md:col-span-1 md:border-t-0" : ""} ${i > 1 && i < 4 ? "border-t md:border-t-0" : ""}`}
              >
                <dd className="font-display text-4xl font-bold tracking-tight md:text-5xl">
                  {s.value}
                  <span className="text-primary">{s.unit}</span>
                </dd>
                <dt className="mt-2 text-sm text-muted-foreground">{s.label}</dt>
              </motion.div>
            ))}
          </dl>
        </div>
      </section>

      {/* Marquee */}
      <div className="overflow-hidden border-b py-5" aria-hidden>
        <div className="marquee flex w-max gap-10 whitespace-nowrap font-display text-3xl font-bold md:text-4xl">
          {[...marquee, ...marquee].map((m, i) => (
            <span key={i} className={i % 2 ? "text-outline" : ""}>
              {m} <span className="text-primary">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* Work */}
      <section id="work" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-28 md:px-6">
        <motion.div {...reveal} className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <SectionLabel n="01">Selected work</SectionLabel>
            <h2 className="mt-4 font-display text-5xl font-bold tracking-[-0.03em] md:text-7xl">
              Things I've shipped.
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground">
            A production app running in 40+ hospitals, a published pub.dev package, and open-source
            builds where I push architecture and UI craft.
          </p>
        </motion.div>

        <div className="mt-16 border-t">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              {...reveal}
              href={p.link}
              target="_blank"
              rel="noreferrer noopener"
              className="group relative grid gap-6 border-b py-10 transition-colors md:grid-cols-[80px_1fr_1.2fr_auto] md:gap-10 md:py-14"
            >
              <span className="pointer-events-none absolute inset-0 origin-left scale-x-0 bg-primary/[0.04] transition-transform duration-500 group-hover:scale-x-100" />
              <p className="relative font-mono text-sm text-muted-foreground">0{i + 1}</p>
              <div className="relative">
                <h3 className="font-display text-4xl font-bold tracking-tight transition group-hover:text-primary md:text-6xl">
                  {p.title}
                </h3>
                <p className="mt-3 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  {p.kind}{p.year && ` · ${p.year}`}
                </p>
              </div>
              <div className="relative">
                <p className="leading-relaxed text-muted-foreground">{p.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.metrics.map((m) => (
                    <span key={m} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {m}
                    </span>
                  ))}
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full border px-3 py-1 text-xs text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <span className="relative inline-flex h-14 w-14 items-center justify-center self-start rounded-full border transition group-hover:rotate-45 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                <ArrowUpRight className="h-5 w-5" />
                <span className="sr-only">Open {p.title} on {p.cta}</span>
              </span>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="border-y bg-card/40">
        <div className="mx-auto grid max-w-7xl scroll-mt-24 gap-16 px-4 py-28 md:px-6 lg:grid-cols-[0.8fr_1.2fr]">
          <motion.div {...reveal} className="lg:sticky lg:top-32 lg:self-start">
            <SectionLabel n="02">Experience</SectionLabel>
            <h2 className="mt-4 font-display text-5xl font-bold tracking-[-0.03em] md:text-6xl">
              Shipping to <span className="text-primary">40+ hospitals.</span>
            </h2>
            <p className="mt-6 max-w-md text-muted-foreground">
              1.2 years owning the Flutter frontend of a live healthcare platform, with releases
              that doctors and hospital staff rely on every day.
            </p>
          </motion.div>

          <ol className="relative border-l">
            {experience.map((e) => (
              <motion.li key={e.role} {...reveal} className="relative pb-14 pl-8 last:pb-0">
                <span className="absolute -left-[7px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-primary bg-background" />
                <p className="font-mono text-xs uppercase tracking-wider text-primary">{e.when}</p>
                <h3 className="mt-3 font-display text-2xl font-bold md:text-3xl">{e.role}</h3>
                <p className="mt-1 text-muted-foreground">{e.org}</p>
                <ul className="mt-5 space-y-2.5">
                  {e.points.map((pt) => (
                    <li key={pt} className="flex gap-3 text-sm leading-relaxed text-foreground/85">
                      <span className="mt-2 h-1 w-3 shrink-0 bg-primary" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      {/* Skills as pubspec.yaml */}
      <section id="skills" className="mx-auto grid max-w-7xl scroll-mt-24 gap-16 px-4 py-28 md:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <motion.div {...reveal}>
          <SectionLabel n="03">Toolkit</SectionLabel>
          <h2 className="mt-4 font-display text-5xl font-bold tracking-[-0.03em] md:text-6xl">
            My dependencies.
          </h2>
          <p className="mt-6 max-w-md text-muted-foreground">
            The stack I reach for to make apps reliable, expressive and ready for teams that move
            fast and change their minds.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {[
              ["Motion-first", "Transitions and feedback that make an app feel deliberate."],
              ["Production habits", "Flavors, token handling, real-time sync, E2E tests."],
            ].map(([t, d]) => (
              <div key={t} className="rounded-2xl border p-5">
                <p className="font-semibold">{t}</p>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div {...reveal} className="overflow-hidden rounded-2xl border bg-card shadow-2xl shadow-primary/5">
          <div className="flex items-center gap-2 border-b px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-rose-400/80" />
            <span className="h-3 w-3 rounded-full bg-amber-400/80" />
            <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
            <span className="ml-3 font-mono text-xs text-muted-foreground">ayush/pubspec.yaml</span>
          </div>
          <pre className="overflow-x-auto p-6 font-mono text-[13px] leading-7">
            <span className="text-muted-foreground">name:</span> ayush_shende{"\n"}
            <span className="text-muted-foreground">version:</span> 1.2.0{" "}
            <span className="text-muted-foreground/60"># years of production</span>
            {"\n\n"}
            <span className="text-muted-foreground">dependencies:</span>
            {"\n"}
            {pubspec.map(([group, items]) => (
              <span key={group}>
                {"  "}
                <span className="text-primary">{group}:</span>
                {"\n"}
                {items.map((it) => (
                  <span key={it}>
                    {"    "}
                    <span className="text-foreground">{it}</span>
                    <span className="text-muted-foreground">: </span>
                    <span className="text-[hsl(var(--highlight))]">^latest</span>
                    {"\n"}
                  </span>
                ))}
              </span>
            ))}
          </pre>
        </motion.div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative scroll-mt-24 overflow-hidden border-t">
        <div className="glow pointer-events-none absolute inset-0" />
        <motion.div {...reveal} className="relative mx-auto max-w-7xl px-4 py-32 md:px-6">
          <SectionLabel n="04">Contact</SectionLabel>
          <h2 className="mt-6 font-display text-[clamp(3rem,10vw,9rem)] font-extrabold leading-[0.9] tracking-[-0.045em]">
            Let's build
            <br />
            <span className="text-primary">something</span> good.
          </h2>
          <p className="mt-8 max-w-xl text-lg text-muted-foreground">
            Open to remote and on-site Flutter roles, freelance projects and product teams where
            architecture, AI features and UX all matter. Immediate joiner.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${EMAIL}?subject=Flutter%20project%20inquiry`}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
            >
              <Mail className="h-4 w-4" />
              Email me
            </a>
            <CopyEmail />
          </div>
          <div className="mt-12 flex flex-wrap gap-6 text-sm">
            {[
              { href: "https://github.com/cybersleuth0", label: "GitHub", Icon: Github },
              { href: "https://www.linkedin.com/in/ayushshende0/", label: "LinkedIn", Icon: Linkedin },
              { href: "https://medium.com/@ayushshende83", label: "Medium", Icon: PenLine },
            ].map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                className="group inline-flex items-center gap-2 text-muted-foreground transition hover:text-foreground"
              >
                <Icon className="h-4 w-4" />
                {label}
                <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            ))}
          </div>
        </motion.div>
      </section>
    </main>
  );
}
