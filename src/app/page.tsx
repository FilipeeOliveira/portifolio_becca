import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { HeroSection } from "@/components/sections/hero/HeroSection"
import { CoursesSection } from "@/components/sections/courses/CoursesSection"
import { MissionSection } from "@/components/sections/mission/MissionSection"
import { JourneySection } from "@/components/sections/journey/JourneySection"
import { ContactSection } from "@/components/sections/contact/ContactSection"
import { ApproachesMarquee } from "@/components/sections/ApproachesMarquee"

export default function HomePage() {
  return (
    <>
      <a href="#sobre" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground">
        Pular para o conteúdo
      </a>
      <Header />
      <main>
        <HeroSection />
        <ApproachesMarquee />
        <MissionSection />
        <CoursesSection />
        <JourneySection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
