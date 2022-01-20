import React from 'react'
import { AppBar, Box, IconButton, Typography, Button } from "@mui/material"
import {NavLink} from 'react-router-dom';
import icon from './icons/icon.png'
import styles from './headerStyles'

function Header() {
    const {container, buttons} = styles;

    return (

        <Box >
                <AppBar sx={ {height: '70px'} } position="static">
                    <Box sx={container}>
                        <Box sx={ {display: 'inherit', justifyContent: 'center'} }>
                            <IconButton
                            edge="start" color="inherit" aria-label="menu"
                            >
                                <img src={icon}/>
                            </IconButton>
                        </Box>
                        <Box sx={ {display: 'inherit', justifyContent: 'center', alignContent: 'center' } }>
                            <Typography
                            variant="h3"
                            >
                                Our Project
                            </Typography>
                        </Box>
                        <Box sx={buttons}
                        >
                            <Button 
                            color="inherit" variant="outlined" size="medium" 
                            >
                                My Profile
                            </Button>
                                <Button
                                color="inherit" variant="outlined" size="medium"
                                >
                                Log Out
                                </Button>
                        </Box>
                    </Box>
                </AppBar>
        </Box>
        
    )
}

export default Header;