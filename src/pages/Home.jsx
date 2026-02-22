import React from 'react'
import Hero from '../components/Hero/Hero'
import Welcome from '../components/Welcome/Welcome'
import ImportantDates from '../components/ImportantDates/ImportantDates'
import Participants from '../components/Participants/Participants'
import Sponsors from '../components/Sponsorship/Sponsors'
import Contact from '../components/Contact/Contact'

const Home = () => {
  return (
    <>
      <Hero />
      <Welcome />
      <ImportantDates />
      <Participants />
      <Sponsors />
      <Contact />
    </>
  )
}

export default Home