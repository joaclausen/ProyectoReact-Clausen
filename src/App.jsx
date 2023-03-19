import styles from './app.module.css'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import { useEffect, useState } from 'react'
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

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '43042d8fc4msha20aff58a70e139p1d9673jsn2947d1830db7',
      'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com'
    }
  };

  const [productos, setProductos] = useState([]);
  const [count, setCount] = useState(1);

  const getJuegos = async () => {
    try {
      const result = await fetch(`https://rawg-video-games-database.p.rapidapi.com/games?key=b60fdf46e0c349e4b45580f1254d9014&page=${count}`, options);
      const data = await result.json();
      setProductos(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getJuegos();
    console.log(productos)

  }, [count])

  return (
    <ThemeProvider theme={darkTheme} className={styles.container}>
      <CssBaseline />
      <Navbar/>
      <Routes>
        <Route path="/" element={<Navigate to="/home"/>}/>
        <Route path="/home" element={<Home text="BIENVENIDOS A GVG"/>}/>
        <Route path="/productos" element={<ItemListContainer productos={productos} count={count} setCount={setCount}/>}/>
        <Route path="*" element={<img className={styles.notFound}  src={error404img} alt="404 not found"/>}/>
      </Routes>
    </ThemeProvider>
  )

}

export default App
