import { useParams } from "react-router-dom";
import styles from "./itemdetailcontainer.module.css"
import { Button } from '@mui/material';
import { useEffect, useState } from "react";
import { addDoc, collection, doc, getDoc } from "firebase/firestore";
import db from "../../../db/firebase-config";
import ItemDetail from "../ItemDetail";

function ItemDetailContainer() {
  const {id} = useParams();
  const [item, setItem] = useState({});
  const cartRef = collection(db, "Cart");

  const getItem = async () =>{
    const docRef = doc(db, "Productos", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists){
      setItem(docSnap.data());
    }else {
      console.log("No existe el producto");
    }
  };

  useEffect(() => {
    getItem();
  }, [])
  const cartAdd = async(e) =>{
    e.preventDefault();
    const producto={
      titleId: id,
      title: item.name,
    }
    await addDoc(cartRef, producto);
  }

  return (
    <div>
      <ItemDetail producto={item}/>
      <Button onClick={cartAdd} className={styles.comprar} variant="contained">Add to cart</Button>
    </div>
  )
}

export default ItemDetailContainer;