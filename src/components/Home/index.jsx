import { Link } from "react-router-dom";
import styles from "./home.module.css";
import { Button } from "@mui/material";
import { Box } from "@mui/system";

const Home = ({text}) => {
  return (
    <div>
        <h1 className={styles.titulo}>{text}</h1>  
        <p className={styles.buscar}>Search for your favorite video game</p>
        <Button className={styles.boton} variant="contained" centered>
          <Link className={styles.empezar} to="/productos">Start now!</Link>
        </Button>
       

    </div>

  )
}

export default Home