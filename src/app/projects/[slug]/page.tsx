import { notFound } from "next/navigation"
import { projects } from "@/data/projects"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, Github, Image as ImageIcon } from "lucide-react"
import Image from "next/image"
import { BackButton } from "@/components/back-button"

interface PageProps {
  params: {
    slug: string
  }
}

export default function ProjectPage({ params }: PageProps) {
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  return (
    <main className="min-h-screen pt-24 pb-12">
      <div className="container max-w-4xl mx-auto">
        <div className="mb-8">
          <BackButton href="/projects" label="Back to Projects" />
          <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
          <p className="text-xl text-muted-foreground mb-6">{project.description}</p>
          <div className="flex gap-4 mb-8">
            {project.github && (
              <Button asChild>
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  View on GitHub
                </a>
              </Button>
            )}
            {project.demo && (
              <Button variant="outline" asChild>
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </a>
              </Button>
            )}
          </div>
          <div className="relative h-[400px] w-full rounded-lg overflow-hidden mb-12 bg-muted">
            {project.image ? (
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            ) : (
              <div className="flex items-center justify-center h-full">
                <ImageIcon className="h-24 w-24 text-muted-foreground/50" />
              </div>
            )}
          </div>
        </div>

        {project.study && (
          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Overview</h2>
              <p className="text-lg text-muted-foreground">{project.study.overview}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">The Challenge</h2>
              <p className="text-lg text-muted-foreground">{project.study.challenge}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Solution</h2>
              <p className="text-lg text-muted-foreground">{project.study.solution}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
              <ul className="list-disc list-inside space-y-2 text-lg text-muted-foreground">
                {project.study.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Results</h2>
              <p className="text-lg text-muted-foreground">{project.study.results}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-6">Tech Stack</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(project.study.techStack).map(([category, items]) => (
                  <Card key={category}>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold capitalize mb-4">
                        {category}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {items.map((item) => (
                          <Badge key={item} variant="secondary">
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>
        )}
      </div>
    </main>
  )
} 