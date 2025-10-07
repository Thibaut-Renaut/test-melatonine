import { Card } from "@/components/ui/card"
import { Clock, Moon, Calendar } from "lucide-react"

export function InfoSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Pourquoi la mélatonine ?</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              La mélatonine est une hormone naturelle qui régule votre rythme circadien et favorise l'endormissement.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Moon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Rôle naturel</h3>
              <p className="text-muted-foreground leading-relaxed">
                Hormone du sommeil produite naturellement par votre corps en réponse à l'obscurité.
              </p>
            </Card>

            <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                <Clock className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">Timing optimal</h3>
              <p className="text-muted-foreground leading-relaxed">
                Prendre 30–60 minutes avant le coucher pour une efficacité maximale.
              </p>
            </Card>

            <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Usage recommandé</h3>
              <p className="text-muted-foreground leading-relaxed">
                Utilisation ponctuelle ou en courtes cures pour préserver son efficacité.
              </p>
            </Card>
          </div>

          <Card className="p-6 bg-primary/5 border-primary/20">
            <div className="flex items-start gap-3">
              <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-primary text-sm font-bold">✓</span>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">À retenir</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Faibles doses = sécurité & efficacité. La mélatonine est généralement bien tolérée lorsqu'elle est
                  utilisée correctement.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
