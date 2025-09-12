import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const messages = [
  { from: "client", text: "I'm stuck — my app crashes on launch 😩" },
  { from: "client", text: "I have a tight deadline and no time to debug..." },
  { from: "you", text: "Share the crash logs and I’ll take a look — I can fix it today." },
  { from: "client", text: "That would be amazing, thank you!" },
  { from: "you", text: "Done. I pushed a patch and added tests. Can you try the build?" },
  { from: "client", text: "It works now — you're a lifesaver! 🙌" },
];

export default function ChatPanel() {
  const [revealedCount, setRevealedCount] = useState(0);

  useEffect(() => {
    const timers: number[] = [];
    const reveal = (i: number) => {
      if (i > messages.length) return;
      setRevealedCount(i);
      timers.push(window.setTimeout(() => reveal(i + 1), 800));
    };
    timers.push(window.setTimeout(() => reveal(1), 500));
    return () => timers.forEach((t) => clearTimeout(t));
  }, []);

  return (
    <Card className="mt-[22px] md:mt-8 w-full md:w-96 pt-5 lg:pt-0">
      <CardContent>
        <div className="w-full">
          {/* Device border */}
          <div className="relative h-80 md:h-96 lg:h-[420px] rounded-md bg-transparent overflow-hidden">
            {/* Top bezel */}
            <div className="h-8 bg-transparent flex items-center px-3 gap-3">
              <div className="h-2 w-2 rounded-full bg-red-500/60" />
              <div className="h-2 w-2 rounded-full bg-yellow-400/60" />
              <div className="h-2 w-2 rounded-full bg-green-400/60" />
              <div className="ml-auto text-xs text-muted-foreground">Preview</div>
            </div>

            {/* Screen area showing chat */}
            <div className="absolute left-3 right-3 top-12 bottom-3 rounded-sm bg-[#0b0b0b] overflow-hidden p-3">
              <div className="h-full w-full overflow-hidden pr-2 flex flex-col justify-end gap-3">
                {messages.map((m, i) => {
                  const visible = i < revealedCount;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 8 }}
                      transition={{ duration: 0.35 }}
                      className={`flex ${m.from === "you" ? "justify-end" : "justify-start"}`}
                    >
                      <div className={`inline-block px-3 py-2 rounded-lg text-[13px] leading-tight ${m.from === "you" ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"}`}>
                        {m.text}
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
