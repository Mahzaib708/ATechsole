import React from 'react'
import Hero from './Hero.jsx'
import CTASection from './CTASection.jsx'
import VideoSection from './VideoSection.jsx'
import Services from './Services.jsx'
import AutoSlideTags from './AutoSlideTags.jsx'
import Expertise from './Expertise.jsx'
import HowItWorks from './HowItWorks.jsx'
import Testimonials from './Testimonials.jsx'
import FAQ from './FAQ.jsx'
import StatsPage from './StatsPage.jsx'
import WhatWeDo from './WhatWeDo.jsx'


const Home = ({ openContact }) => {
  return (
    <>
      <Hero />
      <VideoSection />
      <Expertise />
       <HowItWorks />
      <Services />
      <AutoSlideTags />
      <StatsPage/>
      <WhatWeDo />
      <Testimonials />
      <FAQ />
      <CTASection onContactClick={openContact} />
    </>
  )
}

export default Home
