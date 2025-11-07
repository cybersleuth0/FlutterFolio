import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PackageDetails from "./pages/PackageDetails";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";

const queryClient = new QueryClient();

import { ThemeProvider } from "next-themes";

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={true}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/packages/:slug" element={<PackageDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

const container = document.getElementById("root")!;
// Reuse root across HMR to avoid duplicate createRoot warnings
const root = (window as any).__appRoot || createRoot(container);
(root as any).render(<App />);
(window as any).__appRoot = root;

if (import.meta && (import.meta as any).hot) {
  (import.meta as any).hot.dispose(() => {
    try {
      (root as any).unmount?.();
    } catch {}
    (window as any).__appRoot = undefined;
  });
}
