import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Puis-je la prendre tous les soirs ?",
    answer:
      "Il est préférable d'utiliser la mélatonine de manière ponctuelle ou en courtes cures. Une utilisation prolongée peut diminuer son efficacité et créer une dépendance psychologique. Consultez un professionnel de santé pour un usage régulier.",
  },
  {
    question: "Pourquoi faible dose = mieux ?",
    answer:
      "Les faibles doses (0,5-1 mg) reproduisent les niveaux physiologiques naturels de mélatonine dans votre corps. Elles sont tout aussi efficaces que les doses élevées, avec beaucoup moins d'effets secondaires. Plus n'est pas toujours mieux.",
  },
  {
    question: "Que faire si je me réveille groggy ?",
    answer:
      "La somnolence matinale indique souvent que la dose est trop élevée ou que la prise était trop tardive. Réduisez la dose et prenez-la plus tôt (60 minutes avant le coucher). Si le problème persiste, consultez un professionnel.",
  },
  {
    question: "Interactions fréquentes ?",
    answer:
      "La mélatonine peut interagir avec les anticoagulants, antidépresseurs, antihypertenseurs, immunosuppresseurs et contraceptifs. Elle est déconseillée pendant la grossesse et l'allaitement. Consultez toujours votre médecin si vous prenez d'autres médicaments.",
  },
]

export function FAQSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Questions fréquentes</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">Réponses aux questions les plus courantes</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-card border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline py-5">
                  <span className="font-semibold text-lg pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
