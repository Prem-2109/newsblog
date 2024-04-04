import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const nav = ({ setcategory }) => {
    return (
        <Navbar bg="light" expand="lg" style={{ padding: '15px' }}>
            <Navbar.Brand href="#" className='navbar-brand fw-bold'>Newshub</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link onClick={() => setcategory('technology')} style={{ cursor: 'pointer' }}>Technology</Nav.Link>
                    <Nav.Link onClick={() => setcategory('business')} style={{ cursor: 'pointer' }}>Business</Nav.Link>
                    <Nav.Link onClick={() => setcategory('science')} style={{ cursor: 'pointer' }}>Science</Nav.Link>
                    <Nav.Link onClick={() => setcategory('sports')} style={{ cursor: 'pointer' }}>Sports</Nav.Link>
                    <Nav.Link onClick={() => setcategory('entertainment')} style={{ cursor: 'pointer' }}>Entertainment</Nav.Link>

                </Nav>

            </Navbar.Collapse>
        </Navbar>
    );
}

export default nav;
