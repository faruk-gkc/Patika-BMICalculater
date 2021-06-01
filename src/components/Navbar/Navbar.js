import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

const NavbarNav = () => {
  return (
    <Navbar variant="dark" bg="success" expand="lg">
      <Container>
        <Navbar.Brand href="/">Vücut Kitle İndeks Hesaplayıcı</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/bmiNedir">VKİ Nedir?</Nav.Link>
            <Nav.Link href="/bmiHowToCalculate">VKİ Hesaplaması Nasıl Yapılır?</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarNav;
