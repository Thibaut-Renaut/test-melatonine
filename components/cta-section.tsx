import { Button } from "@/components/ui/button"
import { ArrowRight, ExternalLink } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5 rounded-2xl p-8 md:p-12 text-center space-y-8 border border-primary/20">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Prêt à mieux dormir ?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Suivez les bonnes pratiques et consultez un professionnel pour un usage optimal de la mélatonine.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild className="w-full sm:w-auto">
                <a href="#dosage" className="flex items-center gap-2">
                  Voir les bonnes pratiques
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="w-full sm:w-auto bg-transparent">
                <a
                  href="https://www.ameli.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Parler à un professionnel
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
