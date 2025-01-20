import { profile } from "@/data/profile"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BackButton } from "@/components/back-button"

export default function AboutPage() {
  const { about } = profile

  return (
    <div className="container mx-auto py-24">
      <BackButton href="/" label="Back to Home" />
      <div className="max-w-3xl mx-auto space-y-12">
        <div>
          <h1 className="text-4xl font-bold mb-6">{about.title}</h1>
          <p className="text-lg text-muted-foreground">{about.description}</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-6">Experience</h2>
          <div className="space-y-6">
            {about.experience.map((exp, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{exp.title}</CardTitle>
                  <div className="text-sm text-muted-foreground">
                    {exp.company} • {exp.period}
                  </div>
                </CardHeader>
                <CardContent>
                  <p>{exp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-6">Education</h2>
          <div className="space-y-4">
            {about.education.map((edu, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{edu.degree}</CardTitle>
                  <div className="text-sm text-muted-foreground">
                    {edu.school} • {edu.year}
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 