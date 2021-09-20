import PropTypes from 'prop-types';
import { Button, InputField } from 'govuk-react'


const Postcode = ({handleChange, nextStep, values}) => {
  const Continue = e => {
    e.preventDefault();
    const el = document.getElementById('postcode-input').children[1];
    let postcode = el.value
    handleChange('postcode', postcode);
    nextStep();
  }

  return <div>
    <InputField id="postcode-input" name="group0" >Postcode</InputField>
    <Button onClick={Continue} >Continue</Button>
  </div>
};

Postcode.propTypes = {
  nextStep: PropTypes.func,
  values: PropTypes.array,
  handleChange: PropTypes.func,
}

export default Postcode;
