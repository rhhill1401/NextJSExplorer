import Hero from '../components/Hero'
import Social from '../components/Social'
import Experts from '@/components/Experts'
import TutorialLayout from '@/components/TutorialLayout'
import CategoryBanner from '@/components/CategoryBanner'
import VirtualTryOn from '@/components/VirtualTryOn'
import FeaturedProducts from '@/components/FeaturedProducts'

export default function Home() {
  return (
    <div>
      <Hero />
      <div>
        <Social />
      </div>
      <Experts />
      <FeaturedProducts />
      <TutorialLayout />
      <VirtualTryOn />
    </div>
  )
}
