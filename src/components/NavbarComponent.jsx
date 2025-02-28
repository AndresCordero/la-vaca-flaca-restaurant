import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavbarComponent() {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand className="pe-5" href="#home">La Vaca Flaca</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="d-flex justify-content-between">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#eventos">Eventos</Nav.Link>
                            <Nav.Link href="#galeria">Galeria</Nav.Link> 
                            <NavDropdown title="Servicios" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Pista de Motocross</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Restaurante y bar
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Sala de eventos</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Reservaciones
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#contacto">Contacto</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavbarComponent;