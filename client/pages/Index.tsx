import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Github,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Play,
  Rocket,
  Smartphone,
  Sparkles,
  WandSparkles,
  Zap,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const spotlightProjects = [
  {
    title: "BonoRx",
    eyebrow: "Healthcare platform",
    description:
      "A production healthcare app where I owned frontend architecture, shipped AI voice-to-text and discharge summary flows, and handled dense real-time integrations for day-to-day clinical use.",
    metrics: ["100+ users served", "95%+ crash-free", "50+ APIs integrated"],
    link: "https://play.google.com/store/apps/details?id=ai.bonorx.app",
  },
  {
    title: "ShopSphere",
    eyebrow: "Commerce experience",
    description:
      "A polished shopping app with BLoC architecture, themed flows, and a structure that is easy to scale without losing speed.",
    metrics: ["BLoC architecture", "Reusable UI kit", "Cross-platform ready"],
    link: "https://github.com/cybersleuth0/ShopSphere",
  },
  {
    title: "Expenso",
    eyebrow: "Personal finance app",
    description:
      "A focused tracking experience that turns local storage, filters, and charts into a lightweight product people can actually stick with.",
    metrics: ["Offline data", "SQLite", "Visual analytics"],
    link: "https://github.com/cybersleuth0/Expenso",
  },
];

const proofPoints = [
  {
    title: "Built for motion",
    description:
      "I care about transitions, feedback, and the tiny touches that make a Flutter product feel deliberate instead of assembled.",
    icon: WandSparkles,
  },
  {
    title: "Strong production habits",
    description:
      "I work with Clean Architecture, multi-flavor builds, token handling, real-time sync, and the details that keep production apps dependable.",
    icon: Layers3,
  },
  {
    title: "Fast collaboration",
    description:
      "I have worked inside an Agile team, joined code reviews, shaped API contracts, and kept features moving within sprint timelines.",
    icon: Rocket,
  },
];

const toolkitGroups = [
  {
    title: "Core stack",
    items: ["Flutter", "Dart", "Firebase", "REST APIs", "SQLite", "Git"],
  },
  {
    title: "State and structure",
    items: [
      "BLoC",
      "Cubit",
      "Riverpod",
      "Provider",
      "Clean Architecture",
      "MVVM",
      "Repository Pattern",
    ],
  },
  {
    title: "Product polish",
    items: [
      "Animations",
      "Socket.IO",
      "AI voice-to-text",
      "PDF generation",
      "Audio processing",
      "Maestro E2E",
      "Flutter flavors",
      "App store delivery",
    ],
  },
];

const timelineMoments = [
  {
    year: "2024",
    title: "Started BCA in Cybersecurity at Manipal University Jaipur",
    description:
      "Built a strong technical base while sharpening Flutter, product thinking, and cross-functional problem solving.",
  },
  {
    year: "Aug 2025",
    title: "Joined ClientDriven Solutions as a Flutter Developer Intern",
    description:
      "Onboarded into the BonoRx codebase and ramped up quickly on Clean Architecture, BLoC patterns, and production workflows.",
  },
  {
    year: "Oct 2025",
    title: "Moved into a Junior Flutter Developer role",
    description:
      "Owned frontend architecture, shipped 35+ screens, integrated AI features, and improved startup performance by 28%.",
  },
  {
    year: "Now",
    title: "Open to remote Flutter roles with immediate availability",
    description:
      "Looking for ambitious product teams where I can keep building reliable Flutter apps with stronger UX and real business impact.",
  },
];

const flutterSignals = [
  "9 months production",
  "95%+ crash-free",
  "AI-powered features",
  "Remote and immediate",
];

const heroContentVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const heroItemVariants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
    },
  },
};

export default function Index() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <main className="portfolio-shell relative overflow-hidden pb-24">
      <div className="portfolio-noise pointer-events-none absolute inset-0 opacity-40" />
      <div className="portfolio-hero-glow-primary pointer-events-none absolute inset-x-0 top-0 -z-10 h-[760px]" />
      <div className="portfolio-hero-glow-secondary pointer-events-none absolute inset-x-0 top-[420px] -z-10 h-[720px]" />

      <section className="relative mx-auto max-w-7xl px-4 pt-28 md:px-6 md:pt-32">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <motion.div
            initial="hidden"
            animate="show"
            variants={heroContentVariants}
          >
            <motion.div
              variants={heroItemVariants}
              animate={
                shouldReduceMotion ? undefined : { y: [0, -4, 0] }
              }
              transition={
                shouldReduceMotion
                  ? undefined
                  : {
                      y: {
                        duration: 3.8,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                    }
              }
              className="portfolio-hero-badge inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-4 py-2 text-xs uppercase tracking-[0.24em] text-sky-100/80"
            >
              <Sparkles className="h-3.5 w-3.5 text-cyan-300" />
              Junior Flutter Developer from Nagpur
            </motion.div>

            <motion.h1
              variants={heroItemVariants}
              className="mt-6 max-w-3xl text-5xl font-bold leading-[0.95] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl"
            >
              I design Flutter apps that feel fast,
              <span className="portfolio-gradient-text block">
                alive, and worth remembering.
              </span>
            </motion.h1>

            <motion.p
              variants={heroItemVariants}
              className="mt-6 max-w-2xl text-lg leading-8 text-slate-300"
            >
              Junior Flutter Developer with production healthcare experience,
              50+ API integrations, AI-powered app flows, and a strong focus on
              clean architecture, performance, and product polish.
            </motion.p>

            <motion.div
              variants={heroItemVariants}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Button asChild size="lg" className="rounded-full px-6">
                <a href="#projects">
                  See Featured Work
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full border-white/15 bg-white/5 px-6 text-white hover:bg-white/10 hover:text-white"
              >
                <a href="#contact">Start a Conversation</a>
              </Button>
            </motion.div>

            <motion.div
              variants={heroItemVariants}
              className="mt-8 flex flex-wrap gap-3"
            >
              {flutterSignals.map((signal, index) => (
                <motion.span
                  key={signal}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.45 + index * 0.08,
                    ease: "easeOut",
                  }}
                  whileHover={
                    shouldReduceMotion ? undefined : { y: -3, scale: 1.02 }
                  }
                  className="portfolio-signal-pill rounded-full border border-cyan-400/20 bg-cyan-400/8 px-4 py-2 text-sm text-cyan-100/85"
                >
                  {signal}
                </motion.span>
              ))}
            </motion.div>

            <motion.div
              variants={heroItemVariants}
              className="mt-10 grid gap-4 sm:grid-cols-3"
            >
              <motion.div whileHover={shouldReduceMotion ? undefined : { y: -6 }}>
                <Card className="portfolio-panel border-white/10">
                  <CardContent className="p-5">
                    <p className="text-3xl font-semibold text-white">9 mo</p>
                    <p className="mt-2 text-sm text-slate-300">
                      of production Flutter work on a live healthcare app
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div whileHover={shouldReduceMotion ? undefined : { y: -6 }}>
                <Card className="portfolio-panel border-white/10">
                  <CardContent className="p-5">
                    <p className="text-3xl font-semibold text-white">50+</p>
                    <p className="mt-2 text-sm text-slate-300">
                      REST APIs integrated with token refresh and sub-2s flows
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div whileHover={shouldReduceMotion ? undefined : { y: -6 }}>
                <Card className="portfolio-panel border-white/10">
                  <CardContent className="p-5">
                    <p className="text-3xl font-semibold text-white">28%</p>
                    <p className="mt-2 text-sm text-slate-300">
                      startup improvement from profiling and optimization work
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={
              shouldReduceMotion
                ? { opacity: 1, y: 0 }
                : { opacity: 1, y: [0, -10, 0] }
            }
            transition={
              shouldReduceMotion
                ? { duration: 0.7, delay: 0.1, ease: "easeOut" }
                : {
                    opacity: { duration: 0.7, delay: 0.1, ease: "easeOut" },
                    y: {
                      duration: 5.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }
            }
            className="relative"
          >
            <div className="portfolio-device mx-auto w-full max-w-[520px] rounded-[2rem] p-4 shadow-[0_40px_120px_rgba(8,15,37,0.55)]">
              <div className="rounded-[1.6rem] border border-white/10 bg-slate-950/90 p-5">
                <div className="portfolio-device-screen rounded-[1.4rem] border border-cyan-400/15 bg-[linear-gradient(180deg,rgba(5,10,24,0.98),rgba(12,20,42,0.92))] p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm uppercase tracking-[0.2em] text-cyan-200/70">
                        Current Focus
                      </p>
                      <p className="mt-2 text-2xl font-semibold text-white">
                        Flutter apps with real product energy
                      </p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                      <Smartphone className="h-6 w-6 text-cyan-300" />
                    </div>
                  </div>

                  <div className="mt-6 grid gap-3">
                    <div className="rounded-2xl border border-white/8 bg-white/5 p-4">
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-slate-300">UI polish</p>
                        <p className="text-sm font-medium text-cyan-300">92%</p>
                      </div>
                      <div className="mt-3 h-2 rounded-full bg-white/5">
                        <motion.div
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{
                            duration: 0.9,
                            delay: 0.35,
                            ease: "easeOut",
                          }}
                          className="h-2 w-[92%] origin-left rounded-full bg-[linear-gradient(90deg,#22d3ee,#38bdf8)]"
                        />
                      </div>
                    </div>

                    <div className="rounded-2xl border border-white/8 bg-white/5 p-4">
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-slate-300">Architecture</p>
                        <p className="text-sm font-medium text-emerald-300">
                          88%
                        </p>
                      </div>
                      <div className="mt-3 h-2 rounded-full bg-white/5">
                        <motion.div
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{
                            duration: 0.9,
                            delay: 0.48,
                            ease: "easeOut",
                          }}
                          className="h-2 w-[88%] origin-left rounded-full bg-[linear-gradient(90deg,#2dd4bf,#34d399)]"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl border border-white/8 bg-white/5 p-4">
                      <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                        Signature
                      </p>
                      <p className="mt-2 text-base font-medium text-white">
                        motion, gradients, and premium-feeling flows
                      </p>
                    </div>
                    <div className="rounded-2xl border border-white/8 bg-white/5 p-4">
                      <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                        Favorite stack
                      </p>
                      <p className="mt-2 text-base font-medium text-white">
                        Flutter + BLoC + Firebase + thoughtful UX
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {["BLoC", "Firebase", "Animations", "REST", "SQLite"].map(
                      (item) => (
                        <Badge
                          key={item}
                          className="rounded-full border border-white/10 bg-white/8 px-3 py-1 text-slate-200 hover:bg-white/8"
                        >
                          {item}
                        </Badge>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="mx-auto mt-4 grid w-full max-w-[520px] gap-3 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-4 shadow-xl backdrop-blur">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                  Based in
                </p>
                <p className="mt-2 flex items-center gap-2 text-sm text-white">
                  <MapPin className="h-4 w-4 text-cyan-300" />
                  Nagpur, India
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-slate-950/85 p-4 shadow-xl backdrop-blur">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                  Strength
                </p>
                <p className="mt-2 flex items-center gap-2 text-sm text-white">
                  <Zap className="h-4 w-4 text-amber-300" />
                  Turning rough ideas into sharp mobile products
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="about" className="scroll-mt-32 md:scroll-mt-36 mx-auto mt-24 max-w-7xl px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[0.78fr_1.22fr]">
          <Card className="portfolio-panel border-white/10">
            <CardContent className="p-8">
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-200/70">
                About me
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white">
                I build mobile work that feels crafted, not copied.
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-300">
                I am a Flutter developer who likes shipping clean architecture,
                calm interfaces, and features that solve real workflow
                problems. My recent work includes AI voice-to-text,
                real-time queues, role-based flows, and polished mobile UX.
              </p>
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-3">
            {proofPoints.map((proofPoint, index) => {
              const Icon = proofPoint.icon;
              return (
                <motion.div
                  key={proofPoint.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                >
                  <Card className="portfolio-panel h-full border-white/10">
                    <CardContent className="p-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="mt-5 text-xl font-semibold text-white">
                        {proofPoint.title}
                      </h3>
                      <p className="mt-3 text-sm leading-6 text-slate-300">
                        {proofPoint.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="projects" className="scroll-mt-32 md:scroll-mt-36 mx-auto mt-24 max-w-7xl px-4 md:px-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-200/70">
              Featured work
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-white md:text-4xl">
              A portfolio that now feels more like a product showcase.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-slate-300">
            These cards focus on outcomes, not just tools, so visitors see
            product thinking before they see a list of tech.
          </p>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {spotlightProjects.map((spotlightProject, index) => (
            <motion.div
              key={spotlightProject.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className={index === 0 ? "lg:col-span-2" : ""}
            >
              <Card className="portfolio-panel h-full overflow-hidden border-white/10">
                <CardContent className="p-0">
                  <div className="h-full p-7">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-sm uppercase tracking-[0.24em] text-cyan-200/70">
                          {spotlightProject.eyebrow}
                        </p>
                        <h3 className="mt-3 text-2xl font-semibold text-white">
                          {spotlightProject.title}
                        </h3>
                      </div>
                      <a
                        href={spotlightProject.link}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
                        aria-label={`Open ${spotlightProject.title}`}
                      >
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    </div>

                    <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300">
                      {spotlightProject.description}
                    </p>

                    <div className="mt-6 grid gap-3 sm:grid-cols-3">
                      {spotlightProject.metrics.map((metric) => (
                        <div
                          key={metric}
                          className="rounded-2xl border border-white/8 bg-white/5 px-4 py-4 text-sm text-slate-200"
                        >
                          {metric}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="skills" className="scroll-mt-32 md:scroll-mt-36 mx-auto mt-24 max-w-7xl px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Card className="portfolio-panel border-white/10">
            <CardContent className="p-8">
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-200/70">
                Build stack
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white">
                Tools that support both speed and polish.
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-300">
                The goal is not to show every keyword I know. It is to show the
                stack I use to make ideas reliable, expressive, and ready for
                real teams, users, and changing product requirements.
              </p>
            </CardContent>
          </Card>

          <div className="grid gap-4">
            {toolkitGroups.map((toolkitGroup, index) => (
              <motion.div
                key={toolkitGroup.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <Card className="portfolio-panel border-white/10">
                  <CardContent className="p-6">
                    <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                      <h3 className="text-xl font-semibold text-white">
                        {toolkitGroup.title}
                      </h3>
                      <div className="flex flex-wrap gap-2 md:max-w-[70%] md:justify-end">
                        {toolkitGroup.items.map((item) => (
                          <Badge
                            key={item}
                            className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-slate-100 hover:bg-white/5"
                          >
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-7xl px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <Card className="portfolio-panel border-white/10">
            <CardContent className="p-8">
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-200/70">
                Timeline
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white">
                A clearer story of growth.
              </h2>
              <div className="mt-8 space-y-5">
                {timelineMoments.map((timelineMoment) => (
                  <div
                    key={timelineMoment.title}
                    className="border-l border-white/10 pl-5"
                  >
                    <p className="text-xs uppercase tracking-[0.24em] text-cyan-200/70">
                      {timelineMoment.year}
                    </p>
                    <p className="mt-2 text-lg font-medium text-white">
                      {timelineMoment.title}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {timelineMoment.description}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="portfolio-panel border-white/10">
            <CardContent className="p-8">
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-200/70">
                Why teams hire me
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white">
                I balance product taste with dependable Flutter execution.
              </h2>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm font-medium text-white">
                    Product thinking
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    I focus on flows, clarity, and interface decisions that
                    make complex products feel easier for real users to trust
                    and navigate.
                  </p>
                </div>
                <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/8 p-5">
                  <p className="text-sm font-medium text-white">Execution</p>
                  <p className="mt-3 text-sm leading-6 text-cyan-50/90">
                    I build reliable Flutter apps with BLoC, Firebase,
                    WebSockets, E2E testing, and the polish needed for
                    production teams.
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-[1.75rem] border border-white/10 bg-slate-950/70 p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-cyan-300">
                    <Play className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.24em] text-slate-400">
                      Best fit
                    </p>
                    <p className="text-base font-medium text-white">
                      Teams building mobile products that need speed, reliability, and thoughtful UX
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contact" className="scroll-mt-32 md:scroll-mt-36 mx-auto mt-24 max-w-7xl px-4 md:px-6">
        <Card className="portfolio-contact-panel overflow-hidden border-white/10 shadow-[0_30px_90px_rgba(7,11,24,0.45)]">
          <CardContent className="grid gap-10 p-8 md:grid-cols-[1fr_auto] md:items-end md:p-10">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-200/70">
                Contact
              </p>
              <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.03em] text-white md:text-4xl">
                If you want a Flutter app that feels sharper than the usual
                portfolio promise, let’s talk.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
                I am open to remote Flutter roles, freelance projects, and
                product collaborations where clean architecture, AI features,
                and user experience all matter.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="mailto:ayushshende83@gmail.com"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:bg-white/10"
                >
                  <Mail className="h-4 w-4 text-cyan-300" />
                  ayushshende83@gmail.com
                </a>
                <a
                  href="https://github.com/cybersleuth0"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:bg-white/10"
                >
                  <Github className="h-4 w-4 text-cyan-300" />
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/ayushshende/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:bg-white/10"
                >
                  <Linkedin className="h-4 w-4 text-cyan-300" />
                  LinkedIn
                </a>
                <a
                  href="https://medium.com/@ayushshende83"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:bg-white/10"
                >
                  <Sparkles className="h-4 w-4 text-cyan-300" />
                  Medium
                </a>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 md:justify-end">
              <Button asChild size="lg" className="rounded-full px-6">
                <a href="mailto:ayushshende83@gmail.com?subject=Flutter%20project%20inquiry">
                  Email Me
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full border-white/15 bg-white/5 px-6 text-white hover:bg-white/10 hover:text-white"
              >
                <a
                  href="https://github.com/cybersleuth0"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Code2 className="h-4 w-4" />
                  View GitHub
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
