import React from 'react';
import Navigation from '../Navigation/nav';

import PropTypes from 'prop-types';

function Layout({ children }) {
    return (<>
        <Navigation />
        {children}
    </>);
}

Layout.propTypes = {
    children: PropTypes.array
}

export default Layout;