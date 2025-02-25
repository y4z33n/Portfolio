import { projects } from "@/data/projects"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Github, FileText } from "lucide-react"
import Image from "next/image"
import { BackButton } from "@/components/back-button"
import Link from "next/link"

export default function ProjectsPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <BackButton href="/#projects" label="Back to Home" />
        
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-12">All Projects</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden flex flex-col">
                <div className="relative h-48 w-full bg-muted">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-4 mt-auto">
                    <Button variant="default" asChild>
                      <Link href={`/projects/${project.slug}`}>
                        <FileText className="mr-2 h-4 w-4" />
                        View Case Study
                      </Link>
                    </Button>
                    {project.github && (
                      <Button variant="outline" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          GitHub
                        </a>
                      </Button>
                    )}
                    {project.demo && (
                      <Button variant="secondary" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          View Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
} 