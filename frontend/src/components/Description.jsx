import React from 'react'
// #E95C51, #F79D93
function Description(props) {
  return (
    <div
    className="custom-gradient"
    style={{
      backgroundImage: `linear-gradient(to bottom, ${props.topColor}, ${props.bottomColor} )`,
      height: "100vh"
    }}
  >
    <div className="container">
      <h2 className="text-center display-3">{props.text}</h2>
      <p className="text-center display-6">{props.content}</p>
    </div>
  </div>
  
  )
}

export default Description