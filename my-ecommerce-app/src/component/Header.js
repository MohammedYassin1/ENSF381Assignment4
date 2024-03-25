import React from 'react';
import { BrowserRouter as Link } from "react-router-dom";
import './Header.css'; // Assuming you have a CSS file for styling

const Header = () => {
    return (
        <header className="header">
            <div className="logo-container">
                <img src="/images/logo192.png" alt="Logo" className="logo" /> {"/images/logo192.png"}
            </div>
            <nav className="nav">
                <Link to="/products" className="nav-link">Products</Link>
            </nav>
            <div className="company-name">
                {"Mohammed's Company"}
            </div>
        </header>
    );
};

export default Header;