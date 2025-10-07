import { AlertCircle } from "lucide-react"

export function Disclaimer() {
  return (
    <section className="py-12 bg-muted/50 border-t">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-3 text-sm text-muted-foreground">
            <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <span className="font-semibold text-foreground">Avertissement :</span> Ce contenu est fourni à titre
              informatif uniquement et ne remplace pas un avis médical professionnel. Consultez toujours un
              professionnel de santé qualifié avant de commencer tout supplément, notamment la mélatonine.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
