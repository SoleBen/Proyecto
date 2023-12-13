import React, {useState} from "react";
import { Link, NavLink } from "react-router-dom";
import logo from '../assets/img/logo Negro.png';
import "./NavBar.css";

export const NavBar =() =>{
    const [menuOpen,setMenuOpen] = useState(false)
    return(
        <nav>
            
            <div className="sb_navbar-links_logo">

                <a href="www.google.com">
                    <img src={logo} alt="logo"/>
                </a>
            </div>
            <div className="menu" onClick={()=>{setMenuOpen(!menuOpen)}}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuOpen?"open":""}>
            
                <li>
                    <NavLink to="/inicio">Inicio</NavLink>
                </li>
                <li>
                    <NavLink to="/nosotros">Nosotros</NavLink>
                </li>
                <li>
                    <NavLink to="/productos">Productos</NavLink>
                    
                </li>
                <li>
                    <NavLink to="/registro">Registro</NavLink>
                </li>
            </ul>
        </nav>
    )

}
