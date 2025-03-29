import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget'
import { NavLink } from 'react-router-dom'

function NavbarComponent() {
    return (
            <Navbar expand="lg" bg="dark" data-bs-theme="dark">
                <div  className='pe-5 p-2'>
                    <NavLink as={NavLink} to='/'>
                    <img className='rounded-circle' src="/logo-vacaflaca.jpg" alt="logo" style={{ width: '12rem'}} />
                    </NavLink>
                </div>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link as={NavLink} to='/'>Home</Nav.Link>
                        <Nav.Link as={NavLink} to='/eventos'>Eventos</Nav.Link>
                        <Nav.Link as={NavLink} to= 'galeria'>Galeria</Nav.Link>
                        <NavDropdown  title="Servicios" id="basic-nav-dropdown">
                            <NavDropdown.Item as={NavLink} to='/category/pista'>Pista de Motocross</NavDropdown.Item> 
                            <NavDropdown.Item as={NavLink} to='/category/restaurante'>
                                Restaurante y bar
                            </NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to='/category/sala'>Sala de eventos</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={NavLink} to='/category/alojamiento'>
                                Alojamiento
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#contacto">Contacto</Nav.Link>
                    </Nav>
                    <nav className='ms-auto me-4'>
                        <CartWidget />
                    </nav>
                </Navbar.Collapse>
            </Navbar>
    );
}

export default NavbarComponent;


