import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with real-time inventory management",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    demoUrl: "https://demo.com",
    githubUrl: "https://github.com",
  },
  {
    title: "Task Management App",
    description: "Collaborative task management tool with real-time updates",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
    demoUrl: "https://demo.com",
    githubUrl: "https://github.com",
  },
  {
    title: "AI Content Generator",
    description: "AI-powered content generation tool using OpenAI's GPT-3",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    technologies: ["Next.js", "OpenAI API", "TailwindCSS"],
    demoUrl: "https://demo.com",
    githubUrl: "https://github.com",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="space-y-8">
          <div className="space-y-4 text-center animate-slide-up">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Projects</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground">
              Here are some of my recent projects that showcase my skills and expertise.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Card 
                key={project.title} 
                className="overflow-hidden group transition-all duration-300 hover:shadow-lg animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="gap-2">
                  <Button asChild variant="default" className="transition-transform hover:scale-105">
                    <Link href={project.demoUrl} target="_blank">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="transition-transform hover:scale-105">
                    <Link href={project.githubUrl} target="_blank">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}