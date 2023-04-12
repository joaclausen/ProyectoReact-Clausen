import styles from "./detalleproducto.module.css"
import { Button } from '@mui/material';

function DetalleProducto() {
  return (
    <div>
      {/* poner detalle producto */}
      <Button className={styles.comprar} variant="contained">Add to chart</Button>
    </div>
  )
}

export default DetalleProducto