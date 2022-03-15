import React from 'react';
import PropTypes from 'prop-types';

import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from '../components/navigation/nav';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navigation />
      {Component && pageProps &&  <Component {...pageProps} />}
    </>
  );
}

MyApp.propTypes = {
  name: PropTypes.string.isRequired
}

export default MyApp;
