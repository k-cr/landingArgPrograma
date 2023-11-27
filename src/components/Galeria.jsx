import React from 'react';
import '../assets/css/galeria.css';
import dualipa from '../assets/img/dualipa_future_nostalgia_deluxe_edition.jpg'
import eminem from '../assets/img/eminem_greatest_hits.jpg';
import kiddkeo from '../assets/img/kidd_keo_welcome_to_gotham.jpg';
import monaJimenez from '../assets/img/La_Mona_Jimenez-Trilogia_1er_Acto-Frontal.jpg';


const Galeria = () => {
    const galeriaInfo = [
        {
            image: dualipa,
            title: "Future Nostalgia",
            text: "Edición deluxe"
        },
        {
            image: eminem,
            title: "Greatest hits",
            text: "Greatest hits"
        },
        {
            image: kiddkeo,
            title: "Welcome to Gotham",
            text: "Welcome to Gotham"
        },
        {
            image: monaJimenez,
            title: "Trilogia",
            text: "1er Acto Frotal"
        }
    ];

    return (
        <div className="galeria-section-wrapper">
            <div className="galeria-section-top">
                <p className="subtitulo">Galería de álbumes</p>
                {/* <h1 className="encabezado">How It Works</h1> */}
                {/* <p className="texto">
                    Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
                    elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
                </p> */}
            </div>
            <div className="galeria-section-boton">
                {galeriaInfo.map((data) => (
                    <div className="galeria-section-info" key={data.title}>
                        <div className="info-boxes-img-container">
                            <img src={data.image} alt="" />
                        </div>
                        <div className="info-boxes-text">
                            <h2>{data.title}</h2>
                            <p>{data.text}</p>
                        </div>
                        <button className="carrito-boton"></button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Galeria;