import { MainNav } from "@/components/main-nav"
import { profile } from "@/data/profile"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <MainNav />
      <div className="flex-1 flex items-center justify-center">
        <div className="space-y-6 text-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            {profile.name}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light">
            {profile.role}
          </p>
          <p className="max-w-[600px] text-muted-foreground/80 mx-auto">
            {profile.bio}
          </p>
        </div>
      </div>
    </main>
  )
}
