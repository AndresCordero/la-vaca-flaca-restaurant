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
                        <NavDropdown  title="Menu" id="basic-nav-dropdown">
                            <NavDropdown.Item as={NavLink} to='/articulos'>
                            Todos los productos
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={NavLink} to='/category/bebidas'>Bebidas</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to='/category/acompañamientos'>Acompañamientos</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to='/category/ejecutivo'>Ejecutivo</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to='/category/pollo'>Pollo</NavDropdown.Item> 
                            <NavDropdown.Item as={NavLink} to='/category/pastas'>Pastas</NavDropdown.Item> 
                            <NavDropdown.Item as={NavLink} to='/category/comidasrapidas'>Comidas Rapidas</NavDropdown.Item> 
                            <NavDropdown.Item as={NavLink} to='/category/sopas'>Sopas</NavDropdown.Item> 
                            <NavDropdown.Item as={NavLink} to='/category/especiales'>Especiales</NavDropdown.Item> 
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


