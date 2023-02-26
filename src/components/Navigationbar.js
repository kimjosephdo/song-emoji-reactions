import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { Container, Nav, Navbar, NavItem, NavLink } from 'react-bootstrap';


export default function Navigationbar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Oasis Project</Navbar.Brand>
          <img
              alt=""
              src="/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Features</Nav.Link>
            <Nav.Link href="#">Pricing</Nav.Link>
          </Nav>
          <Nav className="mr-auto">
            <Nav.Link href="#">Sign Up</Nav.Link>
            <Nav.Link href="#">Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}
