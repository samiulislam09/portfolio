import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative h-[calc(100vh-4rem)] flex items-center">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-8 text-center">
          <div className="space-y-4 animate-slide-up">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Hi, I'm Samiul Islam
              <br />
              <span className="text-primary">Flutter App Developer</span>
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              I build exceptional digital experiences that make people's lives easier.
              Let's work together to bring your ideas to life.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in">
            <Button asChild size="lg" className="transition-transform hover:scale-105">
              <Link href="#projects">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <div className="flex items-center space-x-4">
              {[
                { icon: Github, href: "https://github.com/samiulislam09" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/samiul-islam-1700251a2/" },
                { icon: Twitter, href: "https://twitter.com" },
              ].map(({ icon: Icon, href }) => (
                <Button
                  key={href}
                  variant="ghost"
                  size="icon"
                  asChild
                  className="transition-transform hover:scale-110"
                >
                  <Link href={href} target="_blank">
                    <Icon className="h-5 w-5" />
                    <span className="sr-only">{Icon.name}</span>
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}