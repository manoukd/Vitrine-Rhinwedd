import React from 'react';
import Navbar from './Navbar';


const Header = () => {
    return (
        <div id='main'>
            <Navbar/>
            <div className='name'>
                <h1>It's  <span> RHINWEDD</span> website</h1>
                <p className='details'>
                    RHINWEDD  is Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Molestiae ab porro a! Laboriosam omnis voluptas vero maxime non a sequi,
                </p>
                <div className='header-btns'>
                    <a href="#" className='cv-btn'>Hire me</a>
                    <a href="#" className='cv-btn1'>Download App</a>
                </div>
            </div>
            <div className='arrow'></div>
        </div>
    );
};

export default Header;