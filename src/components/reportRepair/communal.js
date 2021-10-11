import PropTypes from 'prop-types';
import {
  GridRow,
  GridCol,
  Details
} from 'govuk-react'
import RadioFieldSet from '../radioFieldSet';


const Communal = ({handleChange, nextStep, values}) => {
  const Continue = val => {
    const selected = val['communal'];
    handleChange('communal', selected);
  }

  const radioOptions = [
    { value: 'yes', title: 'Yes'},
    { value: 'no', title: 'No'}
  ]

  const options = {
    name: 'communal',
    title: 'Is the issue in a communal area?',
    options: radioOptions.map(o =>{
      if (values['communal'] == o.value) {
        o.checked =  true
      }
      return o
    }),
    beforeButton: (
      <Details summary="Which areas are communal?" data-testid="communal-area-prompt">
        <span data-testid="communal-area-info">
          Communal areas are any spaces that are shared with other residents. <br/>
          For example, this would include gardens, lifts, corridors, or car parks.
        </span>
      </Details>
    ),
    onSubmit: Continue
  }
  return <GridRow>
    <GridCol setWidth="two-third">
      <RadioFieldSet props={options}></RadioFieldSet>
    </GridCol>
  </GridRow>
};

Communal.propTypes = {
  nextStep: PropTypes.func,
  values: PropTypes.object,
  handleChange: PropTypes.func,
}

export default Communal;
