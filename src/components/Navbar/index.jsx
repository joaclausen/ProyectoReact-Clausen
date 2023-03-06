import style from "./navbar.module.css"
import {AppBar, Grid, Tabs, Toolbar, Tab} from '@mui/material'
import CartWidget from "../CartWidget";

const Navbar = () => {
    return (
        <AppBar>
            <Toolbar>
            <h1 className={style.nombre}>OVG</h1> 
                <Grid container spacing={2}>
                    <Grid xs={10}>
                        <Tabs indicatorColor="secondary" textColor="inherit" value={0} centered>
                            <Tab label="Home"/>
                            {/* las tabs se habilitarán en una próxima versión del código */}
                            <Tab label="Products" disabled/>
                            <Tab label="About" disabled/>
                            <Tab label="Wishlist" disabled/>
                        </Tabs>
                    </Grid>
                    <Grid xs={2}>
                        <CartWidget/>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar