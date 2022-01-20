import React from 'react'
import {NavLink, Outlet} from 'react-router-dom'
import "./layout.css"
import Header from './header/Header'
import {Box} from '@mui/material'
import styles from './LayoutStyles'

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
            <NavLink to="/">Home </NavLink>
            <NavLink to="/blog">Blog </NavLink>
            <NavLink to="/about">About </NavLink>
            <NavLink to="/userslist">Users </NavLink>
            <NavLink to="/signin">Sign In </NavLink>
        </Box>
        <Box sx={main}>
            I am main
            <Outlet />
        </Box>
        <Box sx={footer}>
            2021
        </Box>
    </Box>
    </>
    )
}

export default Layout;