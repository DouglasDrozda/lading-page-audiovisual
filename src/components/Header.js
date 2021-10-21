import { Container, Nav, Navbar } from 'react-bootstrap';

import '../styles/Header.css';

function Header() {
  return (
    <header>
      <Navbar variant="light" expand="lg">
        <Container>
          <div className="header-title">
            <Navbar.Brand href="#home">
              <img src="" alt="Felipe Neves" width="250px" />
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
