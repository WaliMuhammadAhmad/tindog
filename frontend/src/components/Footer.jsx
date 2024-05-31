import React from "react";
import { Container } from "react-bootstrap";

function Footer() {
  return (
    <footer
      style={{
        background: "linear-gradient(to top, #d83f31, #F79D93)",
        padding: "20px 0",
        textAlign: "center",
      }}
    >
      <Container>
        <div className="container-fluid">
          <footer className="py-5">
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <h5>Contact Us</h5>
                  <p>Email: info@tindog.com</p>
                  <p>Phone: +1 (123) 456-7890</p>
                  <p>Address: 123 Pet Street, Cityville, USA</p>
                </div>
                <div className="col-md-4">
                  <h5>Quick Links</h5>
                  <ul className="list-unstyled text-danger">
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li>
                      <a href="abour">About Us</a>
                    </li>
                    <li>
                      <a href="#">Services</a>
                    </li>
                    <li>
                      <a href="#">Products</a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4">
                  <h5>Connect With Us</h5>
                  <a href="#" className="btn btn-outline-light btn-social">
                    <i className="bi bi-facebook" />
                    Facebook
                  </a>
                  <a href="#" className="btn btn-outline-light btn-social">
                    <i className="bi bi-twitter" />
                    Twitter
                  </a>
                  <a href="#" className="btn btn-outline-light btn-social">
                    <i className="bi bi-linkedin" />
                    LinkedIn
                  </a>
                  <a href="#" className="btn btn-outline-light btn-social">
                    <i className="bi bi-instagram" />
                    Instagram
                  </a>
                </div>
              </div>
              <hr className="my-4" />
              {/* Adding a horizontal line for separation */}
              <div className="text-center lead">
                <p>© 2023 tindog. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;