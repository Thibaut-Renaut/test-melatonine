import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, AlertCircle, Info } from "lucide-react"

export function DosageSection() {
  return (
    <section id="dosage" className="py-16 md:py-24 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Dosage recommandé</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Le dosage est crucial pour la sécurité et l'efficacité de la mélatonine.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Low dose - Recommended */}
            <Card className="p-6 space-y-4 border-primary/50 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="flex items-start justify-between">
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Recommandé</Badge>
                <CheckCircle2 className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">0,5–1 mg</h3>
                <p className="text-sm text-muted-foreground">Dose physiologique</p>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Souvent suffisant pour la plupart des personnes. Reproduit les niveaux naturels de mélatonine.
              </p>
              <div className="pt-2 border-t">
                <p className="text-sm text-primary font-medium flex items-center gap-2">
                  <Info className="h-4 w-4" />
                  Faible dose = physiologique
                </p>
              </div>
            </Card>

            {/* Medium dose */}
            <Card className="p-6 space-y-4 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="flex items-start justify-between">
                <Badge variant="secondary">Cas particuliers</Badge>
                <Info className="h-5 w-5 text-muted-foreground" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">1–2 mg</h3>
                <p className="text-sm text-muted-foreground">Dose modérée</p>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Pour certaines situations spécifiques comme le décalage horaire ou les troubles du sommeil légers.
              </p>
              <div className="pt-2 border-t">
                <p className="text-sm text-muted-foreground">Toujours commencer par la dose la plus faible</p>
              </div>
            </Card>

            {/* High dose - Caution */}
            <Card className="p-6 space-y-4 border-destructive/30 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="flex items-start justify-between">
                <Badge variant="destructive">Attention</Badge>
                <AlertCircle className="h-5 w-5 text-destructive" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">≥3–5 mg</h3>
                <p className="text-sm text-muted-foreground">Dose élevée</p>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                À éviter sans avis médical. Augmente significativement le risque d'effets secondaires.
              </p>
              <div className="pt-2 border-t">
                <p className="text-sm text-destructive font-medium flex items-center gap-2">
                  <AlertCircle className="h-4 w-4" />
                  Avis médical requis
                </p>
              </div>
            </Card>
          </div>

          <Card className="p-6 bg-muted/50">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground leading-relaxed">
                <span className="font-semibold text-foreground">Important :</span> Consultez un professionnel de santé
                en cas de traitement en cours, notamment anticoagulants, antidépresseurs, antihypertenseurs, ou en cas
                de grossesse.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
