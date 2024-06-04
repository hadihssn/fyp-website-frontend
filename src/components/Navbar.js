import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
  return (
    <>
      <Navbar style={{ backgroundColor: '#020014', color: 'white', marginBottom: '20px', margin: '20px'  }}>
        <Container>
          <Navbar.Brand as={Link} to="/" style={{ color: 'white' }}>Vehicle GPT</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" style={{ color: 'white' }}>Home</Nav.Link>
            <Nav.Link as={Link} to="/aboutus" style={{ color: 'white' }}>About Us</Nav.Link>
            <Nav.Link as={Link} to="/chatbot" style={{ color: 'white' }}>Chat Bot</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;
