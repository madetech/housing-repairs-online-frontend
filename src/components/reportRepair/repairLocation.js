import PropTypes from 'prop-types';
import {
  GridRow,
  GridCol,
} from 'govuk-react'
import RadioFieldSet from '../radioFieldSet';

const RepairLocation = ({handleChange, values}) => {
  const name =  'repairLocation';
  const title =  'Where is the problem located?';
  const options =  [
    { value: 'kitchen', title: 'Kitchen'},
    { value: 'bedroom', title: 'Bedroom'},
    { value: 'bathroom', title: 'Bathroom'},
    { value: 'livingAreas', title: 'Living Areas'},
    { value: 'outside', title: 'Outside'},
  ];

  const Continue = val => {
    const selected = val[name];
    handleChange(name, selected);
  }

  return <GridRow>
    <GridCol setWidth="two-third">
      <RadioFieldSet name={name}
        title={title}
        options={options}
        onSubmit={Continue}
        checked={values[name]}
      />
    </GridCol>
  </GridRow>
};

RepairLocation.propTypes = {
  nextStep: PropTypes.func,
  values: PropTypes.object,
  handleChange: PropTypes.func,
}

export default RepairLocation;
