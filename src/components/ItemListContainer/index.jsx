import style from "./itemlistcontainer.module.css"

const ItemListContainer = ({text, productos}) => {
  return (
    <>
        <h1 className={style.titulo}>{text}</h1>
        {productos.map((product)=>(

          <p key={product.id}>{product.name}</p>

        ))}
    </>
  )
}

export default ItemListContainer