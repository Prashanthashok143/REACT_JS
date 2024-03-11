import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const NavBar = () => {
  return (
    <div>
        
<Navbar bg="primary" data-bs-theme="dark">
<Container>
  <Navbar.Brand href="/child">Navbar</Navbar.Brand>
  <Nav className="me-auto">
    <Nav.Link href="/child">Child</Nav.Link>
    <Nav.Link href="/parent">Parent</Nav.Link>
  </Nav>
</Container>
</Navbar>
    </div>
  )
}

export default NavBar