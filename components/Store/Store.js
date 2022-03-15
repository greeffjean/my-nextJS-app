import React from 'react';

import { ListGroup } from 'react-bootstrap';
import { useState } from 'react';
import Head from 'next/head';

function Store() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Head>
        <title>Ninja | Store </title>
        <meta name="store-page" content="Ninja Store" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h2>Welcome to the Store Page!</h2>

      <ListGroup className="mt-5">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        <ListGroup.Item><p>{count}</p></ListGroup.Item>

      </ListGroup>


      <button className="mt-2 btn btn-primary" onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
}

export default Store;
