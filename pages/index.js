import WarningText from '../compoments/warningText';
import Details from '../compoments/details';
import Link from '../compoments/link';
import React from 'react';

export default function Home() {
  const contactDetailsPageLink = (
    <Link href="https://www.lincoln.gov.uk/contact-1/get-touch" target="_blank">
      contact details page
    </Link>
  )

  return (
    <div className="govuk-grid-row">
      <div className="govuk-grid-column-two-thirds">
        <h1>Request a repair</h1>
        <h2>Before you start</h2>
        <WarningText testId="landing-page-gas-warning">
            If you suspect you have a gas leak, you must report it immediately
            to the Gas Emergency Service on 0800 111 999 or via textphone
            (minicom) on 0800 371 787
        </WarningText>
        <WarningText testId="landing-page-emergency-warning" className="govuk-!-margin-top-4">
            For other emergency repairs, please see customer services {contactDetailsPageLink}.
        </WarningText>
        <Details summary="What is an emergency?" className="govuk-!-margin-top-6" testId="landing-page-emergency-prompt">
          <div testId='landing-page-emergency-info'>
            <p>
                An emergency is defined as something which could cause danger to
                someone’s health or safety or cause serious damage and destruction
                to property.
            </p>
            <p>
                Emergency Out of Hours Repairs, please call <strong>01522 534747</strong>
            </p>
            <p>
                For emergencies in normal hours, please call <strong>01522 873333</strong>
            </p>
            <p>
                Opening times:
            </p>
            <ul>
              <li>Monday 9am - 5pm</li>
              <li>Tuesday 9am - 5pm</li>
              <li>Wednesday 9am - 4.30pm</li>
              <li>Thursday 10am - 5pm</li>
              <li>Friday 9am - 4.30pm</li>
            </ul>
          </div>
        </Details>
        <p>
            This service can only be used by <strong>council tenants</strong> to request a repair.
        </p>
        <p>
            To request a repair for a <strong>communal area</strong>, please see customer
            services {contactDetailsPageLink}.
        </p>
        <Details summary="Which areas are communal?" className="govuk-!-margin-top-6" testId="landing-page-communal-prompt">
          <div testId='landing-page-communal-info'>
            <p>
                Communal repairs are usually in areas that people share.
            </p>
            <p>
                They can include:
            </p>
            <ul>
              <li>repairs to door entry systems</li>
              <li>lock repairs to communal doors</li>
              <li>lighting repairs to shared areas</li>
              <li>glazing repairs to shared doors or stairway windows</li>
              <li>roof and gutter repairs</li>
              <li>structure and external walls to your block</li>
            </ul>
          </div>
        </Details>
        <a href="/report-repair" role="button" draggable="false"
          className="govuk-button govuk-button--start"
          data-module="govuk-button">
            Start now
          <svg className="govuk-button__start-icon" xmlns="http://www.w3.org/2000/svg" width="17.5" height="19" viewBox="0 0 33 40" aria-hidden="true" focusable="false">
            <path fill="currentColor" d="M0 0h13l20 20-20 20H0l20-20z" />
          </svg>
        </a>
      </div>
      <div className="govuk-grid-column-one-third">
        <h4>Related pages</h4>
        <ul listStyleType="none">
          <li>
            <Link href="#">Report a communal repair</Link>
          </li>
          <li>
            <Link href="#">Leaseholder repairs</Link>
          </li>
          <li>
            <Link href="#">Fix it yourself videos</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
