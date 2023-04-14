import styles from './app.module.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import ItemListContainer from './components/ItemListContainer'
import {Navigate, Route, Routes, useParams } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import ItemDetailContainer from './components/ItemDetailContainer';
import {collection, deleteDoc, doc, getDocs, updateDoc} from "firebase/firestore";
import db from "../db/firebase-config";
import { useEffect, useState } from "react";
import CartWidget from './components/CartWidget';
import Checkout from './components/Checkout';

function App() {

  const [productos, setProductos] = useState([]);
  const productosRef = collection (db, "Productos");
  const carritoRef = collection (db, "Cart");
  const [cantidad, setCantidad] = useState(0);
  const [carrito, setCarrito] = useState([]);

  

  const getProductos = async () => {
    const productosCollection = await getDocs(productosRef);
    const productos = productosCollection.docs.map((doc) =>  ({...doc.data(), id: doc.id}));
    setProductos(productos);
  }

  const getCantidad = async () => {
     const cartCollection = await getDocs(carritoRef);
     const carrito = cartCollection.docs.map((doc) =>  ({...doc.data(), id: doc.id}));
     setCarrito(carrito);
     setCantidad(carrito.length);
  }

  const deleteItem = async (id) => {
    const docRef = doc(db, "Cart", id); 
    deleteDoc(docRef);
    getCantidad();
  }

  useEffect(() => {
    getProductos();
    getCantidad();
  }, []);

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
  
  return (
    <ThemeProvider theme={darkTheme} className={styles.container}>
      <CssBaseline />
      <Navbar cantidad={cantidad}/>
      <Routes>
        <Route path="/" element={<Navigate to="/home"/>}/>
        <Route path="/home" element={<Home text="WELCOME TO OVG"/>}/>
        <Route path="/productos" element={<ItemListContainer productos={productos}/>}/>
        <Route path="/productos/:id" element={<ItemDetailContainer />}/>
        <Route path="/cart" element={<CartWidget carrito={carrito} getCantidad={getCantidad} deleteItem={deleteItem}/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="*" element={<img className={styles.notFound}  src="https://ucarecdn.com/8d79cbc5-bbb0-4664-9379-1e891283c778/404.jpg" alt="404 not found"/>}/>
      {/* NO FUNCIONA: */}
        {/* <Route path="/categories/:id" element={<ItemListContainer />}/>  */}
      </Routes>
    </ThemeProvider>
  )

}

export default App
