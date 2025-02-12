import { profile } from "@/data/profile"
import { projects } from "@/data/projects"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Github, Mail, MapPin, Linkedin, Instagram } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  const socialIcons = {
    github: <Github className="h-5 w-5" />,
    linkedin: <Linkedin className="h-5 w-5" />,
    instagram: <Instagram className="h-5 w-5" />,
  }

  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="flex items-center justify-between h-16 px-4">
            <Link href="/" className="text-xl font-bold">
              {profile.siteConfig.navigation.home.title}
            </Link>
            <nav className="flex items-center gap-6">
              <a href="#about" className="text-sm font-medium hover:text-foreground/80 transition-colors">About</a>
              <a href="#skills" className="text-sm font-medium hover:text-foreground/80 transition-colors">Skills</a>
              <a href="#projects" className="text-sm font-medium hover:text-foreground/80 transition-colors">Projects</a>
              <a href="#contact" className="text-sm font-medium hover:text-foreground/80 transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight">
              {profile.name}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light">
              {profile.role}
            </p>
            <p className="text-lg text-muted-foreground/80 max-w-2xl mx-auto">
              {profile.bio}
            </p>
            <div className="flex justify-center gap-6">
              {profile.contact.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-accent transition-colors"
                >
                  {socialIcons[social.icon as keyof typeof socialIcons]}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Rest of the sections */}
      <div className="space-y-32">
        {/* About Section */}
        <section id="about" className="py-16 bg-accent/5">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">About Me</h2>
              <div className="prose max-w-none">
                <p className="text-lg text-muted-foreground mb-12">{profile.about.description}</p>
                
                <h3 className="text-xl font-semibold mb-6">Experience</h3>
                <div className="space-y-6">
                  {profile.about.experience.map((exp, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle>{exp.title}</CardTitle>
                        <CardDescription>
                          {exp.company} • {exp.period}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{exp.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mt-12 mb-6">Education</h3>
                <div className="space-y-4">
                  {profile.about.education.map((edu, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle>{edu.degree}</CardTitle>
                        <CardDescription>
                          {edu.school} • {edu.year}
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12">Skills & Expertise</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(profile.skills).map(([key, category]) => (
                  <Card key={key}>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                      <div className="flex flex-wrap gap-2">
                        {category.items.map((skill) => (
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

        {/* Projects Section */}
        <section id="projects" className="py-16 bg-accent/5">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold mb-12">Projects</h2>
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
                      <div className="flex gap-4 mt-auto">
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
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
              <p className="text-lg text-muted-foreground mb-12">
                {profile.contact.description}
              </p>

              <div className="space-y-8">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-full bg-accent">
                        <Mail className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Email</h3>
                        <a
                          href={`mailto:${profile.contact.email}`}
                          className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {profile.contact.email}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-full bg-accent">
                        <MapPin className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Location</h3>
                        <p className="text-muted-foreground">{profile.contact.location}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <p className="text-muted-foreground font-medium text-center">
                  {profile.contact.availability}
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
