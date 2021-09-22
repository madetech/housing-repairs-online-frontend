import PropTypes from 'prop-types';
import {
  Button,
  Radio,
  GridRow,
  GridCol,
  MultiChoice,
  Fieldset, FormGroup, InputField
} from 'govuk-react'


const TypeOfRepair = ({handleChange, nextStep, values}) => {
  const Continue = e => {
    e.preventDefault();
    const el = document.querySelector('input[name="type"]:checked');
    const typeOfRepair = el.value
    handleChange('typeOfRepair', typeOfRepair);
  }
  return <GridRow>
    <GridCol setWidth="two-third">
      <Fieldset>
        <Fieldset.Legend size="XL" isPageHeading>Is this an emergency?</Fieldset.Legend>
        <form action="">
          <FormGroup>
            <Radio name="type" value="emergency">Yes</Radio>
            <Radio name="type" value="non-emergency">No</Radio>
          </FormGroup>
          <Button onClick={Continue} >Continue</Button>
        </form>
      </Fieldset>
    </GridCol>
  </GridRow>
};

TypeOfRepair.propTypes = {
  nextStep: PropTypes.func,
  values: PropTypes.object,
  handleChange: PropTypes.func,
}

export default TypeOfRepair;
