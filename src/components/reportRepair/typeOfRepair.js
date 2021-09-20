import PropTypes from 'prop-types';
import { Button, Radio, GridRow, GridCol } from 'govuk-react'
import { Field } from 'react-final-form';


const TypeOfRepair = ({handleChange, nextStep, values}) => {
  const Continue = e => {
    e.preventDefault();
    const el = $("input[type='radio'][name='type']:checked").val();
    let typeOfRepair = el.value
    handleChange('typeOfRepair', typeOfRepair);
    nextStep();
  }
  return <GridRow>
    <GridCol setWidth="one-third">
      <div>
        <Radio name="type" value="emergency">Emergency</Radio>
        <Radio name="type" value="non emergency">Non emergency</Radio>
      </div>
      <Button onClick={Continue} >Continue</Button>
      <Field
        name="likesAnimals"
        label="Do you like animals?"
        hint="You must tell us"
        component={RadioGroup}
        options={[
          { title: 'Yep', value: 'yes' },
          { title: 'Nope', value: 'no' },
        ]}
        validate={required}
        inline
      />
    </GridCol>
  </GridRow>
};

TypeOfRepair.propTypes = {
  nextStep: PropTypes.func,
  values: PropTypes.object,
  handleChange: PropTypes.func,
}

export default TypeOfRepair;
