import { Pagination } from "@mui/material";
import Stack from '@mui/material/Stack';
import { useEffect, useState } from 'react'
import { Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import styles from "./itemlistcontainer.module.css"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea} from '@mui/material';
import { Link } from 'react-router-dom';

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

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

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
    <Grid container>
      {productos.map((product)=>(
        <Grid key={product.id} item xs={3}>
          <Item>
            <Link to={`${product.id}`}>
              <Card className={styles.container}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image={product.background_image}
                    alt={product.name}
                    height="200"
                    width="100"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h7" component="div">{product.name}</Typography>
                    <Typography gutterBottom variant="p" component="div">$500</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </Item>
        </Grid>
      ))}
    </Grid>

    <div className={styles.container}>
    <Stack spacing={2}>
      <Pagination count={44346} page={page} onChange={handleChange} />
    </Stack>
    </div>
    </>
  )
}

export default ItemListContainer

