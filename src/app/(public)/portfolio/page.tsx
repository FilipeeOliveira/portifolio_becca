import { HeroSection } from "./_components/HeroSection"
import { CoursesSection } from "./_components/CoursesSection"
import { ExperienceSection } from "./_components/ExperienceSection"
import { CvSection } from "./_components/CvSection"
import { ContactSection } from "./_components/ContactSection"

export default function PortfolioPage() {
  return (
    <>
      {/* Decorative Elements */}
      <div className="hidden sm:block absolute top-20 right-4 sm:right-10 lg:right-20 opacity-30 z-10">
        <div className="flex flex-col gap-2">
          <div className="w-2 sm:w-3 h-2 sm:h-3 bg-coral-400 rounded-full"></div>
          <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-coral-300 rounded-full ml-2 sm:ml-4"></div>
          <div className="w-3 sm:w-4 h-3 sm:h-4 bg-coral-200 rounded-full ml-1 sm:ml-2"></div>
          <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-coral-400 rounded-full ml-3 sm:ml-6"></div>
          <div className="w-2 sm:w-3 h-2 sm:h-3 bg-coral-300 rounded-full"></div>
        </div>
      </div>

      <div className="hidden sm:block absolute bottom-32 left-4 sm:left-10 lg:left-20 opacity-30 z-10">
        <div className="flex gap-2">
          <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-coral-300 rounded-full"></div>
          <div className="w-2 sm:w-3 h-2 sm:h-3 bg-coral-400 rounded-full"></div>
          <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-coral-200 rounded-full"></div>
          <div className="w-3 sm:w-4 h-3 sm:h-4 bg-coral-300 rounded-full"></div>
        </div>
      </div>

      <HeroSection />
      <CoursesSection />
      <ExperienceSection />
      <CvSection />
      <ContactSection />
    </>
  )
}