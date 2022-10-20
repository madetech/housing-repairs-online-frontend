import React from 'react';

const UnableToBook = () => {
  return (
    <div className="govuk-grid-row govuk-body-m">
      <div className="govuk-grid-column-two-thirds">
        <h1 className="govuk-heading-xl">
          You need to contact us to report this repair
        </h1>
        <p>
          To book your repair, please call <strong>0208 498 8000</strong> or{' '}
          <strong>0800 393994</strong>
        </p>
        <p>Monday to Friday, 8am to 5pm (except public holidays)</p>
      </div>
    </div>
  );
};

export default UnableToBook;
