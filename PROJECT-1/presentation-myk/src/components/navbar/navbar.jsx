import React from 'react';
import { RiMenu3Line, RiCloseLin } from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/logo.svg'

const navbar = () => {
    return (
        <div className='salsamentaria_navbar'>
            <div className='salsamentaria_navbar-links'>
                <div className='salsamentaria_navbar-links-logo'>
                    <img src={logo} alt="logo" />
                </div>
            </div>
        </div>
    )
}

export default navbar