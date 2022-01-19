import React from 'react'
import {NavLink, Outlet} from 'react-router-dom'
import "./layout.css"
import Header from './Header'

function Layout() {
    return (
    <>
        <div className='container'>
            <div className='header1 item'>
                <Header />
            </div>

            <div className='nav1 item'>
                    <NavLink to="/">Home </NavLink>
                    <NavLink to="/blog">Blog </NavLink>
                    <NavLink to="/about">About </NavLink>
                    <NavLink to="/userslist">Users </NavLink>
                    <NavLink to="/signin">Sign In </NavLink>
            </div>

            <div className='main1 item'>
                I am main
                <Outlet />
            </div>

            <div className='footer1 item'>
                2021
            </div>
        </div>
    </>
    )
}

export default Layout;