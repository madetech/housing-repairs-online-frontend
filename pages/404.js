import React from 'react';
import { Layout } from '../components/layout';
import { serviceName } from '../helpers/constants';

export default function NotFound() {
  const pageHeading = 'Page not found';

  return (
    <Layout title={`${pageHeading} - ${serviceName}`}>
      <main className="govuk-main-wrapper" id="main-content">
        <div className="govuk-grid-row govuk-body-m">
          <div className="govuk-grid-column-two-thirds">
            <h1 className="govuk-heading-l">{pageHeading}</h1>
            <p>If you typed the web address, check it is correct.</p>
            <p>
              If you pasted the web address, check you copied the entire
              address.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
