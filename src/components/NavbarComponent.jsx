
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget'
import { NavLink } from 'react-router-dom'
import './styles/NavbarComponent.css'
import NavImage from '/LogoNav4.png'

function NavbarComponent() {
    return (
        
        <Navbar expand="lg" className="navbar-gradient" data-bs-theme="dark">
            <div className='p-2'>
                <NavLink as={NavLink} to='/'>
                    <img className='rounded' src={NavImage} alt="logo" style={{ width: '17rem' }} />
                </NavLink>
            </div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="me-3" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="text-center">
                    <Nav.Link as={NavLink} to='/'>Home</Nav.Link>
                    <NavDropdown title="Menu" id="basic-nav-dropdown">
                        <NavDropdown.Item as={NavLink} to='/category/All'>
                            Todos los productos
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item as={NavLink} to='/category/Desayunos'>Desayunos</NavDropdown.Item>
                        <NavDropdown.Item as={NavLink} to='/category/Entradas'>Entradas</NavDropdown.Item>
                        <NavDropdown.Item as={NavLink} to='/category/Bebidas'>Bebidas</NavDropdown.Item>
                        <NavDropdown.Item as={NavLink} to='/category/Sopas'>Sopas</NavDropdown.Item>
                        <NavDropdown.Item as={NavLink} to='/category/Arroces'>Arroces</NavDropdown.Item>
                        <NavDropdown.Item as={NavLink} to='/category/Comidas rapidas'>Comidas rapidas</NavDropdown.Item>
                        <NavDropdown.Item as={NavLink} to='/category/Platos fuertes'>Platos fuertes</NavDropdown.Item>
                        <NavDropdown.Item as={NavLink} to='/category/Especialidades'>Especialidades</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link as={NavLink} to='/zonabiker'>Zona biker</Nav.Link>
                    <Nav.Link as={NavLink} to='/galeria'>Galeria</Nav.Link>
                    <Nav.Link as={NavLink} to="/contacto">Contacto</Nav.Link>
                </Nav>
                <nav className='ms-auto me-lg-5'>
                    <CartWidget />
                </nav>
            </Navbar.Collapse>
            
        </Navbar>
    );
}

export default NavbarComponent;


