import { Button} from "@mui/material"
import styles from "./cartwidget.module.css"
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from "react-router-dom";

const CartWidget = ({carrito, getCantidad, deleteItem}) => {

  getCantidad();

  return (
    <div>
      {(carrito || []).map((cart)=>(
        <div className={styles.padre} key={cart.id}>
          <p className={styles.item}>{cart.title} x{cart.cantidad} </p>
          <Button onClick={() => deleteItem(cart.id)} className={styles.boton} variant="outlined" startIcon={<DeleteIcon/>}> Delete </Button>
        </div>
      ))}
      <Button className={styles.checkout} variant="contained"><Link className={styles.checkoutinterno} to="/checkout">Checkout</Link></Button>
    </div>
  )
}

export default CartWidget