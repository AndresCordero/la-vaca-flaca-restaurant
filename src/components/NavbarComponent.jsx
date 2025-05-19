import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';
import NavImage from '/LogoNav4.png';
import './styles/NavbarComponent.css';

function NavbarComponent() {
    const [expanded, setExpanded] = useState(false);
    const location = useLocation();

    const handleNavClick = () => {
        setExpanded(false); // Cierra el menú hamburguesa
    };

    return (
        <Navbar expand="lg" className="navbar-gradient" data-bs-theme="dark" expanded={expanded}>
            <div className="p-2">
                <NavLink to="/" onClick={handleNavClick}>
                    <img className="rounded" src={NavImage} alt="logo" style={{ width: '17rem' }} />
                </NavLink>
            </div>
            <Navbar.Toggle onClick={() => setExpanded(!expanded)} className="me-2" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="text-center">
                    <NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} to="/" onClick={handleNavClick}>Home</NavLink>
                    <NavDropdown title="Menu" id="basic-nav-dropdown">
                        {[
                            ['All', 'Todos los productos'],
                            ['Desayunos'],
                            ['Entradas'],
                            ['Bebidas'],
                            ['Sopas'],
                            ['Arroces'],
                            ['Comidas rapidas'],
                            ['Platos fuertes'],
                            ['Especialidades'],
                        ].map(([path, label]) => (
                            <NavDropdown.Item
                                key={path}
                                as={NavLink}
                                to={`/category/${path}`}
                                onClick={handleNavClick}
                            >
                                {label || path}
                            </NavDropdown.Item>
                        ))}
                    </NavDropdown>
                    <NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} to="/zonabiker" onClick={handleNavClick}>Zona biker</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} to="/galeria" onClick={handleNavClick}>Galeria</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} to="/contacto" onClick={handleNavClick}>Contacto</NavLink>
                </Nav>
                <nav className="ms-auto me-lg-5">
                    <CartWidget />
                </nav>
            </Navbar.Collapse>
        </Navbar>
    );
}




export default NavbarComponent;
