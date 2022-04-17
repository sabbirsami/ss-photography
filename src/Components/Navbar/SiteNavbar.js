import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import CustomLink from "../CustomLink/CustomLink";

const SiteNavbar = () => {
    const [user] = useAuthState(auth);
    const handleSingOut = () => {
        signOut(auth);
    };
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
                            <CustomLink to="/checkout">Checkout</CustomLink>
                            <CustomLink to="/blogs">Blog</CustomLink>
                            <CustomLink to="/about">About</CustomLink>
                        </Nav>
                        {user ? (
                            <button
                                onClick={handleSingOut}
                                className="btn btn-danger rounded-pill bg-gradient"
                            >
                                Sing Out
                            </button>
                        ) : (
                            <Nav>
                                <CustomLink to="/login">Log In</CustomLink>
                            </Nav>
                        )}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default SiteNavbar;
