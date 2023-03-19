import Item from "../Item";
import style from "./itemlistcontainer.module.css"

const ItemListContainer = ({productos, count, setCount}) => {
  const siguiente = () =>{
    setCount(count + 1);
  }
  const anterior = () =>{
    count>1? setCount(count - 1):setCount(1);
    
  }

  return (
    <>
       {productos.map((product)=>(
          <Item key={product.id} product={product}/>
        ))}
      <h2>Pagina: {count}</h2>
      <button onClick={siguiente}>+</button>
      <button onClick={anterior}>-</button>
    </>
  )
}

export default ItemListContainer