import React from 'react'
import Hero from '../components/Home components/Hero'
import Treasures from '../components/Home components/Treasures'
import TopUniversities from '../components/Home components/TopUniversities'
import Contact from '../components/Home components/Contact'
import ConnectStudents from '../components/Home components/ConnectStudents'
import Journey from '../components/Home components/Journey'
import FormContact from '../components/Home components/FormContact'
import Youtube from '../components/Home components/Youtube'
import BannerContact from '../components/Home components/BannerContact'
const Home = () => {
  return (
    <div>
        <Hero />
        <Treasures />
        <TopUniversities />
        <Contact />
        <ConnectStudents />
        <Journey/>
        <FormContact/>
        <Youtube/>
        <BannerContact/>
    </div>
  )
}

export default Home 