import React from 'react'
import "./layout.css"
import { AppBar, Toolbar, Container, Box, IconButton, Typography, Button } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from '@mui/styles'
import {NavLink} from 'react-router-dom';

function Header() {
    const useStyles = makeStyles((theme) => (
        {
            root: {
                flexGrow: 1
            },
            menuButton: {
                marginRight: theme.spacing(1)
            },
            title: {
                flexGrow: 1
            }
        }
    ) 
    )

    const classes = useStyles();
    return (

        <div className='header1'>

                <AppBar position="static">
                    <Container fixed>
                        <Toolbar>
                            <IconButton
                            edge="start" color="inherit" aria-laabel="menu" className={classes.menuButton}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography
                            variant="h6" className={classes.title} 
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
                        </Toolbar>
                    </Container>
                </AppBar>

        </div>
    )
}

export default Header;