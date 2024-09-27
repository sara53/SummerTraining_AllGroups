import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <>

            <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <Navbar.Brand href="#home">ShopApp</Navbar.Brand>
                    <Nav className="ms-auto">
                        <NavLink className={( { isActive } ) => isActive ? "nav-link text-danger" : "nav-link"} to="/">Home</NavLink>
                        <NavLink className={( { isActive } ) => isActive ? "nav-link text-danger" : "nav-link"} to="/products">Products</NavLink>
                        <NavLink className={( { isActive } ) => isActive ? "nav-link text-danger" : "nav-link"} to="/login">Login</NavLink>
                    </Nav>
                </Container>
            </Navbar>

        </>
    )
}
