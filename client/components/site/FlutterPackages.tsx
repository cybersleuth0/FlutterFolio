import { useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Package as PackageIcon, Search } from "lucide-react";
import { flutterPackages } from "@/data/packages";
import PackageCard from "./PackageCard";

export default function FlutterPackages() {
  const [filter, setFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    "all",
    ...Array.from(new Set(flutterPackages.map((pkg) => pkg.category))),
  ];

  const filteredPackages = flutterPackages.filter((pkg) => {
    const matchesCategory = filter === "all" || pkg.category === filter;
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      pkg.name.toLowerCase().includes(q) ||
      pkg.description.toLowerCase().includes(q);
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="packages" className="scroll-mt-32 py-20">
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge className="mb-4" variant="outline">
            <PackageIcon className="mr-2 h-3 w-3" /> Technical Expertise
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Flutter Packages I Master
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            In-depth knowledge and hands-on experience with these essential
            Flutter packages. Click any package to see code examples, best
            practices, and insights.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-8 space-y-4"
        >
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search packages..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? "default" : "outline"}
                onClick={() => setFilter(category)}
                className="capitalize"
              >
                {category}
              </Button>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPackages.map((pkg, index) => (
            <PackageCard key={pkg.id} package={pkg} index={index} />
          ))}
        </div>

        {filteredPackages.length === 0 && (
          <div className="text-center py-12">
            <PackageIcon className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">
              No packages found matching your search.
            </p>
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-3 gap-6 p-8 bg-muted/50 rounded-lg"
        >
          <div className="text-center">
            <p className="text-3xl font-bold text-primary">
              {flutterPackages.length}+
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Packages Mastered
            </p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-primary">
              {Math.max(...flutterPackages.map((p) => p.projectsUsed))}+
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Projects Delivered
            </p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-primary">2+</p>
            <p className="text-sm text-muted-foreground mt-1">
              Years Experience
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
