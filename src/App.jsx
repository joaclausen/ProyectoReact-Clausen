import styles from './app.module.css'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import { useEffect, useState } from 'react'

function App() {

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

  }, [count])

  const siguiente = () =>{
    setCount(count + 1);
  }
  const anterior = () =>{
    count>1? setCount(count - 1):setCount(1);
    
  }
  


  return (
    <nav className={styles.container}>
      <Navbar/>
      <ItemListContainer text="BIENVENIDOS A OVG" productos={productos}/>
      <h2>count: {count}</h2>
      <button onClick={siguiente}>+</button>
      <button onClick={anterior}>-</button>
      
    </nav>
  )

}

export default App
