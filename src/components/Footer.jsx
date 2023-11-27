import React from "react";
import '../assets/css/footer.css'
import Logo from "../assets/img/Logo.png";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer-wrapper">
            <div className="footer-section-one">
                <div className="footer-logo-container">
                    <img src={Logo} alt="" />
                </div>
                <div className="footer-icons">
                    <BsTwitter />
                    <SiLinkedin />
                    <BsYoutube />
                    <FaFacebookF />
                </div>
            </div>
            <div className="footer-section-two">
                <div className="footer-section-columns">
                    <span>Inicio</span>
                    <span>Ranking</span>
                    <span>Galería</span>
                    <span>Servicios</span>
                </div>
                <div className="footer-section-columns">
                    <span>111-222-2222</span>
                    <span>ejemplo@ejemplo.com</span>
                    <span>contacto@contacto.com</span>
                    <span>administrativo@beatbazaar.com</span>
                </div>
                <div className="footer-section-columns">
                    <span>Términos y condiciones</span>
                    <span>Políticas de privacidad</span>
                </div>
            </div>
        </div>
    );
};

export default Footer;