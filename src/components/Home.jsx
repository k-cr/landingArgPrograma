import React from "react";
import Navbar from "./Navbar";
import BannerBackground from '../assets/img/home-banner-background.png';
import BannerImagen from '../assets/img/disco_home.png'
import { FiArrowRight } from 'react-icons/fi'
import '../assets/css/navbar.css';
import '../assets/css/home.css';

const Home = () => {
    return <div className="home-container">
        <Navbar/>
        <div className="home-banner-container">
            <div className="home-banner-imagen-container">
                <img src={BannerBackground} alt="" />
            </div>
            <div className="home-texto-section">
                <h1 className="encabezado-primario">
                    ¡Tu música favorita en un sólo lugar!
                </h1>
                <p className="texto-primario">
                    Explora para comprar los discos que te gustan y descubrir nuevos gustos musicales.
                </p>
                <button className="boton-secundario">
                    Explorar ahora <FiArrowRight/>
                </button>
            </div>
            <div className="home-imagen-container">
                <img src={ BannerImagen} alt="" />
            </div>
        </div>
    </div>;
}

export default Home;