import { Card } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

const practices = [
  {
    title: "Timing optimal",
    description: "Prendre 30–60 minutes avant le coucher dans une pièce sombre",
  },
  {
    title: "Éviter les perturbateurs",
    description: "Pas d'alcool ni d'écrans en fin de soirée",
  },
  {
    title: "Usage ponctuel",
    description: "Utilisation pour décalage horaire ou périodes stressées, faire des pauses régulières",
  },
  {
    title: "Consultation médicale",
    description:
      "Parler à votre médecin si vous prenez anticoagulants, antidépresseurs, antihypertenseurs, ou en cas de grossesse",
  },
]

export function BestPracticesSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Bonnes pratiques</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Maximisez l'efficacité et minimisez les risques
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {practices.map((practice, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg">{practice.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{practice.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
