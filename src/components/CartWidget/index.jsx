import { Button } from "@mui/material"
import styles from "./cartwidget.module.css"
import DeleteIcon from '@mui/icons-material/Delete';

const CartWidget = ({carrito}) => {
  return (
    <div>
      {(carrito || []).map((cart)=>(
        <div>
          <p key={carrito.titleId}>{cart.title} x{cart.cantidad} <DeleteIcon/></p>
        </div>
      ))}
      <Button className={styles.checkout} variant="contained">Checkout</Button>
    </div>
  )
}

export default CartWidget