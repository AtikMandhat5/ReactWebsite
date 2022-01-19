import React from "react";
import { NavLink, Redirect } from "react-router-dom";
import "./index.css"

const Menu = () => {
    return <>

        <NavLink exact activeClassName="active_class" to="contact">Contact US</NavLink>
        <NavLink exact activeClassName="active_class" to="/">About</NavLink>
        <NavLink exact activeClassName="active_class" to="/search">Search</NavLink>
        
        <NavLink exact activeClassName="active_class" to="/service">Service</NavLink>
        <br />

        {/* <a href="contact">ContactUS</a>
        <a href="/">About</a>
        <a href="contact">Contact</a> */}

    </>;

}

export default Menu;