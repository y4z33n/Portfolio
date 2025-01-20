import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { profile } from "@/data/profile"
import { BackButton } from "@/components/back-button"

export default function SkillsPage() {
  const { skills } = profile

  return (
    <div className="container mx-auto py-24">
      <BackButton href="/" label="Back to Home" />
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-12">Skills & Expertise</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(skills).map(([key, category]) => (
            <Card key={key}>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">{category.title}</h2>
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
  )
} 