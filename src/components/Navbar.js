import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import './Navbar.css'
import {TfiFaceSmile} from "react-icons/tfi"
import {FaBars, FaTimes} from "react-icons/fa"
import {IconContext} from "react-icons/lib"

function Navbar() {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return(
        <>
            <IconContext.Provider value={{color: '#fff'}} >
                <nav className="navbar">
                    <div className="navbar-container container">
                        <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
                            <TfiFaceSmile className="navbar-icon"/>
                            <strong>Giovanni Giacalone</strong>
                        </Link>
                        <div className="menu-icon" onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </div>
                        <ul className={click ? "nav-menu active" : "nav-menu"}>
                            <li className="nav-item">
                                <NavLink to="/" className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")} onClick={closeMobileMenu}>
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/about" className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")} onClick={closeMobileMenu}>
                                    About
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/projects" className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")} onClick={closeMobileMenu}>
                                    Projects
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/contact" className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")} onClick={closeMobileMenu}>
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </IconContext.Provider>
        </>
    );
}

export default Navbar;