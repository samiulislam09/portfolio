import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skills = {
  "Frontend": ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux"],
  "Backend": ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs"],
  "Tools": ["Git", "Docker", "AWS", "Jest", "CI/CD"],
  "Soft Skills": ["Problem Solving", "Team Leadership", "Communication", "Agile"]
};

export function Skills() {
  return (
    <section className="py-24">
      <div className="container px-4 md:px-6">
        <div className="space-y-8">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Skills & Expertise</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground">
              Here are the technologies and skills I've mastered throughout my journey.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {Object.entries(skills).map(([category, items]) => (
              <Card key={category}>
                <CardHeader>
                  <CardTitle>{category}</CardTitle>
                  <CardDescription>
                    Key competencies in {category.toLowerCase()}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}