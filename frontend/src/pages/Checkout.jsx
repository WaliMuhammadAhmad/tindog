import React from 'react'
import HomePage from "../components/HomePage"
import Topbar from '../components/Navbar'
import Check from '../components/Check'

function Checkout() {
  return (
    <div>
      <Topbar />
      <HomePage text = "Checkout" />
      <div className='container'
      style={{
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
        gap : "2em",
      }}>
        <Check />
      </div>
    </div>
  )
}

export default Checkout