import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

function Exercise5() {
  return (
    <Container fluid>
      <Navbar variant="dark" expand="lg" className="py-4" style={{ backgroundColor: "rgb(249,137,0)" }}>
        <Container fluid className="text-center d-block">
          <Navbar.Brand href="#home" className="mx-auto d-block">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-9Qh2rJaKcHthgCzbqkeZ2GWJJmcT2M4oXA&s"
              alt="FPT Education Logo"
              className="mb-2"
              style={{ width: "50%" }}
            />
          </Navbar.Brand>
          <Nav className="justify-content-center fs-5">
            <Nav.Link href="#home" className="text-white fw-bold mx-3">
              Home
            </Nav.Link>
            <Nav.Link href="#about" className="text-white fw-bold mx-3">
              About
            </Nav.Link>
            <Nav.Link href="#contact" className="text-white fw-bold mx-3">
              Contact
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Container className="my-5 p-100">
        <div className="text-center mb-5">
          <h2 className="mb-3">About</h2>
          <p className="text-muted lead">
            This is the about section of the website.
          </p>
        </div>

        <div className="text-center">
          <h2 className="mb-3">Contact</h2>
          <p className="text-muted lead">
            For any inquiries, please contact us at{" "}
            <a href="mailto:example@example.com">letritrung@gmail.com</a>.
          </p>
        </div>
      </Container>

      <footer className="bg-warning-subtle text-center py-3 mt-5">
        <Container className="p-5">
          <p className="text-muted mb-0">
            © 2023 Website. All rights reserved.
          </p>
        </Container>
      </footer>
    </Container>
  );
}
export default Exercise5;
