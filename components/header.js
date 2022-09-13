import React from 'react';
import Link from 'next/link'


export default function Header() {
  return (
    <>
      <header
        className="govuk-header"
        role="banner"
        data-module="govuk-header"
      >
        <div className="govuk-header__container govuk-width-container">
          <div className="govuk-header__logo">
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a href="https://www.lincoln.gov.uk/" className="govuk-header__logotype" target="_blank" rel="noopener noreferrer"/>
          </div>
          <div className="govuk-header__content">
            <Link href="/">
              <a
                className="govuk-header__link govuk-header__link--service-name">
                Housing Repairs Online
              </a>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
