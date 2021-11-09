import PropTypes from 'prop-types';
import {SearchPropertiesGateway} from '../../gateways';
import TextInput from "../textInput";
import React from 'react';


const Postcode = ({handleChange, values, storeAddresses}) => {
  const Continue = val => {
    SearchPropertiesGateway(val)
      .then(results => {
        storeAddresses(results);
        handleChange('postcode', val);
      })
      .catch(err => {
        console.error(err)
      });
  }

  const Validation = {
    errorMessage: 'Not a valid postcode',
    isValid: (postcode) =>{
      const str = postcode.toUpperCase();
      const regexp = /^[A-Z]{1,2}[0-9][0-9A-Z]?\s?[0-9][A-Z]{2}$|^[A-Z]{2}-?[0-9]{4}$/;
      return regexp.test(str);
    }
  }

  return <div className="govuk-grid-row">
    <div className="govuk-grid-column-two-thirds">
      <TextInput
        value={values.postcode}
        name={'postcode'}
        onSubmit={Continue}
        validation={Validation}
        label="Postcode"
        title="What is the property address?"
      ></TextInput>
    </div>
  </div>
};

Postcode.propTypes = {
  storeAddresses: PropTypes.func,
  values: PropTypes.object,
  handleChange: PropTypes.func,
}

export default Postcode;
