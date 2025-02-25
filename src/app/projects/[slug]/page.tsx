import { projects } from "@/data/projects"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github } from "lucide-react"
import Image from "next/image"
import { BackButton } from "@/components/back-button"
import { notFound } from "next/navigation"

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <BackButton href="/projects" label="Back to Projects" />
        
        <div className="max-w-4xl mx-auto">
          {/* Project Header */}
          <div className="mb-12">
            <div className="relative h-64 w-full mb-8 rounded-lg overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            
            <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
            <p className="text-xl text-muted-foreground mb-6">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
            
            <div className="flex gap-4">
              {project.github && (
                <Button variant="outline" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </a>
                </Button>
              )}
              {project.demo && (
                <Button asChild>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    View Demo
                  </a>
                </Button>
              )}
            </div>
          </div>
          
          {/* Case Study */}
          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Overview</h2>
              <p className="text-muted-foreground">{project.study.overview}</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">Challenge</h2>
              <p className="text-muted-foreground">{project.study.challenge}</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">Solution</h2>
              <p className="text-muted-foreground">{project.study.solution}</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                {project.study.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">Results</h2>
              <p className="text-muted-foreground">{project.study.results}</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(project.study.techStack).map(([category, technologies]) => (
                  <Card key={category}>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-medium capitalize mb-3">{category}</h3>
                      <div className="flex flex-wrap gap-2">
                        {technologies.map((tech: string) => (
                          <Badge key={tech} variant="outline">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
} 