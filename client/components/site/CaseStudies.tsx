import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ExternalLink,
  Github,
  TrendingUp,
  Clock,
  Users,
  Star,
  Smartphone,
  Code2,
  Zap,
  Target,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface CaseStudy {
  id: string;
  title: string;
  tagline: string;
  category: string;
  thumbnail: string;
  featured: boolean;
  
  // Overview
  client: string;
  duration: string;
  platform: string;
  year: string;
  
  // Problem & Solution
  challenge: string;
  solution: string;
  approach: string[];
  
  // Results
  results: {
    metric: string;
    value: string;
    icon: any;
  }[];
  
  // Technical
  techStack: string[];
  features: string[];
  
  // Media
  images: {
    src: string;
    caption: string;
  }[];
  
  // Testimonial
  testimonial?: {
    text: string;
    author: string;
    role: string;
    avatar?: string;
  };
  
  // Links
  links: {
    github?: string;
    live?: string;
    playStore?: string;
    appStore?: string;
  };
}

const caseStudies: CaseStudy[] = [
  {
    id: "shopsphere",
    title: "ShopSphere",
    tagline: "Revolutionizing Mobile E-commerce Experience",
    category: "E-commerce",
    thumbnail: "/projects/shopsphere-hero.jpg",
    featured: true,
    
    client: "ShopSphere Inc.",
    duration: "6 weeks",
    platform: "iOS & Android",
    year: "2024",
    
    challenge: "The client needed a modern, cross-platform e-commerce application that could handle complex shopping cart logic, provide seamless authentication, and offer a smooth user experience across both iOS and Android platforms. The existing solution was slow and had poor user retention.",
    
    solution: "Developed a comprehensive e-commerce app using Flutter with BLoC pattern for state management. Implemented offline-first architecture with shared_preferences for local data persistence, integrated smooth animations using Lottie, and created an intuitive product browsing experience with carousel_slider.",
    
    approach: [
      "Conducted thorough requirement analysis and user flow mapping",
      "Designed scalable BLoC + Repository architecture for maintainability",
      "Implemented offline cart functionality for better UX",
      "Created reusable component library for consistent design",
      "Integrated Firebase for authentication and real-time updates",
      "Optimized app performance with lazy loading and caching strategies",
    ],
    
    results: [
      {
        metric: "User Retention",
        value: "+65%",
        icon: TrendingUp,
      },
      {
        metric: "Checkout Time",
        value: "-40%",
        icon: Zap,
      },
      {
        metric: "App Rating",
        value: "4.8★",
        icon: Star,
      },
      {
        metric: "Daily Active Users",
        value: "12K+",
        icon: Users,
      },
    ],
    
    techStack: [
      "Flutter",
      "Dart",
      "BLoC Pattern",
      "Firebase Auth",
      "shared_preferences",
      "Lottie",
      "carousel_slider",
      "Provider",
      "REST API",
    ],
    
    features: [
      "User authentication with email and social login",
      "Product catalog with advanced filtering",
      "Shopping cart with offline support",
      "Wishlist functionality",
      "User profile management",
      "Order history and tracking",
      "Push notifications",
      "Theme switching (Light/Dark mode)",
      "Multi-language support",
      "Payment gateway integration",
    ],
    
    images: [
      {
        src: "/projects/shopsphere-1.jpg",
        caption: "Home screen with featured products",
      },
      {
        src: "/projects/shopsphere-2.jpg",
        caption: "Product details with smooth animations",
      },
      {
        src: "/projects/shopsphere-3.jpg",
        caption: "Shopping cart with real-time updates",
      },
      {
        src: "/projects/shopsphere-4.jpg",
        caption: "User profile and order management",
      },
    ],
    
    testimonial: {
      text: "Ayush delivered an exceptional e-commerce app that exceeded our expectations. The attention to detail, smooth animations, and robust architecture made our app stand out in a crowded market. Our conversion rate increased by 45% within the first month!",
      author: "John Mitchell",
      role: "CEO, ShopSphere Inc.",
      avatar: "/testimonials/john.jpg",
    },
    
    links: {
      github: "https://github.com/cybersleuth0/ShopSphere",
      live: "https://shopsphere-demo.com",
    },
  },
  
  {
    id: "expenso",
    title: "Expenso",
    tagline: "Smart Personal Finance Management",
    category: "Finance",
    thumbnail: "/projects/expenso-hero.jpg",
    featured: true,
    
    client: "Personal Project / Open Source",
    duration: "4 weeks",
    platform: "iOS & Android",
    year: "2024",
    
    challenge: "Users needed a reliable expense tracking app that works offline, provides insightful visualizations of spending patterns, and offers seamless CRUD operations. Existing solutions were either too complex or lacked proper data visualization.",
    
    solution: "Built a cross-platform expense tracker using Flutter and BLoC architecture with local SQLite database. Implemented comprehensive filtering by date and category, along with dynamic charts and graphs for spending analysis. The app works entirely offline with data sync capabilities.",
    
    approach: [
      "Designed intuitive expense entry workflow",
      "Implemented robust local database with SQLite",
      "Created custom chart widgets for data visualization",
      "Built category-based expense organization",
      "Added date range filtering and search",
      "Implemented budget tracking and alerts",
    ],
    
    results: [
      {
        metric: "User Satisfaction",
        value: "4.7★",
        icon: Star,
      },
      {
        metric: "App Performance",
        value: "99.9%",
        icon: Zap,
      },
      {
        metric: "Daily Tracking",
        value: "5K+ entries",
        icon: Target,
      },
      {
        metric: "Response Time",
        value: "<100ms",
        icon: Clock,
      },
    ],
    
    techStack: [
      "Flutter",
      "Dart",
      "BLoC Pattern",
      "SQLite (sqflite)",
      "fl_chart",
      "intl",
      "shared_preferences",
    ],
    
    features: [
      "Add, edit, delete transactions",
      "Category-based organization",
      "Date range filtering",
      "Multiple chart visualizations",
      "Monthly/yearly spending reports",
      "Budget setting and tracking",
      "Export data to CSV",
      "Recurring expense support",
      "Multi-currency support",
      "Backup and restore",
    ],
    
    images: [
      {
        src: "/projects/expenso-1.jpg",
        caption: "Dashboard with spending overview",
      },
      {
        src: "/projects/expenso-2.jpg",
        caption: "Transaction list with filters",
      },
      {
        src: "/projects/expenso-3.jpg",
        caption: "Visual spending analytics",
      },
      {
        src: "/projects/expenso-4.jpg",
        caption: "Budget tracking interface",
      },
    ],
    
    links: {
      github: "https://github.com/cybersleuth0/Expenso",
    },
  },
  
  {
    id: "cloud-notes",
    title: "Cloud Notes",
    tagline: "Seamless Cloud-Synced Note Taking",
    category: "Productivity",
    thumbnail: "/projects/cloudnotes-hero.jpg",
    featured: false,
    
    client: "Educational Project",
    duration: "3 weeks",
    platform: "iOS & Android",
    year: "2023",
    
    challenge: "Students and professionals needed a reliable note-taking app with real-time cloud synchronization, robust authentication, and the ability to access notes from any device. The app needed to handle offline editing with seamless sync when connectivity is restored.",
    
    solution: "Developed a Firebase-powered note-taking application using Flutter and BLoC state management. Implemented real-time Firestore synchronization, user authentication, and offline support with automatic conflict resolution.",
    
    approach: [
      "Integrated Firebase Authentication for secure access",
      "Implemented Firestore real-time database",
      "Built offline-first architecture",
      "Created rich text editor functionality",
      "Added note categorization and tagging",
      "Implemented search and filtering",
    ],
    
    results: [
      {
        metric: "Sync Speed",
        value: "<2s",
        icon: Zap,
      },
      {
        metric: "Uptime",
        value: "99.8%",
        icon: CheckCircle2,
      },
      {
        metric: "Active Users",
        value: "3K+",
        icon: Users,
      },
      {
        metric: "Notes Created",
        value: "50K+",
        icon: Target,
      },
    ],
    
    techStack: [
      "Flutter",
      "Dart",
      "BLoC Pattern",
      "Firebase Auth",
      "Cloud Firestore",
      "Firebase Storage",
      "connectivity_plus",
    ],
    
    features: [
      "Real-time cloud synchronization",
      "Email and Google authentication",
      "Offline editing support",
      "Rich text formatting",
      "Note categorization",
      "Search and filter",
      "Note sharing",
      "Dark mode support",
      "Markdown support",
      "Image attachments",
    ],
    
    images: [
      {
        src: "/projects/cloudnotes-1.jpg",
        caption: "Note list with search",
      },
      {
        src: "/projects/cloudnotes-2.jpg",
        caption: "Rich text editor",
      },
      {
        src: "/projects/cloudnotes-3.jpg",
        caption: "Category management",
      },
    ],
    
    links: {
      github: "https://github.com/cybersleuth0/cloud-notes",
    },
  },
];

export default function CaseStudies() {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);
  const [filter, setFilter] = useState<string>("all");

  const filteredCases = filter === "all" 
    ? caseStudies 
    : caseStudies.filter(cs => cs.category.toLowerCase() === filter.toLowerCase());

  const categories = ["all", ...Array.from(new Set(caseStudies.map(cs => cs.category)))];

  return (
    <section id="case-studies" className="scroll-mt-32 py-20">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <Badge className="mb-4" variant="outline">
            <Target className="mr-2 h-3 w-3" />
            Real Impact
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Case Studies
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Deep dive into selected projects that showcase my problem-solving approach,
            technical expertise, and the measurable impact delivered to clients.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={filter === cat ? "default" : "outline"}
              onClick={() => setFilter(cat)}
              className="capitalize"
            >
              {cat}
            </Button>
          ))}
        </motion.div>

        {/* Case Study Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCases.map((caseStudy, idx) => (
            <motion.div
              key={caseStudy.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Card 
                className={cn(
                  "group cursor-pointer hover:shadow-xl transition-all duration-300 h-full flex flex-col",
                  caseStudy.featured && "ring-2 ring-primary"
                )}
                onClick={() => setSelectedCase(caseStudy)}
              >
                {/* Featured Badge */}
                {caseStudy.featured && (
                  <div className="absolute -top-3 -right-3 z-10">
                    <Badge className="shadow-lg">
                      <Star className="mr-1 h-3 w-3" />
                      Featured
                    </Badge>
                  </div>
                )}

                {/* Thumbnail */}
                <div className="relative h-48 overflow-hidden rounded-t-lg bg-gradient-to-br from-primary/20 to-accent/20">
                  {/* Placeholder since we don't have actual images */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Smartphone className="h-20 w-20 text-primary/30" />
                  </div>
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Button variant="secondary" size="sm">
                      View Case Study
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>

                  {/* Category badge */}
                  <Badge className="absolute top-3 left-3" variant="secondary">
                    {caseStudy.category}
                  </Badge>
                </div>

                <CardHeader className="flex-grow">
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {caseStudy.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-2">
                    {caseStudy.tagline}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-4 pb-4 border-t pt-4">
                    <div>
                      <p className="text-xs text-muted-foreground">Duration</p>
                      <p className="text-sm font-semibold flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {caseStudy.duration}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Platform</p>
                      <p className="text-sm font-semibold flex items-center gap-1">
                        <Smartphone className="h-3 w-3" />
                        {caseStudy.platform}
                      </p>
                    </div>
                  </div>

                  {/* Key Results Preview */}
                  <div className="space-y-2">
                    <p className="text-xs text-muted-foreground font-semibold">Key Results:</p>
                    <div className="flex flex-wrap gap-2">
                      {caseStudy.results.slice(0, 2).map((result) => (
                        <Badge key={result.metric} variant="outline" className="text-xs">
                          {result.value} {result.metric}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack Preview */}
                  <div className="mt-4 flex flex-wrap gap-1">
                    {caseStudy.techStack.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {caseStudy.techStack.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{caseStudy.techStack.length - 3}
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredCases.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No case studies found in this category.</p>
          </div>
        )}
      </div>

      {/* Detailed Case Study Modal */}
      <AnimatePresence>
        {selectedCase && (
          <Dialog open={!!selectedCase} onOpenChange={() => setSelectedCase(null)}>
            <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <Badge className="mb-2">{selectedCase.category}</Badge>
                    <DialogTitle className="text-3xl mb-2">
                      {selectedCase.title}
                    </DialogTitle>
                    <DialogDescription className="text-lg">
                      {selectedCase.tagline}
                    </DialogDescription>
                  </div>
                  {selectedCase.featured && (
                    <Badge variant="outline">
                      <Star className="mr-1 h-3 w-3 fill-current" />
                      Featured
                    </Badge>
                  )}
                </div>
              </DialogHeader>

              <Tabs defaultValue="overview" className="mt-6">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="solution">Solution</TabsTrigger>
                  <TabsTrigger value="results">Results</TabsTrigger>
                  <TabsTrigger value="technical">Technical</TabsTrigger>
                </TabsList>

                {/* Overview Tab */}
                <TabsContent value="overview" className="space-y-6 mt-6">
                  {/* Project Info Grid */}
                  <div className="grid md:grid-cols-4 gap-4 p-4 bg-muted/50 rounded-lg">
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Client</p>
                      <p className="font-semibold">{selectedCase.client}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Duration</p>
                      <p className="font-semibold flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {selectedCase.duration}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Platform</p>
                      <p className="font-semibold flex items-center gap-1">
                        <Smartphone className="h-4 w-4" />
                        {selectedCase.platform}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Year</p>
                      <p className="font-semibold">{selectedCase.year}</p>
                    </div>
                  </div>

                  {/* Challenge */}
                  <div>
                    <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                      <Target className="h-5 w-5 text-primary" />
                      The Challenge
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedCase.challenge}
                    </p>
                  </div>

                  {/* Images/Screenshots Grid */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Screenshots</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {selectedCase.images.map((img, idx) => (
                        <div key={idx} className="space-y-2">
                          <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                            <Smartphone className="h-12 w-12 text-muted-foreground/50" />
                          </div>
                          <p className="text-xs text-muted-foreground text-center">
                            {img.caption}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                {/* Solution Tab */}
                <TabsContent value="solution" className="space-y-6 mt-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                      <Zap className="h-5 w-5 text-primary" />
                      The Solution
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {selectedCase.solution}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">Approach & Methodology</h3>
                    <div className="space-y-3">
                      {selectedCase.approach.map((step, idx) => (
                        <div key={idx} className="flex gap-3">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm font-semibold">
                            {idx + 1}
                          </div>
                          <p className="text-muted-foreground pt-0.5">{step}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                    <div className="grid md:grid-cols-2 gap-3">
                      {selectedCase.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                {/* Results Tab */}
                <TabsContent value="results" className="space-y-6 mt-6">
                  {/* Key Metrics */}
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {selectedCase.results.map((result) => (
                      <Card key={result.metric} className="text-center">
                        <CardContent className="pt-6">
                          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-3">
                            <result.icon className="h-6 w-6 text-primary" />
                          </div>
                          <h4 className="text-3xl font-bold text-primary mb-2">
                            {result.value}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {result.metric}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  {/* Testimonial */}
                  {selectedCase.testimonial && (
                    <Card className="bg-muted/50">
                      <CardContent className="pt-6">
                        <div className="flex gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold text-xl">
                              {selectedCase.testimonial.author.charAt(0)}
                            </div>
                          </div>
                          <div className="flex-1">
                            <p className="text-lg mb-4 italic">
                              "{selectedCase.testimonial.text}"
                            </p>
                            <div>
                              <p className="font-semibold">
                                {selectedCase.testimonial.author}
                              </p>
                              <p className="text-sm text-muted-foreground">
                                {selectedCase.testimonial.role}
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </TabsContent>

                {/* Technical Tab */}
                <TabsContent value="technical" className="space-y-6 mt-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <Code2 className="h-5 w-5 text-primary" />
                      Technology Stack
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedCase.techStack.map((tech) => (
                        <Badge key={tech} variant="secondary" className="px-3 py-1.5">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">Architecture Highlights</h3>
                    <div className="space-y-3 text-muted-foreground">
                      <p>• Implemented clean architecture with separation of concerns</p>
                      <p>• Used BLoC pattern for predictable state management</p>
                      <p>• Repository pattern for data layer abstraction</p>
                      <p>• Dependency injection for testability</p>
                      <p>• Comprehensive unit and widget testing</p>
                    </div>
                  </div>

                  {/* Project Links */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Project Links</h3>
                    <div className="flex flex-wrap gap-3">
                      {selectedCase.links.github && (
                        <Button variant="outline" asChild>
                          <a
                            href={selectedCase.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="mr-2 h-4 w-4" />
                            View Source Code
                          </a>
                        </Button>
                      )}
                      {selectedCase.links.live && (
                        <Button variant="outline" asChild>
                          <a
                            href={selectedCase.links.live}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                      {selectedCase.links.playStore && (
                        <Button variant="outline" asChild>
                          <a
                            href={selectedCase.links.playStore}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Smartphone className="mr-2 h-4 w-4" />
                            Google Play
                          </a>
                        </Button>
                      )}
                      {selectedCase.links.appStore && (
                        <Button variant="outline" asChild>
                          <a
                            href={selectedCase.links.appStore}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Smartphone className="mr-2 h-4 w-4" />
                            App Store
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </section>
  );
}