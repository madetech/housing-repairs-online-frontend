import React from 'react';
import { serviceName } from '../../helpers/constants';

const NotEligibleCommunalRepairs = () => {
  const title =
    'For communal repairs, please contact us using the details below';
  return (
    <div className="govuk-grid-row govuk-body-m">
      <div className="govuk-grid-column-two-thirds">
        <h1 className="govuk-heading-xl">{title}</h1>
        <p>
          If you think the council is responsible for your property, please
          contact us using the information below.
        </p>
        <p>
          If you are a leaseholder you can still report communal repairs using
          the information below.
        </p>
        <h2 className="govuk-heading-s">Repairs contact information</h2>
        <ul className="govuk-list">
          <li>Telephone: 0208 498 8000</li>
          <li>Freephone: 0800 393994</li>
          <li>Monday to Friday, 8am to 5pm (except public holidays)</li>
        </ul>
      </div>
    </div>
  );
};

export default NotEligibleCommunalRepairs;
