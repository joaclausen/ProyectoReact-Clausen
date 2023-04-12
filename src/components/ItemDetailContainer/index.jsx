import { useParams } from "react-router-dom";
import styles from "./itemdetailcontainer.module.css"
import { Button } from '@mui/material';
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import db from "../../../db/firebase-config";
import ItemDetail from "../ItemDetail";

function ItemDetailContainer() {
  const {id} = useParams();
  const [item, setItem] = useState({});

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
  

  return (
    <div>
      <ItemDetail producto={item}/>
      <Button className={styles.comprar} variant="contained">Add to chart</Button>
    </div>
  )
}

export default ItemDetailContainer;