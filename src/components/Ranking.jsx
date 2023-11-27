import React from "react";
import RankingBackground from "../assets/img/gallery-background.png";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { FiArrowRight } from 'react-icons/fi'
import '../assets/css/ranking.css'


const Ranking = () => {

    const albumes = [
        {
            album: '★★★★★ (5-STAR)',
            imagen: '../assets/img/eminem_greatest_hits.jpg',
            artista: 'Stray Kids',
            salida: '2023'
        }
    ]

    return (
    <div className="ranking-section-container">
        <div className="ranking-background-container">
            <img src={RankingBackground} alt="" />
        </div>
        <div className="ranking-section-card">
            <Grid container spacing={3}>
                {albumes.map((album) => (
                    <CardActionArea component="a" href="#" key={album}>
                        <CardMedia
                            component="img"
                            sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
                            image={album.imagen}
                        />
                        <Card sx={{ display: 'flex' }}>
                        <CardContent sx={{ flex: 1 }}>
                            <Typography component="h2" variant="h5">
                            {album.album}
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary">
                            {album.salida}
                            </Typography>
                            <Typography variant="subtitle1" paragraph>
                            {album.artista}
                            </Typography>
                        </CardContent>
                        </Card>
                    </CardActionArea>
                ))}
            </Grid>
        </div>
        <div className="ranking-section-texto">
            <h1 className="encabezado-primario">
                Todos tus discos en una sola tienda
            </h1>
            <p className="texto-primario">
                Busca tu disco favorito para poder comprarlo y te llegará rápidamente a tu domicilio, ¡sin cargo! ¡Empieza tu búsqueda ahora mismo! 
            </p>
            <div className="texto-primario">
                {albumes.slice(1).map((album, index) => (
                    <div key={index} className="album">
                        <span>{album.album}</span>
                    </div>
                ))}
            </div>
            <div className="ranking-botones-container">
                <button className="boton-secundario"> Explorar ahora <FiArrowRight/></button>
            </div>
        </div>
    </div>
    );
};

export default Ranking;