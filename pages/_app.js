import '../styles/globals.css';
import '../styles/globals.scss';
import React from 'react';
import App from 'next/app';
import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Header from '../components/header';
import SkipLink from '../components/skipLink';
import Footer from '../components/footer';

function MyApp({ Component, pageProps, err }) {
  const enableJavascript = () => {
    window.GOVUKFrontend.initAll();
  };
  useEffect(enableJavascript, []);

  return <Component {...pageProps} err={err} />;
}
App.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps };
};

export default MyApp;
