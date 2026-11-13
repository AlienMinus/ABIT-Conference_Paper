import React from 'react'
import Headline from '../components/Home/Headline/Headline'
import Hero from '../components/Home/Hero/Hero'
import Welcome from '../components/Home/Welcome/Welcome'
import ImportantDates from '../components/Home/ImportantDates/ImportantDates'
import Participants from '../components/Home/Participants/Participants'
import About from '../components/Home/About/About'
import Sponsors from '../components/Sponsorship/Sponsors'

const Home = () => {
  return (
    <>
      <Headline />
      <Hero />
      <Welcome />
      <ImportantDates />
      {/* <Participants /> */}
      {/* <Sponsors /> */}
      <About />
    </>
  )
}

export default Home