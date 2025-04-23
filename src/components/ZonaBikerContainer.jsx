import React from 'react';
import bikerImg from '/biker.jpeg'; 
import '../components/styles/ZonaBikerContainer.css';
import eventoImg from '/evento.jpeg';

const ZonaBikerContainer = () => {
    return (
        <section className="zona-baiker text-white py-5">
            <div className="container text-center">
                <h2 className="display-4 fw-bold mb-4 zona-title">
                    ZONA BIKER
                </h2>
                <p className="lead mx-auto mb-5" style={{ maxWidth: '800px' }}>
                    Más que un restaurante, somos punto de encuentro biker. Rutas, música y comunidad.
                </p>

                {/* Galería rápida o imagen principal */}
                <div className="row mb-5">
                    <div className="col-md-6 mb-4">
                        <img src={bikerImg} alt="Biker" className="img-fluid rounded-4 shadow" />
                    </div>
                    <div className="col-md-6 mb-4 d-flex align-items-center justify-content-center">
                        <img src={eventoImg} alt="Evento" className="img-fluid rounded-4 shadow" />
                    </div>
                </div>

                {/* Filosofía biker */}
                <div className="bg-danger bg-opacity-25 py-4 px-4 rounded-3 mb-4 shadow-lg border border-danger">
                    <h3 className="fw-bold">Ride. Eat. Repeat.</h3>
                    <p className="mb-0 fst-italic">"La carretera es vida, y Vaca Flaca es tu parada sagrada."</p>
                </div>

                {/* Botones de acción o links */}
                <div className="d-flex justify-content-center gap-3 flex-wrap mt-4">
                    <a href="#eventos" className="btn btn-outline-light btn-lg border-danger">
                        Próximos Rides
                    </a>
                    <a href="#galeria" className="btn btn-danger btn-lg text-black fw-bold">
                        Galería Biker
                    </a>
                </div>
            </div>
        </section>
    );
}

export default ZonaBikerContainer