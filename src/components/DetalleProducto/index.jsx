import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./detalleproducto.module.css"
import { Button } from '@mui/material';

function DetalleProducto() {

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    const {id} = useParams();
    const [productos, setProductos] = useState({});

    const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '43042d8fc4msha20aff58a70e139p1d9673jsn2947d1830db7',
          'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com'
        }
    };

    useEffect(() => {
      fetch(`https://rawg-video-games-database.p.rapidapi.com/games/${id}?key=b60fdf46e0c349e4b45580f1254d9014`, options)
      .then((res)=>res.json())
      .then((data)=>setProductos(data))
    }, [])
    console.log(productos);
  return (
    <div>
      <h1 className={styles.titulo}>{productos.name}</h1>
      <img className={styles.imagen} src={productos.background_image} alt={productos.name} />
      <p className={styles.descripcion}>{productos.description_raw}</p>
      <p className={styles.precio}>Price: US$40</p>
      <Button className={styles.comprar} variant="contained">Add to chart</Button>
    </div>
  )
}

export default DetalleProducto