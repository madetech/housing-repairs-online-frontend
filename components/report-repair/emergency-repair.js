import React from 'react';
import ContactNumbers from '../contactNumbers';
import { InsetText } from '../insetText';
import { serviceName } from '../../helpers/constants';

const EmergencyRepair = () => {
  const title = 'Your repair could be an emergency';

  return (
    <div className="govuk-grid-row govuk-body-m">
      <div className="govuk-grid-column-two-thirds">
        <h1 className="govuk-heading-xl">{title}</h1>
        <h3 className="govuk-heading-m">Emergencies</h3>
        <p>
          An emergency is defined as something which could cause danger to
          someone’s health or safety or cause serious damage and destruction to
          property.
        </p>
        <h2 className="govuk-heading-m">Repairs contact information</h2>
        <ul class="govuk-list">
          <li>Telephone: 0208 498 8000</li>
          <li>Freephone: 0800 393994</li>
          <li>Monday to Friday, 8am to 5pm (except public holidays)</li>
          <InsetText>
            <li>
              Please do not call us out of hours if the repair is not urgent.
            </li>
          </InsetText>
        </ul>
        <p>
          If you can smell gas, you must report it immediately to the Gas
          Emergency Service <strong>0800 111 999</strong> or via textphone
          (minicom) on
          <strong> 0800 371 787</strong>
        </p>
      </div>
    </div>
  );
};

export default EmergencyRepair;
