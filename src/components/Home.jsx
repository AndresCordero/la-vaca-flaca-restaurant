import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import '../components/styles/Home.css';
import HomeVideo from '/video4.mp4';
import MotoVideo from '/Moto2.mp4'
import IconPhone from '/phone2.png'
import Cabin from '/cabina2.jpg'
import { NavLink } from 'react-router-dom';

const Home = () => {


    return (
        <div className='bg-black pb-2'>

            {/* Hero */}
            <section>
                <div className="hero-section text-white text-center d-flex align-items-center justify-content-center flex-column pb-5 pb-md-1">
                    <video className="video-bg overflow-auto mb-5" autoPlay loop muted playsInline>
                        <source src={HomeVideo} type="video/mp4" />
                    </video>

                    <div className="overlay position-absolute w-100 h-100 d-flex justify-content-center align-items-center">
                        <div>
                            <h1 className="display-3 fw-bold">Bar y Restaurante Vaca Flaca</h1>
                            <p className="lead">Comida deliciosa, ambiente único. ¡Disfrutá cada bocado!</p>
                            <div className="d-flex flex-column flex-md-row gap-3 justify-content-center mt-4">
                                <NavLink to="./category/all" className="btn btn-warning col-8 col-md-auto mx-auto mx-md-0 btn-lg">Ver Menú</NavLink>
                                <NavLink to="/reserva" className="btn btn-outline-light col-8  col-md-auto mx-auto mx-md-0 btn-lg">Reservar</NavLink>
                            </div>
                        </div>
                    </div>

                    {/* SVG al final */}
                    <div className="svg-bottom w-100 overflow-hidden">
                        <svg
                            viewBox="0 0 1440 310"
                            preserveAspectRatio="none"
                            style={{
                                height: '180px',
                                width: '100%',
                                transition: 'height 0.3s ease-in-out',
                                display: 'block',
                            }}
                        >
                            <path
                                d="M0,158.755s63.9,52.163,179.472,50.736c121.494-1.5,185.839-49.738,305.984-49.733,109.21,0,181.491,51.733,300.537,50.233,123.941-1.562,225.214-50.126,390.43-50.374,123.821-.185,353.982,58.374,458.976,56.373,217.907-4.153,284.6-57.236,284.6-57.236V351.03H0V158.755Z"
                                fill="#000"
                            />
                        </svg>
                    </div>
                </div>

            </section>


            {/* SVG */}




            {/* Seccion Ofertas */}

            <section className="offers-section py-3 text-center bg-dark text-white m-md-5 rounded m-3">
                <div className="container">
                    <h2 className="display-5 fw-bold mb-4 ">¡Ofertas Especiales!</h2>
                    <p className="lead mb-5">Disfrutá promociones irresistibles por tiempo limitado</p>
                    <div className="row g-4 justify-content-center pb-4">
                        {/* Offer Card 1 */}
                        <div className="col-md-4 mb-4">
                            <div className="card h-100 shadow-lg border-0">
                                <img src="./olladecarne.webp" className="card-img-top" alt="Olla de Carne" />
                                <div className="card-body">
                                    <h5 className="card-title">Domingos de Olla de Carne</h5>
                                    <p className="card-text">Solo ₡4.500 todos los domingos. ¡Vení con tu familia!</p>
                                </div>
                            </div>
                        </div>

                        {/* Offer Card 2 */}
                        <div className="col-md-4 mb-4">
                            <div className="card h-100 shadow-lg border-0">
                                <img src="./balde.jpg" className="card-img-top" alt="Promo Cerveza" />
                                <div className="card-body">
                                    <h5 className="card-title">Balde de Cerveza Nacional</h5>
                                    <p className="card-text">Por solo ₡7.500. ¡Salud!</p>
                                </div>
                            </div>
                        </div>

                        {/* Offer Card 3 */}
                        <div className="col-md-4 mb-4">
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

            <section className="motocross-section text-light" style={{ marginTop: "4rem" }}>
                <div className="container-fluid px-0">
                    <div className="row g-0 min-vh-50">

                        {/* Video Column */}
                        <div className="col-md-7 ">
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
                        <div className="col-md-5 col-12 bg-dark mt-3 mt-sm-0 mx-auto d-flex flex-column justify-content-center align-items-center text-center p-5">
                            <div className="px-3">
                                <h2 className="display-5 fw-bold mb-3">Zona Motocross & Biker</h2>
                                <p className="lead mb-4">
                                    Vení a vivir la adrenalina en nuestra pista de motocross o relajate con tu crew biker en un ambiente 100% Vaca Flaca.
                                </p>
                                <a href="#contacto" className="btn btn-warning btn-lg">Mira disponibilidad</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Seccion de redes */}


            <section className='margintop'>
                <div
                    className="text-white text-center mt-3 p-md-3 position-relative rounded d-block mx-3 mx-md-5 "
                    style={{
                        background: 'linear-gradient(135deg,rgb(0, 0, 0),rgba(46, 46, 46, 0.73))',
                    }}
                >
                    <div>
                        <img
                            src={IconPhone}
                            alt="Biker Mascot"
                            className="d-block d-md-none mx-auto mb-4 pt-2"
                            style={{ maxWidth: "180px" }} />

                        {/* Imagen flotante a la izquierda */}
                        <img
                            src={IconPhone}
                            alt="Biker Mascot"
                            className="social-image-floating d-none d-md-block"
                        />
                        <div className="container px-3 px-md-5">
                            <h2 className="display-5 fw-bold mb-3">Seguínos en Redes Sociales</h2>
                            <p className="lead mx-auto" style={{ maxWidth: "700px" }}>
                                Viví la experiencia Vaca Flaca también online. Enterate de eventos, promos y toda la vibra biker desde nuestras redes.
                            </p>
                            <div className="d-flex justify-content-center gap-3 flex-wrap py-2">
                                {/* Iconos sociales */}
                                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="icon-social">
                                    <FaFacebook size={50} />
                                </a>
                                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="icon-social">
                                    <FaInstagram size={50} />
                                </a>
                                <a href="https://wa.me/506XXXXXXXX" target="_blank" rel="noreferrer" className="icon-social">
                                    <FaWhatsapp size={50} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Alojamiento */}

            <section className="d-flex flex-wrap margintop">
                {/* Columna de texto */}
                <div className="col-12 col-md-5 d-flex align-items-center p-5 bg-dark text-light biker-section ">
                    <div>
                        <h2 className="display-5 fw-bold mb-3">Descubrí nuestro hospedaje rústico</h2>
                        <p className="lead mb-0 mb-md-4">
                            En Vaca Flaca ofrecemos <strong>servicio de hospedaje</strong> para todo el público. Disfrutá de un ambiente rústico, buena comida y un lugar ideal para desconectarte.
                        </p>
                    </div>
                </div>

                {/* Columna de imagen */}
                <div className="col-12 col-md-7 ">
                    <img
                        src={Cabin}
                        alt="Zona Motocross"
                        className="mx-auto d-block"
                        style={{
                            width: '100%',
                            height: '500px',
                            objectFit: 'cover',
                        }}
                    />
                </div>
            </section>




            {/* Seccion Horario y ubicacion */}

            <section>

                <div className="bg-body-secondary text-dark m-3 m-md-5 rounded">
                    <div className="container-fluid p-4">
                        <h2 className="text-center fw-bold mb-4">📍 ¿Dónde Estamos?</h2>
                        <h4 className=" text-center mb-5">Visitános en la fresca Zona de Los Santos. Viví la experiencia Vaca Flaca.</h4>
                        <div className="row">

                            {/* Horario */}
                            <div className="order-2 d-flex flex-column mt-4 mt-md-0 mx-auto px-md-5 col-12 col-md-6 shadow-lg pt-5 px-5 bg-light rounded-4">
                                <h4 className="fw-bold mb-2 text-center badge bg-black fs-2 text-white">🕒 Horario</h4>
                                <ul className="list-group bg-light my-4 shadow">
                                    <li className="list-group-item bg-body-secondary text-dark border-0">
                                        Martes a Jueves: 9:00am - 9:00pm
                                    </li>
                                    <li className="list-group-item bg-body-secondary text-dark border-0">
                                        Viernes y Sábado: 9:00am - 10:00pm
                                    </li>
                                    <li className="list-group-item bg-body-secondary text-dark border-0">
                                        Domingo: 9:00am - 8:00pm
                                    </li>
                                    <li className="list-group-item bg-body-secondary text-dark border-0">
                                        Lunes: Cerrado
                                    </li>
                                </ul>

                                <h5 className="fw-bold">📫 Dirección</h5>
                                <p>El Abejonal, San Pablo de León Cortés, San José, Costa Rica</p>

                                <a
                                    href="https://www.google.com/maps?q=9.935+,-84.051"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary my-3 shadow-sm"
                                    style={{ borderRadius: '25px', transition: 'all 0.3s ease' }}
                                >
                                    Cómo llegar
                                </a>
                            </div>



                            {/* Mapa */}
                            <div className="col-12 col-md-6 order-1">
                                <div className="ratio mb-5 ratio-4x3 shadow-lg rounded-4 overflow-hidden w-100 h-100">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.7021516059426!2d-84.05155649999999!3d9.706441999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa1114f13c217c7%3A0xfeb8c45c6c3feca5!2sVaca%20Flaca%20zona%20Biker%20(El%20Trapiche)!5e0!3m2!1sen!2scr!4v1744691873870!5m2!1sen!2scr"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen="true"
                                        loading="lazy"
                                        title="Ubicación Vaca Flaca"

                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );

};

export default Home;
