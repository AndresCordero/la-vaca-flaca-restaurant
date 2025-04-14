import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../components/styles/Home.css';
import HomeVideo from '/video4.mp4';
import { NavLink } from 'react-router-dom';

const Home = () => {


    return (
        <div className='bg-black'>
            <section className="hero-section position-relative text-white text-center d-flex align-items-center justify-content-center">
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

            <section>
                <h2>Aqui estoy</h2>
            </section>
        </div>
    );
};

export default Home;
