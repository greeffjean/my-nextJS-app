import React from 'react';
import Head from 'next/head';
import Card from '../../components/Cards/Card';
import PropTypes from 'prop-types';

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/albums');
    const data = await res.json();

    return {
        props: { albums: data }
    }
}

function Albums({ albums }) {

    return (<>
        <Head>
            <title>Ninja | Albums</title>
            <meta name="albums-page" content="Ninja Albums" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <h2>Albums</h2> 

        <div className="flex-wrap d-flex mt-4">
            {albums.map((album, i) => <Card key={i + album.id} path={'albums/'} {...album} />)}
        </div>
    </>);
}

Albums.propTypes = {
    albums: PropTypes.array
}

export default Albums;