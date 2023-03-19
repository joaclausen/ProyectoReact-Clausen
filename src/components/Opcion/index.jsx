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
        <Typography gutterBottom variant="h5" component="div">{product.name}</Typography>
      </CardContent>
    </CardActionArea>
  </Card>
  )
}

export default Opcion