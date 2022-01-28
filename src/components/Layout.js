import React from 'react'
import {Outlet} from 'react-router-dom'
import Header from './header/Header'
import Nav from './nav/Nav'
import Footer from './footer/Footer'
import {Box} from '@mui/material'
import styles from './layoutStyles'

function Layout() {
    const {container, header, nav, main, footer} = styles;
    
    return (
    <>
    <Box sx={ container }
    >
        <Box sx={header}>
            <Header />
        </Box>
        <Box sx={nav}>
            <Nav />
        </Box>
        <Box sx={main}>
            <Outlet />
        </Box>
        <Box sx={footer}>
            <Footer />
        </Box>
    </Box>
    </>
    )
}

export default Layout;