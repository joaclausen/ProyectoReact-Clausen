import styles from "./itemdetail.module.css"

const ItemDetail = ({producto}) => {
  return (
    <div>
        <h1 className={styles.titulo}>{producto.name}</h1>
        <img className={styles.imagen} src={producto.background_image} alt={producto.name}/>
        <p className={styles.descripcion}>{producto.description}</p>
        <p className={styles.precio}>{producto.price}</p>
    </div>
  )
}

export default ItemDetail