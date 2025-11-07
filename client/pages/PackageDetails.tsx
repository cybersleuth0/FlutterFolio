import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowLeft,
  ExternalLink,
  BookOpen,
  CheckCircle2,
  AlertCircle,
  Code2,
  Lightbulb,
  TrendingUp,
  Package as PackageIcon,
  Copy,
  Check,
} from "lucide-react";
import { getPackageBySlug } from "@/data/packages";
import { useToast } from "@/hooks/use-toast";

export default function PackageDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const pkg = useMemo(() => (slug ? getPackageBySlug(slug) : undefined), [slug]);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  useEffect(() => {
    if (!pkg) navigate("/", { replace: true });
  }, [pkg, navigate]);

  if (!pkg) return null;

  return (
    <main className="pt-24 pb-16">
      <div className="mx-auto max-w-5xl px-4">
        <Button variant="ghost" asChild className="mb-6">
          <Link to={"/#packages"}>
            <ArrowLeft className="mr-2 h-4 w-4" /> Back
          </Link>
        </Button>

        <div className="flex items-start gap-4">
          <div className="text-6xl" aria-hidden>{pkg.icon}</div>
          <div className="flex-1">
            <h1 className="text-3xl font-extrabold tracking-tight">{pkg.name}</h1>
            <p className="text-muted-foreground mt-1">{pkg.shortDescription}</p>
            <div className="mt-2 flex flex-wrap gap-2">
              <Badge variant="outline">{pkg.category}</Badge>
              <Badge variant="secondary">{pkg.experienceYears} experience</Badge>
              <Badge variant="secondary">Used in {pkg.projectsUsed}+ projects</Badge>
            </div>
          </div>
          <Button asChild variant="outline">
            <a href={pkg.pubUrl} target="_blank" rel="noreferrer noopener"><PackageIcon className="mr-2 h-4 w-4" /> Pub.dev</a>
          </Button>
        </div>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Overview</CardTitle>
              <CardDescription>{pkg.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="flex items-center justify-between text-sm mb-1">
                  <span className="text-muted-foreground">My Proficiency</span>
                  <span className="font-medium">{pkg.proficiency}%</span>
                </div>
                <Progress value={pkg.proficiency} />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold mb-2 flex items-center gap-2"><Lightbulb className="h-4 w-4"/> Key Features</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {pkg.keyFeatures.map((f) => (
                      <li key={f} className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-primary mt-0.5" /> <span>{f}</span></li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 flex items-center gap-2"><TrendingUp className="h-4 w-4"/> Advantages</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {pkg.advantages.map((f) => (
                      <li key={f} className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-primary mt-0.5" /> <span>{f}</span></li>
                    ))}
                  </ul>
                </div>
              </div>

              {pkg.challenges && pkg.challenges.length > 0 && (
                <div>
                  <h3 className="font-semibold mb-2 flex items-center gap-2"><AlertCircle className="h-4 w-4"/> Challenges</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {pkg.challenges.map((f) => (
                      <li key={f} className="list-disc list-inside">{f}</li>
                    ))}
                  </ul>
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>At a glance</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div className="flex items-center justify-between"><span>Projects used</span><span className="font-semibold">{pkg.projectsUsed}+</span></div>
              <div className="flex items-center justify-between"><span>Experience</span><span className="font-semibold">{pkg.experienceYears}</span></div>
              {pkg.githubStars && <div className="flex items-center justify-between"><span>GitHub Stars</span><span className="font-semibold">{pkg.githubStars}</span></div>}
              {pkg.pubLikes && <div className="flex items-center justify-between"><span>Pub Likes</span><span className="font-semibold">{pkg.pubLikes}</span></div>}
              {pkg.lastUpdated && <div className="flex items-center justify-between"><span>Last Updated</span><span className="font-semibold">{pkg.lastUpdated}</span></div>}
            </CardContent>
          </Card>
        </div>

        <div className="mt-8">
          <Tabs defaultValue="code">
            <TabsList>
              <TabsTrigger value="code">Code Examples</TabsTrigger>
              <TabsTrigger value="practices">Best Practices</TabsTrigger>
              <TabsTrigger value="mistakes">Common Mistakes</TabsTrigger>
            </TabsList>

            <TabsContent value="code" className="mt-4 space-y-4">
              {pkg.codeSnippets.map((snip, i) => (
                <Card key={snip.title}>
                  <CardHeader>
                    <CardTitle className="text-base">{snip.title}</CardTitle>
                    <CardDescription>{snip.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="relative">
                      <pre className="overflow-auto rounded-md border bg-muted p-4 text-xs"><code>{snip.code}</code></pre>
                      <Button
                        variant="secondary"
                        size="sm"
                        className="absolute top-2 right-2"
                        onClick={() => {
                          navigator.clipboard.writeText(snip.code);
                          setCopiedIndex(i);
                          toast({ title: 'Copied', description: `${snip.title} copied to clipboard` });
                          setTimeout(() => setCopiedIndex(null), 1200);
                        }}
                      >
                        {copiedIndex === i ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="practices" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Best Practices</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {pkg.bestPractices.map((f) => (
                      <li key={f} className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-primary mt-0.5" /> <span>{f}</span></li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="mistakes" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Common Mistakes</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {(pkg.commonMistakes ?? []).map((f) => (
                      <li key={f} className="flex gap-2"><AlertCircle className="h-4 w-4 text-accent-warning mt-0.5" /> <span>{f}</span></li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div className="mt-10 flex items-center gap-3">
          <Button asChild>
            <a href={pkg.officialDocs} target="_blank" rel="noreferrer noopener">
              <BookOpen className="mr-2 h-4 w-4"/> Official Docs
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href={pkg.pubUrl} target="_blank" rel="noreferrer noopener">
              <ExternalLink className="mr-2 h-4 w-4"/> Pub.dev
            </a>
          </Button>
        </div>
      </div>
    </main>
  );
}
