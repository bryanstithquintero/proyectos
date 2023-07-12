import React from 'react';
//import { RiMenu3Line, RiCloseLin } from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/logom.png'

const navbar = () => {
    return (
        <div className='salsamentaria_navbar'>
            <div className='salsamentaria_navbar-links'>
                <div className='salsamentaria_navbar-links-logo'>
                    <img src={logo} alt="logo" />
                </div>
                <div className='salsamentaria_navbar-links-containers'>
                    <p><a href="#home">Home</a></p>
                    <p><a href="#about">Nosotros</a></p>
                    <p><a href="#contactenos">contactenos</a></p>
                </div>
            </div>
        </div>
    )
}

export default navbar