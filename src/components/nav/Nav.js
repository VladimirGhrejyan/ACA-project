import React from 'react'
import {AppBar, Box, Button} from '@mui/material'
import styles from './navStyles'
import {useNavigate} from 'react-router-dom'

function Nav() {
    const {nav_container, nav_appbar} = styles;
    const navigate = useNavigate();

    return (
        <Box>
            <AppBar position='static' sx={ nav_appbar }>
                <Box sx={nav_container}>
                        <Button color="inherit" variant="text" size="large"
                        onClick={ () => { navigate("/") } }
                        >
                            Home
                        </Button>
                    
                        <Button color="inherit" variant="text" size="large"
                        onClick={ () => { navigate("users") } }
                        >
                            Users
                        </Button>
                    
                        <Button color="inherit" variant="text" size="large"
                        onClick={ () => { navigate("about") } }
                        >
                            About
                        </Button>
                </Box>
            </AppBar>
        </Box>
    )
}

export default Nav;