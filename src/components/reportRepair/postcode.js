import PropTypes from 'prop-types';
import {
  GridRow,
  GridCol,
} from 'govuk-react'
import {SearchPropertiesGateway} from '../../gateways';
import TextInput from '../textInput';

const Postcode = ({handleChange, values, storeAddresses}) => {
  const Continue = val => {
    const postcode = val['postcode'];
    SearchPropertiesGateway(postcode)
      .then(results => {
        storeAddresses(results);
        handleChange('postcode', postcode);
      })
      .catch(err => {
        console.error(err)
      });
  }

  return <GridRow>
    <GridCol setWidth="two-thirds">
      <TextInput
        value={values.postcode}
        name={'postcode'}
        onSubmit={Continue}
        label="Postcode"
        title="What is the property address?"
      ></TextInput>
    </GridCol>
  </GridRow>
};

Postcode.propTypes = {
  storeAddresses: PropTypes.func,
  values: PropTypes.object,
  handleChange: PropTypes.func,
}

export default Postcode;
