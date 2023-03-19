import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea} from '@mui/material';
import styles from './opcion.module.css';

const Opcion = ({product}) => {
  return (
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
  )
}

export default Opcion