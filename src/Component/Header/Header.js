import React from 'react';
import './Header.css'
import logo from '../../images/logo.png'

const Header = () => {
    return (
        <div className="header">
            <img className= "logo" src={logo} alt="" />
            <h1 className= "header-info">The Billionaire Project</h1>
        </div>
    );
};

export default Header;