import React from "react";
import {
    FaFacebook,
    FaInstagram,
    FaHome,
    FaEnvelope,
    FaPhone,
    FaWhatsapp
} from 'react-icons/fa';
import IconPhone from '/phone2.png'

export default function ContactForm() {
    return (
        <div className="py-5 bg-black text-white">
            <h2 className="text-center mb-4">Contáctanos</h2>
            <div className="d-flex align-items-center my-md-5 flex-column">
                <p className="lead fw-bold"><FaPhone className="me-2 fs-4" /> +506 60190259 /  +506 62531144</p>
                <p className="text-center mb-4"><FaHome className="me-2" /> El Abejonal, San Pablo de León Cortés, San José, Costa Rica</p>
            </div>

            <div className="row justify-content-center mx-2 mx-md-0">
            {/* Form */}
                <div className="col-md-5 bg-light text-black fs-5 fw-bold p-3 rounded shadow-lg mb-5 mb-md-0">
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

                {/* Map */}
                <div className="col-md-5 d-flex">
                    <div className="ratio ratio-4x3 w-100 shadow-lg rounded-4 overflow-hidden">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.7021516059426!2d-84.05155649999999!3d9.706441999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa1114f13c217c7%3A0xfeb8c45c6c3feca5!2sVaca%20Flaca%20zona%20Biker%20(El%20Trapiche)!5e0!3m2!1sen!2scr!4v1744691873870!5m2!1sen!2scr"
                            width="100%"
                            height="100%"
                            title="Ubicación Vaca Flaca"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>

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
                                <a href="https://www.facebook.com/share/1AdkFHDEHb/" target="_blank" rel="noreferrer" className="icon-social">
                                    <FaFacebook size={50} />
                                </a>
                                <a href="https://www.instagram.com/trapiche_vacaflaca?igsh=bnVhNmRpeGt3Y2l3" target="_blank" rel="noreferrer" className="icon-social">
                                    <FaInstagram size={50} />
                                </a>
                                <a href="https://wa.me/50660190259 " target="_blank" rel="noreferrer" className="icon-social">
                                    <FaWhatsapp size={50} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
