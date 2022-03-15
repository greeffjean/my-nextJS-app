import React from 'react';
import { Card } from 'react-bootstrap';

function _Card(d) {

    return (
        <Card style={{ width: '18rem', margin: '10px 10px 10px 0' }}>
            <Card.Body>
                <Card.Title>{d.d.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Album id: {d.d.id}</Card.Subtitle>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the content.
                </Card.Text>
            </Card.Body>
        </Card>);
}

export default _Card;