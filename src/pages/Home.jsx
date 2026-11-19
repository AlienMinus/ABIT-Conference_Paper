import React from 'react'
import Headline from '../components/Home/Headline/Headline'
import Hero from '../components/Home/Hero/Hero'
import Welcome from '../components/Home/Welcome/Welcome'
import ImportantDates from '../components/Home/ImportantDates/ImportantDates'
import KeynoteSpeakers from '../components/Home/KeynoteSpeakers/KeynoteSpeakers'
import About from '../components/Home/About/About'
import FAQ from '../components/Home/FAQ/FAQ'
import Sponsors from '../components/Sponsorship/Sponsors'

const Home = () => {
  return (
    <>
      <Headline />
      <Hero />
      <Welcome />
      <ImportantDates />
      <KeynoteSpeakers />
      {/* <Sponsors /> */}
      <About />
      <FAQ />
    </>
  )
}

export default Home