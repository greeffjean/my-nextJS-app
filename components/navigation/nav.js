import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import Link from 'next/link';

function Navigation() {
    return (<>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Link href="/"><Navbar.Brand ><a>My Next</a></Navbar.Brand></Link>
                <Nav className="me-auto">
                    <Link href="/store"><a className="bold">Store</a></Link>
                </Nav>
            </Container>
        </Navbar>
    </>);
}

export default Navigation;

