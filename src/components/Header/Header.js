import React from 'react';
import logo from '../../static/logo_white.png';
import './Header.scss';

const Header = () => {
    return (
        <header className="app-header">
            <div className="app-container">
                <img src={logo} className="app-logo" alt="logo" />
            </div>
        </header>
    );
};

export default Header;
