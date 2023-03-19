import style from "./navbar.module.css"
import CartWidget from "../CartWidget";
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    let activeStyle = {textDecoration: "none", color: "red"};
    let logoStyle = {textDecoration: "none"}
    return (
        <nav className={style.container}>
            <NavLink to="/home" style={logoStyle} className={style.nombre}>GVG</NavLink> 
            <NavLink to="/home" style={({isActive})=>(isActive ? activeStyle : undefined)}>Home</NavLink>
            <NavLink to="/productos" style={({isActive})=>(isActive ? activeStyle : undefined)}>Products</NavLink>
            <CartWidget/>
        </nav>
    )
}

export default Navbar