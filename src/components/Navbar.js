import React from 'react';
import { Link } from 'react-scroll';
import logo from '../images/rhinwedd.png'
const Navbar = () => {
    return (
        <div>
            <nav>
                <Link to='main' className='logo'>
                    <img src={logo} alt="logo"/>
                </Link>
                <input type="checkbox" id="menu-btn" className='menu-btn'/>
                <label for="menu-btn" className='menu-icon'>
                    <span className=' nav-icon'></span>
                </label>
                <ul className='menu'>
                    <li> <Link to='main' className='active' smooth={true} duration={1000}> Home </Link> </li>
                    <li> <Link to='features' smooth={true} duration={1000}> Features </Link> </li>
                    <li> <Link to='services' smooth={true} duration={1000}> Services </Link> </li>
                    <li> <Link to='subscribe' smooth={true} duration={1000}> Subscribe </Link> </li>
                    <li> <Link to='#' smooth={true} duration={1000}> contact </Link> </li>
                </ul>
                <Link to='#' className='hey'>To App</Link>
            </nav>
        </div>
    );
};

export default Navbar;