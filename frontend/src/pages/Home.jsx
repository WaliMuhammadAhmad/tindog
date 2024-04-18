import React from 'react'
import LandingPage from '../components/LandingPage'
import Topbar from '../components/Navbar'
import Carousl from '../components/Carousel'
import Info from '../components/Info'
import Description from '../components/Description'
import Footer from '../components/Footer'

function Home() {
  return (
    <div >
    <Topbar />
    <LandingPage />
    <Info />
    <Carousl />
    <Description />
    <Footer />
    </div>
  )
}

export default Home