import { profile } from "@/data/profile"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BackButton } from "@/components/back-button"
import { Mail, MapPin, Github, Linkedin, Twitter } from "lucide-react"

export default function ContactPage() {
  const { contact } = profile

  const socialIcons = {
    github: Github,
    linkedin: Linkedin,
    twitter: Twitter,
  }

  return (
    <div className="container mx-auto py-24">
      <BackButton href="/" label="Back to Home" />
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Get in Touch</h1>
        <p className="text-lg text-muted-foreground mb-12">
          {contact.description}
        </p>

        <div className="space-y-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Email</h3>
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {contact.email}
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Location</h3>
                  <p className="text-muted-foreground">{contact.location}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div>
            <h2 className="text-xl font-semibold mb-4">Connect with me</h2>
            <div className="flex gap-4">
              {contact.socials.map((social) => {
                const Icon = socialIcons[social.icon as keyof typeof socialIcons]
                return (
                  <Button key={social.name} variant="outline" asChild>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="gap-2"
                    >
                      <Icon className="h-4 w-4" />
                      {social.name}
                    </a>
                  </Button>
                )
              })}
            </div>
          </div>

          <div className="pt-6">
            <p className="text-muted-foreground font-medium">
              {contact.availability}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 