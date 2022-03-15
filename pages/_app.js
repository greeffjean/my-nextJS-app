import React from 'react';
import Layout from '../components/Layout/Layout';

import PropTypes from 'prop-types';
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
     <Component {...pageProps} />
    </Layout>
  );
}

MyApp.propTypes = {
  Component: PropTypes.element,
  pageProps: PropTypes.array
}

export default MyApp;
