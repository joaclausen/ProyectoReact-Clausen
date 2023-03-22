import { Pagination} from "@mui/material";
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
  const [productos, setProductos] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");
  const [filterParam, setFilterParam] = useState("");
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {setPage(value)};

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '43042d8fc4msha20aff58a70e139p1d9673jsn2947d1830db7',
      'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com'
    }
  };

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
  }, [page])

  let itemStyle={textDecoration: "none"};

  

  return (
    <>
    <form className={styles.filtros}>
      <input className={styles.buscador} type="search" placeholder="Search" onChange={(e) => setSearchTitle(e.target.value)}/>
      <select onChange={(e)=>{setFilterParam(e.target.value)}}>
        <option value="">Filter By Genre</option>
        <option value="Action">Action</option>
        <option value="Adventure">Adventure</option>
        <option value="RPG">RPG</option>
        <option value="Shooter">Shooter</option>
        <option value="Puzzle">Puzzle</option>
        <option value="Indie">Indie</option>
        <option value="Platformer">Platformer</option>
        <option value="Massively Multiplayer">Massively Multiplayer</option>
        <option value="Sports">Sports</option>
        <option value="Racing">Racing</option>
      </select>
    </form>
    <Grid container>
      {productos.filter((value)=>{
        if(searchTitle==="" && filterParam===""){return value}
        else if (filterParam==="" &&  (value.name.toLowerCase().includes(searchTitle.toLocaleLowerCase()))){
          return value;
        } 
        else if (searchTitle==="" && ( 
          (value.genres[0]?.name.toLowerCase()===filterParam.toLocaleLowerCase()) ||
          (value.genres[1]?.name.toLowerCase()===filterParam.toLocaleLowerCase()) ||
          (value.genres[2]?.name.toLowerCase()===filterParam.toLocaleLowerCase()) ||
          (value.genres[3]?.name.toLowerCase()===filterParam.toLocaleLowerCase())
          )){
          return value;    
        }
        else if ((value.name.toLowerCase().includes(searchTitle.toLocaleLowerCase())) && (
          (value.genres[0]?.name.toLowerCase()===filterParam.toLocaleLowerCase()) ||
          (value.genres[1]?.name.toLowerCase()===filterParam.toLocaleLowerCase()) ||
          (value.genres[2]?.name.toLowerCase()===filterParam.toLocaleLowerCase()) ||
          (value.genres[3]?.name.toLowerCase()===filterParam.toLocaleLowerCase())
          )){
          return value;    
        }
      }).map((product)=>(
        <Grid key={product.id} item xs={3}>
          <Item>
            <Link style={itemStyle} to={`${product.id}`}>
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
                    <Typography gutterBottom variant="p" component="div"><p></p>$500</Typography>
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

