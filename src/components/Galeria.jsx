

/* const images = [
    { src: "/gallery/galeria3.jpg", alt: "Galería 3" },
    { src: "/gallery/galeria4.jpg", alt: "Galería 4" },
    { src: "/gallery/galeria5.jpg", alt: "Galería 5" },
    { src: "/gallery/galeria6.jpg", alt: "Galería 6" },
    { src: "/gallery/galeria7.jpg", alt: "Galería 7" },
    { src: "/gallery/galeria8.jpg", alt: "Galería 8" },
    { src: "/gallery/galeria9.jpg", alt: "Galería 9" },
    { src: "/gallery/galeria10.jpg", alt: "Galería 10" },
    { src: "/gallery/galeria11.jpg", alt: "Galería 11" },
    { src: "/gallery/galeria12.jpg", alt: "Galería 12" },
    { src: "/gallery/galeria13.jpg", alt: "Galería 13" },
    { src: "/gallery/galeria16.jpg", alt: "Galería 16" },
    { src: "/gallery/galeria17.jpg", alt: "Galería 17" },
    { src: "/gallery/galeria19.jpg", alt: "Galería 19" },
    { src: "/gallery/galeria18.jpg", alt: "Galería 18" },
    { src: "/gallery/galeria15.jpg", alt: "Galería 15" },
]; */


import { useEffect } from "react";
import "baguettebox.js/dist/baguetteBox.min.css";
import baguetteBox from "baguettebox.js";


const photos = [
    "/gallery/galeria9.jpg",
    "/gallery/galeria3.jpg",
    "/gallery/galeria4.jpg",
    "/gallery/galeria5.jpg",
    "/gallery/galeria6.jpg",
    "/gallery/galeria7.jpg",
    "/gallery/galeria8.jpg",
    "/gallery/galeria10.jpg",
    "/gallery/galeria11.jpg",
    "/gallery/galeria13.jpg",
    "/gallery/galeria16.jpg",
    "/gallery/galeria17.jpg",
    "/gallery/galeria12.jpg",
    "/gallery/galeria19.jpg",
    "/gallery/galeria18.jpg",
];


export default function Gallery() {
    useEffect(() => {
        baguetteBox.run(".tz-gallery");
    }, []);

    return (
        <div className="container py-5 gallery-container">
            <h2 className="text-center mb-4">Galería</h2>
            <div className="row tz-gallery">
                {photos.map((src, index) => (
                    <div className="col-sm-6 col-md-4 mb-3" key={index}>
                        <a href={src} className="lightbox d-block">
                            <img src={src} alt={`galería ${index + 1}`} className="img-fluid rounded shadow " style={{ width: "100%", height: "530px", objectFit: "cover" }}/>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}
