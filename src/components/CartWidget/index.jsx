import { Button } from "@mui/material"
import styles from "./cartwidget.module.css"

const CartWidget = ({carrito}) => {
  return (
    <div>
      {(carrito || []).map((cart)=>(
        <div key={carrito.id}>
          <p>{cart.title}</p>
        </div>
      ))}
      <Button className={styles.checkout} variant="contained">Checkout</Button>
    </div>
  )
}

export default CartWidget