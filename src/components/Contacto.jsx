import React from "react";

export default function ContactForm() {
    return (
        <div className="container py-5">
            <h2 className="text-center mb-4">Contáctanos</h2>
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Nombre</label>
                            <input type="text" className="form-control" id="name" placeholder="Tu nombre" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Correo electrónico</label>
                            <input type="email" className="form-control" id="email" placeholder="nombre@ejemplo.com" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">Mensaje</label>
                            <textarea className="form-control" id="message" rows="5" placeholder="Escribe tu mensaje aquí..." required></textarea>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-primary px-4">Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
