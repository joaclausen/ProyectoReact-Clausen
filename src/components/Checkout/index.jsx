import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import db from "../../../db/firebase-config";
import styles from './checkout.module.css'

const Checkout = () => {

  const carritoRef = collection (db, "Cart");
  const [carrito, setCarrito] = useState([]);

  const getCantidad = async () => {
    const cartCollection = await getDocs(carritoRef);
    const carrito = cartCollection.docs.map((doc) =>  ({...doc.data(), id: doc.id}));
    setCarrito(carrito);
 }

 const getPrecioTotal = () =>{
  let precioTotal = 0;

  carrito.forEach(item => {
    precioTotal += (item.precio*item.cantidad) 
  });

  return precioTotal;
}

  useEffect(() => {
    getCantidad();
    getPrecioTotal();
  }, []);

  let total = getPrecioTotal();

  return (
    <div>
      {(carrito || []).map((cart)=>(
        <div className={styles.items} key={cart.id}>
          <p>{cart.title} x{cart.cantidad} = US${(cart.precio)*(cart.cantidad)} </p>
        </div>
      ))}
      <h2 className={styles.items} >TOTAL: US${total}</h2>

    </div>
  )
}

export default Checkout