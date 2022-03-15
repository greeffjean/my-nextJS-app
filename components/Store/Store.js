import React from 'react';

import { ListGroup } from 'react-bootstrap';
import { useState } from 'react';

function Store() {
    const [ count, setCount ] = useState(0);

    return (
      <>
        <ListGroup>
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Morbi leo risus</ListGroup.Item>
          <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>

        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </>
    );
  }
  
  export default Store;
  