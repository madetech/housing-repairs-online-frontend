import React from 'react';

const SmellGas = () => {
  const title = 'If you smell gas';
  return (
    <div className="govuk-grid-row">
      <div className="govuk-grid-column-two-thirds">
        <h1 className="govuk-heading-xl">{title}</h1>
        <p className="govuk-body-m">
          If you can smell gas, please call the gas emergency number: 0800 111
          999
        </p>
      </div>
    </div>
  );
};

export default SmellGas;
