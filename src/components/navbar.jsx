import React from 'react';

const Navbar = ({ setcategory }) => {

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand fw-bold" href="#">Newshub</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <div className="nav-link" onClick={() => setcategory('technology')} style={{ cursor: 'pointer' }}>Technology</div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link" onClick={() => setcategory('business')} style={{ cursor: 'pointer' }}>Business</div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link" onClick={() => setcategory('wealth')} style={{ cursor: 'pointer' }}>Wealth</div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link" onClick={() => setcategory('science')} style={{ cursor: 'pointer' }}>Science</div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link" onClick={() => setcategory('sports')} style={{ cursor: 'pointer' }}>Sports</div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link" onClick={() => setcategory('entertainment')} style={{ cursor: 'pointer' }}>Entertainment</div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
