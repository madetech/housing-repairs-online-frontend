import PropTypes from 'prop-types';
import React from 'react';
import {
  mobilePhoneNumberValidator,
  emailValidator,
  phoneOnKeyPress,
} from '../../helpers/validators';
import RadioFieldSet from '../radioFieldSet';
import Details from '../details';
import { serviceName } from '../../helpers/constants';

const ContactDetails = ({ handleChange, values }) => {
  const title = 'How should we confirm the appointment?';
  const name = 'contactDetails';
  const Continue = (val) => {
    handleChange(name, {
      type: val.selected,
      value: val.input,
    });
  };

  const options = [
    {
      value: 'text',
      title: 'Text message (recommended)',
      conditional: {
        autoComplete: 'tel',
        label: 'UK mobile number',
        type: 'tel',
        validator: mobilePhoneNumberValidator,
        onKeyPress: phoneOnKeyPress,
        emptyInputErrorMessage: 'Enter a UK mobile number',
        invalidInputErrorMessage: 'Enter a valid UK mobile number',
      },
    },
    {
      value: 'email',
      title: 'Email',
      conditional: {
        autoComplete: 'tel',
        label: 'Email address',
        type: 'email',
        validator: emailValidator,
        emptyInputErrorMessage: 'Enter an email address',
        invalidInputErrorMessage: 'Enter a valid email address',
      },
    },
  ];

  const beforeButton = (
    <Details
      summary="I have neither a mobile number nor an email address"
      testid="no-applicable-contact-options-prompt"
    >
      <div data-testid="no-applicable-contact-options-info">
        Please call 01522 873333 to report your repair during the office hours
        below
        <ul>
          <li>Monday 8am - 5pm</li>
          <li>Tuesday 8am - 5pm</li>
          <li>Wednesday 8am - 5pm</li>
          <li>Thursday 8am - 5pm</li>
          <li>Friday 8am - 5pm</li>
        </ul>
      </div>
    </Details>
  );

  return (
    <div className="govuk-grid-row" data-cy="contact-details">
      <div className="govuk-grid-column-two-thirds">
        <RadioFieldSet
          name={name}
          title={title}
          options={options}
          onSubmit={Continue}
          checked={values[name]?.type}
          buttonText={'Continue'}
          conditionalValue={{ [values[name]?.type]: values[name]?.value }}
          beforeButton={beforeButton}
          errorText={
            'Select how you would like for us to send your appointment confirmation'
          }
        ></RadioFieldSet>
      </div>
    </div>
  );
};

ContactDetails.propTypes = {
  storeAddresses: PropTypes.func,
  values: PropTypes.object,
  handleChange: PropTypes.func,
};

export default ContactDetails;
