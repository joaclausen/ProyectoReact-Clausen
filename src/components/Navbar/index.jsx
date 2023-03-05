import style from "./navbar.module.css"
import {AppBar, Grid, Tabs, Toolbar, Tab} from '@mui/material'
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
}));

const Navbar = () => {
    return (
        <AppBar>
            <Toolbar>
            <h1 className={style.nombre}>OVG</h1> 
                <Grid container spacing={2}>
                    <Grid xs={10}>
                        <Tabs indicatorColor="secondary" textColor="inherit" value={0} centered>
                            <Tab label="Home"/>
                            <Tab label="Products"/>
                            <Tab label="About"/>
                            <Tab label="Wishlist"/>
                        </Tabs>
                    </Grid>
                    <Grid xs={2}>
                        <IconButton aria-label="cart">
                            <StyledBadge badgeContent={4} color="secondary"> <ShoppingCartIcon /> </StyledBadge>
                        </IconButton>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar