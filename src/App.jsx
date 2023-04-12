import styles from './app.module.css'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import {Navigate, Route, Routes, useParams } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import DetalleProducto from './components/DetalleProducto';
import {collection, getDocs} from "firebase/firestore";
import db from "../db/firebase-config";
import { useEffect, useState } from "react";

function App() {

  const [productos, setProductos] = useState([]);
  const productosRef = collection (db, "Productos");

  const getProductos = async () => {
    const productosCollection = await getDocs(productosRef);
    const productos = productosCollection.docs.map((doc) =>  ({...doc.data(), id: doc.id}));
    setProductos(productos);
  }

  useEffect(() => {
    getProductos();
  }, []);

  console.log(productos);

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <ThemeProvider theme={darkTheme} className={styles.container}>
      <CssBaseline />
      <Navbar/>
      <Routes>
        <Route path="/" element={<Navigate to="/home"/>}/>
        <Route path="/home" element={<ItemListContainer text="WELCOME TO OVG" productos={productos}/>}/>
        <Route path="/:id" element={<DetalleProducto/>}/>
        <Route path="*" element={<img className={styles.notFound}  src="https://ucarecdn.com/8d79cbc5-bbb0-4664-9379-1e891283c778/404.jpg" alt="404 not found"/>}/>
      </Routes>
    </ThemeProvider>
  )

}

export default App
