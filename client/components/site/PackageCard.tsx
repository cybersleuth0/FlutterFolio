import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ExternalLink, Star, TrendingUp, Code2 } from "lucide-react";
import { FlutterPackage } from "@/data/packages";
import { Link } from "react-router-dom";

interface PackageCardProps {
  package: FlutterPackage;
  index: number;
}

export default function PackageCard({ package: pkg, index }: PackageCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="group hover:shadow-xl transition-all duration-300 h-full flex flex-col relative overflow-hidden">
        {pkg.featured && (
          <div className="absolute top-4 right-4 z-10">
            <Badge variant="default" className="shadow-lg">
              <Star className="h-3 w-3 mr-1 fill-current" />
              Featured
            </Badge>
          </div>
        )}

        <CardHeader>
          <div className="flex items-start gap-4">
            <div className="text-5xl">{pkg.icon}</div>
            <div className="flex-1">
              <CardTitle className="group-hover:text-primary transition-colors">
                {pkg.name}
              </CardTitle>
              <CardDescription className="mt-1">
                {pkg.shortDescription}
              </CardDescription>
              <Badge variant="outline" className="mt-2">
                {pkg.category}
              </Badge>
            </div>
          </div>
        </CardHeader>

        <CardContent className="flex-grow space-y-4">
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-muted-foreground">My Proficiency</span>
              <span className="font-semibold text-primary">{pkg.proficiency}%</span>
            </div>
            <Progress value={pkg.proficiency} className="h-2" />
          </div>

          <div className="grid grid-cols-2 gap-3 py-3 border-t border-b">
            <div>
              <p className="text-xs text-muted-foreground">Experience</p>
              <p className="text-sm font-semibold flex items-center gap-1">
                <TrendingUp className="h-3 w-3" />
                {pkg.experienceYears}
              </p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Projects Used</p>
              <p className="text-sm font-semibold flex items-center gap-1">
                <Code2 className="h-3 w-3" />
                {pkg.projectsUsed}+
              </p>
            </div>
          </div>

          <div>
            <p className="text-xs text-muted-foreground font-semibold mb-2">Key Features:</p>
            <ul className="space-y-1">
              {pkg.keyFeatures.slice(0, 3).map((feature, idx) => (
                <li key={idx} className="text-xs text-muted-foreground flex items-start gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex gap-2 pt-4">
            <Button asChild className="flex-1">
              <Link to={`/packages/${pkg.slug}`}>
                View Details
              </Link>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href={pkg.pubUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
