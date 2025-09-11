import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const steps = [
  { from: "client", text: "I'm stuck — my app crashes on launch 😩" },
  { from: "client", text: "I have a tight deadline and no time to debug..." },
  { from: "you", text: "Share the crash logs and I’ll take a look — I can fix it today." },
  { from: "client", text: "That would be amazing, thank you!" },
  { from: "you", text: "Done. I pushed a patch and added tests. Can you try the build?" },
  { from: "client", text: "It works now — you're a lifesaver! 🙌" },
];

export default function ChatPanel() {
  return (
    <Card className="mt-6 md:mt-8 w-full md:w-96">
      <CardHeader>
        <CardTitle className="text-lg">Live Chat Preview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-3">
          {steps.map((s, i) => (
            <div
              key={i}
              className={`max-w-full ${s.from === "you" ? "ml-auto text-right" : "mr-auto text-left"}`}
            >
              <div
                className={`inline-block rounded-md px-3 py-2 text-xs leading-tight ${
                  s.from === "you" ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"
                }`}
              >
                {s.text}
              </div>
            </div>
          ))}

          <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
            <Badge variant="outline">Status</Badge>
            <span>Client chat preview — always visible</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
