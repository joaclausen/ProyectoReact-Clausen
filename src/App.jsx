import styles from './app.module.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import ItemListContainer from './components/ItemListContainer'
import {Navigate, Route, Routes, useParams } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import ItemDetailContainer from './components/ItemDetailContainer';
import {collection, getDocs} from "firebase/firestore";
import db from "../db/firebase-config";
import { useEffect, useState } from "react";

function App() {

  const [productos, setProductos] = useState([]);
  const productosRef = collection (db, "Productos");
  let {id} = useParams();

  

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
        <Route path="/home" element={<Home text="WELCOME TO OVG"/>}/>
        <Route path="/productos" element={<ItemListContainer productos={productos}/>}/>
        <Route path="/productos/:id" element={<ItemDetailContainer/>}/>
        <Route path="*" element={<img className={styles.notFound}  src="https://ucarecdn.com/8d79cbc5-bbb0-4664-9379-1e891283c778/404.jpg" alt="404 not found"/>}/>
      {/* NO FUNCIONA: */}
        {/* <Route path="/categories/:id" element={<ItemListContainer />}/>  */}
      </Routes>
    </ThemeProvider>
  )

}

export default App
