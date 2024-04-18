import React from 'react'

function Info() {
  return (
    <div
  className="custom-gradient"
  style={{
    backgroundImage: "linear-gradient(to bottom, #e95c51, #f89f95)",
    height: "100vh"
  }}
>
  <div className="container-fluid">
    <div className="container">
      <img
        className="mx-auto d-block"
        src="\images\assert\dogsFamily.png"
        width="70%"
        height="10%"
        alt="dog family png"
      />
      <h1 className="text-center display-3">
        Exploring the Canine World
      </h1>
      <p className="lead text-center text">
        At tindog, we celebrate the diverse and wonderful world of dogs. From
        loyal companions to working heroes, dogs come in all shapes, sizes, and
        breeds. Explore the fascinating history, characteristics, and quirks of
        these incredible canines.
      </p>
    </div>
  </div>
</div>

  )
}

export default Info