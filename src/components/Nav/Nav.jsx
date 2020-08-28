import React from 'react';
import './Nav.css';

const Nav = () => {
    return (
        <nav className="nav">
            <div className="nav-text">Profile</div>
            <div className="nav-text">Messages</div>
            <div className="nav-text">News</div>
            <div className="nav-text">Music</div>
            <div className="nav-text">Settings</div>
        </nav>
    )
}

export default Nav;