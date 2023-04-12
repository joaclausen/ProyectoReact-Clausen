import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea} from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Grid } from '@mui/material';
import styles from "./itemlist.module.css";

const ItemList = ({product, rtaBusqueda, rtaFiltro}) => {
    let itemStyle={textDecoration: "none"};

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    return (
        <Grid container>
        {(product || []).filter((value)=>{
            if(rtaBusqueda==="" && rtaFiltro===""){return value}
            else if (rtaFiltro==="" &&  (value.name.toLowerCase().includes(rtaBusqueda.toLocaleLowerCase()))){
              return value;
            } 
            else if (rtaBusqueda==="" && ( 
              (value.Genres[0]?.toLowerCase()===rtaFiltro.toLocaleLowerCase()) ||
              (value.Genres[1]?.toLowerCase()===rtaFiltro.toLocaleLowerCase()) ||
              (value.Genres[2]?.toLowerCase()===rtaFiltro.toLocaleLowerCase()) ||
              (value.Genres[3]?.toLowerCase()===rtaFiltro.toLocaleLowerCase())
              )){
              return value;    
            }
            else if ((value.name.toLowerCase().includes(rtaBusqueda.toLocaleLowerCase())) && (
              (value.Genres[0]?.toLowerCase()===rtaFiltro.toLocaleLowerCase()) ||
              (value.Genres[1]?.toLowerCase()===rtaFiltro.toLocaleLowerCase()) ||
              (value.Genres[2]?.toLowerCase()===rtaFiltro.toLocaleLowerCase()) ||
              (value.Genres[3]?.toLowerCase()===rtaFiltro.toLocaleLowerCase())
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
    )
}

export default ItemList