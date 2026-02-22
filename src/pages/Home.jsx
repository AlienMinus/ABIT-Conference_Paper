import React from 'react'
import Hero from '../components/Hero/Hero'
import Welcome from '../components/Welcome/Welcome'
import ImportantDates from '../components/ImportantDates/ImportantDates'
import Participants from '../components/Participants/Participants'
import About from '../components/About/About'
import Sponsors from '../components/Sponsorship/Sponsors'

const Home = () => {
  return (
    <>
      <Hero />
      <Welcome />
      <ImportantDates />
      <Participants />
      <Sponsors />
      <About />
    </>
  )
}

export default Home