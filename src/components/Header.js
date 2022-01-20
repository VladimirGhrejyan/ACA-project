import React from 'react'
import "./layout.css"
import { AppBar, Toolbar, Container, Box, IconButton, Typography, Button } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from '@mui/styles'
import {NavLink} from 'react-router-dom';

function Header() {
    const useStyles = makeStyles({
        root: {
            display: 'grid'
        },
        appbar: {
            height: '150px'
        },
        button1: {
            height: '100px',
            marginRight: '50%'
        },
        container: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr'
        }

    })

    const classes = useStyles();
    return (

        <div className='header1'>
                <AppBar className={classes.appbar} position="static">
                    <Container className={classes.container} fixed>
                    <IconButton
                    edge="start" color="inherit" aria-label="menu"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                    variant="h6"
                    >
                        Our Project
                    </Typography>
                    <Box 
                    mr={3} 
                    >
                        <Button 
                        color="inherit" variant="outlined" 
                        >
                            <NavLink to="/signin">Sign In </NavLink>
                        </Button>
                    </Box>
                    </Container>
                </AppBar>
        </div>
        
    )
}

export default Header;