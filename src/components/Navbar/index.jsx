import style from "./navbar.module.css";
import {NavLink} from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
}));

const Navbar = ({cantidad}) => {
    let activeStyle = {textDecoration: "none", color: "red"};
    let logoStyle = {textDecoration: "none"}
    return (
        <nav className={style.container}>
            <NavLink to="/home" style={logoStyle} className={style.nombre}>OVG</NavLink> 
            <NavLink to="/home" style={({isActive})=>(isActive ? activeStyle : undefined)}>Home</NavLink>
            <NavLink to="/productos" style={({isActive})=>(isActive ? activeStyle : undefined)}>Products</NavLink>
            <NavLink to="/cart" style={({isActive})=>(isActive ? activeStyle : undefined)}>
                <IconButton aria-label="cart">
                    <StyledBadge badgeContent={cantidad} className={style.carro}> <ShoppingCartIcon /> </StyledBadge>
                </IconButton>
            </NavLink>
        </nav>
    )
}

export default Navbar