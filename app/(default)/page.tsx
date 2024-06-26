export const metadata = {
  title: 'Home - Fintech Sucks!',
  description: 'Online fintech-as-a-Service',
}

import Hero from '../../components/hero'
import Features from '../../components/features'
import FeaturesBlocks from '../../components/features-blocks'
import Testimonials from '../../components/testimonials'
import Newsletter from '../../components/newsletter'
import { HeroScrollDemo } from '../../components/container-scroll-animation/HeroScroll'
import Section from '../../components/Section'
import Graph from '../../components/animations/graph/Graph'
import { LampDemo } from '../../components/lamp/lamp'

import ScrollReveal from '../../components/TextScrollReveal/ScrollObserver'
import * as React from 'react'



export default function Home() {
  const sentences = ["Trust is our foundation. Our platform offers entrepreneurs a transparent way to build and grow a more trusting fintech ecosystem."];
  const combinedSentence = sentences.join(" ");
  return (
    <>
     
      <Hero />
      <ScrollReveal sentence={sentences} />
      <HeroScrollDemo description={'https://loan.aestheticscard.com'} />
      <Features />
      <FeaturesBlocks />
      <Section
          component={Graph}
          title="Increase Revenues"
          description="The only open source project with rev-share built in:"
          listItems={["Interchange", "Recurring", "Origination Fees"]}
      />
      <LampDemo description={''} />
      <Testimonials />
      <Newsletter />
  
    </>
  )
}
