import React, { useEffect } from 'react';
import Link from 'next/link';
import { Container, Alert } from 'react-bootstrap';
import { useRouter } from 'next/router';

function PageNotFound() {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 6000)
    }, [])

    return (
    <Container className="mt-4">
        <h2>Page Not Found</h2>
        <Alert className="mt-4" variant='danger'>Whoops the route you requested does not exist.</Alert>
        <br />
        <br />
        <p>Go back to <Link href="/">Home</Link></p>
    </Container>);
}

export default PageNotFound;