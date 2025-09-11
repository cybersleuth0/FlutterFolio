import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function ChatPanel() {
  const messages = [
    { from: "client", text: "I'm stuck — my app crashes on launch 😩" },
    { from: "client", text: "I have a tight deadline and no time to debug..." },
    { from: "you", text: "Share the crash logs and I’ll take a look — I can fix it today." },
    { from: "client", text: "That would be amazing, thank you!" },
    { from: "you", text: "Done. I pushed a patch and added tests. Can you try the build?" },
    { from: "client", text: "It works now — you're a lifesaver! 🙌" },
  ];

  return (
    <Card className="mt-[22px] md:mt-8 w-full md:w-96 pt-5 lg:pt-0">
      <CardContent>
        <div className="w-full">
          <div className="relative h-56 md:h-72 lg:h-80 rounded-md bg-black/5 overflow-hidden">
            {/* bezel */}
            <div className="h-7 bg-[#0b0b0b] border-b border-border flex items-center px-3 gap-3">
              <div className="h-2 w-2 rounded-full bg-red-500/80" />
              <div className="h-2 w-2 rounded-full bg-yellow-400/80" />
              <div className="h-2 w-2 rounded-full bg-green-400/80" />
              <div className="ml-auto text-xs text-muted-foreground">Preview</div>
            </div>

            {/* screen */}
            <div className="absolute inset-3 rounded-sm bg-gradient-to-b from-black/0 to-black/6 p-3">
              <div className="h-full w-full rounded-sm bg-gradient-to-b from-background to-muted p-3 relative">
                <div className="h-3 w-28 rounded bg-muted mb-3" />
                <div className="grid grid-cols-2 gap-3 h-full">
                  <div className="rounded bg-card p-3 flex flex-col gap-2">
                    <div className="h-6 w-3/4 rounded bg-muted" />
                    <div className="h-3 w-2/3 rounded bg-muted" />
                    <div className="mt-auto h-8 rounded bg-muted" />
                  </div>
                  <div className="rounded bg-card p-3 flex flex-col gap-2">
                    <div className="h-6 w-3/4 rounded bg-muted" />
                    <div className="h-3 w-2/3 rounded bg-muted" />
                    <div className="mt-auto h-8 rounded bg-muted" />
                  </div>
                  <div className="col-span-2 rounded bg-card p-3">
                    <div className="h-3 w-1/2 rounded bg-muted mb-3" />
                    <div className="grid grid-cols-3 gap-3">
                      <div className="h-16 rounded bg-muted" />
                      <div className="h-16 rounded bg-muted" />
                      <div className="h-16 rounded bg-muted" />
                    </div>
                  </div>
                </div>

                {/* Chat overlay - top-right of laptop preview */}
                <div className="absolute right-6 top-6 w-64 pointer-events-none">
                  <div className="bg-black/50 backdrop-blur rounded-lg p-3 shadow-lg">
                    <div className="flex flex-col gap-2 max-h-48 overflow-hidden">
                      {messages.map((m, i) => (
                        <div
                          key={i}
                          className={`flex ${m.from === "you" ? "justify-end" : "justify-start"}`}
                        >
                          <div className={`${m.from === "you" ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"} rounded-md px-3 py-1 text-[12px] leading-tight max-w-[85%]`}>{m.text}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* base */}
            <div className="absolute left-0 right-0 bottom-0 h-8 flex items-end justify-center pointer-events-none">
              <div className="w-full h-6 bg-gradient-to-b from-black/10 to-black/20 rounded-b-md border-t border-border/40" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
