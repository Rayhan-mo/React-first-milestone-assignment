import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
        <h1> DEV Online School</h1>
            <nav className="nav-menu nav justify-content-center">
                <a className=" text-decoration-none" href="/Home">Home</a>
                <a className=" text-decoration-none" href="/Courses">Courses</a>
                <a className=" text-decoration-none" href="/Total Purchased">Total Cart</a>
            </nav>
        </div>
    );
};

export default Header;