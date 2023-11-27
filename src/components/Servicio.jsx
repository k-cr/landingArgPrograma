import React from 'react';
import '../assets/css/servicio.css';

const Servicio = () => {
    const servicioInfo = [
        {
            image: "image",
            title: "titulo",
            text: "texto"
        },
        {
            image: "image2",
            title: "titulo2",
            text: "texto2"
        },
        {
            image: "image3",
            title: "titulo3",
            text: "texto3"
        }
    ];

    return (
        <div className="servicio-section-wrapper">
            <div className="servicio-section-top">
                <p className="subtitulo">Servicio</p>
                {/* <h1 className="encabezado">How It Works</h1> */}
                <p className="texto">
                    Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
                    elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
                </p>
            </div>
            <div className="servicio-section-boton">
                {servicioInfo.map((data) => (
                    <div className="servicio-section-info" key={data.title}>
                        <div className="info-boxes-img-container">
                            <img src={data.image} alt="" />
                        </div>
                        <h2>{data.title}</h2>
                        <p>{data.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Servicio