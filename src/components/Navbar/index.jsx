import style from "./navbar.module.css"
import CartWidget from "../CartWidget";
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className={style.container}>
            <NavLink to="/home" className={style.nombre}>GVG</NavLink> 
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/productos">Products</NavLink>
            <CartWidget/>
        </nav>
    )
}

export default Navbar