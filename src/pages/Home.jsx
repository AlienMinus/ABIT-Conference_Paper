import React from 'react'
import Hero from '../components/Hero/Hero'
import Welcome from '../components/Welcome/Welcome'
import ImportantDates from '../components/ImportantDates/ImportantDates'
import Participants from '../components/Participants/Participants'

const Home = () => {
  return (
    <>
      <Hero />
      <Welcome />
      <ImportantDates />
      <Participants />
    </>
  )
}

export default Home