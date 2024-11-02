import { Card } from "@/components/ui/card";
import Image from "next/image";

export function About() {
  return (
    <section id="about" className="py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
            <p className="text-muted-foreground">
              I'm a passionate Full Stack Developer with over 5 years of experience in building web applications.
              I specialize in React, Node.js, and modern web technologies.
            </p>
            <div className="space-y-2">
              <h3 className="font-semibold">What I do:</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Build scalable web applications</li>
                <li>Create responsive user interfaces</li>
                <li>Develop RESTful APIs</li>
                <li>Optimize application performance</li>
              </ul>
            </div>
          </div>
          <Card className="relative aspect-square overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?w=800&q=80"
              alt="Profile"
              fill
              className="object-cover"
            />
          </Card>
        </div>
      </div>
    </section>
  );
}