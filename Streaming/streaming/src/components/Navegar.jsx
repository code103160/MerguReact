import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'

export default function Navegar() {
  return (
    <Navbar expand="lg" bg="warning" fixed="top">
        <Container>
            <Navbar.Brand href="#"> Streaming </Navbar.Brand>
            <Nav.Link href="#">Inicio</Nav.Link>
            <Nav.Link href="#">Filmes</Nav.Link>
            <Nav.Link href="#">Séries</Nav.Link>
            <Nav.Link href="#">Em Alta</Nav.Link>
        </Container>
    </Navbar>
    
        
  )
}
