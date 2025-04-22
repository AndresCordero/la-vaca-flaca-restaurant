import React from 'react'
import {
    FaFacebookF,
    FaInstagram,
    FaHome,
    FaEnvelope,
    FaPhone,
    FaWhatsapp
} from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <div>
                <footer className="text-center text-lg-start text-white" style={{ backgroundColor: '#111' }}>
                    {/* Social Media Section */}

                    <section
                        className="d-flex flex-column flex-md-row justify-content-between align-items-center p-3"
                        style={{ backgroundColor: '#3e2723' }}
                    >
                        <div className="mb-3 mb-md-0">
                            <span className="text-white">Buscanos en nuestras Redes Sociales</span>
                        </div>
                        <div className="d-flex gap-3">
                            <a href="https://www.facebook.com/share/1AdkFHDEHb/" className="text-white">
                                <FaFacebookF size={30} />
                            </a>
                            <a href="https://www.instagram.com/trapiche_vacaflaca?igsh=bnVhNmRpeGt3Y2l3" className="text-white">
                                <FaInstagram size={30} />
                            </a>
                            <a href="https://wa.me/50660190259" className="text-white">
                                <FaWhatsapp size={30} />
                            </a>
                        </div>
                    </section>


                    {/* Links Section */}
                    <section>
                        <div className="container text-center text-md-start mt-5">
                            <div className="row mt-3">
                                {/* Company Info */}
                                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                    <h6 className="text-uppercase fw-bold">Bar y Restaurante Vaca Flaca</h6>
                                    <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
                                    <p>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                </div>

                                {/* Secciones */}
                                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                    <h6 className="text-uppercase fw-bold">Secciones</h6>
                                    <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
                                    <p><a href="/category/all" className="text-white">Menu</a></p>
                                    <p><a href="/zonabiker" className="text-white">Zona Biker</a></p>
                                    <p><a href="/Galeria" className="text-white">Galería</a></p>
                                    <p><a href="/Contacto" className="text-white">Contacto</a></p>
                                </div>

                                {/* Useful Links */}
                                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                    <h6 className="text-uppercase fw-bold">Enlaces de Interés</h6>
                                    <hr
                                        className="mb-4 mt-0 d-inline-block mx-auto"
                                        style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }}
                                    />
                                    <p>
                                        <a
                                            href="https://andrescordero.github.io/portfolio/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-white text-decoration-none"
                                        >
                                            🛠️ Sitio desarrollado por AndresCorderoDev – ¿Querés uno así para tu negocio?
                                        </a>
                                    </p>
                                </div>


                                {/* Contact */}
                                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                    <h6 className="text-uppercase fw-bold">Contacto</h6>
                                    <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
                                    <p><FaHome className="me-2" /> El Abejonal, San Pablo de León Cortés, San José, Costa Rica</p>
                                    <p><FaEnvelope className="me-2" /> info@vacaflaca.com</p>
                                    <p><FaPhone className="me-2" /> +506 60190259 /  +506 62531144</p>

                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Copyright */}
                    <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                        © 2025 Copyright:
                        <a className="text-decoration-none text-white ms-1" href="https://andrescordero.github.io/portfolio/">AndresCorderoDev</a>
                    </div>
                </footer>
            </div>

        </div>
    )
}

export default Footer
