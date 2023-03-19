import styles from './app.module.css'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import {Navigate, Route, Routes, useParams } from 'react-router-dom';
import Home from './components/Home';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import DetalleProducto from './components/DetalleProducto';

function App() {
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
        <Route path="/home" element={<Home text="BIENVENIDOS A GVG"/>}/>
        <Route path="/productos" element={<ItemListContainer/>}/>
        <Route path="/productos/:id" element={<DetalleProducto/>}/>
        <Route path="*" element={<img className={styles.notFound}  src="https://ucarecdn.com/8d79cbc5-bbb0-4664-9379-1e891283c778/404.jpg" alt="404 not found"/>}/>
      </Routes>
    </ThemeProvider>
  )

}

export default App
