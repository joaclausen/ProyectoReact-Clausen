import { Grid } from '@mui/material';
import styles from "./itemlistcontainer.module.css";
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea} from '@mui/material';

const ItemListContainer = ({text, productos}) => {

  const [searchTitle, setSearchTitle] = useState("");
  const [filterParam, setFilterParam] = useState("");

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  let itemStyle={textDecoration: "none"};

  return (
  <div>

    <h1 className={styles.titulo}>{text}</h1>
    <form className={styles.filtros}>
      <input className={styles.buscador} type="search" placeholder="Search" onChange={(e) => setSearchTitle(e.target.value)}/>
      <select onChange={(e)=>{setFilterParam(e.target.value)}}>
        <option value="">Filter By Genre</option>
        <option value="Action">Action</option>
        <option value="Adventure">Adventure</option>
        <option value="RPG">RPG</option>
        <option value="RPG">JRPG</option>
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
                    <Typography gutterBottom variant="p" component="div"><p></p>US${product.price}</Typography>
                    <Typography gutterBottom variant="p" component="div">{product.platform}</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </Item>
        </Grid>
      ))}
    </Grid>

  </div>
  )
}

export default ItemListContainer

