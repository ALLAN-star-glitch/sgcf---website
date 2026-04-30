

import { HeroSection } from '@/components/home-page/HeroSection'
import { ServicesSection } from '@/components/home-page/ServicesSection'
import { ProgramsSection } from '@/components/home-page/ProgramsSection'
import { EventsUpdatesSection } from '@/components/home-page/EventsUpdatesSection'



export const revalidate = 60

export default async function Home() {


  return (
    <>

      <div>
        <HeroSection/>
        <ServicesSection/>
        <EventsUpdatesSection/>
        <ProgramsSection/>
      </div>
    </>
  );
}