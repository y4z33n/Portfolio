import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

interface BackButtonProps {
  href: string
  label?: string
}

export function BackButton({ href, label = "Back" }: BackButtonProps) {
  return (
    <Button variant="ghost" asChild className="mb-6">
      <Link href={href}>
        <ArrowLeft className="mr-2 h-4 w-4" />
        {label}
      </Link>
    </Button>
  )
} 