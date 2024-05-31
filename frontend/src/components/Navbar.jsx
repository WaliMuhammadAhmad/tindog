import React from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

function Topbar() {
  return (
    <>
      {["sm"].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          style={{
            width: "100%",
            position: "fixed",
            top: 0,
            backgroundColor: "rgba(222, 73, 60, 0.2)",
            backdropFilter: "blur(2px)",
            zIndex: 1000,
          }}
        >
          <Container fluid>
            <Navbar.Brand href="/" style={{ color: "#fff" }}>
              tindog
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              style={{ color: "#fff" }}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/about" style={{ color: "#fff" }}>
                    About
                  </Nav.Link>
                  <Nav.Link href="/shop" style={{ color: "#fff" }}>
                    Pricing
                  </Nav.Link>
                </Nav>
                <Button variant="outline-light">Sign up</Button>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Topbar;
