import React from 'react'
import { AppBar, Box, IconButton, Typography, Button } from "@mui/material"
import {useNavigate} from 'react-router-dom';
import icon from './icons/icon.png'
import styles from './headerStyles'

function Header() {
    const {container, buttons} = styles;
    const navigate = useNavigate();

    return (

        <Box >
                <AppBar position="static" sx={ {height: '70px'} }>
                    <Box sx={container}>
                        
                        <Box sx={ {display: 'inherit', justifyContent: 'center'} }>
                        
                            <IconButton
                            edge="start" color="inherit" aria-label="menu" onClick={ () => { navigate("/") } }
                            >
                                <img src={icon}/>
                            </IconButton>
                        
                        </Box>
                        
                        <Box sx={ {display: 'inherit', justifyContent: 'center', alignContent: 'center' } }>
                            
                            <Typography variant="h3">
                                Our Project
                            </Typography>
                        
                        </Box>
                        
                        <Box sx={buttons}>
                        
                            <Button 
                            color="inherit" variant="outlined" size="medium" 
                            >
                                My Profile
                            </Button>
                            
                            <Button onClick={ () => {navigate("/signin")} }
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