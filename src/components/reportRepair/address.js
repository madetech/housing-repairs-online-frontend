import PropTypes from 'prop-types';
import { Button, InputField,GridRow, GridCol } from 'govuk-react'

const Address = ({handleChange, nextStep, values}) => {
  const Continue = e => {
    e.preventDefault();
    const el = document.getElementById('address-input').children[1];
    let address = el.value
    handleChange('address', address);
    nextStep();
  }
  const input = { defaultValue: values.address }
  return <GridRow>
    <GridCol setWidth="one-third">
      <InputField id="address-input" name="group0" input={input} >Address</InputField>
      <Button onClick={Continue} >Continue</Button>
    </GridCol>
  </GridRow>
};

Address.propTypes = {
  nextStep: PropTypes.func,
  values: PropTypes.object,
  handleChange: PropTypes.func,
}

export default Address;
