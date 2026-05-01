/* eslint-disable @typescript-eslint/no-explicit-any */


import { HeroSection } from '@/components/home-page/HeroSection'
import { ServicesSection } from '@/components/home-page/ServicesSection'
import { ProgramsSection } from '@/components/home-page/ProgramsSection'
import { EventsUpdatesSection } from '@/components/home-page/EventsUpdatesSection'
import { getGalleryImages, getRecentEvents, getRecentPosts, getVideoData } from '@/lib/wordpress-sgcf'



export const revalidate = 60

const blogPosts = await getRecentPosts(3);
console.log('Blog posts with categories:', JSON.stringify(blogPosts, null, 2));

export default async function Home() {

  // Fetch data on the server
  const [events, blogPosts, galleryImages, videoData] = await Promise.all([
    getRecentEvents(3),
    getRecentPosts(3),
    getGalleryImages(),
    getVideoData()
  ]);


  return (
    <>

      <div>
        <HeroSection/>
        <ServicesSection/>
        <EventsUpdatesSection 
        events={events}
        blogPosts={blogPosts}
        galleryImages={galleryImages}
        videoData={videoData}
      />
        <ProgramsSection/>
      </div>
    </>
  );
}


