import PropTypes from 'prop-types';
import { Button, InputField, GridRow, GridCol, Fieldset, FormGroup } from 'govuk-react'

const Address = ({handleChange, nextStep, values}) => {
  let address;

  const onChange = e => {
    address = e.target.value
  }
  const Continue = e => {
    e.preventDefault();
    handleChange('address', address);
  }
  const input = { defaultValue: values.address, id: 'address', onChange: onChange }
  return <GridRow>
    <GridCol setWidth="two-thirds">
      <Fieldset>
        <Fieldset.Legend size="XL" isPageHeading>Where is the repair located?</Fieldset.Legend>
        <form action="">
          <FormGroup>
            <InputField name="address" input={input} >Address</InputField>
          </FormGroup>
          <Button onClick={Continue} >Continue</Button>
        </form>
      </Fieldset>
    </GridCol>
  </GridRow>
};

Address.propTypes = {
  nextStep: PropTypes.func,
  values: PropTypes.object,
  handleChange: PropTypes.func,
}

export default Address;
