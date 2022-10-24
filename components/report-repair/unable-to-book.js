import React from 'react';

const UnableToBook = () => {
  return (
    <div className="govuk-grid-row govuk-body-m">
      <div className="govuk-grid-column-two-thirds">
        <h1 className="govuk-heading-xl">
          You need to contact us to report this repair
        </h1>
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

export default UnableToBook;
