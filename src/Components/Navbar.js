import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import '../styles/Navbar.css';
import logo from '../images/navlogo.webp';
import { HashLink as NavLink } from 'react-router-hash-link';





const NavigationBar = () => {



    return (
        <Navbar bg="light" variant="light" expand="lg" className="custom-navbar sticky-top">
            <Container>
                <Navbar.Brand className="d-flex align-items-center">
                    <img
                        src={logo}
                        width="40"
                        height="40"
                        className="d-inline-block align-top custom-logo"
                        alt="Car Rental logo"
                    />
                    <span className="ml-2 brand-name">Hello Cab</span>
                </Navbar.Brand>
                <Navbar.Toggle style={{ color: "black" }} aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">

                        <NavLink className="nav-link" smooth to="/#home" >Home</NavLink>
                        <NavLink className="nav-link" smooth to="/#footer">About Us</NavLink>
                        <NavLink className="nav-link" smooth to="/#featuredcars" >Services</NavLink>
                        <NavLink className="nav-link" smooth to="/#footer" >Contact</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
}


export default NavigationBar;
