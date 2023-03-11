import React from 'react'
import Navbar from '../components/Navbar/Navbar.js'
import Hero from '../components/Hero/Hero.js'
import ChefList from '../components/ChefList/ChefList.js'
import Footer from '../components/Footer/Footer.js'
import About from '../components/About/About.js'

function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <ChefList/>
      <About/>
      <Footer/>
    </>
  )
}

export default Home