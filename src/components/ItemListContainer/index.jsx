import styles from "./itemlistcontainer.module.css";
import { useState } from 'react';
import ItemList from '../ItemList';

const ItemListContainer = ({productos}) => {
  const [searchTitle, setSearchTitle] = useState("");
  const [filterParam, setFilterParam] = useState(""); 
  

  return (
  <div>
    <form className={styles.filtros}>
      <input className={styles.buscador} type="search" placeholder="Search" onChange={(e) => setSearchTitle(e.target.value)}/>
      <select onChange={(e)=>{setFilterParam(e.target.value)}}>
        <option value="">Filter By Genre</option>
        <option value="Action">Action</option>
        <option value="Adventure">Adventure</option>
        <option value="RPG">RPG</option>
        <option value="JRPG">JRPG</option>
        <option value="Shooter">Shooter</option>
        <option value="Platform">Platform</option>
        <option value="Brawler">Brawler</option>
        <option value="Hack and slash">Hack and slash</option>
        <option value="Metroidvania">Metroidvania</option>
        <option value="Survival Horror">Survival Horror</option>
        <option value="Stealth">Stealth</option>
      </select>
    </form>
    <ItemList product={productos} rtaBusqueda={searchTitle} rtaFiltro={filterParam}/>
  </div>
  )
}

export default ItemListContainer

