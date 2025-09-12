import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const conversations = [
  [
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
  ],
  [
    { from: "client", text: "Could we add a dark mode toggle?" },
    {
      from: "you",
      text: "Absolutely. Do you want it to follow the system theme as well?",
    },
    { from: "client", text: "Yes, system default plus a switch in settings." },
    {
      from: "you",
      text: "Implemented both with saved preference. Please try the latest build.",
    },
    { from: "client", text: "Looks great — thanks!" },
    { from: "you", text: "Shipped with tests and accessibility checks." },
  ],
  [
    { from: "client", text: "The app feels slow on startup." },
    {
      from: "you",
      text: "Profiled it — heavy modules were eager-loaded. I’ve moved them to lazy load.",
    },
    { from: "client", text: "Anything I need to change on my side?" },
    {
      from: "you",
      text: "No action needed. Update v1.0.3 reduces cold start by ~40%.",
    },
    { from: "client", text: "Much faster now — perfect!" },
  ],
];

export default function ChatPanel() {
  const [convIndex, setConvIndex] = useState(0);
  const [revealedCount, setRevealedCount] = useState(0);

  useEffect(() => {
    const timers: number[] = [];
    const msgs = conversations[convIndex];

    const reveal = (i: number) => {
      if (i > msgs.length) {
        timers.push(
          window.setTimeout(() => {
            setRevealedCount(0);
            setConvIndex((ix) => (ix + 1) % conversations.length);
          }, 1600),
        );
        return;
      }
      setRevealedCount(i);
      timers.push(window.setTimeout(() => reveal(i + 1), 800));
    };

    timers.push(window.setTimeout(() => reveal(1), 500));

    return () => timers.forEach((t) => clearTimeout(t));
  }, [convIndex]);

  return (
    <Card className="mt-[22px] md:mt-8 w-full md:w-96 pt-5 lg:pt-0 max-[991px]:w-[409px] max-[991px]:pl-[19px]">
      <CardContent>
        <div className="w-full">
          {/* Device border */}
          <div className="relative h-[500px] md:h-[560px] lg:h-[600px] rounded-md bg-transparent overflow-hidden">
            {/* Top bezel */}
            <div className="h-8 bg-transparent flex items-center px-3 gap-3">
              <div className="h-2 w-2 rounded-full bg-red-500/60" />
              <div className="h-2 w-2 rounded-full bg-yellow-400/60" />
              <div className="h-2 w-2 rounded-full bg-green-400/60" />
              <div className="ml-auto text-xs text-muted-foreground">
                Preview
              </div>
            </div>

            {/* Screen area showing chat */}
            <div className="absolute left-3 right-3 top-12 bottom-3 rounded-sm bg-[#0b0b0b] overflow-hidden p-3">
              <div className="h-full w-full overflow-hidden pr-2 flex flex-col justify-end gap-3">
                {conversations[convIndex].map((m, i) => {
                  const visible = i < revealedCount;
                  const isYou = m.from === "you";
                  const name = isYou ? "Ayush" : "Client";
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 8 }}
                      transition={{ duration: 0.35 }}
                      className={`flex ${isYou ? "justify-end" : "justify-start"}`}
                    >
                      <div className={`${isYou ? "text-right" : "text-left"}`}>
                        <div className="mb-1 text-[10px] uppercase tracking-wide text-muted-foreground/70">
                          {name}
                        </div>
                        <div
                          className={`inline-block px-3 py-2 rounded-lg text-[13px] leading-tight ${isYou ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"}`}
                        >
                          {m.text}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Bottom bezel */}
            <div className="absolute left-0 right-0 bottom-0 h-6 flex items-end justify-center pointer-events-none">
              <div className="w-full h-4 bg-transparent rounded-b-md" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
