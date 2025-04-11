
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget'
import { NavLink } from 'react-router-dom'
import './styles/NavbarComponent.css'

function NavbarComponent() {
    return (
        <Navbar expand="lg" className="navbar-gradient" data-bs-theme="dark">
            <div className='pe-5 p-2'>
                <NavLink as={NavLink} to='/'>
                    <img className='rounded-circle' src="/logo-vacaflaca.jpg" alt="logo" style={{ width: '12rem' }} />
                </NavLink>
            </div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="me-3"  />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="text-center">
                    <Nav.Link as={NavLink} to='/'>Home</Nav.Link>
                    <NavDropdown title="Menu" id="basic-nav-dropdown">
                        <NavDropdown.Item as={NavLink} to='/productos'>
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
                    <Nav.Link as={NavLink} to='/zonabiker'>Zona biker</Nav.Link>
                    <Nav.Link as={NavLink} to='galeria'>Galeria</Nav.Link>
                    <Nav.Link href="#contacto">Contacto</Nav.Link>
                </Nav>
                <nav className='ms-auto me-lg-5'>
                    <CartWidget />
                </nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavbarComponent;


