import React, { useEffect } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Active_Scroll from '../functions/main';

import '../styles/Header.css';

function Header() {
  useEffect(() => {
    Active_Scroll()
  }, []);

  return (
    <header id="home">
      <video loop muted autoPlay>
        <source src="https://www.w3schools.com/howto/rain.mp4" type="video/mp4" />
        <source src="media/Cover - A Thousand Years.ogg" type="video/ogg" />
        <source src="media/Cover - A Thousand Years.webm" type="video/webm" />
        Formato de vídeo não suportado
      </video>
      <Navbar variant="light" expand="lg"  className="nav-bar">
        <Container>
          <div className="header-title">
            <Navbar.Brand href="#home">
              <h2>LOGO</h2>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
          </div>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">HOME</Nav.Link>
              <Nav.Link href="#sobre">SOBRE</Nav.Link>
              <Nav.Link href="#sevicos">SERVIÇOS</Nav.Link>
              <Nav.Link href="#portfolio">PORTFÓLIO</Nav.Link>
              <Nav.Link href="#contato">CONTATO</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
