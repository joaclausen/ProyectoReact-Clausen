import style from "./itemlistcontainer.module.css"

const ItemListContainer = ({text}) => {
  return (
    <>
        <h1 className={style.titulo}>{text}</h1>
    </>
  )
}

export default ItemListContainer