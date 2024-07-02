import React from 'react'

function LandingPage() {
  return (
    <div
  className="custom-gradient"
  style={{
    backgroundImage: "linear-gradient(to bottom, #d83f31, #e95c51)",
    height: "100vh",
    paddingTop: "3rem"
  }}
>
  <div className="contianer-fluid">
    <div className="container" style={{ padding: "2em" }}>
      <div className="row">
        <div className="col-lg-6 " style={{ paddingTop: "2.5rem" }}>
          <h1 className="display-3">The magic of pets comes to life.</h1>
          <div className="row">
            <div className="col-lg-6">
              <p className="lead ">
                Discover a world of canine companionship. Find your perfect
                furry friend and explore a wide range of dog-related products
                and services.
              </p>
              <a href="signup">
                <button type="button" className="btn btn-outline-light">
                  Get Started
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <img src="\images\assert\Homepage.png" alt="tindog" />
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default LandingPage