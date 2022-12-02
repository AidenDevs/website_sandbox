import React from "react";
import ReactDOM from 'react-dom/client';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

class Header extends React.Component {
  render() {
    return (
      <Navbar className="me-auto" bg="dark" variant="dark"  expand="lg" style={{
        backgroundColor: 'rgba(255, 255, 255, .12)',
        backdropFilter: 'blur(5px)',
      }}>
        <Container>
          <Navbar.Brand href="/home">sandbox</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="" id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="about">About</Nav.Link>
              <Nav.Link href="blog">Blog</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
export default Header;