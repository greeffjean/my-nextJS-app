import React from 'react';
import Link from 'next/link';
import { Container } from 'react-bootstrap';

function PageNotFound() {
    return (
    <Container className="mt-4">
        <h2>Page Not Found</h2>
        <p>Whoops the route you requested does not exist</p>
        <br />
        <br />
        <p>Go back to <Link href="/">Home</Link></p>
    </Container>);
}

export default PageNotFound;