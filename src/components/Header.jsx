import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header>
            <h1>Home</h1>
            <nav>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Contact</a>
            </nav>
            <div className="auth">
                <a href="#">Login</a>
                <a href="#">Sign Up</a>
            </div>
        </header>
    );
}

export default Header;
