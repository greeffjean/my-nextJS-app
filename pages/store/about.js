import React from 'react';
import styles from '../../styles/About.module.css';
import { Alert } from 'react-bootstrap';
import Head from 'next/head';


function AboutStore() {
    return (
        <>
            <Head>
                <title>Ninja | Store | About</title>
                <meta name="store-about-page" content="Ninja About Store" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <h2 className={styles.boldText}>This is the about page!</h2>
            <Alert className="mt-4" variant='info'>Content coming soon.</Alert>
        </>);
}

export default AboutStore;