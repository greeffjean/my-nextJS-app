import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

function Navigation() {
    return (<>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">My Next</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/store">Store</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    </>);
}

export default Navigation;

