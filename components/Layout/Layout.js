import React from 'react';
import Navigation from '../Navigation/Nav';

import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';

function Layout({ children }) {
    return (<>
        <Navigation />
        <Container className="mt-4">
            {children}
        </Container>
    </>);
}

Layout.propTypes = {
    children: PropTypes.array
}

export default Layout;