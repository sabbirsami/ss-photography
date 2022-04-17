import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import CustomLink from "../CustomLink/CustomLink";

const SiteNavbar = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">SS Photography</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <CustomLink to="/">Home</CustomLink>
                            <CustomLink to="/services">Services</CustomLink>
                            <CustomLink to="/blog">Blog</CustomLink>
                            <CustomLink to="/about">About</CustomLink>
                        </Nav>
                        <Nav>
                            <CustomLink to="/login">Log In</CustomLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default SiteNavbar;
