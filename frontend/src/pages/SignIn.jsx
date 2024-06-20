import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import Topbar from "../components/Navbar";
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';

function SignIn() {

  const [formData, setFormData] = useState({ email: "", password: "" });

  const emailRegex = /^[a-zA-Z][\w.-]*@[a-zA-Z]+\.[a-zA-Z]{2,3}$/;

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!emailRegex.test(formData.email)) {
      alert("Invalid email address");
      return;
    }

    if (formData.password.length < 6) {
      alert("Password must be at least 6 characters long");
      return;
    }

  };

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
          <form method="POST" onSubmit={handleSubmit}>
            <header className="display-3" alignItems="center">SIGN IN</header>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={formData.email}
                onChange={handleChange}
              />
              
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={formData.password}
                onChange={handleChange}
              />
              
            </div>
            <button type="submit" className="btn btn-danger">
              Submit
            </button>
            <Button href="/signup" variant="btn" className="ms-3">
              New to tindog? Sign up
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
}

export default SignIn;