import React from 'react';
import Card from '../../components/Cards/Card';
import PropTypes from 'prop-types';
import Link from 'next/link';

export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/albums');
    const data = await res.json();

    const paths = data.map(album => {
        return { params: { id: album.id.toString() } }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/' + id);
    const data = await res.json();

    return {
        props: { post: data }
    }
}

function AlbumPost({ post }) {
    return (
        <>
            <div className="d-flex"><h2>Album Post</h2><button className="btn btn-plain"><Link href="/albums">Back to Albums</Link></button></div>
            <Card {...post} />
        </>);
}

AlbumPost.propTypes = {
    post: PropTypes.object
}

export default AlbumPost;