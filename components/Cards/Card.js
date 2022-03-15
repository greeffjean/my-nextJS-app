import React from 'react';
import { Card } from 'react-bootstrap';
import Link from 'next/link';
import PropTypes from 'prop-types';

function _Card({ id, userId, body, title, path }) {

    console.log(id, userId, body, title, path);

    return (
        <Card style={{ width: '18rem', margin: '10px 10px 10px 0' }}>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Album id: {id}</Card.Subtitle>
                <Card.Text>
                    { body ? body :  
                    'Some quick example text to build on the card title and make up the bulk of the content.' }
                </Card.Text>
                { path && <button className="btn btn-info"><Link href={path + id.toString()}>See Posts</Link></button>}
            </Card.Body>
        </Card>);
}

_Card.propTypes = {
    id: PropTypes.string,
    userId: PropTypes.string,
    body: PropTypes.string,
    title: PropTypes.string,
    path: PropTypes.string
}


export default _Card;