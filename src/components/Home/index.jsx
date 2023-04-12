import { Link } from "react-router-dom";
import styles from "./home.module.css";
import { Box, Button } from "@mui/material";

const Home = ({text}) => {
  return (
    <div>
        <h1 className={styles.titulo}>{text}</h1>  
        <p className={styles.buscar}>Search for your favorite video game</p>
        <Box textAlign='center'>
          <Button className={styles.boton} variant="contained" centered>
            <Link className={styles.empezar} to="/productos">Start now!</Link>
          </Button>
        </Box>
    </div>

  )
}

export default Home