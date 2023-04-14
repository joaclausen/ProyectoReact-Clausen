import { Link, useParams } from "react-router-dom";
import styles from "./itemdetailcontainer.module.css"
import { Button } from '@mui/material';
import { useEffect, useState } from "react";
import { addDoc, collection, doc, getDoc, getDocs, increment, updateDoc } from "firebase/firestore";
import db from "../../../db/firebase-config";
import ItemDetail from "../ItemDetail";

function ItemDetailContainer() {
  const {id} = useParams();
  const [item, setItem] = useState({});
  const cartRef = collection(db, "Cart");
  const [loading, setLoading] = useState(true)

  const getItem = async () =>{
    const docRef = doc(db, "Productos", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists){
      setItem(docSnap.data());
      setLoading(false);
    }else {
      console.log("No existe el producto");
    }
  };

  useEffect(() => {
    getItem();
  }, []);

  const cartAdd = async(e) =>{
    const cartCollection = await getDocs(cartRef);
    const carrito = cartCollection.docs.map((doc) =>  ({...doc.data(), id: doc.id}));
    if (carrito.filter(e => e.titleId === id).length > 0){
      const i = carrito.findIndex(e => e.titleId === id);
      const idCarrito=carrito[i].id;
      const cartUpdate = doc(db, "Cart", idCarrito);
      await updateDoc(cartUpdate, {
        cantidad: increment(1)
      });
    } else {
        const producto={
        titleId: id,
        title: item.name,
        cantidad: 1,
        precio: item.price
        }
        await addDoc(cartRef, producto); 
      }
      
  }

  if(loading) return <h1>Loading...</h1>

  return (
    <div>
      <ItemDetail producto={item}/>
      <Button onClick={cartAdd} className={styles.comprar} variant="contained"> <Link className={styles.enlace} to="/cart">Add to cart</Link></Button>
    </div>
  )
}

export default ItemDetailContainer;