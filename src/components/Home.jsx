import React, { useState, useEffect } from 'react'
import '../components/styles/Home.css'
import '../components/styles/Animaciones.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import HomeVideo from '/video4.mp4'
import { NavLink, useNavigate } from 'react-router-dom';


const Home = () => {
    const [fadeOut, setFadeOut] = useState(false);
    const navigate = useNavigate();

    const handleNavigate = (e) => {
        e.preventDefault();
        setFadeOut(true); // Activa la animación fade out

        // Después de que la animación termine, navega a la página
        setTimeout(() => {
            navigate('/productos');
        }, 500); // Tiempo de duración de la animación fade out (500ms)
    };

    return (
        <div className='bg-black'>
            <section className="hero-section position-relative text-white text-center d-flex align-items-center justify-content-center">
                <video className="video-bg max-h-50 overflow-auto mb-5" autoPlay loop muted playsInline>
                    <source src={HomeVideo} type="video/mp4" />
                </video>
                <div className="overlay position-absolute w-100 h-100 d-flex justify-content-center align-items-center">
                    <div className={`content position-absolute ${fadeOut ? 'fade-out-down' : 'fade-in-up'}`}>
                        <h1 className="display-3 fw-bold">Bar y Restaurante Vaca Flaca</h1>
                        <p className="lead">Comida deliciosa, ambiente único. ¡Disfrutá cada bocado!</p>

                        <div className="d-flex flex-column flex-md-row gap-3 justify-content-center mt-4">
                            <NavLink to="/productos" onClick={handleNavigate} className="btn btn-warning btn-lg">Ver Menú</NavLink>
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







    /*  <div
         className='d-flex justify-content-center align-items-center text-white'
         style={{
             backgroundImage: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/back.png')",
             backgroundSize: 'cover',
             height: '150vh',
             backgroundRepeat: 'no-repeat',
             backgroundPosition: 'top center',
             backgroundColor: '#000'
         }}
     >
         <h1 style={{ backgroundColor: 'rgba(0, 0, 0, 0.9)', padding: '10px 20px', borderRadius: '10px' }}>
             Bienvenidos a la Vaca Flaca
         </h1>
     </div> */



export default Home
