import React from 'react'
import Layout from '../component/Layout'
import Hero from '../component/Home Component/Hero'
import UpcomingEvent from '../component/Home Component/UpcomingEvent'
import EventCategories from '../component/Home Component/EventCategories'
import HowItWorks from '../component/Home Component/HowItWorks'
import EventNearYou from '../component/Home Component/EventNearYou'


const Homepage = () => {
  return (
    
    <>
    <Layout>
      <Hero/>
      <UpcomingEvent/>
      <EventCategories/>
      <HowItWorks/>
      <EventNearYou/>
    </Layout>
    </>
  )
}

export default Homepage