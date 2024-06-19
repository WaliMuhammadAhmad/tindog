import React from "react";
import { Container, Button } from "react-bootstrap";
import Topbar from "../components/Navbar";

function SignIn() {
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
            <header className="display-3">SIGN IN</header>
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
            </div>
            <div className="mb-3">
              <label for="password" className="form-label">
                Password
              </label>
              <input type="password" className="form-control" id="password" />
            </div>
            <button type="submit" className="btn btn-danger">
              Submit
            </button>
            <Button href="/signup">New to tindog? Sign up</Button>
          </form>
        </div>
      </Container>
    </div>
  );
}

export default SignIn;
