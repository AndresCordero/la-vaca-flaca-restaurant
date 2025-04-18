
import { useEffect } from "react";
import "baguettebox.js/dist/baguetteBox.min.css";
import baguetteBox from "baguettebox.js";


const photos = [
    "/gallery/gallery6.webp",
    "/gallery/gallery8.webp",
    "/gallery/gallery1.webp",
    "/gallery/gallery2.webp",
    "/gallery/gallery3.webp",
    "/gallery/gallery4.webp",
    "/gallery/gallery5.webp",
    "/gallery/gallery7.webp",
    "/gallery/gallery9.webp",
    "/gallery/gallery10.webp",
    "/gallery/gallery11.webp",
    "/gallery/gallery12.webp",
    "/gallery/gallery13.webp",
    "/gallery/gallery14.webp",
    "/gallery/gallery15.webp",
    "/gallery/gallery17.webp",
    "/gallery/gallery18.webp",
    "/gallery/gallery19.webp",
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
