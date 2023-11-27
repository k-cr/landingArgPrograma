import React from 'react';
import '../assets/css/servicio.css';
import { BsFillShieldLockFill } from "react-icons/bs";
import { BsCursorFill } from "react-icons/bs";
import { BsTruck } from "react-icons/bs";

const Servicio = () => {
    const servicioInfo = [
        {
            image: <BsFillShieldLockFill/>,
            title: "Búsqueda segura",
            text: "Tu búsqueda está segura garantizando al usuario búsquedas privadas"
        },
        {
            image: <BsCursorFill/>,
            title: "Lo tenés en un click",
            text: "A un solo click de distancia de tener tu álbum favorito"
        },
        {
            image: <BsTruck/>,
            title: "Envíos a domicilio",
            text: "Navegá y comprá desde la comunidad de tu casa. Envíos a todo LATAM sin cargo"
        }
    ];

    return (
        <div className="servicio-section-wrapper">
            <div className="servicio-section-top">
                <h1 className="subtitulo">Servicios</h1>
                <p className="texto">
                    Nuestra tienda ofrece los siguientes servicios para asegurar que nuestro cliente quede satisfecho con los productos que desea
                </p>
            </div>
            <div className="servicio-section-boton">
                {servicioInfo.map((data) => (
                    <div className="servicio-section-info" key={data.title}>
                        <div className="info-boxes-img-container">
                            {data.image}
                            {/* <img src={data.image} alt="" /> */}
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