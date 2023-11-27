/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "../assets/css/suscripcion.css";

const Suscripcion = () => {

    const [correo, setCorreo] = useState('')

    const guardarCorreo = () => {
        if (validarCorreo(correo)) {
            alert(`Correo "${correo}" guardado.`);
        } else {
            alert('Por favor, ingrese un correo valido.');
        }
    }

    const cambiarCorreo = (event) => {
        setCorreo(event.target.value)
    }

    const validarCorreo = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    return (
        <div className="vista-contacto">
            <h1 className="encabezado">¿Quieres estar al tanto de las últimas novedades musicales?</h1>
            <h1 className="texto">Ingrese su correo para recibir las novedades.</h1>
            <div className="formulario-contacto">
                <input type="email" placeholder="yourmail@gmail.com" value={correo} onChange={cambiarCorreo} />
                <button className="boton" onClick={guardarCorreo}>Enviar</button>
            </div>
        </div>
    );
};

export default Suscripcion;