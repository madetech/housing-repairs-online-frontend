import React from 'react';

const NotEligibleNonEmergency = () => {
  const title =
    'The council may not be responsible for this repair at this property';
  return (
    <div className="govuk-grid-row govuk-body-m">
      <div className="govuk-grid-column-two-thirds">
        <h1 className="govuk-heading-xl">{title}</h1>
        <p>
          If you think the council is responsible for this repair, please
          contact us using the details below.
        </p>
        <p>
          If you are a leaseholder you can still report communal repairs using
          the details below.
        </p>
        <h2 className="govuk-heading-s">Repairs contact information</h2>
        <ul class="govuk-list">
          <li>Telephone: 0208 498 8000</li>
          <li>Freephone: 0800 393994</li>
          <li>Monday to Friday, 8am to 5pm (except public holidays)</li>
        </ul>
      </div>
    </div>
  );
};

export default NotEligibleNonEmergency;
