export interface Experience {
  title: string
  company: string
  department: string
  period: string
  description: string
}

export interface ExperienceCarouselProps {
  experiences: Experience[]
  currentSlide: number
  onNext: () => void
  onPrev: () => void
  onSlideChange: (index: number) => void
}