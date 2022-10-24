import React from 'react';

const NotEligible = () => {
  const title =
    'The council may not be responsible for repairs at this property';
  return (
    <div className="govuk-grid-row govuk-body-m">
      <div className="govuk-grid-column-two-thirds">
        <h1 className="govuk-heading-xl">{title}</h1>
        <h2 className="govuk-heading-m">Emergencies</h2>
        <p>
          An emergency is defined as something which could cause danger to
          someone’s health or safety or cause serious damage and destruction to
          property.
        </p>
        <h3 className="govuk-heading-s">Repairs contact information</h3>
        <ul className="govuk-list">
          <li>Telephone: 0208 498 8000</li>
          <li>Freephone: 0800 393994</li>
          <li>Monday to Friday, 8am to 5pm (except public holidays)</li>
          <li className="govuk-inset-text">
            Please do not call us out of hours if the repair is not urgent.
          </li>
        </ul>
        <p>
          If you suspect you have a gas leak, you must report it immediately to
          the Gas Emergency Service <strong>0800 111 999</strong> or via
          textphone (minicom) on <strong>0800 371 787</strong>
        </p>
        <hr></hr>
        <h2 className="govuk-heading-m">Non-emergency requests</h2>
        <p>
          If you think the council is responsible for your property, please
          contact us using the information above.
        </p>
        <p>
          If you are a leaseholder you can still report communal repairs using
          the information above.
        </p>
      </div>
    </div>
  );
};

export default NotEligible;
