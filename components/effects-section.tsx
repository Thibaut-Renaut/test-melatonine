"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Calendar, TrendingUp } from "lucide-react"

const effectsData = {
  "court-terme": {
    icon: Clock,
    title: "Court terme",
    description: "Effets possibles dans les heures suivant la prise",
    effects: [
      "Somnolence diurne (si prise trop tardive)",
      "Maux de tête légers",
      "Nausées occasionnelles",
      "Vertiges ou étourdissements",
      "Rêves intenses ou cauchemars",
    ],
  },
  "moyen-terme": {
    icon: Calendar,
    title: "Moyen terme",
    description: "Effets possibles avec une utilisation régulière",
    effects: [
      "Habitude psychologique possible",
      "Perturbation du rythme circadien si usage prolongé",
      "Diminution de l'efficacité avec le temps",
      "Dépendance psychologique (rare)",
    ],
  },
  "long-terme": {
    icon: TrendingUp,
    title: "Long terme",
    description: "Données limitées sur l'usage prolongé",
    effects: [
      "Données scientifiques encore limitées",
      "Risque accru avec doses élevées",
      "Interactions médicamenteuses possibles",
      "Effets hormonaux potentiels (à l'étude)",
      "Consultation médicale recommandée",
    ],
  },
}

type EffectPeriod = keyof typeof effectsData

export function EffectsSection() {
  const [activeTab, setActiveTab] = useState<EffectPeriod>("court-terme")

  return (
    <section id="effets" className="py-16 md:py-24 bg-muted/30 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Effets possibles</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Comprendre les effets potentiels selon la durée d'utilisation
            </p>
          </div>

          {/* Tabs */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            {(Object.keys(effectsData) as EffectPeriod[]).map((period) => {
              const data = effectsData[period]
              const Icon = data.icon
              return (
                <button
                  key={period}
                  onClick={() => setActiveTab(period)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                    activeTab === period
                      ? "bg-primary text-primary-foreground shadow-lg"
                      : "bg-card text-muted-foreground hover:bg-muted"
                  }`}
                  aria-label={`Afficher les effets à ${data.title.toLowerCase()}`}
                >
                  <Icon className="h-5 w-5" />
                  <span>{data.title}</span>
                </button>
              )
            })}
          </div>

          {/* Content */}
          <Card className="p-8 md:p-10">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                {(() => {
                  const Icon = effectsData[activeTab].icon
                  return <Icon className="h-8 w-8 text-primary flex-shrink-0" />
                })()}
                <div>
                  <h3 className="text-2xl font-bold mb-2">{effectsData[activeTab].title}</h3>
                  <p className="text-muted-foreground">{effectsData[activeTab].description}</p>
                </div>
              </div>

              <ul className="space-y-3 pt-4">
                {effectsData[activeTab].effects.map((effect, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary text-xs">•</span>
                    </span>
                    <span className="text-foreground leading-relaxed">{effect}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>

          <Card className="p-6 bg-primary/5 border-primary/20">
            <div className="flex items-start gap-3">
              <Badge className="bg-primary/20 text-primary hover:bg-primary/30 flex-shrink-0">Important</Badge>
              <p className="text-sm text-foreground leading-relaxed">
                Le risque augmente surtout avec les doses trop élevées ou une prise tardive. Respecter le dosage
                recommandé et le timing optimal minimise considérablement ces effets.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
