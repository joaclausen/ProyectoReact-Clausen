import style from "./navbar.module.css"
import {AppBar, Grid, Tabs, Toolbar, Tab} from '@mui/material'
import Button2 from "../Button2"

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
                        <Button2 className={style.boton} number={2}/>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar