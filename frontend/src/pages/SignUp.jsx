import React from "react";
import { Container, Button } from "react-bootstrap";
import Topbar from "../components/Navbar";

function SignUp() {
  return (
    <div
      style={{
        backgroundImage: "linear-gradient(to bottom, #D84032, #F89F95)",
        height: "100vh",
        width: "100%",
        color: "white",
      }}
    >
      <Topbar />
      <Container>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "2.5em",
          }}
        >
          <form>
            <header className="display-3">SIGN UP</header>
            <div className="mb-3">
              <label for="name" className="form-label">
                Name
              </label>
              <input type="text" className="form-control" id="name" />
            </div>
            <div className="mb-3">
              <label for="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label for="password" className="form-label">
                Password
              </label>
              <input type="password" className="form-control" id="password" />
            </div>
            <div className="mb-3">
              <label for="repassword" className="form-label">
                Re-Type Password
              </label>
              <input type="password" className="form-control" id="repassword" />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" for="exampleCheck1">
                I agree to the terms and conditions
              </label>
            </div>
            <button type="submit" className="btn btn-danger">
              Submit
            </button>
            <Button href="/signin">Sign in</Button>
          </form>
        </div>
      </Container>
    </div>
  );
}

export default SignUp;
