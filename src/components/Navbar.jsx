import React, { useState } from "react";
import '../assets/css/navbar.css'
import { HiOutlineBars3 } from "react-icons/hi2"
import Logo from "../assets/img/Logo.png"
import {
    Box, 
    Drawer, 
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText
} from "@mui/material";
import Home from "@mui/icons-material/Home";
import Info from "@mui/icons-material/Info";
import Telefono from "@mui/icons-material/PhoneRounded";

const Navbar = () => {

    // Declaro si se abre o no el menú
    const [abrirMenu, setAbrirMenu] = useState(false); 
    // Opciones que tiene la navbar
    const menuOpciones = [
        {
            texto: "Inicio",
            icono: <Home/>
        },
        {
            texto: "Ranking",
            icono: <Info/>
        },
        {
            texto: "Galería",
            icono: <Info/>
        },
        {
            texto: "Servicios",
            icono: <Info/>
        },
        {
            texto: "Suscribirse",
            icono: <Telefono/>
        },
    ]

    return <nav>
        <div className="navbar-logo-container">
            <img src={Logo} alt="" />
        </div>
        <div className="navbar-links-container">
            <a href="">Inicio</a>
            <a href="">Ranking</a>
            <a href="">Galería</a>
            <a href="">Servicios</a>
            <a href="">Suscribirse</a>
        </div>
        <div className="navbar-menu-container">
            <HiOutlineBars3 size={35} onClick={() => setAbrirMenu(true)} />
        </div>
        <Drawer open={ abrirMenu } onClose={ () => setAbrirMenu(false) } anchor="right">
            <Box 
                sx={{width: 250}}
                role="presentation"
                onClick={() => setAbrirMenu(false)}
                onKeyDown={() => setAbrirMenu(false)}>
                    <List>
                        { menuOpciones.map((item) => (
                            <ListItem key={item.texto} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>{item.icono}</ListItemIcon>
                                    <ListItemText primary={item.texto}/>
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
            </Box>
        </Drawer>
    </nav>
}

export default Navbar;