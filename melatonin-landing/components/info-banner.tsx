import { Info } from "lucide-react"

export function InfoBanner() {
  return (
    <div className="bg-primary/10 border-b border-primary/20">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-center gap-2 text-sm text-primary">
          <Info className="h-4 w-4 flex-shrink-0" />
          <p className="text-center">
            <span className="font-semibold">Le plus important :</span> respecter le dosage.
          </p>
        </div>
      </div>
    </div>
  )
}
