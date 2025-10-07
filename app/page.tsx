import { HeroSection } from "@/components/hero-section"
import { InfoSection } from "@/components/info-section"
import { DosageSection } from "@/components/dosage-section"
import { EffectsSection } from "@/components/effects-section"
import { BestPracticesSection } from "@/components/best-practices-section"
import { FAQSection } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"
import { Disclaimer } from "@/components/disclaimer"
import { ThemeToggle } from "@/components/theme-toggle"
import { InfoBanner } from "@/components/info-banner"

export default function MelatoninPage() {
  return (
    <div className="min-h-screen">
      <ThemeToggle />
      <InfoBanner />
      <main>
        <HeroSection />
        <InfoSection />
        <DosageSection />
        <EffectsSection />
        <BestPracticesSection />
        <FAQSection />
        <CTASection />
        <Disclaimer />
      </main>
    </div>
  )
}
