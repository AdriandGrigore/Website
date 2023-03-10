import React from 'react'
import Navbar from '../components/Navbar/Navbar.js'
import Hero from '../components/Hero/Hero.js'
import ChefList from '../components/ChefList/ChefList.js'

function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <ChefList/>
    </>
  )
}

export default Home