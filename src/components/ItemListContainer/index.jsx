import { Pagination } from "@mui/material";
import Producto from "../Producto";
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { useEffect, useState } from 'react'
import style from "./itemlistcontainer.module.css"





const ItemListContainer = () => {

  
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {setPage(value)}

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '43042d8fc4msha20aff58a70e139p1d9673jsn2947d1830db7',
      'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com'
    }
  };

  const [productos, setProductos] = useState([]);

  const getJuegos = async () => {
    try {
      const result = await fetch(`https://rawg-video-games-database.p.rapidapi.com/games?key=b60fdf46e0c349e4b45580f1254d9014&page=${page}`, options);
      const data = await result.json();
      setProductos(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getJuegos();
    console.log(productos)

  }, [page])

  return (
    <>
       {productos.map((product)=>(
          <Producto key={product.id} product={product}/>
        ))}

      <Stack spacing={2}>
        <Typography>Page: {page}</Typography>
        <Pagination count={44346} page={page} onChange={handleChange} />
      </Stack>

    </>
  )
}

export default ItemListContainer

