import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../components/styles/Home.css';
import HomeVideo from '/video4.mp4';
import MotoVideo from '/Moto2.mp4'
import MotoPhoto from '/moto3.jpeg'
import { NavLink } from 'react-router-dom';

const Home = () => {


    return (

        <div className='bg-black'>
            <section className="hero-section position-relative text-white text-center d-flex align-items-center justify-content-center flex-column">
                <video className="video-bg max-h-50 overflow-auto mb-5" autoPlay loop muted playsInline>
                    <source src={HomeVideo} type="video/mp4" />
                </video>
                <div className="overlay position-absolute w-100 h-100 d-flex justify-content-center align-items-center">
                    <div>
                        <h1 className="display-3 fw-bold">Bar y Restaurante Vaca Flaca</h1>
                        <p className="lead">Comida deliciosa, ambiente único. ¡Disfrutá cada bocado!</p>
                        <div className="d-flex flex-column flex-md-row gap-3 justify-content-center mt-4">
                            <NavLink to="./category/all" className="btn btn-warning btn-lg">Ver Menú</NavLink>
                            <NavLink to="/reserva" className="btn btn-outline-light btn-lg">Reservar</NavLink>
                        </div>
                    </div>
                </div>
            </section>



            <svg
                className="frame-decoration w-100"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                viewBox="0 0 1920 192.275"
            >
                {/* Gradient Definition */}
                <defs>
                    <linearGradient id="grad1" x1="0%" y1="100%" x2="0%" y2="0%">
                        <stop offset="0%" style={{ stopColor: '#000', stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: '#999', stopOpacity: 1 }} />
                    </linearGradient>
                </defs>

                {/* First Path: Black Fill */}
                <path
                    fill="#000"
                    d="M1920,158.755s-63.9,52.163-179.472,50.736c-121.494-1.5-185.839-49.738-305.984-49.733-109.21,0-181.491,51.733-300.537,50.233-123.941-1.562-225.214-50.126-390.43-50.374-123.821-.185-353.982,58.374-458.976,56.373-217.907-4.153-284.6-57.236-284.6-57.236V351.03H1920V158.755Z"
                    transform="translate(0 -158.755)"
                />

                {/* Second Path: Gradient Fill */}
                <path
                    fill="url(#grad1)"
                    d="M0,158.755s63.9,52.163,179.472,50.736c121.494-1.5,185.839-49.738,305.984-49.733,109.21,0,181.491,51.733,300.537,50.233,123.941-1.562,225.214-50.126,390.43-50.374,123.821-.185,353.982,58.374,458.976,56.373,217.907-4.153,284.6-57.236,284.6-57.236V351.03H0V158.755Z"
                    transform="translate(0 -90.755)"
                />
            </svg>


            {/* Seccion Ofertas */}

            <section className="offers-section py-5 text-center bg-dark text-white m-5">
                <div className="container">
                    <h2 className="display-5 fw-bold mb-4 ">¡Ofertas Especiales!</h2>
                    <p className="lead mb-5">Disfrutá promociones irresistibles por tiempo limitado</p>
                    <div className="row g-4 justify-content-center pb-4">
                        {/* Offer Card 1 */}
                        <div className="col-md-4">
                            <div className="card h-100 shadow-lg border-0">
                                <img src="./olladecarne.webp" className="card-img-top" alt="Olla de Carne" />
                                <div className="card-body">
                                    <h5 className="card-title">Domingos de Olla de Carne</h5>
                                    <p className="card-text">Solo ₡4.500 todos los domingos. ¡Vení con tu familia!</p>
                                </div>
                            </div>
                        </div>

                        {/* Offer Card 2 */}
                        <div className="col-md-4">
                            <div className="card h-100 shadow-lg border-0">
                                <img src="./balde.jpg" className="card-img-top" alt="Promo Cerveza" />
                                <div className="card-body">
                                    <h5 className="card-title">Balde de Cerveza Nacional</h5>
                                    <p className="card-text">Por solo ₡7.500. ¡Salud!</p>
                                </div>
                            </div>
                        </div>

                        {/* Offer Card 3 */}
                        <div className="col-md-4">
                            <div className="card h-100 shadow-lg border-0">
                                <img src="Ribeye.jpg" className="card-img-top" alt="Hamburguesa" />
                                <div className="card-body">
                                    <h5 className="card-title">Cortes especiales cualquier día de la semana</h5>
                                    <p className="card-text">Desde ₡4.900 en adelante</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Zona bike*/}

            <section className="motocross-section bg-dark text-light" style={{ marginTop: "5rem" }}>
                <div className="container-fluid px-0">
                    <div className="row g-0 min-vh-50">

                        {/* Video Column */}
                        <div className="col-md-7">
                            <div className="position-relative w-100 h-100" style={{ minHeight: '400px' }}>
                                <video
                                    className="w-100 h-100"
                                    style={{ objectFit: 'cover' }}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    poster="/images/motocross-fallback.jpg"
                                >
                                    <source src={MotoVideo} type="video/mp4" />
                                    Tu navegador no soporta el video HTML5.
                                </video>
                            </div>
                        </div>

                        {/* Text Column */}
                        <div className="col-md-5 d-flex flex-column justify-content-center align-items-center text-center p-5">
                            <div className="px-3">
                                <h2 className="display-5 fw-bold mb-3">Zona Motocross & Biker</h2>
                                <p className="lead mb-4">
                                    Vení a vivir la adrenalina en nuestra pista de motocross o relajate con tu crew biker en un ambiente 100% Vaca Flaca.
                                </p>
                                <a href="#contacto" className="btn btn-warning btn-lg">Reservar tu espacio</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid px-0 mt-3">
                    <div className="row g-0 min-vh-50">

                        {/* Text Column */}
                        <div className="col-md-5 d-flex align-items-center p-5 bg-dark text-light">
                            <div>
                                <h2 className="display-5 fw-bold mb-3">¿Sos parte de un club de motociclistas?</h2>
                                <p className="lead mb-4">
                                    Traé a tu crew y unite a Vaca Flaca. Nuestra zona biker está lista para recibirlos con buena comida, ambiente rústico, hospedaje y mucha actitud.
                                </p>

                            </div>
                        </div>

                        {/* Image Column */}
                        <div className="col-md-7">
                            <div className="position-relative w-100 h-100" style={{ minHeight: '400px' }}>
                                <img
                                    src={MotoPhoto}
                                    alt="Zona Motocross"
                                    className="w-100 h-100"
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>




            {/* Seccion Horario y ubicacion */}

            <section className="bg-light text-dark py-5" id="ubicacion">
                <div className="container">
                    <h2 className="text-center fw-bold mb-4">📍 ¿Dónde Estamos?</h2>
                    <p className="lead text-center mb-5">Visitános en la fresca Zona de Los Santos. Viví la experiencia Vaca Flaca.</p>

                    <div className="row">
                        {/* Horario */}
                        <div className="col-md-6 mb-4  p-3 bg-body-secondary rounded-4">
                            <h4 className="fw-bold mb-3">🕒 Horario</h4>
                            <ul className="list-group bg-light">
                                <li className="list-group-item bg-light text-dark border-0">Martes a Jueves: 9:00am - 9:00pm</li>
                                <li className="list-group-item bg-light text-dark border-0">Viernes y Sábado: 9:00am - 10:00pm</li>
                                <li className="list-group-item bg-light text-dark border-0">Domingo: 9:00am - 8:00pm</li>
                            </ul>

                            <div className="mt-4">
                                <h5 className="fw-bold">📫 Dirección</h5>
                                <p>El Abejonal, San Pablo de León Cortés, San José, Costa Rica</p>
                                <a
                                    href="https://www.google.com/maps?q=9.935+,-84.051"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-lg btn-primary mt-2"
                                >
                                    Cómo llegar
                                </a>
                            </div>
                        </div>

                        {/* Mapa */}
                        <div className="col-md-6">
                            <div className="ratio ratio-4x3 shadow-lg rounded-4 overflow-hidden">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.7021516059426!2d-84.05155649999999!3d9.706441999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa1114f13c217c7%3A0xfeb8c45c6c3feca5!2sVaca%20Flaca%20zona%20Biker%20(El%20Trapiche)!5e0!3m2!1sen!2scr!4v1744691873870!5m2!1sen!2scr"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    title="Ubicación Vaca Flaca"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section className="bg-dark text-white text-center py-5">
                <div className="container">
                    <h2 className="display-4 fw-bold mb-3">📱 Seguinos en Redes Sociales</h2>
                    <p className="lead mb-4">
                        Viví la experiencia Vaca Flaca también online. Enterate de eventos, promos y toda la vibra biker desde nuestras redes.
                    </p>
                    <div className="d-flex justify-content-center gap-3 mb-4 flex-wrap">
                        <a
                            href="https://www.facebook.com/VacaFlacaCR" // Reemplazá por el enlace real
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline-light btn-lg"
                        >
                            <i className="bi bi-facebook me-2"></i>Facebook
                        </a>
                        <a
                            href="https://www.instagram.com/VacaFlacaCR" // Reemplazá por el enlace real
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline-light btn-lg"
                        >
                            <i className="bi bi-instagram me-2"></i>Instagram
                        </a>
                    </div>
                </div>
            </section>



        </div>


    );

};

export default Home;
