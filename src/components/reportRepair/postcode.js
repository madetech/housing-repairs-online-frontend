import PropTypes from 'prop-types';
import {
  Button,
  InputField,
  GridRow,
  GridCol,
  Fieldset,
  FormGroup
} from 'govuk-react'


const Postcode = ({handleChange, nextStep, values}) => {
  let postcode;

  const onChange = e => {
    postcode = e.target.value
  }
  const Continue = e => {
    e.preventDefault();
    handleChange('postcode', postcode);
  }
  const input = { defaultValue: values.postcode, id: 'postcode', onChange: onChange }
  return <GridRow>
    <GridCol setWidth="two-thirds">
      <Fieldset>
        <Fieldset.Legend size="XL" isPageHeading>Where is the repair located?</Fieldset.Legend>
        <form action="">
          <FormGroup>
            <InputField name="postcode" input={input} >Postcode</InputField>
          </FormGroup>
          <Button onClick={Continue} >Continue</Button>
        </form>
      </Fieldset>
    </GridCol>
  </GridRow>
};

Postcode.propTypes = {
  nextStep: PropTypes.func,
  values: PropTypes.object,
  handleChange: PropTypes.func,
}

export default Postcode;
