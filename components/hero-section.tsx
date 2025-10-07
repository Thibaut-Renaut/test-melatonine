import { Button } from "@/components/ui/button"
import { Moon, Clock } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Icon decoration */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <Moon className="h-8 w-8 text-primary animate-pulse" />
            <Clock className="h-8 w-8 text-accent animate-pulse delay-500" />
          </div>

          {/* Subtitle */}
          <p className="text-sm md:text-base text-primary font-medium tracking-wide uppercase">
            Mélatonine : Information Scientifique
          </p>

          {/* Main title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
            Mélatonine : sûre et efficace… si bien dosée.
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
            Aux doses physiologiques (0,5–2 mg), les effets secondaires sont rares. Au-delà, le risque augmente.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button size="lg" asChild className="w-full sm:w-auto">
              <a href="#dosage">Dosage recommandé</a>
            </Button>
            <Button size="lg" variant="outline" asChild className="w-full sm:w-auto bg-transparent">
              <a href="#effets">Effets possibles</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
