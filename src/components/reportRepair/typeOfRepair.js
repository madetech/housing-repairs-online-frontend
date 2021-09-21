import PropTypes from 'prop-types';
import { Button, Radio, GridRow, GridCol, MultiChoice } from 'govuk-react'


const TypeOfRepair = ({handleChange, nextStep, values}) => {
  const Continue = e => {
    e.preventDefault();
    const el = document.querySelector('input[name="type"]:checked');
    const typeOfRepair = el.value
    handleChange('typeOfRepair', typeOfRepair);
  }
  return <GridRow>
    <GridCol setWidth="two-third">
      <Radio name="type" value="emergency">Emergency</Radio>
      <Radio name="type" value="non-emergency">Non emergency</Radio>
      <Button onClick={Continue} >Continue</Button>
    </GridCol>
  </GridRow>
};

TypeOfRepair.propTypes = {
  nextStep: PropTypes.func,
  values: PropTypes.object,
  handleChange: PropTypes.func,
}

export default TypeOfRepair;
