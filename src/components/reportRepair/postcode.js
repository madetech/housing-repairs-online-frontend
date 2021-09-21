import PropTypes from 'prop-types';
import { Button, InputField,GridRow, GridCol } from 'govuk-react'


const Postcode = ({handleChange, nextStep, values}) => {
  const Continue = e => {
    e.preventDefault();
    const el = document.getElementById('postcode-input').children[1];
    let postcode = el.value
    handleChange('postcode', postcode);
  }
  const input = { defaultValue: values.postcode }
  return <GridRow>
    <GridCol setWidth="one-third">
      <InputField id="postcode-input" name="group0" input={input} >Postcode</InputField>
      <Button onClick={Continue} >Continue</Button>
    </GridCol>
  </GridRow>
};

Postcode.propTypes = {
  nextStep: PropTypes.func,
  values: PropTypes.object,
  handleChange: PropTypes.func,
}

export default Postcode;
