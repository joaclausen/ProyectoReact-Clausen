import styles from './app.module.css'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'

function App() {

  return (
    <nav className={styles.container}>
      <Navbar/>
      <ItemListContainer text="BIENVENIDOS A OVG"/>
    </nav>
  )

}

export default App
