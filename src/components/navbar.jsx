import React, { useState } from 'react';
import './navbar.css';
const Navbar = () => {
    const [showSidebar, setShowSidebar] = useState(false);

    function toggleSidebar() {
        setShowSidebar(!showSidebar);
    }

    return (
        <nav className='navbar navbar-expand-lg navbar-dark'>
            <div className='container'>
                <a className='navbar-brand fs-4' href='#'>PK</a>

                <button className='navbar-toggler shadow-none border-0' type='button' onClick={toggleSidebar}>
                    <span className='navbar-toggler-icon'></span>
                </button>

                <div className={`sidebar offcanvas offcanvas-start ${showSidebar ? 'show' : ''}`} tabIndex='-1' id='offcanvasNavbar' aria-labelledby='offcanvasNavbarLabel'>
                    <div className='offcanvas-header text-white border-bottom'>
                        <h5 className='offcanvas-title' id='offcanvasNavbarLabel text-black'>Ones</h5>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
