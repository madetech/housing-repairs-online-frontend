import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Header from './header';
import SkipLink from './skipLink';
import Footer from './footer';

export const Layout = ({ children, title = 'dunno' }) => {
  const focusRef = React.useRef(null);
  const router = useRouter();
  const currentPath = router.query.route;

  React.useEffect(() => {
    focusRef.current?.focus();
  }, [currentPath]);

  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
      </Head>
      <span ref={focusRef} tabIndex={-1} />
      <SkipLink linkLocation="main-content" />
      <Header />
      <div className="govuk-width-container">{children}</div>
      <Footer />
    </React.Fragment>
  );
};
