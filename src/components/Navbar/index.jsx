import style from "./navbar.module.css"
import CartWidget from "../CartWidget";
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className={style.container}>
            <h1 className={style.nombre}>GVG</h1> 
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/productos">Products</NavLink>
            <CartWidget/>
        </nav>
    )
}

export default Navbar