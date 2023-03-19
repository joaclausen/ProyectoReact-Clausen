import styles from './app.module.css'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import {Navigate, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import error404img from './components/img/404.jpg';

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
        <Route path="*" element={<img className={styles.notFound}  src={error404img} alt="404 not found"/>}/>
      </Routes>
    </ThemeProvider>
  )

}

export default App
