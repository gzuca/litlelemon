import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

const Nav = () => {
    return(
        <nav>
            <div className='nav-logo'>
                <img src='./Logo.png' alt="Little Lemon Logo"/>
            </div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/BookingPage">Reservations</Link></li>
                <li><Link to="/order-online">Order Online</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </nav>
    );
};

export default Nav;