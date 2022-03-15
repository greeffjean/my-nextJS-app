import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image';

function Navigation() {
    return (<>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Link href="/"><Navbar.Brand ><Image src="/logo.svg" width={60} height={60} /></Navbar.Brand></Link>
                <Nav className="me-auto">
                    <Link href="/store"><a>Store</a></Link>
                    <Link href="/albums"><a>Albums</a></Link>
                </Nav>
            </Container>
        </Navbar>
    </>);
}

export default Navigation;

