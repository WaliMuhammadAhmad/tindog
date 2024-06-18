import React from 'react'
import HomePage from "../components/HomePage"
import Topbar from '../components/Navbar'
import Check from '../components/Check'
import NewsLetters from '../components/NewsLetters'
import Footer from '../components/Footer'

function Checkout() {
  return (
    <div>
      <Topbar />
      <HomePage text = "Checkout" />
      <Check />
      <NewsLetters />
      <Footer />
    </div>
  )
}

export default Checkout