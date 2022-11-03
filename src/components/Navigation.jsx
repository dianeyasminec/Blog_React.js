import {Nav, Navbar, Container} from 'react-bootstrap'
import React from 'react'

export default function Navigation() {
  return (

    <Navbar bg="light" variant="light">
        <Container>
          {/* <Navbar.Brand href="">Blog</Navbar.Brand> */}
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/books">Books</Nav.Link>
            <Nav.Link href="/create">New Blog</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
   

  )
}
