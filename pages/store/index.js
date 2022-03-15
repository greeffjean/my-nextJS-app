import React from 'react';
import StoreList from '../../components/Store/Store';
import Link from 'next/link';
import { Breadcrumb, Container } from 'react-bootstrap';

function Store() {
  return (
    <Container className="mt-4">
      <Breadcrumb>
        <Breadcrumb.Item><Link href="/store/about"><a>About This Store</a></Link></Breadcrumb.Item>
      </Breadcrumb>
      <StoreList /> 
    </Container>

  );
}

export default Store;
