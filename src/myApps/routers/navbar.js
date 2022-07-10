import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <NavLink className={({ isActive }) => {
                return isActive ? "link active" : "link"
            }} to="/">Home</NavLink>
            <NavLink style={({ isActive }) => {
                return { color: isActive ? "red" : "gray" }
            }} to="about">about</NavLink>
            <NavLink to="products">product</NavLink>
            <NavLink to="login">login</NavLink>
        </nav>
    );
}

export default Navbar;
